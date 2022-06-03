import React, { useEffect } from "react";
import { Tabs, Radio, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachHeThongRap } from "../../../../redux/actions/QuanLyRapActions";

export default function HomeTheater(props) {
  const { TabPane } = Tabs;
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = layDanhSachHeThongRap();
    dispatch(action);
  }, []);

  console.log("htr", heThongRapChieu);

  return (
    <div className="container lg:mx-10 my-10 text-sm md:mx-5">
      <Tabs tabPosition={"left"}>
        <TabPane tab={<img src="https://picsum.photos/200" className="rounded-full" width="50" />} key="1">
          Content of Tab 1
        </TabPane>
        <TabPane tab={<img src="https://picsum.photos/200" className="rounded-full" width="50" />} key="2">
          Content of Tab 2
        </TabPane>
        <TabPane tab={<img src="https://picsum.photos/200" className="rounded-full" width="50" />} key="3">
          Content of Tab 3
        </TabPane>
      </Tabs>
    </div>
  );
}
