import React, { useEffect } from "react";
import "./App.css";
import "./index.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import Checkout from "./Checkout";
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51MG3yiLlf4TvExjxQh11HvK52pcfEmEZtVdw6bAnCPJWIUSj2u0GGyzeq4iEErrN8dXkKwsTfrUZ9GvqOAOhDFIM00Flmkt8eH"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // logged in user
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //logged out user
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/*Checkout*/}
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/*Payment*/}
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          {/*Home (Default route)*/}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
