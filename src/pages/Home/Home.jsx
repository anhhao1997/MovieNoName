import React from "react";
import Contact from "../../components/Contact/Contact";
import { Tabtitle } from "../../util/FunctionTitle";
import HomeCarousel from "./../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import HomeService from "./../../templates/HomeTemplate/Layout/HomeService/HomeService";
import HomeTheater from "./../../templates/HomeTemplate/Layout/HomeTheater/HomeTheater";

export default function Home(props) {
  Tabtitle("Trang chủ");
  return (
    <div id="home">
      <HomeCarousel></HomeCarousel>
      <div>
        <HomeService></HomeService>

        <HomeTheater></HomeTheater>
        <Contact />
      </div>
    </div>
  );
}
