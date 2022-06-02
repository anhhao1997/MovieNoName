import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function HomeService() {

    const { QuanLyPhimReducer } = useSelector(state => state.QuanLyPhimReducer)

    return (
        <div>HomeService</div>
    )
}


