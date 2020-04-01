import * as React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import TextArea from "antd/lib/input/TextArea";

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
const Contact = () => {
  const onFinish = (values: any) => {
    //  console.log("Success:", values);
    axios
      .post(`http://localhost:8080/contacts/create/`, {
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
      className="travelling-party"
      {...layout}
      name="basic"
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Your name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please Enter your name"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Your email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please Enter your email"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="subject"
        name="subject"
        rules={[
          {
            required: true,
            message: " Please Enter Subject"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="message"
        name="message"
        rules={[
          {
            required: true,
            message: " Please Enter Message"
          }
        ]}
      >
        <TextArea />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button className="reservation" type="primary" htmlType="submit">
          Send Message
        </Button>
      </Form.Item>
    </Form>
  );
};
const ContactForm = () => {
  return <Contact />;
};
export default ContactForm;
