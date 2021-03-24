import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import MenuPage from './pages/MenuPage';
import Footer from './components/Footer';
import HowPage from './pages/HowPage';
import './App.scss';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <>
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
        <Route exact path='/login'>
          <LoginPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
