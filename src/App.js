import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import MenuPage from './pages/MenuPage';
import Footer from './components/Footer';
import HowPage from './pages/HowPage';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/menu'>
            <MenuPage />
          </Route>
          <Route exact path='/how'>
            <HowPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
