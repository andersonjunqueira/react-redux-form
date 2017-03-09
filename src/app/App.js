import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import SimplePage from '../modules/SimplePage/SimplePage';

const App = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>

            <Route path="/">
                <IndexRoute component={SimplePage} />
            </Route>

        </Router>
    </Provider>
);

export default App;
