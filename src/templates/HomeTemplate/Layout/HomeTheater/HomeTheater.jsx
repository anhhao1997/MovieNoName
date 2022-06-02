import React from "react";
import { Tabs, Radio, Space } from "antd";

export default function HomeTheater(props) {
  const { TabPane } = Tabs;

  return (
    <div className='container lg:mx-10 my-10 text-sm md:mx-5'>
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
