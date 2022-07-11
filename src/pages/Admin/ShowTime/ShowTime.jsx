import React from 'react'
import { Fragment } from "react";
import { Button, Checkbox, Form, Input, InputNumber } from 'antd';
import filmIcon from '../../../../src/assets/img/films-icon.jpg'
import { Select } from 'antd';
import { DatePicker } from 'antd';
import { useState, useEffect } from "react";
import { quanLyRapService } from '../../../services/QuanLyRap';
import { useFormik } from "formik";
import moment from "moment";
import { quanLyDatVeService } from '../../../services/QuanLyDatVeService';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { layThongTinPhimAction } from "./../../../redux/actions/QuanLyPhimActions";
export default function ShowTime(props) {

    const [rap, setRap] = useState({
        heThongRapChieu: [],
        cumRapChieu: []
    })
    console.log('heThongRapChieu', rap.heThongRapChieu);

    const dispatch = useDispatch()

    useEffect(() => {
        let id = props.match.params.id;

        dispatch(layThongTinPhimAction(id));
    }, [])

    const { layThongTinPhim } = useSelector(state => state.QuanLyPhimReducer);

    console.log('thong tin phim', layThongTinPhim);

    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: 75000,
        },
        onSubmit: async (values) => {
            console.log('values', values);
            try {
                const result = await quanLyDatVeService.themLichChieu(values);
                alert(result.data.content)
            } catch (error) {
                console.log('error', error.response?.data);
            }
        }
    })

    useEffect(async () => {
        try {
            let result = await quanLyRapService.layDanhSachHeThongRap();

            setRap({
                ...rap,
                heThongRapChieu: result.data.content
            })

        } catch (error) {
            console.log('error', error.response?.data);
        }
    }, [])

    // lấy các rạp từ hệ thống
    const handleChangeHeThongRap = async (value) => {
        try {
            let result = await quanLyRapService.layThongTinCumRapTheoHeThong(value)
            setRap({
                ...rap,
                cumRapChieu: result.data.content
            })
        } catch (error) {
            console.log('erros', error.response?.data);
        }
    }

    const handleChangeCumRap = (value) => {
        formik.setFieldValue('maRap', value)
    }

    const onOk = (value) => {
        console.log('ngayChieuGioChieu', value)
        formik.setFieldValue('ngayChieuGioChieu', moment(value).format('DD/MM/YYYY hh:mm:ss'))
    }

    const onChangeDate = (value) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(value).format('DD/MM/YYYY hh:mm:ss'))
    }

    const onChangeInpuNumber = (value) => {
        formik.setFieldValue('giaVe', value)
    }

    return (
        <Fragment>
            <div className='admin-layout text-center w-full h-full'>
                <div className='admin-layout-content'><h3 >Quản lý phim</h3></div>
                <div className='admin-add-films w-full h-full'>
                    <div className='layout-add-films grid grid-cols-12 w-full h-full align-items-center'>
                        <div className='col-span-1'></div>
                        <div className='img-add-films img-showtime-films col-span-2 w-full h-full'>
                            <div className='title-films text-ceter'>Lịch chiếu phim</div>
                            <div className='img-film w-full h-full' style={{ backgroundImage: `url(${filmIcon})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}></div>
                        </div>
                        <div className='form-add-films text-white col-span-8'>
                            <div className='title-film pb-5'>
                                <h3 className='name-film text-2xl text-white pb-2'>{layThongTinPhim.tenPhim}</h3>
                                <img src={layThongTinPhim.hinhAnh} alt="..." width={150} height={200} />
                            </div>
                            <div>
                                <Form
                                    name="basic"
                                    labelCol={{
                                        span: 8,
                                    }}
                                    wrapperCol={{
                                        span: 11,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onSubmitCapture={formik.handleSubmit}
                                >
                                    <Form.Item
                                        label="Hệ thống rạp"
                                    >
                                        <Select options={rap.heThongRapChieu?.map((htr, index) => ({ label: htr.tenHeThongRap, value: htr.maHeThongRap }))} onChange={handleChangeHeThongRap} placeholder="Chọn hệ thống rạp" />;
                                    </Form.Item>
                                    <Form.Item
                                        label="Cụm rạp"
                                    >
                                        <Select options={rap.cumRapChieu?.map((cumRap, index) => ({ label: cumRap.tenCumRap, value: cumRap.maCumRap }))} onChange={handleChangeCumRap} placeholder="Chọn cụm rạp" />;
                                    </Form.Item>
                                    <Form.Item
                                        label="Thời gian chiếu"
                                    >
                                        <DatePicker showTime format="DD-MM-YYYY hh:mm:ss" onChange={onChangeDate} onOk={onOk} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Giá vé"
                                    >
                                        <InputNumber type='number' step={1000} min={75000} onChange={onChangeInpuNumber} defaultValue={75000} placeholder={75000} />
                                    </Form.Item>
                                    <Form.Item label="Thêm lịch chiếu">
                                        <button type='submit' className='btn-add-film btn btn-primary border-white'><i className="fas fa-file-medical"></i></button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
