import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MainButton from "../../components/MainButton";
import {
  Col,
  Row,
  Tabs,
  Image,
  Typography,
  Layout,
  Avatar,
  Button,
} from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { FiArrowDownRight } from "react-icons/fi";

function PrivacyPolicy() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "View All",
    },
    {
      key: "2",
      label: "Design",
    },
    {
      key: "3",
      label: "Development",
    },
    {
      key: "4",
      label: "Marketing",
    },
    {
      key: "5",
      label: "Technology",
    },
    {
      key: "6",
      label: "Web 3.0",
    },
    {
      key: "7",
      label: "Startups",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* section 2 */}
      <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          padding: "100px",
          textAlign:'center'
        }}
      >
        <Col xs={24} lg={16}>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography.Title
              className="fontFamily2 "
              style={{
                fontSize: "50px",
                color: "#222",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "68px",
                marginBottom: 5,
                zIndex: 2,
                marginTop: 0,
              }}
            >
              Privacy Policy
            </Typography.Title>
          </Row>
          <br />
          <Typography.Text
            className="fontFamily1 textCenter"
            style={{
              fontSize: "18px",
              color: "#424242",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
           This Privacy Notice describes how Surkush collects, uses, shares, and protects personal information. This Privacy Notice also tells you about your rights and choices with respect to your personal information, and how you can reach us to get answers to your questions.
          </Typography.Text>
        </Col>
      </Row>
      <Row style={{borderTop:'1px solid #dadada'}}/>


      {/* section 5 */}
      <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 0",
          position: "relative",
        }}
      >
        <Col xs={24} lg={20}>
        <Row>
                <Typography.Title
                  className="fontFamily2 "
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
Last updated on: 26th January, 2023                </Typography.Title>
              </Row>
              <br/>


        <Row>
                <Typography.Title
                  className="fontFamily2 "
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                  1. How We Collect Information
                </Typography.Title>
              </Row>

              <Row>
                <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                 We gather information about you in various ways based on how you interact with us and our website. These include collecting information:
                </Typography.Text>
                </Row>
                <ul>
                  <li>
                  <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                 Directly from you when you provide it to us, such as when you volunteer as a designer.
                </Typography.Text>
                  </li>

                  <li>
                  <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                Automatically when you interact with our website through the use of cookies, server logs, and other similar technologies.
                </Typography.Text>
                  </li>

                  <li>
                  <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                From other sources, including, for example, your employer or Alliance members.
                </Typography.Text>
                  </li>
                </ul>
                <br/>

                <Row>
                <Typography.Title
                  className="fontFamily2 "
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                  1. How We Collect Information
                </Typography.Title>
              </Row>

              <Row>
                <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                 We gather information about you in various ways based on how you interact with us and our website. These include collecting information:
                </Typography.Text>
                </Row>
                <ul>
                  <li>
                  <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                 Directly from you when you provide it to us, such as when you volunteer as a designer.
                </Typography.Text>
                  </li>

                  <li>
                  <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                Automatically when you interact with our website through the use of cookies, server logs, and other similar technologies.
                </Typography.Text>
                  </li>

                  <li>
                  <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                From other sources, including, for example, your employer or Alliance members.
                </Typography.Text>
                  </li>
                </ul>
                <br/>

                <Row>
                <Typography.Title
                  className="fontFamily2 "
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                  1. How We Collect Information
                </Typography.Title>
              </Row>

              <Row>
                <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                 We gather information about you in various ways based on how you interact with us and our website. These include collecting information:
                </Typography.Text>
                </Row>
                <ul>
                  <li>
                  <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                 Directly from you when you provide it to us, such as when you volunteer as a designer.
                </Typography.Text>
                  </li>

                  <li>
                  <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                Automatically when you interact with our website through the use of cookies, server logs, and other similar technologies.
                </Typography.Text>
                  </li>

                  <li>
                  <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                From other sources, including, for example, your employer or Alliance members.
                </Typography.Text>
                  </li>
                </ul>
                <br/>

                <Row>
                <Typography.Title
                  className="fontFamily2 "
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                  1. How We Collect Information
                </Typography.Title>
              </Row>

              <Row>
                <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                 We gather information about you in various ways based on how you interact with us and our website. These include collecting information:
                </Typography.Text>
                </Row>
                <ul>
                  <li>
                  <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                 Directly from you when you provide it to us, such as when you volunteer as a designer.
                </Typography.Text>
                  </li>

                  <li>
                  <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                Automatically when you interact with our website through the use of cookies, server logs, and other similar technologies.
                </Typography.Text>
                  </li>

                  <li>
                  <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                From other sources, including, for example, your employer or Alliance members.
                </Typography.Text>
                  </li>
                </ul>
                <br/>

                <Row>
                <Typography.Title
                  className="fontFamily2 "
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                  1. How We Collect Information
                </Typography.Title>
              </Row>

              <Row>
                <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                 We gather information about you in various ways based on how you interact with us and our website. These include collecting information:
                </Typography.Text>
                </Row>
                <ul>
                  <li>
                  <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                 Directly from you when you provide it to us, such as when you volunteer as a designer.
                </Typography.Text>
                  </li>

                  <li>
                  <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                Automatically when you interact with our website through the use of cookies, server logs, and other similar technologies.
                </Typography.Text>
                  </li>

                  <li>
                  <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                From other sources, including, for example, your employer or Alliance members.
                </Typography.Text>
                  </li>
                </ul>
                <br/>

                
          </Col>
        </Row>

     
    </Layout>
  );
}

export default PrivacyPolicy;
