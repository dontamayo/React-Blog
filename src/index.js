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


const Main = withRouter(({location})=> {
  return (
    <div>

      {
        location.pathname !== '/login' && location.pathname !== '/signup' &&
        <Navbar />
      }


      <Route exact path="/" component={Welcome}/>
      {/*<Route path="/about" component={About}/>
      <Route path="/home" component={Home}/>*/}
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
      <Route path="/article/:slug" component={SingleArticle}/>
      <Route path="/articles/create" component={CreateArticle}/>

        {
          location.pathname !== '/login' && location.pathname !== '/signup' &&

          <Footer />
        }



    </div>
  )
});


ReactDOM.render(

  <BrowserRouter>

    <Main />

  </BrowserRouter>
, document.getElementById('root'));


serviceWorker.unregister();
