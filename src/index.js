import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {dom, library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import Home from 'jworker/containers/Home';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux";
import {HashRouter, Route} from "react-router-dom";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {cityReducer} from "./jworker/reducers/cityReducer";

library.add(fas);
dom.watch();

const store = createStore(
    combineReducers({city:cityReducer}),
    applyMiddleware(logger, thunk));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Route exact path="/" component={Home}/>
        </HashRouter>

    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
