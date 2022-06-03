import React from 'react'

export default function Header(props) {
    return (

        //Có chỉnh sửa phần header

        <div className='sticky drop-shadow-2xl top-0 z-10' style={{ backgroundColor: '#1f2937' }}>
            <header className='container mx-auto'>
                <nav className="d-flex justify-content-between align-items-center pt-3 pb-3" style={{ backgroundColor: '#1f2937' }}>
                    <div className='nav-item'>
                        <a href="#">Logo</a>
                    </div>
                    <div className='nav-item'>
                        <a href="#">Lịch chiếu phim</a>
                        <a href="#" className='mr-5 ml-5'>Liên hệ</a>
                        <a href="#">Tin tức</a>
                    </div>
                    <div className='nav-item'>
                        <a className='btn btn-primary ml-2'>Đăng kí / Đăng nhập</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}
