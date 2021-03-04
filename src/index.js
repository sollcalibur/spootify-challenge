import React from 'react';
import ReactDOM from 'react-dom';
import './styles/_main.scss';

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import discoverReducer from "./store/DiscoverReducers";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './routes/Login/Login';
import Routes from './routes/Discover';
import Discover from './routes/Discover/components/Discover';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = combineReducers({
  discover: discoverReducer
});

let store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact={true} />
          <Route path="/login" component={Routes} />
          <Route path="/discover" component={Discover} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
