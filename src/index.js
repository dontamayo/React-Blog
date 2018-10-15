import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './components/App';

import AuthService from './services/auth';


const Main = withRouter(props => ((
  <App authService={new AuthService()} {...props} />
)));

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
  , document.getElementById('root'),
);


serviceWorker.unregister();
