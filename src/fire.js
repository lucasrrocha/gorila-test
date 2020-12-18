import firebase from 'firebase/app';
import 'firebase';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyCmIFu-adjH0_hK8YsIDyATgP2GBQ6LRy4',
  authDomain: 'gorila-test-377d8.firebaseapp.com',
  projectId: 'gorila-test-377d8',
  storageBucket: 'gorila-test-377d8.appspot.com',
  messagingSenderId: '344521742302',
  appId: '1:344521742302:web:dcfbcbbc2033b849152f4f'
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
