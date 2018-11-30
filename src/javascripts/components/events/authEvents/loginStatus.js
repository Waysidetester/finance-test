import firebase from 'firebase/app';
import $ from 'jquery';
import 'firebase/auth';
import authButtons from './authButtons';

const checkAuthStatus = () => {
  authButtons.bindAuthEvents();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#unauthed').hide();
      $('#authed').show();
    } else {
      $('#authed').hide();
      $('#unauthed').show();
    }
  });
};

export default { checkAuthStatus };
