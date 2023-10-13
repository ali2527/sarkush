import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainButton from "../../components/MainButton";
import { Col, Row, Image, Typography, Layout, Avatar } from "antd";
import { BsArrowRightShort, BsArrowLeft ,BsArrowRight } from "react-icons/bs";
import { FiArrowDownRight } from "react-icons/fi";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function AboutUs() {
  const carousel = useRef() 
  const items = [
    <div className="item" data-value="1">1</div>,
    <div className="item" data-value="2">2</div>,
    <div className="item" data-value="3">3</div>,
    <div className="item" data-value="4">4</div>,
    <div className="item" data-value="5">5</div>,
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
          height: "90vh",
          background: "#EAF4FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          textAlign:'center'
        }}
      >
        <Col xs={24} lg={12}>
          <Row style={{textAlign:'center',justifyContent:'center'}}>
            <Typography.Title
              className="fontFamily2 textCenter"
              style={{
                fontSize: "75px",
                color: "#222",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "68px",
                marginBottom: 5,
                zIndex: 2,
                marginTop: 0,
                
              }}
            >
             Here’s Who We Are
            </Typography.Title>
          </Row>
        
          <br />
          <br />
          <Row>
            <Typography.Text
              className="fontFamily1 textCenter"
              style={{
                fontSize: "22px",
                color: "#424242",
                textAlign: "left",
                zIndex: 2,
              }}
            >
             Our name is basically derived from a terminology in Urdu which means unruly, because we believe every entrepreneur is steadfast and fear-less:  a dare-r and do-er, who puts insights,  experiences, and stories above vanity and we embrace this challenge with out hesitation.
            </Typography.Text>
          </Row>

        </Col>
        
        <div style={{ position: "absolute", right: 0, top: 0, zIndex: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="850" viewBox="0 0 1440 850" fill="none">
<path d="M1440 850L1440 -368L-5.32405e-05 -368C792.314 -362.415 1433.4 179.894 1440 850Z" fill="#1C2854"/>
</svg>
        </div>

        <div style={{ position: "absolute", left: 0, zIndex: 0 }}>
          
        <svg xmlns="http://www.w3.org/2000/svg" width="377" height="408" viewBox="0 0 377 408" fill="none">
<path d="M141.027 0H-35L-34.7843 408H377V146.523C374.534 146.596 372.06 146.64 369.576 146.64C268.141 146.643 180.753 86.5385 141.027 0Z" fill="#C9EBF9"/>
</svg>

        </div>

        <div style={{ position: "absolute", left: 150,top:100, zIndex: 0 }}>
          
        <svg xmlns="http://www.w3.org/2000/svg" width="501" height="252" viewBox="0 0 501 252" fill="none">
  <path d="M501 0H0C0 37.5061 8.14965 73.0939 22.745 105.085H257.899V252C392.822 248.062 501 136.75 501 0Z" fill="#C9EBF9"/>
</svg>
  
          </div>
      </Row>

      {/* section 2 */}
      <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          padding: "100px 0",
        }}
      >
        <Col xs={24} lg={12} style={{ textAlign: "center" }}>
        <Typography.Title
            className="fontFamily2 textCenter"
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              color: "#222",
              textAlign: "center",
            }}
          >
            Our Vision
          </Typography.Title>
          <br />
          <Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "20px", color: "#424242", textAlign: "center" }}
          >
            Our vision is to unleash the full potential of entrepreneurs and equip them with the tools and resources they need to thrive and grow. We strive to provide a cutting-edge social platform that is user-friendly, accessible, and constantly evolving to meet the needs of entrepreneurs.
          </Typography.Text>
        </Col>
      </Row>

      {/* section 3 */}
      <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px 0 100px",
        }}
      >
        <Col xs={24} lg={12} style={{ textAlign: "center" }}>
        <Typography.Title
            className="fontFamily2 textCenter"
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              color: "#222",
              textAlign: "center",
            }}
          >
Our Core Values          </Typography.Title>
          <br />
          <Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "20px", color: "#424242", textAlign: "center" }}
          >
            We have been in the market for 5 years - with a small team that serves as a powerhouse for every business,thrives on pushing boundaries and thinks outside the box.
          </Typography.Text>
        </Col>
      </Row>


          {/* section 3 */}
          <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px 0 100px",
        }}
      >
        
      </Row>



      {/* section 6 */}
      <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "150px",
        }}
      >
        <Col xs={24} lg={20} style={{ textAlign: "left" }}>
        <div style={{padding:'20px'}}>
         <Row  style={{
                    borderRadius: "32px",
                    height: "500px",
                    width: "100%",
                    objectFit: "cover",
                    padding:"40px"
                  }}>
                    <Col>
               <Typography.Text
              className="fontFamily2 "
              style={{
                fontSize: "18px",
                color: "#424242",
                textAlign: "left",
                color:'#424242'

              }}
            >
            Surkush’s team did a fantastic job on my branding! He took what was a rather vague description of my new agency and helped me develop a logo, name, color scheme and visual language and helped really bring out the best aspects of my company as a brand. He's got great communication skills, goes over and above to deliver and is very receptive to feedback. I completely recommend working with him!"

            </Typography.Text>
            </Col>
              </Row>
            
            
        </div>
        </Col>
      </Row>

 


    </Layout>
  );
}

export default AboutUs;
