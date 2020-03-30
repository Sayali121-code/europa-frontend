import * as React from "react";
import "../Home.scss";
import Button from "antd/es/button";
//import { Row, Col } from "antd";
//import DatePicker from "react-date-picker";
//import Select from "react-select";
//import { useState } from "react";
import { Form, Input, Select, DatePicker, InputNumber } from "antd";

import axios from "axios";

interface IBannerState {
  a: {
    a1: any;
  }[];
  a1: any;

  /* countAdult: number;
  countChild: number;
  countRoom: number;
  date: Date;
  datefrom: Date;
  dateto: Date;
  selectedOption: an */
}

/* const options = [
  { value: "Double Room", label: "Double Room" },
  { value: "Single Room", label: "Single Room" },
  { value: "Special Room", label: "Special Room" }
];
 */
class Banner extends React.Component<{}, IBannerState> {
  constructor(props: any) {
    super(props);
    this.state = {
      a: [
        {
          a1: "nnnnn"
        }
      ],
      a1: "aaaa"

      /* countAdult: 0,
      countChild: 0,
      countRoom: 0,
      date: new Date(),
      datefrom: new Date(),
      dateto: new Date(),
      selectedOption: null */
    };
  }

  /*   handleSubmit = (event: any) => {
    console.log(">> event", event);
  };

  handleChange = (selectedOption: any) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  handlefrom = (date: any) => {
    console.log(">> datefrom", date);
    this.setState({ datefrom: date });
  };
  handleto = (date: any) => {
    console.log(">> dateto", date);
    this.setState({ dateto: date });
  }; */

  /*  onSubmit = (e: any) => {
    e.preventDefault();
    // get our form data out of state
    const {} = this.state;
  }; */

  onSubmit = (event: any) => {
    console.log("Success >>:", event);
  };

  render() {
    //   const { selectedOption } = this.state;
    return (
      <div className="content-blog">
        <div className="banner"></div>

        <div className="banner-content">
          <div className="banner-title">
            <span>A Luxury Stay</span>
          </div>
        </div>
        <div className="check-availablity">
          <h2>Check Availablity</h2>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 6 }}
            layout="horizontal"
            onFinish={this.onSubmit}
            //onFinishFailed={this.onFinishFailed}
          >
            <Form.Item label="Input">
              <Input
                name="name"
                value={this.state.a1}
                onChange={event => this.setState({ a1: event.target.value })}
              />
            </Form.Item>
            <Form.Item label="Select">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
                <Select.Option value="demo">Demo1</Select.Option>
                <Select.Option value="demo">Demo2</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="DatePicker">
              <DatePicker />
            </Form.Item>
            <Form.Item label="InputNumber">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Button">
              <Button htmlType="submit">Button</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
export default Banner;
