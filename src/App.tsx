import React, { FC } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


import MainLayout from './layouts/MainLayout';
import store from './store/store';

const App: FC = () => {
  return (
    <Provider store={store}>
    <Router>
      <MainLayout>BBD</MainLayout>
    </Router>
    </Provider>
  );
};

export default App;