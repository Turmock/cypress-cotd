import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCqDfctX2O7ymGN5kUsm2xc-LBE40nW55g",
  authDomain: "catch-of-the-day-ashley-dance.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ashley-dance.firebaseio.com",
});

const base = Rebase.createClass(firebase.database());

export {firebaseApp};

export default base;