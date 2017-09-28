###Simple SNS App

FEND16 / Yoko Andrae / Javascript 3 - React

## Source and Links

* [Firebase](https://firebase.google.com/)
    
* [React](https://facebook.github.io/react/)
    
* [Create React App](https://github.com/facebookincubator/create-react-app)
    
* [Styled-components](https://www.styled-components.com/)
    
* [Stack 0verlow](https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering)
    
* [Pure CSS Loading Spinners by David Bainbridge](http://www.codesynthesis.co.uk/tutorials/pure-css-loading-spinners)

* [Icooon Mono](http://icooon-mono.com/)

* Database Rules
```js
{
  "rules": {
    "users" : {
        ".read": "auth!=null",
        "$uid": {
          ".write": "$uid === auth.uid"
        }
    },
    "posts" : {
        ".read" : "true",
        ".write": "auth!=null"
    }
  }
}
```

* Storage Rules
default setting