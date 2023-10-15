import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MainButton from "../../components/MainButton";
import { Col, Row, Image, Typography, Layout, Avatar } from "antd";
import { BsArrowRightShort, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FiArrowDownRight } from "react-icons/fi";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function ContactUs() {
  const carousel = useRef();
  const items = [
    <div className="item" data-value="1">
      1
    </div>,
    <div className="item" data-value="2">
      2
    </div>,
    <div className="item" data-value="3">
      3
    </div>,
    <div className="item" data-value="4">
      4
    </div>,
    <div className="item" data-value="5">
      5
    </div>,
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 2 },
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Row
        className="hero"
        style={{
          height: "100vh",
          background:'white',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          textAlign: "left",
        }}
      >
        <Col xs={24} lg={20} style={{display:'flex',flexDirection:'column',justifyContent:'space-around',height:'100%'}}>
          <div>
          <Row style={{ textAlign: "center" }}>
            <Typography.Title
              className="fontFamily2 textCenter"
              style={{
                fontSize: "56px",
                color: "#222",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "68px",
                marginBottom: 5,
                zIndex: 2,
                marginTop: 0,
              }}
            >
            Please drop us a line
            </Typography.Title>
          </Row>

          <Row>
            <Typography.Text
              className="fontFamily1 textCenter"
              style={{
                fontSize: "22px",
                color: "#424242",
                textAlign: "left",

                zIndex: 2,
                marginTop: 0,
              }}
            >
              We are here to listen to you. Tell us what you need, we will be pleased to assist  you!
            </Typography.Text>
          </Row>
          </div>


          <div>
          <Row style={{ textAlign: "center" }}>
            <Typography.Title
              className="fontFamily2 textCenter"
              style={{
                fontSize: "56px",
                color: "#222",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "68px",
                marginBottom: 10,
                zIndex: 2,
                marginTop: 0,
                textDecoration:'underline'
              }}
            >
           letsconnect@surkush.com
            </Typography.Title>
          </Row>
          <br/>

          <Row>
            <Typography.Text
              className="fontFamily1"
              style={{
                fontSize: "26px",
                color: "#424242",
                textAlign: "left",

                zIndex: 2,
                marginTop: 0,
              }}
            >
             3166 Massachusetts Avenue, <br/>Washington DC
            </Typography.Text>
          </Row>

          <br/>

<Row>
  <Typography.Text
    className="fontFamily1"
    style={{
      fontSize: "26px",
      color: "#424242",
      textAlign: "left",

      zIndex: 2,
      marginTop: 0,
    }}
  >
   Tél : +33 (0) 1 46 27 22 35
  </Typography.Text>
</Row>


<br/>

<br/>
          <br/>

<br/>
          </div>

          
        </Col>



      </Row>

    </Layout>
  );
}

export default ContactUs;
