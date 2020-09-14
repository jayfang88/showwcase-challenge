import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Main from './components/main';
import './styles/reset.css';
import './styles/App.css';
import './styles/main-page.css';
import './styles/school-card.css';

function App({}) {
  return (
    <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/main' component={Main} />
        </Switch>
    </HashRouter>
  )
};

export default App;
