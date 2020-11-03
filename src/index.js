import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import * as serviceWorker from './serviceWorker';
import CourseManager from "./components/CourseManager";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import courseReducer from "./reducers/courseReducer"
import moduleReducer from "./reducers/moduleReducer";
import lessonReducer from "./reducers/lessonReducer";
import topicReducer from "./reducers/topicReducer";
import widgetReducer from './reducers/widgetReducer'

const reducers = combineReducers({
    courseReducer,
    moduleReducer,
    lessonReducer,
    topicReducer,
    widgetReducer
})

const store = createStore(reducers);


ReactDOM.render(
    <Provider store={store} >
        <CourseManager/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
