import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCmIFu-adjH0_hK8YsIDyATgP2GBQ6LRy4',
  authDomain: 'gorila-test-377d8.firebaseapp.com',
  projectId: 'gorila-test-377d8',
  storageBucket: 'gorila-test-377d8.appspot.com',
  messagingSenderId: '344521742302',
  appId: '1:344521742302:web:dcfbcbbc2033b849152f4f'
};
// Initialize Firebase
const firebase = firebase.initializeApp(firebaseConfig);

export default firebase;
