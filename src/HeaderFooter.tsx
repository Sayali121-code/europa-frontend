import * as React from "react";
import "./Home.scss";
import { Layout, Menu, Breadcrumb } from "antd";
import Button from "antd/es/button";
import { Row, Col } from "antd";

class HeaderFooter extends React.Component {
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
              <Menu.Item>
                <img
                  width="100"
                  src="https://www.theeurope.com/files/images/rwd2013/e/home_logo.png"
                />
              </Menu.Item>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">About</Menu.Item>
              <Menu.Item key="3">Room</Menu.Item>
              <Menu.Item key="4">News</Menu.Item>
              <Menu.Item key="5">Contact</Menu.Item>

              <Button>Make a Reservvation</Button>
            </Menu>
          </Header>

          <Content>
            <div className="content-blog">
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
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default HeaderFooter;
