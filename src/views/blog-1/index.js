import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MainButton from "../../components/MainButton";
import { Col, Row, Image, Typography, Layout, Button } from "antd";
import { BsArrowRightShort, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FiArrowDownRight } from "react-icons/fi";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useNavigate } from "react-router-dom";

function Blog1() {
  const navigate = useNavigate()
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Row
        className="hero"
        style={{
        paddingTop:"30px",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          textAlign: "center",
        }}
      >
         <Image
                preview={false}
                alt={"Failed to load image"}
                width={"100%"}
                
                style={{ objectFit: "cover" }}
                src="/images/blog1.png"
              />

      </Row>

      {/* section 2 */}
      <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "100px",
        }}
      >
        <Col xs={24} lg={20} style={{ textAlign: "left" }}>
        <Typography.Text
            className="fontFamily1"
            style={{ fontSize: "28px", color: "#424242", textAlign: "left" }}
          >
            Unwind
          </Typography.Text>
          <Typography.Title
            className="fontFamily2"
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              color: "#222",
              textAlign: "left",
              margin:0
            }}
          >
           Crafting Calm: A Journey Through User-Centered Mindfulness in Mental Health App Design
          </Typography.Title>
        </Col>
      </Row>

         {/* section 2 */}
         <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "100px",
        }}
      >
        <Col xs={24} lg={20} style={{ textAlign: "left" }}>
        <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        gutter={50}
      >
        <Col xs={24} lg={14} style={{ textAlign: "left" }}>
          <Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "20px", color: "#424242", textAlign: "center" }}
          >
           Team Surkush was presented with a compelling challenge by our client, who recognized the growing need for mental wellness and mindfulness solutions in a world increasingly burdened by stress and anxiety.
          </Typography.Text>
          <br/>
          <Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "20px", color: "#424242", textAlign: "center" }}
          >
           It is a revolutionary mindfulness app that seeks to simplify the complex landscape of mental well-being. In a world where the pace of life can often become overwhelming, Unwind aims to serve as a tranquil oasis. This app is designed with a singular purpose - to guide users towards a place of inner peace and mental clarity, by making mindfulness and mental health support more accessible and intuitive.
          </Typography.Text>
        </Col>
        <Col xs={24} lg={9} style={{ textAlign: "left" }}>
     
          <Typography.Title
            className="fontFamily2"
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#222",
              textAlign: "left",
              margin:0
            }}
          >
          INDUSTRY
          </Typography.Title>
          <br />
          <Row>
            <Col span={12}><Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "16px", color: "#424242", textAlign: "center" }}
          >
           Healthcare
          </Typography.Text> </Col>
            <Col span={12}><Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "16px", color: "#424242", textAlign: "center" }}
          >
         Technology
          </Typography.Text> </Col>
          </Row>
          
         
          <Typography.Title
            className="fontFamily2"
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#222",
              textAlign: "left",
              marginTop:50
            }}
          >
          Services Provided
          </Typography.Title>

          <Row style={{padding:"10px 0"}}>
            <Col span={12}><Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "16px", color: "#424242", textAlign: "center" }}
          >
           Brand Design
          </Typography.Text> </Col>
            <Col span={12}><Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "16px", color: "#424242", textAlign: "center" }}
          >
         Brand Messaging
          </Typography.Text> </Col>
          </Row>

          <Row style={{padding:"10px 0"}}>
            <Col span={12}><Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "16px", color: "#424242", textAlign: "center" }}
          >
          Information Architecture
          </Typography.Text> </Col>
            <Col span={12}><Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "16px", color: "#424242", textAlign: "center" }}
          >
         UI/UX Design
          </Typography.Text> </Col>
          </Row>
          <Row style={{padding:"10px 0"}}>
            <Col span={12}><Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "16px", color: "#424242", textAlign: "center" }}
          >
          Digital Design
          </Typography.Text> </Col>
            <Col span={12}><Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "16px", color: "#424242", textAlign: "center" }}
          >
         Copywriting
          </Typography.Text> </Col>
          </Row>
          
        </Col>
      </Row>
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
          padding: "50px 0 ",
        }}
      >
        <Col xs={24} lg={20} style={{ textAlign: "center" }}>
        <Image
                preview={false}
                alt={"Failed to load image"}
                width={"100%"}
                
                style={{ objectFit: "cover" }}
                src="/images/blog1_1.png"
              />
        </Col>
      </Row>

      {/* section 6 */}
      <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom:100
        }}
      >
        <Col xs={24} lg={12} style={{ textAlign: "center" }}>
        <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "24px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                  The client identified several key issues that individuals faced in their quest for mental well-being:
                </Typography.Text>
        </Col>
      </Row>


      <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "0px",
          paddingBottom: "150px",
        }}
      >
        <Col xs={24} lg={18} style={{ textAlign: "center" }}>
          <Row justify="space-between">
            <Col
              xs={24}
              lg={10}
              style={{
                textAlign: "left",
                flexDirection: "column",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                borderTop: "4px solid #dadada",
                padding: "50px 0",
              }}
            >
              <Row>
              <svg xmlns="http://www.w3.org/2000/svg"  height="100" viewBox="0 0 64 64" fill="none">
<path d="M19.2714 44.43C26.1653 51.3239 37.3425 51.3239 44.2364 44.43C51.1303 37.5361 51.1303 26.3589 44.2364 19.4649C37.3425 12.571 26.1653 12.571 19.2714 19.4649C12.3775 26.3589 12.3775 37.5361 19.2714 44.43Z" fill="#C9EBF9"/>
<path d="M32 5.21346e-06C27.7977 5.02977e-06 23.6366 0.82771 19.7541 2.43586C15.8717 4.04401 12.3441 6.40111 9.37258 9.37259C6.40111 12.3441 4.04401 15.8717 2.43586 19.7541C0.827706 23.6366 1.39876e-06 27.7977 1.39876e-06 32C1.39876e-06 36.2023 0.827706 40.3635 2.43586 44.2459C4.04401 48.1283 6.40111 51.6559 9.37258 54.6274C12.3441 57.5989 15.8717 59.956 19.7541 61.5641C23.6366 63.1723 27.7977 64 32 64L32 49.6025C29.6884 49.6025 27.3995 49.1472 25.2638 48.2626C23.1282 47.3779 21.1877 46.0814 19.5532 44.4468C17.9186 42.8123 16.6221 40.8718 15.7374 38.7362C14.8528 36.6005 14.3975 34.3116 14.3975 32C14.3975 29.6884 14.8528 27.3995 15.7375 25.2638C16.6221 23.1282 17.9186 21.1877 19.5532 19.5532C21.1877 17.9186 23.1282 16.6221 25.2638 15.7375C27.3995 14.8528 29.6884 14.3975 32 14.3975L32 5.21346e-06Z" fill="#FD7D7D"/>
</svg>
              </Row>
              <br />

              <Row>
                <Typography.Title
                  className="fontFamily2"
                  style={{
                    fontSize: "28px",
                    color: "#424242",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  Stress and Overwhelm
                </Typography.Title>
              </Row>
              <br />
              <Row>
                <Typography.Text
                  className="fontFamily1"
                  style={{
                    fontSize: "20px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                 Modern life's demands often left individuals stressed, anxious, and overwhelmed, with limited access to effective tools for managing these feelings.
                </Typography.Text>
              </Row>
            </Col>

            <Col
              xs={24}
              lg={10}
              style={{
                textAlign: "left",
                flexDirection: "column",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                borderTop: "4px solid #dadada",
                paddingTop: "50px",
              }}
            >
              <Row>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 64 64" fill="none">
<path d="M32.002 0C32.002 17.673 17.6762 32 0.00409317 32C0.00409317 14.3267 14.3302 0 32.002 0Z" fill="#343A8E"/>
<path d="M31.998 64C31.998 46.327 17.6723 32 0.00018692 32C0.00018692 49.6733 14.3263 64 31.998 64Z" fill="#19A882"/>
<path d="M32.002 0C32.002 17.673 46.3277 32 63.9998 32C63.9998 14.3267 49.6737 0 32.002 0Z" fill="#FD7D7D"/>
<path d="M31.998 64C31.998 46.327 46.3238 32 63.9959 32C63.9959 49.6733 49.6698 64 31.998 64Z" fill="#C9EBF9"/>
</svg>
              </Row>
              <br />

              <Row>
                <Typography.Title
                  className="fontFamily2"
                  style={{
                    fontSize: "28px",
                    color: "#424242",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  Lack of Guidance
                </Typography.Title>
              </Row>
              <br />
              <Row>
                <Typography.Text
                  className="fontFamily1"
                  style={{
                    fontSize: "20px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                 There was a noticeable gap in user-friendly, comprehensive, and personalized mindfulness applications that offered guidance and support.
                </Typography.Text>
              </Row>
   
            </Col>
          </Row>
          <br/>

          <Row justify="space-between">
            <Col
              xs={24}
              lg={10}
              style={{
                textAlign: "left",
                flexDirection: "column",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                borderTop: "4px solid #dadada",
                paddingTop: "50px",
              }}
            >
              <Row>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={100}
                  src="/images/feature3.png"
                />
              </Row>
              <br />

              <Row>
                <Typography.Title
                  className="fontFamily2"
                  style={{
                    fontSize: "28px",
                    color: "#424242",
                    fontWeight: 700,
                    textAlign: "left",
                  }}
                >
                  Difficulty Sustaining <br/> Mindfulness Practices
                </Typography.Title>
              </Row>
              <br />
              <Row>
                <Typography.Text
                  className="fontFamily1"
                  style={{
                    fontSize: "20px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                 Users often struggled to maintain a consistent mindfulness routine due to a lack of engaging and relatable content.
                </Typography.Text>
              </Row>

            </Col>

            <Col
              xs={24}
              lg={10}
              style={{
                textAlign: "left",
                flexDirection: "column",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                borderTop: "4px solid #dadada",
                paddingTop: "50px",
              }}
            >
              <Row>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 57 57" fill="none">
<path d="M0.00081893 27.666C0.000818251 42.9434 12.5992 55.3282 28.1401 55.3282C43.6809 55.3282 56.2793 42.9434 56.2793 27.666C56.2793 12.3887 43.6809 0.00390571 28.1401 0.00390504C12.5992 0.00390437 0.000819609 12.3887 0.00081893 27.666Z" fill="#C9EBF9"/>
<path d="M28.5 -0.000338283C24.7573 -0.000338444 21.0513 0.724336 17.5935 2.13231C14.1357 3.54028 10.9939 5.60399 8.34746 8.20558C5.70099 10.8072 3.60169 13.8957 2.16943 17.2949C0.737175 20.694 1.24577e-06 24.3372 1.24577e-06 28.0164C1.24577e-06 31.6956 0.737175 35.3388 2.16943 38.738C3.60169 42.1371 5.70099 45.2257 8.34746 47.8273C10.9939 50.4289 14.1357 52.4926 17.5935 53.9006C21.0513 55.3085 24.7573 56.0332 28.5 56.0332L28.5 43.4278C26.4412 43.4278 24.4026 43.0292 22.5006 42.2547C20.5986 41.4802 18.8703 40.345 17.4146 38.9139C15.9588 37.4828 14.804 35.7839 14.0162 33.9141C13.2283 32.0443 12.8228 30.0403 12.8228 28.0164C12.8228 25.9926 13.2283 23.9885 14.0162 22.1188C14.804 20.249 15.9588 18.55 17.4146 17.1189C18.8703 15.6879 20.5986 14.5527 22.5006 13.7782C24.4026 13.0037 26.4412 12.6051 28.5 12.6051L28.5 -0.000338283Z" fill="#BDC0E7"/>
</svg>
              </Row>
              <br />

              <Row>
                <Typography.Title
                  className="fontFamily2"
                  style={{
                    fontSize: "28px",
                    color: "#424242",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                 Isolation
                </Typography.Title>
              </Row>
              <br />
              <Row>
                <Typography.Text
                  className="fontFamily1"
                  style={{
                    fontSize: "20px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                  Many individuals felt isolated on their mental wellness journey, lacking a sense of community and support.
                </Typography.Text>
              </Row>
          
            </Col>
          </Row>
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
          padding: "50px 0 0",
        }}
      >
        <Col xs={24} lg={20} style={{ textAlign: "center" }}>
          <Typography.Title
            className="fontFamily2 textCenter"
            style={{
              fontSize: "50px",

              color: "#222",
              textAlign: "center",
              margin: 0,
            }}
          >
            User-Centered Design
          </Typography.Title>
          <br />
          <br />
          <br />
          <Col xs={24} lg={24} style={{ textAlign: "center" }}>
            <Row justify="space-between">
              <Col
                xs={24}
                lg={6}
                style={{
                  textAlign: "center",
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                  <Row>
                  <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
  <path d="M14.7556 34.0165C20.0337 39.2946 28.5913 39.2947 33.8694 34.0165C39.1476 28.7384 39.1476 20.1808 33.8694 14.9026C28.5913 9.62449 20.0337 9.62449 14.7556 14.9026C9.47742 20.1808 9.47742 28.7384 14.7556 34.0165Z" fill="#C9EBF9"/>
  <path d="M24.5 1.07093e-06C21.2826 9.30293e-07 18.0967 0.633714 15.1243 1.86495C12.1518 3.09619 9.45092 4.90085 7.17589 7.17588C4.90085 9.45092 3.09619 12.1518 1.86495 15.1243C0.633712 18.0967 1.07093e-06 21.2826 1.07093e-06 24.5C1.07093e-06 27.7174 0.633712 30.9033 1.86495 33.8757C3.09619 36.8482 4.90085 39.5491 7.17589 41.8241C9.45092 44.0992 12.1518 45.9038 15.1243 47.135C18.0967 48.3663 21.2826 49 24.5 49L24.5 37.9769C22.7302 37.9769 20.9777 37.6283 19.3426 36.951C17.7075 36.2737 16.2219 35.281 14.9704 34.0296C13.719 32.7782 12.7263 31.2925 12.049 29.6574C11.3717 28.0223 11.0231 26.2698 11.0231 24.5C11.0231 22.7302 11.3717 20.9777 12.049 19.3426C12.7263 17.7075 13.719 16.2218 14.9704 14.9704C16.2219 13.719 17.7075 12.7263 19.3426 12.049C20.9777 11.3717 22.7302 11.0231 24.5 11.0231L24.5 1.07093e-06Z" fill="#BDC0E7"/>
</svg>
                </Row>
                <br/>
                <Row>
                  <Typography.Title
                    className="fontFamily2 textCenter"
                    style={{
                      fontSize: "32px",
                      color: "#222",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    Empathize{" "}
                  </Typography.Title>
                </Row>
                <br />
                <Row>
                <div
                    style={{ position: "absolute", left: "50%", bottom: "28%",zIndex:2 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="282"
                      height="8"
                      viewBox="0 0 282 8"
                      fill="none"
                    >
                      <path
                        d="M281.354 4.35355C281.549 4.15829 281.549 3.84171 281.354 3.64645L278.172 0.464466C277.976 0.269204 277.66 0.269204 277.464 0.464466C277.269 0.659728 277.269 0.976311 277.464 1.17157L280.293 4L277.464 6.82843C277.269 7.02369 277.269 7.34027 277.464 7.53553C277.66 7.7308 277.976 7.7308 278.172 7.53553L281.354 4.35355ZM0 4.5H281V3.5H0V4.5Z"
                        fill="url(#paint0_linear_91_1381)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_91_1381"
                          x1="308"
                          y1="4.00059"
                          x2="-67"
                          y2="14.0018"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop offset="1" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="188"
                    height="188"
                    viewBox="0 0 188 188"
                    fill="none"
                  >
                    <circle cx="94" cy="94" r="93" fill="white" stroke="#222222" stroke-width="2" stroke-dasharray="5 5"/>
                    <circle
                      cx="94"
                      cy="94"
                      r="10"
                      fill="#1C2854"
                      stroke="#D9D9D9"
                    />
                    <circle cx="94" cy="94" r="3.5" fill="#D9D9D9" />
                  </svg>

                
                </Row>
                
              
              </Col>

              <Col
                xs={24}
                lg={6}
                style={{
                  textAlign: "center",
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                 <Row>
                 <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
  <path d="M34.0165 34.2444C39.2946 28.9663 39.2947 20.4087 34.0165 15.1306C28.7384 9.85242 20.1808 9.85242 14.9026 15.1306C9.62449 20.4087 9.62449 28.9663 14.9026 34.2444C20.1808 39.5226 28.7384 39.5226 34.0165 34.2444Z" fill="#C9EBF9"/>
  <path d="M1.36309e-06 24.5C1.18409e-06 27.7174 0.633714 30.9033 1.86495 33.8757C3.09619 36.8482 4.90085 39.5491 7.17588 41.8241C9.45092 44.0991 12.1518 45.9038 15.1243 47.135C18.0967 48.3663 21.2826 49 24.5 49C27.7174 49 30.9033 48.3663 33.8757 47.135C36.8482 45.9038 39.5491 44.0992 41.8241 41.8241C44.0992 39.5491 45.9038 36.8482 47.1351 33.8757C48.3663 30.9033 49 27.7174 49 24.5L37.9769 24.5C37.9769 26.2698 37.6283 28.0223 36.951 29.6574C36.2737 31.2925 35.281 32.7781 34.0296 34.0296C32.7782 35.281 31.2925 36.2737 29.6574 36.951C28.0223 37.6283 26.2698 37.9769 24.5 37.9769C22.7302 37.9769 20.9777 37.6283 19.3426 36.951C17.7075 36.2737 16.2218 35.281 14.9704 34.0296C13.719 32.7781 12.7263 31.2925 12.049 29.6574C11.3717 28.0223 11.0231 26.2698 11.0231 24.5L1.36309e-06 24.5Z" fill="#FD7D7D"/>
</svg>
                </Row>
                <br/>
                <Row>
                  <Typography.Title
                    className="fontFamily2 textCenter"
                    style={{
                      fontSize: "32px",
                      color: "#222",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    Define{" "}
                  </Typography.Title>
                </Row>
                <br />
                <Row>
                  <div
                    style={{ position: "absolute", left: "50%", bottom: "28%",zIndex:2 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="282"
                      height="8"
                      viewBox="0 0 282 8"
                      fill="none"
                    >
                      <path
                        d="M281.354 4.35355C281.549 4.15829 281.549 3.84171 281.354 3.64645L278.172 0.464466C277.976 0.269204 277.66 0.269204 277.464 0.464466C277.269 0.659728 277.269 0.976311 277.464 1.17157L280.293 4L277.464 6.82843C277.269 7.02369 277.269 7.34027 277.464 7.53553C277.66 7.7308 277.976 7.7308 278.172 7.53553L281.354 4.35355ZM0 4.5H281V3.5H0V4.5Z"
                        fill="url(#paint0_linear_91_1381)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_91_1381"
                          x1="308"
                          y1="4.00059"
                          x2="-67"
                          y2="14.0018"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop offset="1" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="188"
                    height="188"
                    viewBox="0 0 188 188"
                    fill="none"
                  >
                    <circle cx="94" cy="94" r="93" fill="white" stroke="#222222" stroke-width="2" stroke-dasharray="5 5"/>
                    <circle
                      cx="94"
                      cy="94"
                      r="10"
                      fill="#1C2854"
                      stroke="#D9D9D9"
                    />
                    <circle cx="94" cy="94" r="3.5" fill="#D9D9D9" />
                  </svg>
                </Row>
              </Col>

              <Col
                xs={24}
                lg={6}
                style={{
                  textAlign: "center",
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Row>
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
  <path d="M34.0165 14.7556C39.2946 20.0337 39.2947 28.5913 34.0165 33.8694C28.7384 39.1476 20.1808 39.1476 14.9026 33.8694C9.62449 28.5913 9.62449 20.0337 14.9026 14.7556C20.1808 9.47742 28.7384 9.47742 34.0165 14.7556Z" fill="#19A882"/>
  <path d="M1.36309e-06 24.5C1.18409e-06 21.2826 0.633714 18.0967 1.86495 15.1243C3.09619 12.1518 4.90085 9.45092 7.17588 7.17589C9.45092 4.90085 12.1518 3.09619 15.1243 1.86495C18.0967 0.633713 21.2826 1.40146e-06 24.5 1.36309e-06C27.7174 1.32472e-06 30.9033 0.633713 33.8757 1.86495C36.8482 3.09619 39.5491 4.90085 41.8241 7.17589C44.0992 9.45092 45.9038 12.1518 47.1351 15.1243C48.3663 18.0967 49 21.2826 49 24.5L37.9769 24.5C37.9769 22.7302 37.6283 20.9777 36.951 19.3426C36.2737 17.7075 35.281 16.2219 34.0296 14.9704C32.7782 13.719 31.2925 12.7263 29.6574 12.049C28.0223 11.3717 26.2698 11.0231 24.5 11.0231C22.7302 11.0231 20.9777 11.3717 19.3426 12.049C17.7075 12.7263 16.2218 13.719 14.9704 14.9704C13.719 16.2219 12.7263 17.7075 12.049 19.3426C11.3717 20.9777 11.0231 22.7302 11.0231 24.5L1.36309e-06 24.5Z" fill="#BDC0E7"/>
</svg>
                </Row>
                <br/>
                <Row>
                  <Typography.Title
                    className="fontFamily2 textCenter"
                    style={{
                      fontSize: "32px",
                      color: "#222",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    Ideate{" "}
                  </Typography.Title>
                </Row>
                <br />
                <Row>
                  <div
                    style={{ position: "absolute", left: "50%", bottom: "28%",zIndex:2 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="282"
                      height="8"
                      viewBox="0 0 282 8"
                      fill="none"
                    >
                      <path
                        d="M281.354 4.35355C281.549 4.15829 281.549 3.84171 281.354 3.64645L278.172 0.464466C277.976 0.269204 277.66 0.269204 277.464 0.464466C277.269 0.659728 277.269 0.976311 277.464 1.17157L280.293 4L277.464 6.82843C277.269 7.02369 277.269 7.34027 277.464 7.53553C277.66 7.7308 277.976 7.7308 278.172 7.53553L281.354 4.35355ZM0 4.5H281V3.5H0V4.5Z"
                        fill="url(#paint0_linear_91_1381)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_91_1381"
                          x1="308"
                          y1="4.00059"
                          x2="-67"
                          y2="14.0018"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop offset="1" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="188"
                    height="188"
                    viewBox="0 0 188 188"
                    fill="none"
                  >
                    <circle cx="94" cy="94" r="93" fill="white" stroke="#222222" stroke-width="2" stroke-dasharray="5 5"/>
                    <circle
                      cx="94"
                      cy="94"
                      r="10"
                      fill="#1C2854"
                      stroke="#D9D9D9"
                    />
                    <circle cx="94" cy="94" r="3.5" fill="#D9D9D9" />
                  </svg>
                </Row>
              </Col>

              <Col
                xs={24}
                lg={6}
                style={{
                  textAlign: "center",
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                 <Row>
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
  <path d="M34.0165 14.7556C39.2946 20.0337 39.2947 28.5913 34.0165 33.8694C28.7384 39.1476 20.1808 39.1476 14.9026 33.8694C9.62449 28.5913 9.62449 20.0337 14.9026 14.7556C20.1808 9.47742 28.7384 9.47742 34.0165 14.7556Z" fill="#19A882"/>
  <path d="M1.36309e-06 24.5C1.18409e-06 21.2826 0.633714 18.0967 1.86495 15.1243C3.09619 12.1518 4.90085 9.45092 7.17588 7.17589C9.45092 4.90085 12.1518 3.09619 15.1243 1.86495C18.0967 0.633713 21.2826 1.40146e-06 24.5 1.36309e-06C27.7174 1.32472e-06 30.9033 0.633713 33.8757 1.86495C36.8482 3.09619 39.5491 4.90085 41.8241 7.17589C44.0992 9.45092 45.9038 12.1518 47.1351 15.1243C48.3663 18.0967 49 21.2826 49 24.5L37.9769 24.5C37.9769 22.7302 37.6283 20.9777 36.951 19.3426C36.2737 17.7075 35.281 16.2219 34.0296 14.9704C32.7782 13.719 31.2925 12.7263 29.6574 12.049C28.0223 11.3717 26.2698 11.0231 24.5 11.0231C22.7302 11.0231 20.9777 11.3717 19.3426 12.049C17.7075 12.7263 16.2218 13.719 14.9704 14.9704C13.719 16.2219 12.7263 17.7075 12.049 19.3426C11.3717 20.9777 11.0231 22.7302 11.0231 24.5L1.36309e-06 24.5Z" fill="#BDC0E7"/>
</svg>
                </Row>
                <br/>
                <Row>
                  <Typography.Title
                    className="fontFamily2 textCenter"
                    style={{
                      fontSize: "32px",
                      color: "#222",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    Prototype{" "}
                  </Typography.Title>
                </Row>
                <br />
                <Row>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="188"
                    height="188"
                    viewBox="0 0 188 188"
                    fill="none"
                  >
                  <circle cx="94" cy="94" r="93" fill="white" stroke="#222222" stroke-width="2" stroke-dasharray="5 5"/>
                    <circle
                      cx="94"
                      cy="94"
                      r="10"
                      fill="#1C2854"
                      stroke="#D9D9D9"
                    />
                    <circle cx="94" cy="94" r="3.5" fill="#D9D9D9" />
                  </svg>
                 
                </Row>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col
                xs={24}
                lg={6}
                style={{
                  textAlign: "center",
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding:"30px 0 0"
                }}
              >
             
                <Row>
                  <Typography.Text
                    className="fontFamily1 textCenter"
                    style={{
                      fontSize: "18px",
                      color: "#222",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    Next Iteration: Repeat
                  </Typography.Text>
                </Row>         
              </Col>


            </Row>
          </Col>

          <br/>
          <br/>
          <br/>

       
        </Col>
      </Row>

            {/* section 6 */}
            <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          padding:"100px 0",

        }}
      >
        <Col xs={24} lg={14} style={{ textAlign: "center" }}>
        <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                  With a profound understanding of the user landscape, we adopted a user-centered design approach. Every aspect of Unwind's design and functionality was carefully crafted to address the specific challenges and desires expressed by our intended users. Their needs and preferences were the driving force behind our design choices, ensuring a user-centric experience.
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
          padding: "0",
        }}
      >
        <Col xs={24} lg={16} style={{ textAlign: "center" }}>
          <Typography.Title
            className="fontFamily2 textCenter"
            style={{
              fontSize: "50px",

              color: "#222",
              textAlign: "center",
              margin: 0,
            }}
          >
            Our Process
          </Typography.Title>
          <br />

          <Col xs={24} lg={24} style={{ textAlign: "center" }}>
            <Row justify="space-between">
              <Col
                xs={24}
                lg={8}
                style={{
                  textAlign: "center",
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                  <Image
                preview={false}
                alt={"Failed to load image"}
                width={"100%"}
                height={350}
                
                style={{ objectFit: "cover" }}
                src="/images/blog1_2.png"
              />              
              </Col>

              <Col
                xs={24}
                lg={8}
                style={{
                  textAlign: "center",
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                  <Image
                preview={false}
                alt={"Failed to load image"}
                width={200}
                height={200}
                
                style={{ objectFit: "contain" }}
                src="/images/blog1_3.png"
              />              
              </Col>

              <Col
                xs={24}
                lg={8}
                style={{
                  textAlign: "center",
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                  <Image
                preview={false}
                alt={"Failed to load image"}
                width={"100%"}
                height={350}
                
                style={{ objectFit: "cover" }}
                src="/images/blog1_2.png"
              />              
              </Col>


            </Row>
            <Row justify="space-between">
              <Col
                xs={24}
                lg={8}
                style={{
                  textAlign: "center",
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  background:"#ADC9F1",
                  padding:"50px"
                }}
              >
            
          <Typography.Title
            className="fontFamily2 "
            style={{
              fontSize: "32px",
              padding:"5px 0",
              color: "#222",
              textAlign: "left",
              margin: 0,
              lineHeight:"35px"
            }}
          >
            Mental
          </Typography.Title>    
          <Typography.Title
            className="fontFamily2 "
            style={{
              fontSize: "32px",
              padding:"5px 0",
              color: "#222",
              textAlign: "left",
              margin: 0,
              lineHeight:"35px"
            }}
          >
            wellbeing
          </Typography.Title>    
          <Typography.Title
            className="fontFamily2 "
            style={{
              fontSize: "32px",
              padding:"5px 0",
              color: "#222",
              textAlign: "left",
              margin: 0,
              lineHeight:"35px"
            }}
          >
           made
          </Typography.Title>   
          <Typography.Title
            className="fontFamily2 "
            style={{
              fontSize: "32px",
              padding:"5px 0",

              color: "#222",
              textAlign: "left",
              margin: 0,
              lineHeight:"35px"
            }}
          >
            accessible.
          </Typography.Title>   

          <br/>
          <Button style={{background:"#AE73D2", color:"black", border:"none"}} size="large">
            Downlaod
            </Button>    
              </Col>

              

              <Col
                xs={24}
                lg={8}
                style={{
                  textAlign: "center",
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background:"#FFEAFA"
                }}
              >
                  <Image
                preview={false}
                alt={"Failed to load image"}
                width={"100%"}
                height={350}
                
                style={{ objectFit: "contain" }}
                src="/images/blog1_4.png"
              />              
              </Col>
              <Col
                xs={24}
                lg={8}
                style={{
                  textAlign: "center",
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background:"#E9DAF0"
                }}
              >
                  <Image
                preview={false}
                alt={"Failed to load image"}
                width={250}
                height={250}
                
                style={{ objectFit: "contain" }}
                src="/images/blog1_5.png"
              />              
              </Col>


            </Row>

          </Col>

          <br/>
          <br/>
          <br/>

      
        </Col>
      </Row>

                {/* section 6 */}
                <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          padding:"100px 0",

        }}
      >
        <Col xs={24} lg={14} style={{ textAlign: "center" }}>
        <Typography.Title
            className="fontFamily2 textCenter"
            style={{
              fontSize: "50px",

              color: "#222",
              textAlign: "center",
              margin: 0,
            }}
          >
            Our Solution
          </Typography.Title><br/>
        <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                  In response to our client's pressing challenge, we decided to revolutionize the landscape of mental wellness and mindfulness through Unwind, a Mindfulness App designed to redefine the way individuals experience mental well-being. Our approach was driven by innovation, empathy, and an unwavering commitment to elevating the user experience, and it unfolded systematically through the lens of UI/UX design principles.
                </Typography.Text>
        </Col>
      </Row>

               {/* section 6 */}
               <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          padding:"50px 0 100px",

        }}
      >
        <Col xs={24} lg={14} style={{ textAlign: "center" }}>
        <Typography.Title
            className="fontFamily2 textCenter"
            style={{
              fontSize: "50px",

              color: "#222",
              textAlign: "center",
              margin: 0,
            }}
          >
            In-depth Research
          </Typography.Title><br/>
        <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                Our journey began with extensive research, delving deep into the mental wellness app landscape. We conducted user surveys, held insightful interviews, and meticulously analyzed existing mindfulness applications. This research provided us with invaluable insights into the pain points and unmet needs of our target audience, guiding us to make informed UI/UX decisions.
                </Typography.Text>
        </Col>
      </Row>

  {/* section 7 */}
      <Row
        className="hero"
        style={{
        paddingTop:"30px",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          textAlign: "center",
        }}
      >
         <Image
                preview={false}
                alt={"Failed to load image"}
                width={"100%"}
                
                style={{ objectFit: "cover" }}
                src="/images/blog1_6.png"
              />

      </Row>

                {/* section 6 */}
                <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          padding:"100px 0",

        }}
      >
        <Col xs={24} lg={14} style={{ textAlign: "center" }}>
        <Typography.Title
            className="fontFamily2 textCenter"
            style={{
              fontSize: "50px",

              color: "#222",
              textAlign: "center",
              margin: 0,
            }}
          >
            Coherent Visual Aesthetics
          </Typography.Title><br/>
        <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                In acknowledgment of the need for a visual escape from the stress of daily life, we introduced Unwind's calming, nature-inspired visual aesthetic. The gentle color palette and serene landscapes integrated into Unwind's design were carefully selected to instantly transport users into a state of relaxation. These soothing visuals foster a sense of tranquility and serve as a vital foundation for a mindful experience.
                </Typography.Text>
        </Col>
      </Row>

        {/* section 7 */}
        <Row
        className="hero"
        style={{
        paddingTop:"30px",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          textAlign: "center",
        }}
      >
         <Image
                preview={false}
                alt={"Failed to load image"}
                width={"100%"}
                
                style={{ objectFit: "cover" }}
                src="/images/blog1_7.png"
              />

      </Row>
    
      
        {/* section 7 */}
        <Row
        className="hero"
        style={{
        paddingTop:"30px",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          textAlign: "center",
          padding:"100px 0"
        }}
      >
         <Image
                preview={false}
                alt={"Failed to load image"}
                width={"100%"}
                
                style={{ objectFit: "cover" }}
                src="/images/blog1_8.png"
              />

      </Row>


     {/* section 6 */}
     <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          padding:"50px 0 100px",

        }}
      >
        <Col xs={24} lg={14} style={{ textAlign: "center" }}>
        <Typography.Title
            className="fontFamily2 textCenter"
            style={{
              fontSize: "50px",

              color: "#222",
              textAlign: "center",
              margin: 0,
            }}
          >
            Personalized Content
          </Typography.Title><br/>
        <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
               A key concern of the client, and one we aimed to address from a UI/UX perspective, was the absence of personalized content in the mindfulness app landscape. To achieve this, we harnessed the power of machine learning algorithms. Unwind's adaptive, personalized user experience ensures that each user receives content tailored to their unique preferences and progress. This personalization, at the heart of the UI/UX, encourages users to engage actively and stay committed to their mental wellness journey.
                </Typography.Text>
        </Col>
      </Row>


           {/* section 7 */}
           <Row
        className="hero"
        style={{
        paddingTop:"30px",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          textAlign: "center",
          paddingBottom:"100px"
        }}
      >
         <Image
                preview={false}
                alt={"Failed to load image"}
             
                
                style={{ objectFit: "cover" }}
                src="/images/blog1_3.png"
              />

      </Row>

    {/* section 7 */}
    <Row
        className="hero"
        style={{
        paddingTop:"30px",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          textAlign: "center",
          padding:"100px 0"
        }}
      >
         <Image
                preview={false}
                alt={"Failed to load image"}
                width={"70%"}  
                height={600}             
                style={{ objectFit: "cover", borderRadius:"50px" }}
                src="/images/blog1_9.png"
              />

      </Row>
    
      {/* section 3 */}
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
        <Col xs={24} lg={14} style={{ textAlign: "center" }}>
          <Typography.Title
            className="fontFamily2 textCenter"
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#222",
              textAlign: "center",
            }}
          >
            Join Our Exclusive Waitlist and Be Part of Something Special!
          </Typography.Title>
          <br />
          <Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "20px", color: "#424242", textAlign: "center" }}
          >
            Are you ready
          </Typography.Text>
          <br />
          <br />
          <MainButton
            onClick={() => navigate("/connect-with-us")}
            className="fontFamily1"
            style={{
              fontWeight: "bold",
              background: "#0045ad",
              border: "none",
              borderRadius: "5px",
              padding: "15px 30px",
              height: "auto",
              fontSize: "25px",
              marginTop: "10px",
            }}
            size="large"
          >
            Start
          </MainButton>
        </Col>
      </Row>


    </Layout>
  );
}

export default Blog1;
