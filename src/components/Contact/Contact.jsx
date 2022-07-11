import React from "react";
import { useFormik } from "formik";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      gopY: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log("values", values);
      alert("Cám ơn bạn đã gửi thông tin về cho chúng tôi");
      resetForm((values = ""));
    },
  });

  return (
    <div name="lienHe" className="w-full h-screen bg-gradient-to-r from-slate-900 to-gray-700  text-white">
      <div className="flex flex-col p-3 justify-center max-w-screen-xl mx-auto h-full">
        <div className="pb-8">
          <h1 className="uppercase text-center pt-3 text-white">LIÊN HỆ VỚI CHÚNG TÔI</h1>

          <p className="text-xs text-center mt-3">Chúng tôi luôn sẵn lòng lắng nghe ý kiến góp ý từ bạn </p>
        </div>

        <div className=" flex justify-center items-center">
          <form onSubmit={formik.handleSubmit} className=" flex flex-col w-full md:w-1/2">
            <input
              onChange={formik.handleChange}
              type="text"
              name="name"
              value={formik.values.name}
              placeholder="Tên của bạn"
              className="p-2 bg-transparent border-2 rounded-md text-white text-xs focus:outline-none"
            />
            <input
              onChange={formik.handleChange}
              type="text"
              value={formik.values.email}
              name="email"
              placeholder="Email của bạn"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white text-xs focus:outline-none"
            />
            <textarea
              onChange={formik.handleChange}
              name="gopY"
              placeholder="Góp ý của bạn"
              value={formik.values.gopY}
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md text-white text-xs focus:outline-none"
            ></textarea>

            <button type="submit" onClick={formik.handleSubmit} className="custom-btn btn-main mt-3">
              Gửi đi
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
