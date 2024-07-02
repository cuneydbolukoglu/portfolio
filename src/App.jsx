import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import ErrorPage from './pages/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </>
  )
}

export default App;