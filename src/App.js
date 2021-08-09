import React from 'react';
import "./index.css"
import Home from './Home';
import About from './About';
import Services from './Services'
import Contact from './Contact'
import Navbar from './Navbar'
import "./index.css"
import Login from './Login'
import Exams from './Exams'
import { Switch, Route, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from './Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/exams" component={Exams} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
