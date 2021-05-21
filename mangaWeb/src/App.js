import React, { Component, browserHistory, } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Chapter from './pages/MangaChapter';
import Title from './pages/Mangatitle';
import NotFoundPage from './pages/NotFoundPage';
import Mangachapter from './pages/MangaChapter';
import NavBar from './NavBar';
import Search from './pages/Search';
import './App.css';


class App extends Component {
  render() {
    <head>
             <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
    return (
      <Router history={browserHistory}>
        <NavBar />
        <div className="App">
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage} />
              <Route path="/Chapter" component={Chapter} />
              <Route path="/title/:id" component={Title} />
              <Route path="/chapter/121496/:chapterid" component={Mangachapter}/>
              <Route path="/Search/:term" component={Search}/>
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
