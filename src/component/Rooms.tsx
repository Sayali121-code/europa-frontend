import * as React from "react";
import "../Home.scss";
import { Layout, Menu } from "antd";
import Button from "antd/es/button";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import Banner from "./Banner";

class Rooms extends React.Component {
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
              defaultSelectedKeys={["3"]}
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
            {/* ********Deluxure suite********* */}
            <div className="cust-facilities">
              <Row>
                <Col span={12} className="facilities-img">
                  <img
                    width="530"
                    height="600"
                    src="https://q-xx.bstatic.com/images/hotel/max1024x768/141/141403394.jpg"
                  />
                </Col>
                <Col className="cust-facilities-title stay" span={12}>
                  <h4>A MEMORABLE HOLLIDAY</h4>
                  <h1>Deluxe Suite</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas. Donec in sodales dui, a blandit
                    nunc. Pellentesque id eros venenatis, sollicitudin neque
                    sodales, vehicula nibh. Nam massa odio, porttitor vitae
                    efficitur non, ultricies volutpat tellus. <br /> <br />
                    <img
                      width="270"
                      src="https://www.khwanbeachresort.com/wp-content/uploads/2018/06/khwan-beach-resort-luxury-villas-icons-09.png"
                    />
                    <br />
                    <Button type="primary">Make a Reservation</Button>
                  </p>
                </Col>
              </Row>

              <Row>
                <Col className="cust-facilities-title stay" span={12}>
                  <h4>A MEMORABLE HOLLIDAY</h4>
                  <h1>
                    Twin Room With <br />
                    Seaview
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas. Donec in sodales dui, a blandit
                    nunc. Pellentesque id eros venenatis, sollicitudin neque
                    sodales, vehicula nibh. Nam massa odio, porttitor vitae
                    efficitur non, ultricies volutpat tellus. <br /> <br />
                    <img
                      width="270"
                      src="https://www.khwanbeachresort.com/wp-content/uploads/2018/06/khwan-beach-resort-luxury-villas-icons-09.png"
                    />
                    <br />
                    <Button type="primary">Make a Reservation</Button>
                  </p>
                </Col>

                <Col span={12} className="facilities-img">
                  <img
                    width="530"
                    height="600"
                    src="https://media-cdn.tripadvisor.com/media/photo-s/0d/22/8d/a8/seaview-twin-room.jpg"
                  />
                </Col>
              </Row>

              <Row>
                <Col span={12} className="facilities-img">
                  <img
                    width="530"
                    height="600"
                    src="https://ae01.alicdn.com/kf/HTB1LnF6rKGSBuNjSspbq6AiipXah.jpg"
                  />
                </Col>
                <Col className="cust-facilities-title stay" span={12}>
                  <h4>A MEMORABLE HOLLIDAY</h4>
                  <h1>Double Room</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas. Donec in sodales dui, a blandit
                    nunc. Pellentesque id eros venenatis, sollicitudin neque
                    sodales, vehicula nibh. Nam massa odio, porttitor vitae
                    efficitur non, ultricies volutpat tellus. <br /> <br />
                    <img
                      width="270"
                      src="https://www.khwanbeachresort.com/wp-content/uploads/2018/06/khwan-beach-resort-luxury-villas-icons-09.png"
                    />
                    <br />
                    <Button type="primary">Make a Reservation</Button>
                  </p>
                </Col>
              </Row>
            </div>

            {/* ****** Book your Stay ******* */}
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
export default Rooms;
