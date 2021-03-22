import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import MenuPage from './pages/MenuPage';
import Footer from './components/Footer';
import HowPage from './pages/HowPage';
import './App.scss';
import LoginPage from './pages/LoginPage';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  const [user, setUser] = useState(false);

  const handleSignOut = () => {
    setUser(false);
  };

  return (
    <Provider store={store}>
      <Router>
        <Navbar user={user} handleSignOut={handleSignOut} />
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
            <LoginPage user={user} setUser={setUser} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
