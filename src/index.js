import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {compose,createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom';
import Http from './store/reducer/http'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers({
  http:Http
})
const store=createStore(rootReducer,composeEnhancers(
  applyMiddleware(thunk)
))
const app=(

      <Provider store={store}>
         <BrowserRouter> 
         <App/>
       </BrowserRouter>

      </Provider>
)

  ReactDOM.render(app,document.getElementById('root'));

