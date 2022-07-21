import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Loading(props) {
    const dispatch = useDispatch;
    const { isLoading } = useSelector((state) => state.LoadingReducer);
    return (
        <Fragment>
            {isLoading ? (
                <div className="fixed top-0 left-0 h-full w-full z-10 flex text-center items-center justify-center text-6xl p-2 text-white" style={{ backgroundColor: "rgba(0,0,0,.5)" }}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: "auto", background: "none", display: "block", shapeRendering: "auto" }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                            <circle cx={50} cy={50} r={35} strokeWidth={5} stroke="#ff0011" strokeDasharray="54.97787143782138 54.97787143782138" fill="none" strokeLinecap="round">
                                <animateTransform attributeName="transform" type="rotate" dur="2s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50" />
                            </circle>
                            <circle cx={50} cy={50} r={29} strokeWidth={5} stroke="#fff" strokeDasharray="45.553093477052 45.553093477052" strokeDashoffset="45.553093477052" fill="none" strokeLinecap="round">
                                <animateTransform attributeName="transform" type="rotate" dur="2s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50" />
                            </circle>
                            {/* [ldio] generated by https://loading.io/ */}
                        </svg>
                    </div>
                </div>
            ) : (
                ""
            )}
        </Fragment>
    );
}
