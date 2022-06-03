import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import HomeServiceSlick from './HomeServiceSlick'
export default function HomeService(props) {

    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer)
    console.log('film', arrFilm);
    return (
        <div className='container mx-auto'>
            <HomeServiceSlick />
        </div>
    )
}


