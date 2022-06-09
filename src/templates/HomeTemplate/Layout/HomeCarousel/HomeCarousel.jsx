import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCarouselAction } from '../../../../redux/actions/CarouselActions'
import { Carousel } from 'antd';


const contentBanner = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    width: '100%',
}

export default function HomeCarousel(props) {

    const { arrBanner } = useSelector(state => state.CarouselReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        try {

            const action = getCarouselAction();

            dispatch(action);

        } catch (errors) {

            console.log('errors', errors)

        }

    }, [])



    const renderBanner = () => {
        return arrBanner.map((itemBanner, index) => {
            return (
                <div key={index} className="Carousel">
                    <div className='Carousel-img' style={{ ...contentBanner, backgroundImage: `url(${itemBanner.hinhAnh})` }}>
                        <img src={itemBanner.hinhAnh} className="w-full h-full" />
                    </div>
                </div >
            )
        })
    }

    return (
        <div className='Home-Carousel container-fulid'>
            <Carousel autoplay>

                {renderBanner()}

            </Carousel>
        </div>
    )
}
