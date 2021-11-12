import React from 'react';
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";

import MenuData from './data/MenuData';
import Header from './components/header';
import Footer from './components/footer';
import ErrorPage from './pages/404';

function App() {
  return (
    <HashRouter>
      <Router>
        <Header />
        <Switch>
            {
              MenuData.map((item, index) => <Route key={index} exact path={item.url} component={item.page} />)
            }
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </HashRouter>
  )
}

export default App;