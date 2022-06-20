import React, { Fragment } from 'react'
import { Table, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { getQuanLyPhimAction } from "./../../../redux/actions/QuanLyPhimActions";
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
            width: 200
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
            width: 400
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
            width: 600
        },
        {
            title: 'Chức năng',
            dataIndex: 'chucNang',
            render: (text, film) => {
                return (
                    <div className='text-center'>
                        <NavLink className='edit text-blue-600 text-2xl mr-2' to='/'><i className="far fa-edit"></i></NavLink>
                        <NavLink className='delete text-red-600 text-2xl ml-2' to='/'><i className="fas fa-trash-alt"></i></NavLink>
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
                        <Button danger className='ml-5 pl-3 pr-3 text-xl'><i className="fa fa-plus-circle pr-2" ></i><i className="fas fa-film"></i></Button>
                    </span>
                    <Table columns={columns} dataSource={data} onChange={onChange} />
                </div>
            </div>
        </Fragment>
    )
}
