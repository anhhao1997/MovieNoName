import { Fragment } from "react";
import { Route } from 'react-router-dom';
import Header from "./Layout/Header/Header";

export const HomeTemplate = (props) => {

    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => {

        return (

            <Fragment>

                <Header></Header>

                <Component {...propsRoute} />

                <footer>
                    Đây là footer
                </footer>

            </Fragment>
        )

    }} />

}