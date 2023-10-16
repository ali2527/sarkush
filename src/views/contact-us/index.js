import React, { useRef,useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MainButton from "../../components/MainButton";
import { Col, Row, Image, Typography, Layout, Avatar } from "antd";
import { BsArrowRightShort, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FiArrowDownRight } from "react-icons/fi";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import AOS from 'aos';
import 'aos/dist/aos.css'


function ContactUs() {

  useEffect(() => {
    AOS.init({disable: 'mobile',mirror:true});
    AOS.refresh();
  }, []);
  
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
          <div data-aos="zoom-in-right" data-aos-easing="ease-in-sine">
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
            </div>
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
          <div data-aos="zoom-in-right" data-aos-easing="ease-in-sine" data-aos-delay="300" >
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
            </div>
          </Row>


          <div data-aos="zoom-in-right" data-aos-easing="ease-in-sine" data-aos-delay="500" >
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
</div>


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
