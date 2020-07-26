import React,{useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'
import "./App.css";
import {useStateValue} from './components/StateProvider'
import {auth} from './FirebaseConfig/firebase'


function App() {
  const [{basket},dispatch] = useStateValue();


  useEffect(() => {
    const unsubscribe= auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }
      else{
        dispatch({type:"SET_USER",user:null})
      }
    })

    return ()=>{
      unsubscribe();
    }

  }, [])



  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route exact path="/login" >
            <Login/>
          </Route>
          <Route exact path="/">
            <Header />
            <Home/>
          </Route>
          <Route component={<h1>Error 404 : Page Not Found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
