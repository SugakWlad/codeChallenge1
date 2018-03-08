import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import FirstView from "./components/FirstView";
import SecondView from "./components/SecondView";
import HomePage from "./components/HomePage";


let router = (
    <Router history={browserHistory}>
        <Route path="/" component={HomePage}>
            <Route path="/view1" component={FirstView} />
            <Route path="/view2" component={SecondView} />
        </Route>
    </Router>
);

ReactDOM.render(
    router,
    document.querySelector('main')
);
