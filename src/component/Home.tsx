import * as React from "react";
import "../Home.scss";
import { Layout, Menu } from "antd";
import Button from "antd/es/button";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import Banner from "./Banner";
//import Ban from "./Ban";

class Home extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      rating: []
    };
  }
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
              defaultSelectedKeys={["1"]}
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
            {/*  <Ban /> */}

            {/* <div className="content-blog">
              <div className="banner"></div>

              <div className="banner-content">
                <div className="banner-title">
                  <span>A Luxury Stay</span>
                </div>
              </div>
              <div className="check-availablity">
                <h2>Check Availablity</h2>
                <Row className="check">
                  <Col span={3}>
                    From <br />
                  </Col>
                  <Col span={3}>To</Col>
                  <Col span={8}>
                    <Row className="travelling-party">
                      <Col span={8}>Adult</Col>
                      <Col span={8}>Children</Col>
                      <Col span={8}>Room</Col>
                    </Row>
                  </Col>
                  <Col className="room" span={3}>
                    Room
                  </Col>
                  <Col className="Go" span={1}>
                    GO
                  </Col>
                </Row>
              </div>
            </div> */}
            {/* ********memorable holiday section********* */}
            <div className="intro-section">
              <div className="container">
                <Row className="check">
                  <Col span={6}>Memorable Holiday</Col>
                </Row>
                <Row className="stay">
                  <Col span={8}>A great stay in a lovely hotel.</Col>
                </Row>

                <Row className="stay-content">
                  <Col span={11}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas. Donec in sodales dui, a blandit
                    nunc. Pellentesque id eros venenatis, sollicitudin neque
                    sodales, vehicula nibh. Nam massa odio, porttitor vitae
                    efficitur non, ultricies volutpat tellus.
                  </Col>
                  <Col span={11}>
                    Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Quis
                    ipsum suspendisse ultrices gravida. Risus commodo viverra.
                    <Button type="primary">Make a Reservation</Button>
                  </Col>
                </Row>
              </div>
            </div>

            {/* ********luxury suite room and infinity pool********* */}
            <div className="facilities">
              <Row>
                <Col className="facilities-left" span={12}>
                  <p>
                    Luxury Suite Room <br /> <span>from $399</span>
                  </p>
                  <Button className="reservation">Make a Reservation</Button>
                </Col>

                <Col className="facilities-right" span={12}>
                  <p>
                    Infinity Pool <br /> <span>for all our Guest</span>
                  </p>
                  <br /> <br />
                  <Button className="reservation">Make a Reservation</Button>
                </Col>
              </Row>
            </div>

            {/* ********Guest Book********* */}
            <div className="guest">
              <p>GuestBook</p>
              <Row>
                <Col span={11} className="guest-left">
                  <span className="guest-title">We loved our stay</span> <br />
                  <img
                    width="17"
                    className="rating-star"
                    src="http://getdrawings.com/free-icon/star-rating-icon-56.png"
                  />
                  <img
                    width="20"
                    className="rating-star"
                    src="https://www.shareicon.net/data/2015/11/21/177266_star_256x256.png"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiselit. Vivamus
                    libero mauris, bibendum eget sapien ac, ultrices rhoncus
                    ipsum. Donec nec sapien in urna fermentum ornare.
                  </p>
                  <br />
                  <div className="customer">
                    <img src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg" />

                    <div className="cust-name">
                      <h3>MARIA SMITH</h3>
                      Madrid
                    </div>
                  </div>
                </Col>
                <Col span={11} className="guest-right ">
                  <span className="guest-title">I will come back again</span>{" "}
                  <br />
                  <img
                    width="17"
                    className="rating-star"
                    src="http://getdrawings.com/free-icon/star-rating-icon-56.png"
                  />
                  <img
                    width="20"
                    className="rating-star"
                    src="https://www.shareicon.net/data/2015/11/21/177266_star_256x256.png"
                  />
                  <br />
                  <p>
                    Ipsum dolor sit amet, consectetur adipiselit. Vivamus libero
                    mauris, bibendum eget sapien ac, ultrices rhoncus ipsum.
                    Donec nec sapien in urna fermentum ornare.
                  </p>
                  <br />
                  <div className="customer">
                    <img src="https://i.imgur.com/74sByqd.jpg" />
                    <div className="cust-name">
                      <h3>JOHN DOE</h3>
                      Madrid
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div>
              <img
                width="1284"
                height="358"
                src="https://images.squarespace-cdn.com/content/v1/57a0ae1ad1758ee73db75571/1521737317902-KWA63GGC8X8BNJCBTG5N/ke17ZwdGBToddI8pDm48kAqM2YK4vZvYqE0QDyz1ke17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0lCvyAd1-5UQFnp8aARaJsWeORhTN-CX1XXfLuv0JSskT5BTtmPWXwM0GooS9wka1w/Spa+banner.jpg"
              />
            </div>
            {/* ********Customer Loves our facilities********* */}
            <div className="cust-facilities">
              <Row>
                <Col className="cust-facilities-title" span={12}>
                  <h1>“Customers love our facilities”</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus libero mauris, bibendum eget sapien ac, ultrices
                    rhoncus ipsum. Donec nec sapien in urna fermentum ornare.
                    Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula
                    fringilla ut vitae orci. Suspendisse maximus malesuada.
                    <br />
                    <Button type="primary">Make a Reservation</Button>
                  </p>
                </Col>
                <Col span={12} className="facilities-img">
                  <img
                    width="300"
                    height="200"
                    src="https://cdn3.mycity4kids.com/images/article-images/web/headersV2/img-20190917-5d80a0de1948a.jpg"
                  />
                  <img
                    width="300"
                    height="200"
                    src=" https://cdn.pixabay.com/photo/2017/06/19/20/29/spa-2420797_960_720.jpg"
                  />
                </Col>
              </Row>
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
export default Home;
