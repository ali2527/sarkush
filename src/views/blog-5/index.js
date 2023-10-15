import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MainButton from "../../components/MainButton";
import { Col, Row, Image, Typography, Layout, Button } from "antd";
import { BsArrowRightShort, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FiArrowDownRight } from "react-icons/fi";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useNavigate } from "react-router-dom";

function Blog5() {
  const navigate = useNavigate()
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Row
        className="hero"
        style={{
        paddingTop:"0px",
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
                height={"90vh"}
                
                style={{ objectFit: "cover" }}
                src="/images/blog2.png"
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
            Mind Muscle Physique 
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
Elevating the Fitness Journey       </Typography.Title>
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
Mind Muscle Physique, a forward-thinking training web app, embarked on a mission to redefine the way individuals approach fitness and personal development.          </Typography.Text>
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
           Health & Fitness
          </Typography.Text> </Col>
            <Col span={12}><Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "16px", color: "#424242", textAlign: "center" }}
          >
         Lifestyle
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
           Market Research
          </Typography.Text> </Col>
            <Col span={12}><Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "16px", color: "#424242", textAlign: "center" }}
          >
         Brand Strategy
          </Typography.Text> </Col>
          </Row>

          <Row style={{padding:"10px 0"}}>
            <Col span={12}><Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "16px", color: "#424242", textAlign: "center" }}
          >
         Visual Identity Development  
          </Typography.Text> </Col>
            <Col span={12}><Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "16px", color: "#424242", textAlign: "center" }}
          >
         Content Visuals
          </Typography.Text> </Col>
          </Row>
          <Row style={{padding:"10px 0"}}>
            <Col span={12}><Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "16px", color: "#424242", textAlign: "center" }}
          >
          Brand Guidelines
          </Typography.Text> </Col>
            <Col span={12}><Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "16px", color: "#424242", textAlign: "center" }}
          >
        Web Design
          </Typography.Text> </Col>
          </Row>
            
          
        </Col>
      </Row>
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
          padding:50
        }}
      >
        <Col xs={24} lg={12} style={{ textAlign: "center" }}>
        <Typography.Title
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "48px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                 The Challenge  
                </Typography.Title>
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
                    textAlign: "left",
                  }}
                >
                 Health and Well-being Struggles
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
            One of the primary challenges that Mind Muscle Physique sought to address was the struggles individuals face in achieving their health and fitness goals. These challenges often lead to frustration, inconsistency, and a lack of motivation.
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
                    textAlign: "left",
                  }}
                >
               Access to Effective Training
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
                Many individuals find it challenging to access effective training programs and resources that cater to their specific needs and goals. The sheer volume of available information can be overwhelming and confusing.
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
                    textAlign: "left",
                  }}
                >
            Individual Fitness Journeys
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
                 The training landscape often lacks personalized and tailored solutions for individuals with varying fitness levels, objectives, and preferences. Mind Muscle Physique aimed to offer customized fitness journeys for its users.
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
                    textAlign: "left",
                  }}
                >
              Mental Fitness and Motivation
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
               The client's vision extended beyond physical fitness; they wanted to play an active role in enhancing users' mental fitness, providing resources, and motivation that promote a holistic approach to health and well-being.
                </Typography.Text>
              </Row>
          
            </Col>
          </Row>
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
                src="/images/blog5_1.png"
              />
      </Row>


{/* section 7 */}
<Row
        
        style={{
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
                
                style={{ objectFit: "cover",width:"100%" }}
                src="/images/blog5_2.png"
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
          padding:"100px 0 100px",

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
              In response to Mind Muscle Physique's mission and the challenges they faced, we devised a comprehensive solution that would transform the training and fitness landscape:
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
        <Col xs={24} lg={12} style={{ textAlign: "center" }}>
        <Typography.Title
            className="fontFamily2 textCenter"
            style={{
              fontSize: "50px",

              color: "#222",
              textAlign: "center",
              margin: 0,
            }}
          >
          Customer Centric Fitness Journeys
          </Typography.Title><br/>
        <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
           Mind Muscle Physique introduced an innovative approach to training, providing tailored fitness journeys that catered to users' specific fitness levels, goals, and preferences. This customization significantly reduced the frustration and confusion often associated with fitness programs.
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
                src="/images/blog5_3.png"
              />
        
        

      </Row>


 
      <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "50px",
          paddingBottom: "50px",
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
                paddingTop: "0px",
              }}
            >
              <Row>
                <Typography.Title
                  className="fontFamily2"
                  style={{
                    fontSize: "48px",
                    color: "#424242",
                    fontWeight: 700,
                    textAlign: "left",
                  }}
                >
             Access to Effective Resources
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
                The web app offered a centralized platform with access to effective training programs and resources. Users could find the right workouts, nutrition plans, and educational content to support their fitness goals in one place, simplifying the process.
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
          
              }}
            >
           

              <Row>
                <Typography.Title
                  className="fontFamily2"
                  style={{
                    fontSize: "48px",
                    color: "#424242",
                    fontWeight: 700,
                    textAlign: "left",
                  }}
                >
               Mental Fitness and Motivation
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
                Mind Muscle Physique went beyond physical training, offering mental fitness tools and motivation to support users' holistic well-being. This approach included resources to enhance mental resilience and motivation for sustained success.
                </Typography.Text>
              </Row>
          
            </Col>
          </Row>
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
         <Row justify="center">
            <Col
              xs={24}
              lg={14}
              style={{
                textAlign: "left",
                flexDirection: "column",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
          
              }}
            >
           

              <Row>
                <Typography.Title
                  className="fontFamily2"
                  style={{
                    fontSize: "48px",
                    color: "#424242",
                    fontWeight: 700,
                    textAlign: "left",
                  }}
                >
              Data-Driven Insights
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
                 he web app employed cutting-edge technology and data-driven insights to provide users with accurate feedback on their progress and performance. This enabled them to make informed decisions, set realistic goals, and stay motivated on their fitness journey.
                </Typography.Text>
              </Row>
          
            </Col>
          </Row>
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
          backgroundColor:"#EBEFF1"
        }}
        gutter={10}
      >
        <Col xs={24} md={20}>
     
          <Image
                preview={false}
                alt={"Failed to load image"}
                width={"100%"}
              
                
                style={{ objectFit: "cover" }}
                src="/images/blog5_4.png"
              />
        
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
          paddingTop:"50px"
        }}
      >
         <Image
                preview={false}
                alt={"Failed to load image"}
                width={"100%"}
                
                style={{ objectFit: "cover" }}
                src="/images/blog5_5.png"
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
          padding:"100px 0 100px",

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
           The result was a transformative training web app that simplified fitness journeys, offered access to effective resources, promoted mental fitness, and actively supported the well-being of users. Mind Muscle Physique's innovative approach positioned them as a pioneering force in the fitness and personal development industry, offering tangible benefits to individuals striving to achieve their health and fitness goals.
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

export default Blog5;
