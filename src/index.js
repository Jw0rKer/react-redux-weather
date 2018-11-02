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
import {searchReducer} from "./jworker/reducers/searchReducer";
import SearchPage from "jworker/containers/SearchPage";

library.add(fas);
dom.watch();

const store = applyMiddleware(logger, thunk)(createStore)(
    combineReducers({city: cityReducer, search: searchReducer}),
    {
        city: {
            1: {
                id: 1
            }
            ,
            2: {
                id: 2
            }
        },
        search: {}
    });

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/search/:keyword" component={SearchPage}/>
            </div>
        </HashRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
