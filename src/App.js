import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Header from './components/Header'
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
      <Switch>
        <Header/>
        <Route exact path="/checkout" />
        <Route exact path="login" />
        <Route exact path="/" />
        <Route component={
          <h1>Error 404 : Page Not Found</h1>
        }/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
