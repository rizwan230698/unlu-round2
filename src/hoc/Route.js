import { useContext } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

export const AuthRoute = ({ component: Component, ...rest }) => {
  const { isUser } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isUser ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isUser } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isUser ? <Component {...props} /> : <Redirect to="/register" />
      }
    />
  );
};
