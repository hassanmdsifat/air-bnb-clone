import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
    <Router>
          <div className="App">
            <Header/>
            <Switch>
            <Route path='/search'>
                <SearchPage/>
              </Route>
              <Route path='/'>
                <Home/>
              </Route>
            </Switch>
            <Footer />
          </div>
    </Router>
  );
}

export default App;
