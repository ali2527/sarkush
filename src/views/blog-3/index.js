import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MainButton from "../../components/MainButton";
import { Col, Row, Image, Typography, Layout, Button } from "antd";
import { BsArrowRightShort, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FiArrowDownRight } from "react-icons/fi";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useNavigate } from "react-router-dom";

function Blog3() {
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
                minHeight={window.innerWidth < 800 ? "50vh" : "90vh"}
                
                style={{ objectFit: "cover" }}
                src="/images/blog3_1.png"
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
        <Col xs={20} lg={20} style={{ textAlign: "left" }}>
        <Typography.Text
            className="fontFamily1"
            style={{ fontSize: "28px", color: "#424242", textAlign: "left" }}
          >
            Koli
          </Typography.Text>
          <Typography.Title
            className="fontFamily2"
            style={{
               fontSize:  window.innerWidth < 800 ? "35px" : "56px",
              fontWeight: "bold",
              color: "#222",
              textAlign: "left",
              margin:0
            }}
          >
           Establishing a distinctive brand identity for a Fashion Label
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
        <Col xs={20} lg={20} style={{ textAlign: "left" }}>
        <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        gutter={[50,50]}
      >
        <Col xs={24} lg={14} style={{ textAlign: "left" }}>
          <Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "20px", color: "#424242", textAlign: "center" }}
          >
           Koli, an emerging fashion brand, found itself facing a series of challenges in its pursuit of establishing a unique and impactful presence in the dynamic fashion industry.
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
        <Col xs={20} lg={12} style={{ textAlign: "center" }}>
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
        <Col xs={20} lg={18} style={{ textAlign: "center" }}>
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
                  Navigating the Crowded Fashion Scene
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
                The German hospitality market was saturated with numerous well-established brands and competitors, making it challenging for Elite Personal Assist to stand out.
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
                 Crafting a Distinctive Identity
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
                 In a world of fast fashion, Koli aimed to stand out by infusing its collections with a unique identity that would reflect its dedication to quality, style, and a deeper ethos.
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
                Targeting the Discerning Fashion Enthusiast
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
                  Koli aspired to attract fashion connoisseurs who view clothing as more than just attire; they seek wearable art. The challenge lay in creating a brand identity that would resonate with this discerning audience.
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
        <Col xs={20} md={20}>
          <Row gutter={20}>
          <Col xs={24} md={12}>
          <Image
                preview={false}
                alt={"Failed to load image"}
                width={"100%"}
                height={900}
                
                style={{ objectFit: "cover" }}
                src="/images/blog3_2.png"
              />
          </Col>
          <Col xs={24} md={12}>
          <Image
                preview={false}
                alt={"Failed to load image"}
                width={"100%"}
                height={900}
                style={{ objectFit: "cover" }}
                src="/images/blog3_3.png"
              />
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
          padding:"100px 0 100px",

        }}
      >
        <Col xs={20} lg={14} style={{ textAlign: "center" }}>
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
               To address Koli's ambitions and tackle the challenges it faced, we embarked on a journey to forge a brand identity and design that would not just set them apart but propel them to the forefront of the fashion industry:
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
          padding:"100px 0 100px",

        }}
      >
        <Col xs={20} lg={14} style={{ textAlign: "center" }}>
        <Typography.Title
            className="fontFamily2 textCenter"
            style={{
              fontSize: "50px",

              color: "#222",
              textAlign: "center",
              margin: 0,
            }}
          >
           Comprehensive Market Analysis
          </Typography.Title><br/>
        <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
             Our first step was a thorough exploration of the fashion landscape, deciphering market trends, consumer preferences, and competition. This analysis laid the foundation for a strategic approach to positioning Koli effectively.
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
                src="/images/blog3_4.png"
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
        <Col xs={20} lg={14} style={{ textAlign: "center" }}>
        <Typography.Title
            className="fontFamily2 textCenter"
            style={{
              fontSize: "50px",

              color: "#222",
              textAlign: "center",
              margin: 0,
            }}
          >
            Curating a Unique Brand Identity
          </Typography.Title><br/>
        <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                Collaborating closely with Koli, we meticulously crafted a brand identity that resonated with the brand's core values and inspirations. This included the development of a distinctive logo, a signature color palette, and an elegant typography that radiated both sophistication and creativity.
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
                src="/images/blog3_5.png"
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
          padding:"0"
        }}
      >
         <Image
                preview={false}
                alt={"Failed to load image"}
                width={"100%"}
                
                style={{ objectFit: "cover" }}
                src="/images/blog3_6.png"
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
        <Col xs={20} lg={14} style={{ textAlign: "left" }}>
        <Typography.Title
            className="fontFamily2 "
            style={{
              fontSize: "50px",

              color: "#222",
              textAlign: "left",
              margin: 0,
            }}
          >
           Digital Showcase and <br/> E-Commerce Hub  
          </Typography.Title><br/>
        <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
              We designed a visually captivating and user-friendly website that not only served as Koli's digital flagship but also narrated the brand's story. The website allowed visitors to seamlessly explore the collections, delve into the brand's philosophy, and make purchases, with engaging content and a seamless browsing experience.
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
                width={"100%"}
             
                
                style={{ objectFit: "cover" }}
                src="/images/blog3_7.png"
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
        }}
      >
        <Col xs={20} md={20}>
          <Row gutter={0}>
          <Col xs={24} md={12}>
          <Image
                preview={false}
                alt={"Failed to load image"}
                width={"100%"}
                height={500}
                
                style={{ objectFit: "cover" }}
                src="/images/blog3_8.png"
              />
          </Col>
          <Col xs={24} md={12}>
          <Image
                preview={false}
                alt={"Failed to load image"}
                width={"100%"}
                height={500}
                style={{ objectFit: "cover" }}
                src="/images/blog3_9.png"
              />
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
          padding:"100px 0 100px",

        }}
      >
        <Col xs={20} lg={14} style={{ textAlign: "center" }}>

        <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
              The end result was a brand identity and design that not only positioned Koli as a prominent fashion player but also appealed to the discerning consumer, offering a blend of quality, style, and creativity. The brand now boasts a captivating and uniform image across all customer touchpoints, ensuring that Koli is recognized as a unique and influential figure in the fashion world. 
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

export default Blog3;
