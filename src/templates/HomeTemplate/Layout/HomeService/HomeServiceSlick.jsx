import React, { Component } from 'react'
import Slider from "react-slick";
import { Tabs } from 'antd';
export default class HomeServiceSlick extends Component {


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
                        dots: true
                    }
                },

                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        dots: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        let { arrFilm } = this.props

        const renderFilm = (checkFilm) => {
            return arrFilm.map((itemFilm, index) => {
                if (itemFilm.dangChieu == true && checkFilm == 'dangChieu') {
                    return (
                        <div className='card-film' key={index}>
                            <div className='card-item shadow-md shadow-black'>
                                <div className='img-film' style={{ backgroundImage: `url(${itemFilm.hinhAnh})` }}>
                                </div>
                                <div className='card-content'>
                                    <div className='btn-trailer'>
                                        <button type="button" className="btn btn-modal" data-toggle="modal" data-target="#exampleModalCenter">
                                            <i class="fa fa-play-circle"></i>
                                        </button>
                                    </div>
                                    <div className='info-film'>
                                        <a href="#">CHI TIẾT PHIM</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                if (itemFilm.sapChieu == true && checkFilm == 'sapChieu') {
                    return (
                        <div className='card-film' key={index}>
                            <div className='card-item shadow-md shadow-black'>
                                <div className='img-film' style={{ backgroundImage: `url(${itemFilm.hinhAnh})` }}>
                                </div>
                                <div className='card-content'>
                                    <div className='btn-trailer'>
                                        <button type="button" className="btn btn-modal" data-toggle="modal" data-target="#exampleModalCenter">
                                            <i class="fa fa-play-circle"></i>
                                        </button>
                                    </div>
                                    <div className='info-film'>
                                        <a href="#">CHI TIẾT PHIM</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        }

        const { TabPane } = Tabs;
        return (

            <div className='container service-slick'>
                <h2 className='title'> DANH SÁCH PHIM </h2>
                <Tabs defaultActiveKey="1" centered className='tabs'>
                    <TabPane tab="Phim đang chiếu" key="1" className='tabPane'>
                        <Slider {...settings}>
                            {renderFilm('dangChieu')}
                        </Slider>
                    </TabPane>
                    <TabPane tab="Phim sắp chiếu" key="2" className='tabPane'>
                        <Slider {...settings}>
                            {renderFilm('sapChieu')}
                        </Slider>
                    </TabPane>
                </Tabs>


                <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Trailer Film</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                video
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}