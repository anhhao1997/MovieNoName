import React, { Component } from 'react'
import Slider from "react-slick";


export default class HomeServiceSlick extends Component {

    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "80px",
            slidesToShow: 2,
            speed: 500,
            rows: 2,
            slidesPerRow: 2
        };

        return (

            <div className='container'>
                <h2 className='text-center p-5'>Danh sách phim mới</h2>
                <Slider {...settings} >
                    <div className='card-film'>
                        <div className='card-item text-center '>
                            <div className='img-film'>
                                <img src="https://picsum.photos/250/300" alt="..." />
                            </div>
                            <div className='btn-trailer'>
                                <button className='btn btn-danger'>Play</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-film'>
                        <div className='card-item text-center '>
                            <div className='img-film'>
                                <img src="https://picsum.photos/250/300" alt="..." />
                            </div>
                            <div className='btn-trailer'>
                                <button className='btn btn-danger'>Play</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-film'>
                        <div className='card-item text-center '>
                            <div className='img-film'>
                                <img src="https://picsum.photos/250/300" alt="..." />
                            </div>
                            <div className='btn-trailer'>
                                <button className='btn btn-danger'>Play</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-film'>
                        <div className='card-item text-center '>
                            <div className='img-film'>
                                <img src="https://picsum.photos/250/300" alt="..." />
                            </div>
                            <div className='btn-trailer'>
                                <button className='btn btn-danger'>Play</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-film'>
                        <div className='card-item text-center '>
                            <div className='img-film'>
                                <img src="https://picsum.photos/250/300" alt="..." />
                            </div>
                            <div className='btn-trailer'>
                                <button className='btn btn-danger'>Play</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-film'>
                        <div className='card-item text-center '>
                            <div className='img-film'>
                                <img src="https://picsum.photos/250/300" alt="..." />
                            </div>
                            <div className='btn-trailer'>
                                <button className='btn btn-danger'>Play</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-film'>
                        <div className='card-item text-center '>
                            <div className='img-film'>
                                <img src="https://picsum.photos/250/300" alt="..." />
                            </div>
                            <div className='btn-trailer'>
                                <button className='btn btn-danger'>Play</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-film'>
                        <div className='card-item text-center '>
                            <div className='img-film'>
                                <img src="https://picsum.photos/250/300" alt="..." />
                            </div>
                            <div className='btn-trailer'>
                                <button className='btn btn-danger'>Play</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-film'>
                        <div className='card-item text-center '>
                            <div className='img-film'>
                                <img src="https://picsum.photos/250/300" alt="..." />
                            </div>
                            <div className='btn-trailer'>
                                <button className='btn btn-danger'>Play</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-film'>
                        <div className='card-item text-center '>
                            <div className='img-film'>
                                <img src="https://picsum.photos/250/300" alt="..." />
                            </div>
                            <div className='btn-trailer'>
                                <button className='btn btn-danger'>Play</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-film'>
                        <div className='card-item text-center '>
                            <div className='img-film'>
                                <img src="https://picsum.photos/250/300" alt="..." />
                            </div>
                            <div className='btn-trailer'>
                                <button className='btn btn-danger'>Play</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-film'>
                        <div className='card-item text-center '>
                            <div className='img-film'>
                                <img src="https://picsum.photos/250/300" alt="..." />
                            </div>
                            <div className='btn-trailer'>
                                <button className='btn btn-danger'>Play</button>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}
