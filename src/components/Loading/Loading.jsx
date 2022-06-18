import React, { Fragment } from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function Loading(props) {
    const dispatch = useDispatch;
    const { isLoading } = useSelector(state => state.LoadingReducer)
    return (
        <Fragment>
            {isLoading ?
                <div className='fixed top-0 left-0 h-full w-full z-10 flex text-center items-center justify-center text-6xl p-2 text-white' style={{backgroundColor:'rgba(0,0,0,.5)'}}>
                    <div>Loading...</div>
                </div> : ''
            }
        </Fragment>
    )
}
