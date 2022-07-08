import React, { Fragment } from 'react'
import { Table, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { getQuanLyPhimAction, xoaPhimAction } from "./../../../redux/actions/QuanLyPhimActions";
import { NavLink } from "react-router-dom";

export default function Films(props) {
    // Lấy danh sách các phim từ redux
    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuanLyPhimAction())
    }, [])

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    const { Search } = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    const onSearch = (value) => {
        // gọi api
        dispatch(getQuanLyPhimAction(value))
    };

    const columns = [
        {
            title: 'Mã phim',
            dataIndex: 'maPhim',
            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['descend'],
            width: '10%'
        },
        {
            title: 'Tên phim',
            dataIndex: 'tenPhim',
            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend'],
            width: '20%'
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            render: (text, film) => {
                return (
                    <Fragment>
                        <img src={film.hinhAnh} alt={film.tenPhim} width={50} height={50} />
                    </Fragment>
                )

            },
            width: 100
        },
        {
            title: 'Mô tả',
            dataIndex: 'moTa',
            sorter: (a, b) => {
                let moTaA = a.moTa.toLowerCase().trim();
                let moTaB = b.moTa.toLowerCase().trim();
                if (moTaA > moTaB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend'],
            render: (text, film) => {
                return (
                    <Fragment>
                        {film.moTa.length > 70 ? film.moTa.substr(0, 70) + ' . . .' : film.moTa}
                    </Fragment>
                )
            },
            width: '40%'
        },
        {
            title: 'Chức năng',
            dataIndex: 'chucNang',
            render: (text, film) => {
                return (
                    <div className='text-center'>
                        <NavLink key={1} className='edit text-blue-600 text-2xl' to={`/admin/films/editfilm/${film.maPhim}`}><i className="far fa-edit"></i></NavLink>
                        <span style={{ cursor: 'pointer' }} key={2} className='delete text-red-600 text-2xl mr-3 ml-3' onClick={() => {
                            if (window.confirm('Bạn có chắc chắn xóa phim' + film.tenPhim)) {
                                //gọi api xóa
                                dispatch(xoaPhimAction(film.maPhim))
                            }
                        }}><i className="fas fa-trash-alt"></i></span>
                        <NavLink key={1} className='showtime text-green-600 text-2xl' to={`/admin/films/showtime/${film.maPhim}`}><i className="far fa-calendar-alt"></i></NavLink>
                    </div>
                )
            }
        },
    ];

    const data = arrFilm;

    return (
        <Fragment>
            <div className='admin-layout text-center w-full h-full'>
                <div className='admin-layout-content'><h3 >Quản lý phim</h3></div>
                <div className='admin-layout-table w-full h-full'>
                    <Search className='w-2/3 pb-4' placeholder="Nhập từ khóa tìm kiếm" onSearch={onSearch} enterButton />
                    <span onClick={() => {
                        props.history.push("/admin/films/addfilms")
                    }}>
                        <Button danger className='ml-5'><i className="fa fa-plus-circle pr-3" ></i><i className="fas fa-film"></i></Button>
                    </span>
                    <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"maPhim"} />
                </div>
            </div>
        </Fragment>
    )
}
