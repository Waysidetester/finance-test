import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import search from './javascripts/components/search/search';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  search.searchBar();
};

init();
