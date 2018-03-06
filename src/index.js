import React, {Component} from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import reducers from './reducers';

import PostsIndex from './components/posts_index';

const app = document.getElementById("app");
const createStoreWithMiddleware= applyMiddleware()(createStore);

render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Route path="/" component={PostsIndex} />
			</div>
		</BrowserRouter>
	</Provider>
	, app)
