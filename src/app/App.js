import React, { PropTypes } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import MeuPerfil from '../modules/MeuPerfil/MeuPerfil';

const App = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>

            <Route path="/">
                <IndexRoute component={MeuPerfil} />
            </Route>

        </Router>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object.isRequired,
};

export default App;
