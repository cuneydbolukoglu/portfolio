import React from 'react';
import { Switch, Route, HashRouter } from "react-router-dom";

import MenuData from './data/MenuData';
import Header from './components/header';
import Footer from './components/footer';
import ErrorPage from './pages/NotFound';

function App() {
  return (
    <HashRouter>
        <Header />
        <Switch>
          {
            MenuData.map((item, index) => <Route key={index} exact path={item.url} component={item.page} />)
          }
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
    </HashRouter>
  )
}

export default App;