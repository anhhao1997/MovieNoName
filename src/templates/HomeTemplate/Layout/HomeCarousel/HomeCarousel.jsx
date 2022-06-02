import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCarouselAction } from '../../../../redux/actions/CarouselActions'

export default function HomeCarousel(props) {

    const { arrBanner } = useSelector(state => state.CarouselReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        try {

            const action = getCarouselAction;

            dispatch(action);

        } catch (errors) {
            console.log('errors', errors)
        }


    }, [])

    console.log('arrBanner', arrBanner);
    return (
        <div>

        </div>
    )
}
