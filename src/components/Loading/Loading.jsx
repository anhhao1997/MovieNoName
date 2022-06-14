import React, { Fragment } from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function Loading(props) {
    const dispatch = useDispatch;
    const { isLoading } = useSelector(state => state.LoadingReducer)
    return (
        <Fragment>
            {isLoading ?
                <div className='fixed top-1/2 w-full z-10 text-center align-items-center bg-red-400 text-6xl p-2 text-white'>
                    <div>Loading...</div>
                </div> : ''
            }
        </Fragment>
    )
}
