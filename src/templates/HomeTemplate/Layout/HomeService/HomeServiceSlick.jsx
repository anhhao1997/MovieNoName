import React, { Component } from 'react'
import Slider from "react-slick";


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

        const renderFilm = () => {
            return arrFilm.map((itemFilm, index) => {
                return (
                    <div className='card-film' key={index}>
                        <div className='card-item shadow-md shadow-black'>
                            <div className='img-film' style={{ backgroundImage: `url(${itemFilm.hinhAnh})` }}>
                                <div className='btn-trailer shadow-md'>
                                    <button className='btn'>
                                        <i class="fa fa-play-circle"></i>
                                    </button>
                                </div>
                                <div className='info-film shadow-md'>
                                    <a href="#">CHI TIẾT PHIM</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        return (

            <div className='container service-slick'>
                <h2 className='title'> DANH SÁCH PHIM </h2>
                <Slider {...settings}>
                    {renderFilm()}
                </Slider>
            </div>
        );
    }
}