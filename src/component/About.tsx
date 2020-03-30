import * as React from "react";
import "../Home.scss";
import { Layout, Menu } from "antd";
import Button from "antd/es/button";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import Banner from "./Banner";

class About extends React.Component {
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
              defaultSelectedKeys={["2"]}
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
            {/* ********A great stay in a loavely hotel********* */}
            <div className="cust-facilities">
              <Row>
                <Col className="cust-facilities-title" span={12}>
                  <h4>A MEMORABLE HOLLIDAY</h4>
                  <h1>A great stay in a lovely hotel.</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas. Donec in sodales dui, a blandit
                    nunc. Pellentesque id eros venenatis, sollicitudin neque
                    sodales, vehicula nibh. Nam massa odio, porttitor vitae
                    efficitur non, ultricies volutpat tellus.
                    <br /> <br />
                    <p>
                      Dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra.
                    </p>
                    <Button type="primary">Make a Reservation</Button>
                  </p>
                </Col>
                <Col span={12} className="facilities-img">
                  <Row>
                    <Col span={12}>
                      <img
                        width="300"
                        src="https://image.freepik.com/free-photo/spa-decoration-with-lit-candles-towels_23-2148268445.jpg"
                      />

                      <img
                        width="250"
                        src=" https://media-cdn.tripadvisor.com/media/photo-s/10/4a/27/b3/le-blanc-spa-resort.jpg"
                      />
                    </Col>
                    <Col span={12}>
                      <img
                        width="250"
                        src=" https://i.pinimg.com/originals/60/61/63/606163cb2b0231b41ba916b68b8df5fe.jpg"
                      />
                      <img
                        width="250"
                        src=" https://image.shutterstock.com/image-photo/woman-swimming-pool-tropical-flowers-260nw-1490661980.jpg"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

            {/* --------- */}
            <div>
              <img
                width="1284"
                height="358"
                src="https://thumbs.dreamstime.com/b/banner-long-format-nepal-buddha-copper-singing-bowl-spa-salon-young-beautiful-women-doing-massage-therapy-singing-bowls-152315181.jpg"
              />
            </div>
            {/* ********Awards********* */}

            <div className="container">
              <div className="awards">
                <p className="title">Our Awards</p>
                <Row>
                  <Col span={8}>
                    <img src="https://colorlib.com/preview/theme/europa/img/about/award-img.png" />
                    <br />
                    <h3>2011</h3>
                    <span>Best Hotel in Europe</span> <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiselit.
                      Vivamus libero mauris, bibendum eget sapien ac, ultrices
                      rhoncus ipsum. Donec nec sapien in urna.
                    </p>
                  </Col>
                  <Col span={8}>
                    <img src="https://colorlib.com/preview/theme/europa/img/about/award-img.png" />
                    <br />
                    <h3>2012</h3>
                    <span>Best Services</span> <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiselit.
                      Vivamus libero mauris, bibendum eget sapien ac, ultrices
                      rhoncus ipsum. Donec nec sapien in urna.
                    </p>
                  </Col>
                  <Col span={8}>
                    <img src="https://colorlib.com/preview/theme/europa/img/about/award-img.png" />
                    <br />
                    <h3>2014</h3>
                    <span>Best Hotel Spa</span> <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiselit.
                      Vivamus libero mauris, bibendum eget sapien ac, ultrices
                      rhoncus ipsum. Donec nec sapien in urna.
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col span={8}>
                    <img src="https://colorlib.com/preview/theme/europa/img/about/award-img.png" />
                    <br />
                    <h3>2016</h3>
                    <span>Best Luxury Hotel</span> <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiselit.
                      Vivamus libero mauris, bibendum eget sapien ac, ultrices
                      rhoncus ipsum. Donec nec sapien in urna.
                    </p>
                  </Col>
                  <Col span={8}>
                    <img src="https://colorlib.com/preview/theme/europa/img/about/award-img.png" />
                    <br />
                    <h3>2017</h3>
                    <span>2nd Place @ Best Hotel</span> <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiselit.
                      Vivamus libero mauris, bibendum eget sapien ac, ultrices
                      rhoncus ipsum. Donec nec sapien in urna.
                    </p>
                  </Col>
                  <Col span={8}>
                    <img src="https://colorlib.com/preview/theme/europa/img/about/award-img.png" />
                    <br />
                    <h3>2018</h3>
                    <span>Best Hotel Spa</span> <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiselit.
                      Vivamus libero mauris, bibendum eget sapien ac, ultrices
                      rhoncus ipsum. Donec nec sapien in urna.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>

            {/* ****** Book your Stay ******* */}
            <div className="container book-stay">
              <span className="stay-title">Book your stay with us now!</span>
              <Button className="black-reservation">
                Make your Reservation
              </Button>
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
export default About;
