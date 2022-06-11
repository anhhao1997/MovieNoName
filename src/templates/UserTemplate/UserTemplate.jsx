import { Fragment } from "react";
import { Route } from "react-router-dom";
import UserLogin from "./Layout/UserLogin";

export const UserTemplate = (props) => {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
