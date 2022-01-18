import "./App.css";
import React from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import { AuthRoute, ProtectedRoute } from "./hoc/Route";
import Homepage from "./pages";
import Register from "./pages/register";
import Header from "./components/Header";

function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Switch>
          <ProtectedRoute exact path="/" component={Homepage} />
          <AuthRoute exact path="/register" component={Register} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
