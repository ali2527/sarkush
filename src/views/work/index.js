import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainButton from "../../components/MainButton";
import { Col, Row, Image, Typography, Layout, Avatar } from "antd";
import { BsArrowRightShort, BsArrowLeft ,BsArrowRight } from "react-icons/bs";
import { FiArrowDownRight } from "react-icons/fi";

function Home() {
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
          height: "50vh",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          textAlign:'center'
        }}
      >
        <Col >
          <Row justify={"center"}>
            <Typography.Title
              className="fontFamily2 textCenter"
              style={{
                fontSize: "75px",
                color: "#222",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "68px",
                justifyContent:'center',
                marginBottom: 5,
                zIndex: 2,
                marginTop: 0,
              }}
            >
             Our Work
            </Typography.Title>
          </Row>
        
          <br />
          
          <Row>
            <Typography.Text
              className="fontFamily1"
              style={{
                fontSize: "22px",
                color: "#424242",
                textAlign: "left",
                zIndex: 2,
              }}
            >
              Check how we take digital experiences to the next level!
            </Typography.Text>
          </Row>
          <br />

        </Col>

        <div style={{ position: "absolute", left: 0, top: 0, zIndex: 0 }}>
          
        <svg xmlns="http://www.w3.org/2000/svg" width="422" height="422" viewBox="0 0 422 422" fill="none">
<path opacity="0.2" d="M366 1.45192e-05C366 202.144 202.113 366 0 366" stroke="#C9EBF9" stroke-width="110.17" stroke-miterlimit="10"/>
</svg>
        </div>
        <div style={{ position: "absolute", left: 0, top: 0, zIndex: 0 }}>
          
        <svg xmlns="http://www.w3.org/2000/svg" width="313" height="313" viewBox="0 0 313 313" fill="none">
  <path opacity="0.2" d="M257 -1.12338e-05C257 141.937 141.927 257 0 257" stroke="#19A882" stroke-width="110.17" stroke-miterlimit="10"/>
</svg>
          </div>

          <div style={{ position: "absolute", right: 0, bottom: 0, zIndex: 0 }}>
          
          <svg xmlns="http://www.w3.org/2000/svg" width="421" height="502" viewBox="0 0 421 502" fill="none">
<path opacity="0.2" d="M421 56C219.422 56 56 220.093 56 422.509L56 502" stroke="#EAF4FF" stroke-width="110.17" stroke-miterlimit="10"/>
</svg>
        </div>
        <div style={{ position: "absolute", right: 0, bottom: 0, zIndex: 0 }}>
          
        <svg xmlns="http://www.w3.org/2000/svg" width="312" height="393" viewBox="0 0 312 393" fill="none">
  <path opacity="0.2" d="M312 56C170.623 56 56 171.385 56 313.725L56 393" stroke="#BDC0E7" stroke-width="110.17" stroke-miterlimit="10"/>
</svg>
          </div>
      </Row>



      {/* section 7 */}
      <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "50px",
        }}
      >
        <Col xs={24} lg={20} style={{ textAlign: "left" }}>
          <Row gutter={50}>
            <Col xs={24} lg={12}>
              <Row>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  style={{
                    border: "1px solid #f2f2f2",
                    borderRadius: "50px",
                    height: "400px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src="/images/blog1.png"
                  width={"100%"}
                />
              </Row>
              <Row style={{ padding: "20px 10px 0 10px" }}>
                <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "18px",
                    color: "#19A882",
                    textAlign: "center",
                  }}
                >
                  Health-tech
                </Typography.Text>
              </Row>
              <Row style={{ padding: "0 10px 0 10px" }}>
                <Typography.Title
                  className="fontFamily2"
                  style={{
                    fontSize: "30px",
                    color: "black",
                    textAlign: "left",
                  }}
                >
                  UI/UX Case study: Unwind - Mindfulness App
                </Typography.Title>
              </Row>
              <Row style={{ padding: "0 10px 0 10px" }}>
                <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "16px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                  #Health &nbsp; #Tech
                </Typography.Text>
              </Row>
            </Col>
            <Col xs={24} lg={12}>
              <Row>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={"100%"}
                  src="/images/blog2.png"
                  style={{
                    border: "1px solid #f2f2f2",
                    borderRadius: "50px",
                    height: "400px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Row>
              <Row style={{ padding: "20px 10px 0 10px" }}>
                <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "18px",
                    color: "#19A882",
                    textAlign: "center",
                  }}
                >
                  Fitness
                </Typography.Text>
              </Row>
              <Row style={{ padding: "0 10px 0 10px" }}>
                <Typography.Title
                  className="fontFamily2 textCenter"
                  style={{
                    fontSize: "30px",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Branding: Fitness brand
                </Typography.Title>
              </Row>
              <Row style={{ padding: "0 10px 0 10px" }}>
                <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "16px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                  #Fitness &nbsp; #Branding &nbsp; #Health
                </Typography.Text>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

{/* section 8 */}
      <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "50px",
        }}
      >
        <Col xs={24} lg={20} style={{ textAlign: "left" }}>
          <Row gutter={50}>
            <Col xs={24} lg={12}>
              <Row>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  style={{
                    border: "1px solid #f2f2f2",
                    borderRadius: "50px",
                    height: "400px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src="/images/blog3.png"
                  width={"100%"}
                />
              </Row>
              <Row style={{ padding: "20px 10px 0 10px" }}>
                <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "18px",
                    color: "#19A882",
                    textAlign: "center",
                  }}
                >
                 Technology
                </Typography.Text>
              </Row>
              <Row style={{ padding: "0 10px 0 10px" }}>
                <Typography.Title
                  className="fontFamily2"
                  style={{
                    fontSize: "30px",
                    color: "black",
                    textAlign: "left",
                  }}
                >
                  UI/UX Case study: Investment Mobile app design
                </Typography.Title>
              </Row>
              <Row style={{ padding: "0 10px 0 10px" }}>
                <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "16px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                  #AI &nbsp; #Wearable &nbsp; #Tech
                </Typography.Text>
              </Row>
            </Col>
            <Col xs={24} lg={12}>
              <Row>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={"100%"}
                  src="/images/blog4.png"
                  style={{
                    border: "1px solid #f2f2f2",
                    borderRadius: "50px",
                    height: "400px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Row>
              <Row style={{ padding: "20px 10px 0 10px" }}>
                <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "18px",
                    color: "#19A882",
                    textAlign: "center",
                  }}
                >
                  User-Experiance
                </Typography.Text>
              </Row>
              <Row style={{ padding: "0 10px 0 10px" }}>
                <Typography.Title
                  className="fontFamily2"
                  style={{
                    fontSize: "30px",
                    color: "black",
               
                  }}
                >
                  UI/UX Case Study: Redesigning Maxim App to Improve User Experience
                </Typography.Title>
              </Row>
              <Row style={{ padding: "0 10px 0 10px" }}>
                <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "16px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                  #News &nbsp; #Update &nbsp; #Off-Grid
                </Typography.Text>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
}

export default Home;
