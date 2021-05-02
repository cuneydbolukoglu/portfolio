import React from 'react';
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";

// import MenuData from './data/MenuData';
import Header from './components/header';
import Footer from './components/footer';
import ErrorPage from './pages/404';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <HashRouter>
      <Router>
        <Header />
        <Switch>
          {/* {
            MenuData.map((item, index) => <Route key={index} exact path={item.url} component={item.page} />)
          } */}
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </HashRouter>
  )
}

export default App;