import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";
import loader from "../../Shared/Register/images/loader.svg";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="w-12 mt-4 mx-auto">
        <img src={loader} alt="" />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
