import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducer/rootReducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import firebase from 'firebase/app'
import Fbconfig from './config/Fbconfig'
import {ReactReduxFirebaseProvider,getFirebase} from 'react-redux-firebase'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
  reduxFirestore(Fbconfig)
),

)
const rrfProps = {
  firebase,
  config: Fbconfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);