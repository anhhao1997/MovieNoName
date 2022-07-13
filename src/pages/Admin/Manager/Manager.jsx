import { layDanhSachNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction'
import React, { Fragment, useState, useEffect } from 'react'
import { Table, Button, Modal } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { NavLink } from "react-router-dom"

export default function Manager(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction())
    }, [])

    const { danhSachNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
    console.log('danhSachNguoiDung', danhSachNguoiDung);

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
        // dispatch(getQuanLyPhimAction(value))
    };

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    const columns = [
        {
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
            sorter: (a, b) => {
                let taiKhoanA = a.taiKhoan.toLowerCase().trim();
                let taiKhoanB = b.taiKhoan.toLowerCase().trim();
                if (taiKhoanA > taiKhoanB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend'],
            width: '10%'
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
            sorter: (a, b) => {
                let hoTenA = a.hoTen.toLowerCase().trim();
                let hoTenB = b.hoTen.toLowerCase().trim();
                if (hoTenA > hoTenB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend'],
            width: '15%'
        },
        {
            title: 'Emai',
            dataIndex: 'email',
            sorter: (a, b) => {
                let emailA = a.email.toLowerCase().trim();
                let emailB = b.email.toLowerCase().trim();
                if (emailA > emailB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend'],
            width: '15%'
        },
        {
            title: 'Số điên thoại',
            dataIndex: 'soDT',
            sorter: (a, b) => {
                let soDTA = a.soDT
                let soDTB = b.soDT
                if (soDTA > soDTB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend'],
            render: (text, user) => {
                return (
                    <Fragment>
                        <p>{user.soDT}</p>
                    </Fragment>
                )
            },
            width: '10%'
        },
        {
            title: 'Mã loại người dùng',
            dataIndex: 'maLoaiNguoiDung',
            render: (text, user) => {
                return (
                    <Fragment>
                        <p>{user.maLoaiNguoiDung}</p>
                    </Fragment>
                )
            },
            width: '5%'
        },
        {
            title: 'Chức năng',
            dataIndex: 'chucNang',
            render: (text, user) => {
                return (
                    <div className='text-center'>
                        <button key={1} className='edit text-blue-600 text-2xl' to={`/admin/films/editfilm`} onClick={() => setVisible(true)}><i className="far fa-edit"></i></button>
                        <span style={{ cursor: 'pointer' }} key={2} className='delete text-red-600 text-2xl mr-3 ml-3' onClick={() => {
                            if (window.confirm('Bạn có chắc chắn xóa người dùng này' + user.taiKhoan)) {

                            }
                        }}><i className="fas fa-trash-alt"></i></span>
                        <NavLink key={1} className='showtime text-green-600 text-2xl' to={`/admin/films/showtime`}><i className="far fa-calendar-alt"></i></NavLink>
                    </div>
                )
            },
            width: '15%'
        },
    ];

    const data = danhSachNguoiDung;

    const [visible, setVisible] = useState(false);

    return (
        <Fragment>
            <div className='admin-layout text-center w-full h-full'>
                <div className='admin-layout-content'><h3 >Quản lý người dùng</h3></div>
                <div className='admin-layout-table w-full h-full'>
                    <Search className='w-2/3 pb-4' placeholder="Nhập từ khóa tìm kiếm" onSearch={onSearch} enterButton />
                    <span onClick={() => {
                        // props.history.push("/admin/films/addfilms")
                    }}>
                        <Button danger className='ml-5' onClick={() => setVisible(true)}><i className="fa fa-plus-circle pr-3" ></i><i className="fas fa-user"></i></Button>
                    </span>
                    <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"maPhim"} />
                </div>
            </div>
            <>
                <Modal
                    title="Modal 1000px width"
                    centered
                    visible={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)}
                    width={1000}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
            </>
        </Fragment>
    )
}
