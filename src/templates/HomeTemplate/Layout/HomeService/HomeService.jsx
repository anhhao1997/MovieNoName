import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import HomeServiceSlick from './HomeServiceSlick'
import { useEffect } from "react";
import { getQuanLyPhimAction } from "./../../../../redux/actions/QuanLyPhimActions";
export default function HomeService(props) {

    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        try {

            const action = getQuanLyPhimAction();

            dispatch(action);

        } catch (errors) {

            console.log('errors', errors)

        }

    }, [])

    // console.log('film', arrFilm);
    return (
        <div className='container'>
            <HomeServiceSlick arrFilm={arrFilm} />
        </div>
    )
}


