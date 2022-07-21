import React, { Component } from "react";
import Slider from "react-slick";
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
export default class HomeServiceSlick extends Component {
  state = {
    tenPhim: "",
    trailerFilm: "",
  };

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    let { arrFilm } = this.props;

    const renderFilm = (checkFilm) => {
      return arrFilm.map((itemFilm, index) => {
        if (itemFilm.dangChieu === true && checkFilm === "dangChieu") {
          return (
            <div className="card-film" key={index}>
              <div className="card-item shadow-md shadow-black">
                <div className="img-film" style={{ backgroundImage: `url(${itemFilm.hinhAnh})` }}></div>
                <div className="card-content">
                  <div className="btn-trailer">
                    <button
                      type="button"
                      className="btn btn-modal"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      onClick={() => {
                        this.setState({
                          tenPhim: itemFilm.tenPhim,
                          trailerFilm: itemFilm.trailer,
                        });
                      }}
                    >
                      <i className="fa fa-play-circle"></i>
                    </button>
                  </div>
                  <div className="info-film">
                    <NavLink to={`/detail/${itemFilm.maPhim}`}>CHI TIẾT PHIM</NavLink>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        if (itemFilm.sapChieu == true && checkFilm == "sapChieu") {
          return (
            <div className="card-film" key={index}>
              <div className="card-item shadow-md shadow-black">
                <div className="img-film" style={{ backgroundImage: `url(${itemFilm.hinhAnh})` }}></div>
                <div className="card-content">
                  <div className="btn-trailer">
                    <button
                      type="button"
                      className="btn btn-modal"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      onClick={() => {
                        this.setState({
                          tenPhim: itemFilm.tenPhim,
                          trailerFilm: itemFilm.trailer,
                        });
                      }}
                    >
                      <i className="fa fa-play-circle"></i>
                    </button>
                  </div>
                  <div className="info-film">
                    {/* hoặc là dùng onClick={()=>{
                      history.push(`/detail/${itemFilm.maPhim}`)
                    }} */}
                    <NavLink to={`/detail/${itemFilm.maPhim}`} >CHI TIẾT PHIM</NavLink>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      });
    };

    const { TabPane } = Tabs;
    return (
      <div name="phimHot" className="container service-slick">
        <h1 className="uppercase text-center mt-5 pt-3"> DANH SÁCH PHIM </h1>
        <Tabs defaultActiveKey="1" centered className="tabs">
          <TabPane tab="Phim đang chiếu" key="1" className="tabPane">
            <Slider {...settings}>{renderFilm("dangChieu")}</Slider>
          </TabPane>
          <TabPane tab="Phim sắp chiếu" key="2" className="tabPane">
            <Slider {...settings}>{renderFilm("sapChieu")}</Slider>
          </TabPane>
        </Tabs>

        <div className="modal fade bd-example-modal" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content modal-trailer">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  {this.state.tenPhim}
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <iframe className="h-full w-full" src={this.state.trailerFilm}></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
