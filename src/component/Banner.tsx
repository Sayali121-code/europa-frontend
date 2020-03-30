import * as React from "react";
import { Form, Input, Button, DatePicker, Select, InputNumber } from "antd";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

var rn = require("random-number");
var options = {
  min: -1000,
  max: 1000,
  integer: true
};

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};
const Display = () => {
  const onFinish = (values: any) => {
    //  console.log("Success:", values);

    axios
      .post(`http://localhost:8080/reservation/create/`, {
        ...values,
        id: rn(options)
      })
      .then(res => {
        console.log(">> res", res);
        console.log(">> res.data", res.data);
      });
    console.log("Values", values, uuidv4());
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {/*   <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Input />
      </Form.Item> */}

      <Form.Item
        label="From"
        name="from"
        rules={[
          {
            required: true,
            message: "Please select date"
          }
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="To"
        name="to"
        rules={[
          {
            required: true,
            message: "Please select date"
          }
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Adult"
        name="adult"
        rules={[
          {
            required: true,
            message: " Please select no. of Adults"
          }
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Children"
        name="children"
        rules={[
          {
            required: true,
            message: " Please select no. of Children"
          }
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="rooms"
        name="rooms"
        rules={[
          {
            required: true,
            message: " Please select no. of Rooms"
          }
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Room"
        name="room"
        rules={[
          {
            required: true,
            message: " Please select Room"
          }
        ]}
      >
        <Select>
          <option defaultValue="Select">Select</option>
          <option value="Master Suit">Master Suit</option>
          <option value="Single Room">Single Room</option>
          <option value="Double Room">Double Room</option>
          <option value="Special Room">Special Room</option>
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
const Banner = () => {
  return <Display />;
};
export default Banner;
