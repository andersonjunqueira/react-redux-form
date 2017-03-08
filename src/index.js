import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";

import App from './app/App';
import reducers from './app/App.reducers';

const store = createStore(reducers);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));





