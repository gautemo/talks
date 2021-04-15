# Firebase for a web developer (Firebase for en webutvikler)
Format: Presentation 👨‍🏫

### 16 April 2021 - conference CapraCon
[Slides](https://docs.google.com/presentation/d/1xlCC0iLlPjif_CNc7bIqZ6DWQ4jnqg_pUbZc1G6wHxg/edit?usp=sharing)  
[Repo](https://github.com/gautemo/fama)

## Description (Norwegian)
"Firebase helps you build and run successful apps". Men hva ligger i dette? Firebase er en samling av produkter fra Google som er bygd på Google Cloud og blir en slags backend as a service. Bli med å se hvordan du kan lage en fullverdig web applikasjon med database, fil storage, autentisering, hosting, analytics, feature toggles og mer uten å forlate frontend koden. Her snakker vi blant annet serverless bygd på Google Cloud Platform, så få med deg denne før jeg blir knertet av AWS mafiaen.

Gaute er en Firebase entusiast og har selv deltatt på 3 Firebase summits (Praha, Madrid og Internett). Han har utviklet blant annet et quiz spill, real time planning poker og en kvitteringsapp med Firebase. I tillegg vil det avdekkes en ny webapp i foredraget for å demonstrere kraften til Firebase.

## Private notes 🤫
[Firebase getting smaller](https://modularfirebase.web.app/)

Size:  
firebase - 225kb  
firebase/app - 7.8kb  
firebase/remote-config - 13.1kb  
firebase/analytics - 13.5kb  
firebase/performance - 14.2kb  
firebase/storage - 14.5kb  
firebase/auth - 55.4kb  
firebase/firestore - 89.1kb  

### Snippets
Hosting:
```
npm install -g firebase-tools

firebase init

firebase deploy
```
Firestore(add):
```js
const db = firebase.firestore();
const post = {
  text: text,
  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  likes: 0
}
db.collection('posts').add(post);
```

Firestore(read):
```js
const ref = await db.collection('posts').doc('[id]').get();
const post = ref.data();
```

Firestore(real time):
```js
db.collection('posts')
  .where('timestamp', '>', date)
  .onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if (change.type === 'added') {
        // add post
      }
      if(change.type === 'modified') {
        // update post
      }
      if(change.type === 'removed') {
        // delete post
      }
    });
});
```

Cloud Storage:
```js
const storage = firebase.storage();

// Add image
const file = e.target.files[0];
const path = `photos/${file.name}`;
storage.ref().child(path).put(file);

// Get image
const src = storage.ref(path).getDownloadURL();
```

Rules:
```rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{id} {
      allow read: if request.auth!=null;
      allow create: if request.auth!=null && validPost(request.resource.data);
    }
    function validPost(post){
      return post.text.size() <= 300 && post.likes == 0;
    }
  }
}
```

Authentication:
```html
<div id="firebaseui-auth"></div>
<script>
const ui = new firebaseui.auth.AuthUI(firebase.auth());
const uiConfig = {
  autoUpgradeAnonymousUsers: true,
  signInSuccessUrl: "/profile",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
}
ui.start('#firebaseui-auth', uiConfig);
</script>
```

```js
// Get user
const user = firebase.auth().currentUser;

// Listen for changes
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // Signed in
  }else{
    // Signed out
  }
});
```

Cloud Functions:
```js
exports.report = functions.firestore.document('posts/{id}')
  .onUpdate(async (change, context) => {
    const post = change.after.data();
    const score = post.likes * 2 - post.reports * 3;
    if(post.reports > 2 && score < 0){
        await change.after.ref.delete();
    }
});
```

Performance Monitoring:
```js
const perf = firebase.performance();

// Custom traces
const trace = perf.trace('initialPostsLoading');
trace.start();
// Load data
trace.incrementMetric('numberOfPosts', snapshot.size);
trace.stop();
```

Google Analytics:
```js
firebase.analytics();

// Custom events
firebase.analytics().logEvent('add_post');
```

Remote Config:
```js
// Setup
const remoteConfig = firebase.remoteConfig();
remoteConfig.settings = {
    minimumFetchIntervalMillis: 1000 * 60 * 5,
};
remoteConfig.defaultConfig = ({
    'allow_reporting': 'true',
    'upload_photos': 'false'
});
remoteConfig.fetchAndActivate();

// Check config
const allowReport = remoteConfig.getBoolean('allow_reporting');
if(!allowReport){
  // Hide report button
}
```