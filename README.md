# GitHub-Profile-fetcher
A simple react and firebase based GitHub Profile fetcher

## How to Setup project ?

1 : Clone this Repository.
```bash
git clone https://github.com/abhi-rajput-KRP/GitHub-Profile-fetcher.git
```

2 : Open the terminal in cloned forlder and install Node dependencies.
```bash
npm install
```

3 : Insert your Firebase app credentials in Firebase.js file in src folder.
```javascript
const firebaseConfig = {
  // Paste Your Firebase Config Here
  apiKey: "your-key",
  authDomain: "your-domain",
  projectId: "your-project-id",
  storageBucket: "storage-bucket",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "measurment-id"
};
```

4 : Run the application.
```bash
npm run dev
```
