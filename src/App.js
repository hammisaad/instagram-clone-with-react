import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";

import "./App.scss";

import Home from "./components/home/home.component";
import SignUp from "./components/sign-up/sign-up.component";
import SignIn from "./components/sign-in/sign-in.component";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser(userAuth);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (user ? <Home /> : <Redirect to="/signup" />)}
        />

        <Route exact path="/signup">
          {user ? <Redirect to="/" /> : <SignUp />}
        </Route>
        <Route exact path="/signin">
          {user ? <Redirect to="/" /> : <SignIn />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
