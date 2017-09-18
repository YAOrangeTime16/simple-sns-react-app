import React, { Component } from 'react';
import firebase from './firebase';
//--- style file
import { Webpage } from './components/General/style';
//--- component files
import Contents from './components/Contents';
import Post from './components/Admin/Post';
import Header from './components/Header';
import ModalwithTriggerCheck from './components/Header/Modal';

class App extends Component {
    
    state= {
        //only for interface
        triggerModal: false,
        loginType: true,
        toggleAdmin: false,
        modalMenu: false,
        //sync with DB
        postsArray: [],
        user: '',
        loginStatus: false,
        //login
        username:'',
        password: '',
        email:'',
        email2:'',
        error: '',
        errorDeffEmail: false,
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
            firebase.database().ref(`users/${snapshot.val().uid}/posts`).push(snapshot.key);
            this.setState({postsArray: addedContent})
        })
    }
    
    UpdateContent=()=>{
        firebase.database().ref(`posts`)
        .on('child_changed', snapshot => {
            let changedContent = [...this.state.postsArray];
            const updatedContents = changedContent.map(change => {
                if(change.key === snapshot.key){
                    return Object.assign({}, change, {content: snapshot.val()})
                }else {
                    return change
                }
            })            
            this.setState({postsArray: updatedContents})
        })
    }
    
    LoginCheck=()=>{
        firebase.auth().onAuthStateChanged( user => {
            if(user){
                this.setState({loginStatus: true, triggerModal: false})
                this.setState({user: user})
                console.log('logged in' + user.uid)
            } else {
                this.setState({loginStatus: false, user: ''})
                console.log('not logged in')
            }
        } )
    }

    componentDidMount(){
        this.AddNewPost();
        this.UpdateContent();
        this.LoginCheck();
    }

    onChange = (e)=>{
        this.setState({ [e.target.name]: e.target.value })
    }
    
    onClosePost = ()=>{
        this.setState({ toggleAdmin: false, modalMenu: false})
    }
    
    onOpenPost=()=>{
        this.setState({ toggleAdmin: true, modalMenu: false })
    }
    
    onModalShow = ()=>{
        this.setState({ triggerModal: true });
    }
    
    onModalOff = (e)=>{
        e.preventDefault();
        document.getElementById('loginForm').reset();
        this.setState({ triggerModal: false, loginType: true });
    }
    
    onModalMenuOff=(e)=>{
        e.preventDefault();
        this.setState({ modalMenu: false });
    }
    
    onModalUserMenuShow = ()=>{
        this.setState({ modalMenu: true })
    }
    
    onLogin = (e)=>{
        e.preventDefault();
        
        const email = this.state.email;
        const password = this.state.password;
        
        if(!email || !password){
            this.setState({error: true});
        } else {
            firebase.auth().signInWithEmailAndPassword(email, password).then( ()=>{ 
                console.log('logged in');
                this.setState({username: this.state.user.email})
            } ).catch( (error) => { console.log(error.message);
                this.setState({error: error.message})
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
                   userId: user.uid,
                    email: user.email
                }
               )
           } ).catch( (error) =>{ 
                this.setState({error: error})
                
            })
        }
    }
    
    onSignout = (e)=>{
        e.preventDefault();
        firebase.auth().signOut()
            .then(()=>{this.setState({ modalMenu: false })})
            .catch(error => console.log(error))
    }
    
    onSwitchUserType = () =>{
        this.setState({loginType: false});
    }
    
  render() {
    const toggleContents = this.state.toggleAdmin 
        ? <Post {...this.state}
            onClosePost={this.onClosePost}/>
        : <Contents {...this.state} />
    
    return (
      <Webpage>
        <Header {...this.state}
            onModalShow={this.onModalShow}
            onOpenMenu={this.onModalUserMenuShow}
            onModalMenuOff={this.onModalMenuOff}
            onOpenPost={this.onOpenPost}
            onClosePost={this.onClosePost} 
            onSignout={this.onSignout}
             />
        <ModalwithTriggerCheck 
            {...this.state}
            onSignup={this.onSignup}
            onLogin={this.onLogin}
            onChange={this.onChange}
            triggerModal={this.state.triggerModal}
            onModalOff={this.onModalOff}
            
            loginType={ this.state.loginType }
            userType = { this.onSwitchUserType } />
        { toggleContents }
      </Webpage>
    );
  }
}

export default App;
