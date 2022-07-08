import React, { useEffect } from 'react'
import { Fragment } from "react";
import filmIcon from '../../../../../src/assets/img/films-icon.jpg'
import {
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import { useState } from "react";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { GROUPID } from '../../../../util/settings/config';
import { capNhatPhimUploadAction, layThongTinPhimAction } from "./../../../../redux/actions/QuanLyPhimActions";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const EditFilm = (props) => {

    const [imgSrc, setImgSrc] = useState('');

    const dispatch = useDispatch()

    useEffect(() => {
        let id = props.match.params.id;

        dispatch(layThongTinPhimAction(id));
    }, [])

    const { layThongTinPhim } = useSelector(state => state.QuanLyPhimReducer);
    // console.log('thongTinPhim', layThongTinPhim);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: layThongTinPhim.maPhim,
            tenPhim: layThongTinPhim.tenPhim,
            trailer: layThongTinPhim.trailer,
            moTa: layThongTinPhim.moTa,
            ngayKhoiChieu: layThongTinPhim.ngayKhoiChieu,
            dangChieu: layThongTinPhim.dangChieu,
            sapChieu: layThongTinPhim.sapChieu,
            hot: layThongTinPhim.hot,
            danhGia: layThongTinPhim.danhGia,
            hinhAnh: null,
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

                } else if (values.hinhAnh != null) {
                    formData.append('File', values.hinhAnh, values.hinhAnh.name)
                }
            }
            // gửi đi
            dispatch(capNhatPhimUploadAction(formData))
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
            reader.onload = async (e) => {
                await setImgSrc(e.target.result)
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
                        <div className='img-add-films img-edit-films col-span-2 w-full h-full'>
                            <div className='title-films text-ceter'>Cập nhật phim</div>
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
                                        <Input name='tenPhim' onChange={formik.handleChange} value={formik.values.tenPhim} />
                                    </Form.Item>
                                    <Form.Item label="Trailer">
                                        <Input name='trailer' onChange={formik.handleChange} value={formik.values.trailer} />
                                    </Form.Item>
                                    <Form.Item label="Mô tả">
                                        <TextArea name='moTa' rows={4} onChange={formik.handleChange} value={formik.values.moTa} />
                                    </Form.Item>
                                    <Form.Item label="Ngày khởi chiếu" className='w-full'>
                                        <DatePicker format={"DD/MM/YYYY"} placeholder="DD/MM/YYYY" onChange={handleChangeDatePicker} defaultValue={moment(formik.values.ngayKhoiChieu)} />
                                    </Form.Item>
                                    <Form.Item label="Đang chiếu" valuePropName="checked">
                                        <Switch name='dangChieu' onChange={handleChangeSwitchNumber('dangChieu')} checked={formik.values.dangChieu} />
                                    </Form.Item>
                                    <Form.Item label="Sắp chiếu" valuePropName="checked">
                                        <Switch name='sapChieu' onChange={handleChangeSwitchNumber('sapChieu')} checked={formik.values.sapChieu} />
                                    </Form.Item>

                                    <Form.Item label="Hot" valuePropName="checked">
                                        <Switch name='hot' onChange={handleChangeSwitchNumber('hot')} checked={formik.values.hot} />
                                    </Form.Item>
                                    <Form.Item label="Đánh giá">
                                        <InputNumber max={10} min={1} onChange={handleChangeSwitchNumber('danhGia')} value={formik.values.danhGia} />
                                    </Form.Item>
                                    <Form.Item label="Hình ảnh" >
                                        <input type="file" onChange={handleChangeFile} className='mb-3' />
                                        <img src={imgSrc === '' ? layThongTinPhim.hinhAnh : imgSrc} alt="..." style={{ width: 120, height: 150 }} accept="image/png, image/jpeg" />
                                    </Form.Item>
                                    <Form.Item label="Cập nhật">
                                        <button type='submit' className='btn-add-film btn btn-primary border-white'><i className="fas fa-file-signature"></i></button>
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

export default EditFilm;