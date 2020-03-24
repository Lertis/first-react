import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./components/Home";
import Counter from "./components/Counter";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import CommentList from './components/Comment.List';


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation />
					<div className="flex-column">
						<Switch>
							<Route path="/" component={Home} exact />
							<Route path="/counter" component={Counter} />
							<Route path="/comments" component={CommentList} />
							<Route component={Error} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
};

export default App; 