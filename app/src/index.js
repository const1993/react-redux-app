import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import { configureFakeBackend } from './redux/helpers';
configureFakeBackend();


const ConfiguredApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);


ReactDOM.render(<ConfiguredApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
