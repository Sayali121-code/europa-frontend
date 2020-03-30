import * as React from "react";
import "../Home.scss";
import { Layout, Menu } from "antd";
import Button from "antd/es/button";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import Banner from "./Banner";

class Contatcs extends React.Component {
  render() {
    const { Header, Footer, Content } = Layout;

    return (
      <div className="Homepage">
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["4"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item className="menubar">
                <img
                  width="150"
                  src="https://colorlib.com/preview/theme/europa/img/logo.png"
                />
              </Menu.Item>
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/About">About</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/Rooms">Room</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/Contacts">Contact</Link>
              </Menu.Item>

              <Button className="nav-reservation">Make a Reservation</Button>
            </Menu>
          </Header>

          <Content>
            <Banner />
            {/* ********Located ********* */}
            <div className="cust-facilities">
              <Row>
                <Col className="cust-facilities-title stay" span={16}>
                  <h4>A MEMORABLE HOLLIDAY</h4>
                  <h1>
                    Located in the center of <br />
                    Los Angeles
                  </h1>
                  <form className="contact-form">
                    <input type="text" placeholder="Your name" />
                    <input type="text" placeholder="Your email" /> <br />
                    <input
                      className="subject"
                      type="text"
                      placeholder="Subject"
                    />
                    <br />
                    <textarea
                      className="message"
                      placeholder="Message"
                    ></textarea>
                  </form>
                  <p>
                    <Button type="primary">Send Message</Button>
                  </p>
                </Col>

                <Col span={8} className="facilities">
                  <div className="container getdirection">
                    <Button className="reservation">Get Direction</Button>

                    <div className="getdirect-address">
                      <img src="https://colorlib.com/preview/theme/europa/img/contact-logo.png" />
                      <br /> <br />
                      <span>
                        1525 Madison Lane, <br /> Los Angeles, CA <br />
                        <br />
                        +1 (603)535-4592
                        <br />
                        <br /> hello@youremail.com
                        <br />
                        <br />
                        Everyday: 06:00 -22:00
                      </span>
                      <div className="social-icons">
                        <img src="https://www.emyspot.com/medias/images/social-media.png" />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26440.72384129847!2d-118.24906619231132!3d34.06719475913053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c659f50c318d%3A0xe2ffb80a9d3820ae!2sChinatown%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1570213740685!5m2!1sen!2sbd"
                height="500"
                width="1284"
                style={{ border: "0" }}
              ></iframe>
            </div>
          </Content>

          <Footer style={{ textAlign: "center" }}>
            <div className="footer">
              <Row>
                <Col span={8}>
                  <img src="https://colorlib.com/preview/theme/europa/img/logo.png" />
                  <br />
                  <p>
                    Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </Col>
                <Col className="newsletter" span={8}>
                  <h5>Newsletter</h5>

                  <form>
                    <input type="textbox" placeholder="Your Email Here" />
                    <Button className="">Subscribe</Button>
                  </form>
                </Col>
                <Col className="newsletter" span={8}>
                  <h5>Contact Info</h5>
                  <img
                    width="25"
                    src="https://cdn4.iconfinder.com/data/icons/web-stuff/100/office_orange-22-512.png"
                  />
                  <span>1525 Boring Lane, </span>
                  <br />
                  <span className="address">Los Angeles, CA</span> <br /> <br />
                  <img
                    width="25"
                    src="https://iconsplace.com/wp-content/uploads/_icons/ffd700/256/png/phone-icon-6-256.png"
                  />
                  <span>+1 (603)535-4592</span>
                </Col>
              </Row>
            </div>
            <span className="copyrights">
              Copyright ©2020 All rights reserved | This template is made with
              by Colorlib
            </span>
          </Footer>
        </Layout>
      </div>
    );
  }
}
export default Contatcs;
