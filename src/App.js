import React, { Component } from 'react';
import firebase from './firebase';
import { Webpage } from './components/General/style';

import ContentsWithLoginCheck from './components/Contents';
import Header from './components/Header';
import Loader from './components/General/Loader';
import ModalwithTriggerCheck from './components/Header/Modal';
import Post from './components/Admin/Post';
import Profile from './components/Admin/Profile';

class App extends Component {
    
    state= {
        //check login
        password: '',
        email:'',
        email2:'',
        //interface
        triggerModal: false,
        loginType: true,
        toggleAdmin: 0,
        modalMenu: false,
        error: '',
        text: '',
        message: '',
        loading: true,
        //Contents
        userFilter: false,
        likesFilter: false,
        latestFirst: "1",
        //Profile & Post
        username: '',
        photoObj: '',
        photofile: null,
        uploaded: 0,
        photoloader: false,
        //sync with DB
        postsArray: [],
        user: '',
        loginStatus: false,
        
    }
    
    //------- For ComponentDidMount
    UpdateUser = ()=>{
        const userRef = firebase.database().ref(`users`);
        
        userRef.on('child_changed', snapshot => {
            const newUserObj = Object.assign({}, this.state.user, { username: snapshot.val().username, photoURL: snapshot.val().photoURL});
            this.setState({ user: newUserObj })
        });
        
    }

    AddNewPost=()=>{
        firebase.database().ref(`posts`)
        .on('child_added', snapshot => {
            let addedContent = [...this.state.postsArray];
            addedContent.push(
            {
                key: snapshot.key,
                post: snapshot.val()
            }
            );
            this.setState({postsArray: addedContent})
        })
    }
    
    UpdateContent=()=>{
        firebase.database().ref(`posts`)
        .on('child_changed', snapshot => {
            let changedContent = [...this.state.postsArray];
            const updatedContents = changedContent.map(change => {
                if(change.key === snapshot.key){
                    return Object.assign({}, change, {post: snapshot.val()})
                }else {
                    return change
                }
            })            
            this.setState({postsArray: updatedContents})
        })
    }
    
    RemoveContent=()=>{
        firebase.database().ref(`posts`)
        .on('child_removed', snapshot =>{
            let removedContent = [...this.state.postsArray];
            const filterContents = removedContent.filter(change => 
                    change.key !== snapshot.key
            )
            this.setState({ postsArray : filterContents })
        })
    }
    
    LoginCheck=()=>{
        firebase.auth().onAuthStateChanged( user => {
            if(user){
                this.setState({loginStatus: true, triggerModal: false})
                
                const userObj = {
                    uid: user.uid,
                    email: user.email,
                    username: user.displayName,
                    photoURL: user.photoURL
                }
                this.setState({user: userObj});
                console.log('logged in as: ' + user.uid);
                
            } else {
                    this.setState({loginStatus: false, user: ''})
                    console.log('not logged in')
            }
        } )
    }

    componentDidMount(){
        this.AddNewPost();
        this.UpdateContent();
        this.UpdateUser();
        this.RemoveContent();
        this.LoginCheck();
        setTimeout(()=>this.setState({loading: false}), 2000);
    }

    //----- Other Methods

    onLogin = (e)=>{
        e.preventDefault();
        
        const email = this.state.email;
        const password = this.state.password;
        
        if(!email || !password){
            this.setState({error: true});
        } else {
            firebase.auth().signInWithEmailAndPassword(email, password).then( ()=>{ 
                this.setState({ error: '' })
            } ).catch( (error) => { this.setState({error: error.message})
            })
        }
        
    }
    
    onSignup = (e)=>{
        e.preventDefault();
        
        if(!this.state.email || !this.state.password){
            this.setState({error: 'Please fill in the form'});
        } else if(this.state.email !== this.state.email2){
            this.setState({error: 'Please confirm email addresses'})
        } else {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then( (user)=>{     
                firebase.database().ref(`users/${user.uid}`).set(
                {
                    uid: user.uid,
                    email: user.email,
                    username: ''
                })
            }).then(()=>{ this.setState({loginType: true, error: '' }); }).catch( (
                error) =>{ this.setState({error: error.message}) })
        }
    }
    
    onLoginWithGoogle =(e)=>{
        e.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider)
        .then(()=>{ this.setState({error: ''})})
        .catch(error=> {
            this.setState({error: error.message});
        })
    }
    
    onSignout = (e)=>{
        e.preventDefault();
        firebase.auth().signOut()
        .then(()=>{this.setState({ 
                modalMenu: false, 
                toggleAdmin: 0,
                userFilter: false,
                likesFilter: false,
                latestFirst: "1"
            })
        })
        .catch(error => console.log(error.message))
    }

    onChange = (e)=>{
        this.setState({ [e.target.name]: e.target.value })
    }
    
    onClosePost = ()=>{
        this.setState({ toggleAdmin: 0, modalMenu: false})
    }
    
    onCloseProfile = ()=>{
        this.setState({ toggleAdmin: 0, modalMenu: false})
    }
    
    onOpenPost=()=>{
        this.setState({ toggleAdmin: 1, modalMenu: false, userFilter: false, likesFilter: false })
    }
    
    onOpenProfile =()=>{
        this.setState({ toggleAdmin: 2, modalMenu: false, userFilter: false, likesFilter: false })
    }
    
    onModalShow = ()=>{
        this.setState({ triggerModal: true });
    }
    
    onModalOff = (e)=>{
        e.preventDefault();
        document.getElementById('loginForm').reset();
        this.setState({ triggerModal: false, loginType: true, error: '' });
    }
    
    onModalMenuOff=(e)=>{
        e.preventDefault();
        this.setState({ modalMenu: false });
    }
    
    onModalUserMenuShow = ()=>{
        this.setState({ modalMenu: true })
    }
    
    onSwitchUserType = () =>{
        this.setState({loginType: !this.state.loginType, error: ''});
    }
    
    onFilteringCheck =(e)=>{
        this.setState({ [e.target.name]: e.target.checked});
    }
    
    getPhoto =(e)=>{
        const photos = e.target.files;
        const photo = photos[0]        
        this.setState({ photoObj: photo, photofile: photo.name});
    }
    
    changeProfile =(e)=>{
        e.preventDefault();
        const userInfo = firebase.auth().currentUser;
        const userDBref = firebase.database().ref(`users/${userInfo.uid}`);
        
        if(this.state.photoObj){  //IF there is a photo to upload...
            const metadata = {
                contentType: 'image/jpeg',
            };
            
            this.setState({ photoloader: true})
            
            const uploadFile = firebase.storage().ref(`profilePhotos/${userInfo.uid}`).put(this.state.photoObj, metadata);
        
            uploadFile.on('state_changed', 
                (snapshot)=>{
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        this.setState({ uploaded: progress})
                }, 
/* Error */     (error)=>{
                    this.setState({ error: error.message });
                    console.log(error);
                },
/* Success */   ()=>{
                    this.setState({ 
                        toggleAdmin: 0, 
                        photoloader: false, 
                        photofile: null,
                        photoObj: ''
                    });
                    const photoURL = uploadFile.snapshot.downloadURL;
                    const photoURLData = {photoURL: photoURL};
                    //Update profile on firebase auth
                    userInfo.updateProfile(photoURLData).then( ()=>{
                        //update state
                        const newUserObj = Object.assign({}, this.state.user, photoURLData);
                        this.setState({ user: newUserObj })
                        // also update on firebase database
                        userDBref.update(photoURLData)
                    })
                });
        }; //--endif(photoObj)

        //if new username was empty : use the current username
        //if new username has new input : use this new username
        const useThisName = this.state.username ? this.state.username : this.state.user.username ? this.state.user.username : '';
        
        const newProfileToAuth = {
            displayName: useThisName
        }
        
        const newProfileToDatabase = {
            username: useThisName,
            photoURL: this.state.user.photoURL || ''
        }

        //Update profile on firebase auth
        userInfo.updateProfile(newProfileToAuth).then( ()=>{
            //update state
            const newUserObj = Object.assign({}, this.state.user, newProfileToDatabase);
            this.setState({ user: newUserObj })
        // also update on firebase database
        userDBref.update(newProfileToDatabase)
        })
        
        if(!this.state.photoObj){
           this.setState({ toggleAdmin: 0, photoloader: false })
        }

    };
    
    addPost = (e)=>{
        e.preventDefault();
        const d = new Date();
        const timestamp = d.getTime();
        
        const date = [
            d.getFullYear(),
            d.getMonth() + 1,
            d.getDate()
            ].join( '-' );

        const currentUser = firebase.auth().currentUser;
        const userID = currentUser.uid;    
        
        if(this.state.photoObj){ //IF there is a photo to upload...
            //upload a photo to Storage
            const metadata = {
                contentType: 'image/jpeg',
            };
            
            this.setState({ photoloader: true})
            
            const uploadFile = firebase.storage().ref(`postPhotos/${timestamp}`).put(this.state.photoObj, metadata);
        
            uploadFile.on('state_changed', 
                (snapshot)=>{
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    this.setState({ uploaded: progress})
                console.log(`uploading: ${progress}`);
                }, 
/* Error */     (error)=>{this.setState({error: error.message})},
/* Success */   ()=>{
                    this.setState({ 
                        toggleAdmin: 0, 
                        photoloader: false, 
                        photofile: null,
                        photoObj: ''
                    });
                    //create a post object to send
                    const postObj = {
                        uid: userID,
                        text: this.state.text,
                        photoURL: uploadFile.snapshot.downloadURL,
                        likes: 0,
                        likedBy: '',
                        timeStamp: timestamp,
                        dateForDisplay: date
                    };
        
                    if(this.state.text){
                       //add a post to DB 'posts'
                       const postsRef = firebase.database().ref(`/posts`);

                       postsRef.push(postObj)
                       //then add postID to the users database
                        .then((post) => {
                            const usersPostsRef = firebase.database().ref(`users/${postObj.uid}/posts`);

                            usersPostsRef.push(post.key)
                            .catch(error => console.log(`failed to add postID: ${error}`));
                       })
                        .catch(error => this.setState({ error: error.message}));

                    }
                })
        } else {   //IF there is no photo
            //create a post object to send
            const postObj = {
                uid: userID,
                text: this.state.text,
                likes: 0,
                likedBy: '',
                timeStamp: timestamp,
                dateForDisplay: date
            };

            if(this.state.text){
               //add a post to DB 'posts'
               const postsRef = firebase.database().ref(`/posts`);

               postsRef.push(postObj)
               //then add postID to the users database
                .then((post) => {
                    const usersPostsRef = firebase.database().ref(`users/${postObj.uid}/posts`);

                    usersPostsRef.push(post.key)
                    .catch(error => console.log(`failed to add postID: ${error.message}`));
                   //AND close the page
                   this.setState({ toggleAdmin: 0, modalMenu: false})
               })
                .catch(error => this.setState({ error: error.message}));
            }
        };
    };
    
  render() {

    const toggleContents = (this.state.toggleAdmin === 1) 
        ? <Post {...this.state}
            onClosePost={this.onClosePost}
            onChange={this.onChange}
            getPhoto={this.getPhoto}
            addPost={this.addPost}/>
        : (this.state.toggleAdmin === 2) 
        ? <Profile {...this.state}
            onCloseProfile={this.onCloseProfile}
            onChange={this.onChange} 
            changeProfile={this.changeProfile}
            getPhoto={this.getPhoto}/>
        : <ContentsWithLoginCheck {...this.state} onToggleLike={this.onToggleLike}
        onOpenPost={this.onOpenPost}
        onModalShow={this.onModalShow}
        userType={ this.onSwitchUserType }/>;
      
      if(this.state.loading){
          return <Loader />
      }
      
      return (
        <Webpage>
        <Header {...this.state}
           onFilteringCheck={this.onFilteringCheck}
            onModalShow={this.onModalShow}
            onOpenMenu={this.onModalUserMenuShow}
            onModalMenuOff={this.onModalMenuOff}
            onOpenPost={this.onOpenPost}
            onOpenProfile={this.onOpenProfile}
            onClosePost={this.onClosePost}
            onCloseProfile={this.onCloseProfile}
            onChange={this.onChange} 
            onSignout={this.onSignout}
             />
        <ModalwithTriggerCheck 
            {...this.state}
            onSignup={this.onSignup}
            onLogin={this.onLogin}
            onChange={this.onChange}
            triggerModal={this.state.triggerModal}
            onModalOff={this.onModalOff}
            onLoginWithGoogle={this.onLoginWithGoogle}
            loginType={ this.state.loginType }
            userType={ this.onSwitchUserType } />
        { toggleContents }
      </Webpage>
      );
  }
}

export default App;
