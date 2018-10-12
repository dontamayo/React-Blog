import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import CreateArticle from './components/CreateArticle';
import Login from './components/Login';
import SingleArticle from './components/SingleArticle';




ReactDOM.render(

  <BrowserRouter>

    <div>

      <Navbar />

      <Route exact path="/" component={Welcome}/>
      {/*<Route path="/about" component={About}/>
      <Route path="/home" component={Home}/>*/}
      <Route path="/login" component={Login}/>
      <Route path="/article/:slug" component={SingleArticle}/>
      <Route path="/articles/create" component={CreateArticle}/>


      <Footer />

    </div>

  </BrowserRouter>
, document.getElementById('root'));


serviceWorker.unregister();
