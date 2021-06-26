import React, { useEffect } from "react";

//CSS
import "./App.css";

//React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Component Imports
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";

//Firebase
import { auth } from "./firebase";

//Context
import { useStateValue } from "./components/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User Is ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
