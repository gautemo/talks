# Serverless with Firebase in 1 2 3
Format: Workshop 👨‍💻

### October 2018 - meetup Sopra Steria
[Slides](https://docs.google.com/presentation/d/1YdDizJtnCH8p6TguUl1jjIIrBd3qqM2Bxs_xUVpnpj4/edit?usp=sharing)  
[Repo](https://github.com/gautemo/firebase-chat)

## Description
Firebase is a bunch of tools which helps you build, improve and grow your mobile or web application. Firebase makes it really easy to get started, but it also scales well since it runs in the Google Cloud. In this workshop, we are using hosting, authentication, and Firestore to get our web application working. Since Firebase is our backend, both server and API, we get a lot of functionality in a short time.

## Private notes 🤫
<details>
  <summary>Expand</summary>
Vis løsning

$ `git clone -b step-one https://github.com/gautemo/firebase-chat.git`

css-fil
```js
document.documentElement.style.setProperty('--background-color-1','navy')
document.documentElement.style.setProperty('--background-color-2','blue')
```

Lær bort vue-vis html og js
Jsfiddle:
```html
<div id="app">
  <p v-for="n in stuff">
  {{n}}
  </p>
</div>
```
```js
new Vue({
  el: "#app",
  data: {
    stuff: [50,29,3]
  }
})
```
questions?

Css: 116  
Js: 18  
Html: 39  
Total: 173


Hosting:
Go to https://console.firebase.google.com/  
Add project  
$ `npm install -g firebase-tools`  
$ `firebase login`  
$ `firebase init`  
$ `firebase deploy`  

Cloud Firestore:
(Firebase also has Realtime database. A lot of same use cases. Cloud Firestore is their new flagship, but still in beta. Pricing. Storing in collections vs json.
Firebase console > Database > Create database
Initialize firebase. Firebase console > Project overview > Add Firebase to your web app

```js
const db = firebase.firestore();
const messagesRef = db.collection("messages");
```


```js
messagesRef.add(message)
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
```


```js
messagesRef.orderBy('created_at').onSnapshot(function (snapshot){
    snapshot.docChanges().forEach(function(change){
        if(change.type === 'added'){
            app.messages.push(change.doc.data());
        }
    })
})
```
Created_at : created_at: `new Date().getTime()`  
Authentication:  
Firebase console > Authentication > Set up sign-in method
```html
<div id="firebaseui-auth-container"></div>


<button onclick="signOut()" class="signout signed-in-show" type="button">Sign out</button>


   <script src="https://cdn.firebase.com/libs/firebaseui/3.1.1/firebaseui.js"></script>
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.1.1/firebaseui.css" />
```

Add signed-in-show class to elements that should now be shown during signed out state
```css
#firebaseui-auth-container{
   flex: 2;
}

.signout{
    float: right;
}

.hide{
    display: none;
}
```

```js
function snapShotMessages(){
    messagesRef.orderBy('created_at').onSnapshot(function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
            if (change.type === 'added') {
                app.messages.push(change.doc.data());
            }
        })
    })
}

const auth = firebase.auth();
const ui = new firebaseui.auth.AuthUI(auth);

auth.onAuthStateChanged(user => {
    if (user !== null) {
        document.querySelector('#firebaseui-auth-container').style.display = 'none';
        const signedInShow = document.querySelectorAll('.signed-in-show');
        signedInShow.forEach(function(el) {
            el.classList.remove('hide');
        });
        snapShotMessages();
    } else {
        document.querySelector('#firebaseui-auth-container').style.display = 'block';
        const signedInShow = document.querySelectorAll('.signed-in-show');
        signedInShow.forEach(function(el) {
            el.classList.add('hide');
        });
    }
})

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            return false;
        }
    }
    // Other config options...
});

function signOut() {
    auth.signOut().then(function () {
        console.log('Signed Out');
        location.reload();
    }, function (error) {
        console.error('Sign Out Error', error);
    });
}
```

Firebase console > Database > Rules allow read, write: if request.auth.uid != null;

isMine: 
```js
function (id) {
  return id === firebase.auth().currentUser.uid ? 'mine' : '';
}
```

v-bind:class="isMine(message.user_id)"  
user_id: user.uid

Tell antall linjer kode

Bonus:
```js
exports.createMessage = functions.firestore
   .document('messages/{msg}')
   .onCreate((snap, context) => {
       const msgObj = snap.data();
       msgObj.message = msgObj.message.replace(new RegExp('fuck|idiot','gi'), '🤬');
       msgObj.message = msgObj.message.replace(new RegExp('shit','gi'), '💩');
       return snap.ref.update({message: msgObj.message});
   });
```

```js
       snapshot.docChanges().forEach(function (change) {
           const msg = change.doc.data();
           msg.id = change.doc.id;
           if (change.type === 'added') {
               app.messages.push(msg);
           }
           if (change.type === 'modified') {
               app.messages = app.messages.map(m => {
                   if(m.id === msg.id) return msg;
                   return m;
               })
           }
       })
```

Npm install watch-http-server -g

Lenker:  
https://firebase.googleblog.com/   
https://www.youtube.com/user/Firebase  
https://twitter.com/firebase  
https://firebase.google.com/docs/  
https://console.firebase.google.com/ 

</details>