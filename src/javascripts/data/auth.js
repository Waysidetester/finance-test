import firebase from 'firebase/app';
import 'firebase/auth';

const googleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .catch((error) => {
      console.error(error);
    });
};

const logout = () => firebase.auth().signOut();

export default { googleAuth, logout };
