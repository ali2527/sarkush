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
          minHeight:  window.innerWidth < 800 ? "50vh" : "100vh",
          background:'white',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          textAlign: "left",
          padding:"50px 0"
        }}
      >
        <Col xs={20} lg={20} style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
          <div>
          <Row style={{ textAlign: "left" }}>
            <Typography.Title
              className="fontFamily2 "
              style={{
                fontSize:  window.innerWidth < 800 ? "25px" : "56px",
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
              className="fontFamily1"
              style={{
                fontSize: "20px",
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

<br/><br/>
<br/><br/>
          <br/>
       
          <div>
          <Row style={{ textAlign: "left" }}>
            <Typography.Title
              className="fontFamily2"
              style={{
                fontSize:  window.innerWidth < 800 ? "25px" : "56px", 
                color: "#222",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "68px",
                marginBottom: 5,
                zIndex: 2,
                marginTop: 0,
                textDecoration:'underline'
              }}
            >
           letsconnect@surkush.com
            </Typography.Title>
          </Row>


          <Row>
            <Typography.Text
              className="fontFamily1"
              style={{
                fontSize:  window.innerWidth < 800 ? "18px" : "26px", 
                color: "#424242",
                textAlign: "left",

                zIndex: 2,
                marginTop: 0,
              }}
            >
           
                    <br />
                   1007 N ORANGE St. 4th FLOOR SUITE
                    <br />
                    #2536, WILMGTON, DELAWARE 19801,
                    <br/>
                    UNITED STATES
                    
            </Typography.Text>
          </Row>

          <br/>
          

<Row>
  <Typography.Text
    className="fontFamily1"
    style={{
      fontSize: window.innerWidth < 800 ? "18px" : "26px", 
      color: "#424242",
      textAlign: "left",

      zIndex: 2,
      marginTop: 0,
    }}
  >
   Tél : (720) 734-7017
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
