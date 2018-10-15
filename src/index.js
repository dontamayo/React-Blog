import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import CreateArticle from './components/CreateArticle';
import Login from './components/Login';
import SingleArticle from './components/SingleArticle';
import Signup from './components/Signup';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    const user = localStorage.getItem('user')

    if (user) {
      this.setState({
        authUser: JSON.parse(user)
      })
    }
  }

  setAuthUser = (authUser) => {
    this.setState({
      authUser
    });
  }


  render() {
    const { location } = this.props;
    return (
      <div>
        {
          location.pathname !== '/login' && location.pathname !== '/signup' &&
          <Navbar authUser={this.state.authUser} />
        }
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={Login} />
         <Route path="/signup" render={(props) => <Signup {...props} setAuthUser={this.setAuthUser} />} />
        <Route path="/article/:slug" component={SingleArticle} />
        <Route path="/articles/create" component={CreateArticle} />
        {
          location.pathname !== '/login' && location.pathname !== '/signup' &&
          <Footer />
        }
      </div>
    );
  }
}


const Main = withRouter((props) => {
  return (
    <App {...props} />
  );
});

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
  , document.getElementById('root'));


serviceWorker.unregister();



//import * as serviceWorker from './serviceWorker';
