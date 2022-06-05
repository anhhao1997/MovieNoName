import React from 'react'
import HomeCarousel from "./../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import HomeService from "./../../templates/HomeTemplate/Layout/HomeService/HomeService";
import HomeTheater from "./../../templates/HomeTemplate/Layout/HomeTheater/HomeTheater";

export default function Home(props) {

    return (

        <div >

            <HomeCarousel></HomeCarousel>

            <HomeService></HomeService>

            <HomeTheater></HomeTheater>

        </div>

    )

}
