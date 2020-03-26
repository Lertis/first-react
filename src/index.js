import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from "./state/reducers/index";
import { ThemeProvider } from './context/Theme.Context';

const myStore = createStore(allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={myStore}>
		<ThemeProvider><App /></ThemeProvider>
	</Provider>, document.getElementById('root'));
registerServiceWorker();