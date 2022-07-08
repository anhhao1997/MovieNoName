import { Fragment } from "react";
import { Route } from 'react-router-dom';
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";

export const HomeTemplate = (props) => {

    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => {

        return (

            <Fragment>

                <Header {...propsRoute}></Header>

                <Component {...propsRoute} />

                <Footer {...propsRoute}></Footer>

            </Fragment>
        )

    }} />

}