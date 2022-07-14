import React from 'react'
import { Fragment } from "react";
import filmIcon from '../../../../../src/assets/img/films-icon.jpg'
import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Switch,
} from 'antd';
import { useState } from 'react';
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import { GROUPID } from '../../../../util/settings/config';
import { themPhimUploadHinhAction } from '../../../../redux/actions/QuanLyPhimActions';


const { RangePicker } = DatePicker;
const { TextArea } = Input;
const AddFilms = (props) => {

    const [imgSrc, setImgSrc] = useState('');

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: 1,
            hinhAnh: {},
            maNhom: GROUPID
        },
        onSubmit: (values) => {
            console.log('values', values);
            let formData = new FormData();
            // đưa giá trị vào formData
            values.maNhom = GROUPID;
            for (let key in values) {
                if (key != 'hinhAnh') {
                    formData.append(key, values[key])

                } else {
                    formData.append('File', values.hinhAnh, values.hinhAnh.name)
                }
            }
            // gửi đi
            dispatch(themPhimUploadHinhAction(formData));
        }
    })

    const handleChangeDatePicker = (value) => {
        // Đổi định dạng ngày tháng năm cho phù hợp
        let ngayKhoiChieu = moment(value).format('DD/MM/YYYY');

        // đưa dữ liệu vào formik
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
    }

    const handleChangeSwitchNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }

    const handleChangeFile = async (e) => {
        // lấy file
        let file = e.target.files[0]
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {

            await formik.setFieldValue('hinhAnh', file);


            let reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                setImgSrc(e.target.result)
            }
        }
    }

    return (
        <Fragment>
            <div className='admin-layout text-center w-full h-full'>
                <div className='admin-layout-content'><h3 >Quản lý phim</h3></div>
                <div className='admin-add-films w-full h-full'>
                    <div className='layout-add-films grid grid-cols-12 w-full h-full'>
                        <div className='col-span-1'></div>
                        <div className='img-add-films col-span-2 w-full h-full'>
                            <div className='title-films text-ceter'>Thêm phim mới</div>
                            <div className='img-film w-full h-full' style={{ backgroundImage: `url(${filmIcon})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}></div>
                        </div>
                        <div className='col-span-1'></div>
                        <div className='form-add-films text-white col-span-8'>
                            <Fragment>
                                <Form
                                    onSubmitCapture={formik.handleSubmit}
                                    labelCol={{
                                        span: 4,
                                    }}
                                    wrapperCol={{
                                        span: 17,
                                    }}
                                >
                                    <Form.Item label="Tên phim">
                                        <Input name='tenPhim' onChange={formik.handleChange} />
                                    </Form.Item>
                                    <Form.Item label="Trailer">
                                        <Input name='trailer' onChange={formik.handleChange} />
                                    </Form.Item>
                                    <Form.Item label="Mô tả">
                                        <TextArea name='moTa' rows={4} onChange={formik.handleChange} />
                                    </Form.Item>
                                    <Form.Item label="Ngày khởi chiếu" className='w-full'>
                                        <DatePicker format={"DD/MM/YYYY"} placeholder="DD/MM/YYYY" onChange={handleChangeDatePicker} />
                                    </Form.Item>
                                    <Form.Item label="Đang chiếu" valuePropName="checked">
                                        <Switch name='dangChieu' onChange={handleChangeSwitchNumber('dangChieu')} />
                                    </Form.Item>
                                    <Form.Item label="Sắp chiếu" valuePropName="checked">
                                        <Switch name='sapChieu' onChange={handleChangeSwitchNumber('sapChieu')} />
                                    </Form.Item>

                                    <Form.Item label="Hot" valuePropName="checked">
                                        <Switch name='hot' onChange={handleChangeSwitchNumber('hot')} />
                                    </Form.Item>
                                    <Form.Item label="Đánh giá">
                                        <InputNumber max={10} min={1} onChange={handleChangeSwitchNumber('danhGia')} />
                                    </Form.Item>
                                    <Form.Item label="Hình ảnh" >
                                        <input type="file" onChange={handleChangeFile} className='mb-3' />
                                        <img src={imgSrc} alt="..." style={{ width: 120, height: 150 }} accept="image/png, image/jpeg" />
                                    </Form.Item>
                                    <Form.Item label="Thêm phim">
                                        <button type='submit' className='btn-add-film btn btn-primary border-white'><i className="fas fa-file-medical"></i></button>
                                    </Form.Item>
                                </Form>
                            </Fragment>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AddFilms;