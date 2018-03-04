import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import FirstView from "./components/FirstView";
import SecondView from "./components/SecondView";

let router = (
    <Router history={browserHistory}>
        <Route path="/view1" component={FirstView} />
        <Route path="/view2" component={SecondView} />
    </Router>
);

ReactDOM.render(
    router,
    document.querySelector('main')
);
