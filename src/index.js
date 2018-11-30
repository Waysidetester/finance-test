import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import search from './javascripts/components/search/search';
import loginOutButton from './javascripts/components/events/authEvents/loginStatus';
import './index.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  search.searchBar();
  loginOutButton.checkAuthStatus();
};

init();
