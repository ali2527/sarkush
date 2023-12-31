import React, { useRef,useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MainButton from "../../components/MainButton";
import { Col, Row, Image, Typography, Layout, Avatar } from "antd";
import { BsDot, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FiArrowDownRight } from "react-icons/fi";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css'


function ConnectWithUs() {

  useEffect(() => {
    AOS.init({disable: 'mobile',mirror:true});
    AOS.refresh();
  }, []);
  
  const navigate = useNavigate();
  const carousel = useRef();

  const items = [
    {
      "key":1,
      "author":"Darryl C.",
      "comment":"The entire process was smooth, and any changes or revisions were revised in a professional and timely manner. Raamish went above and beyondto ensure my needs were met, I would definitely work with him again",
      "company":"",
      "position":"Brand Designer",
      "image":"./images/author2.png"
    },
    {
      "key":2,
      "author":"Chris J.",
      "comment":"Raamish and his teamdid a fantastic job on my branding!. He took what was a rather vague description of my agency and helped me develope a logo ,name , color scheme and visual language and reallly helped me bring out the best aspect of my company as a brand. He's got great copmmunication skills, goes over and above to deliever and is veryreceptive to feedback. I completely recommend working with him",
      "company":"SEO Agency",
      "position":"Built a brand Identity",
      "image":"./images/author3.jpg"
    },
    {
      "key":3,
      "author":"Mustafa K.",
      "comment":"Raamish and his teamdid a fantastic job on my branding!. He took what was a rather vague description of my agency and helped me develope a logo ,name , color scheme and visual language and reallly helped me bring out the best aspect of my company as a brand.",
      "company":"SEO Agency",
      "position":"Built a brand Identity",
      "image":"./images/author4.jpg"
    },
    {
      "key":4,
      "author":"Mind Muscle Physique",
      "comment":"Fluent Communication and was extreamly professional assisted us with completing the job right away. I would definitely recommend him again",
      "company":"",
      "position":"",
      "image":"./images/author5.jpg"
    },
    {
      "key":5,
      "author":"TeleHealth.",
      "comment":"Fantastic Counterparty to work with - communicated well and were always their with there responses. They were reseptive to feedback and I was impressed with the high quality work ",
      "company":"",
      "position":"",
      "image":"./images/author6.png"
    }
  ];
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Row
        className="hero"
        style={{
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          textAlign: "center",
          padding: "100px 0",
        }}
      >
        <Col xs={20} lg={20}>
          <Row style={{ textAlign: "center", justifyContent: "center" }}>
            <Typography.Title
              className="fontFamily2 textCenter"
              style={{
                fontSize:  window.innerWidth < 800 ? "35px" : "56px",
                color: "#222",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "68px",
                marginBottom: 40,
                zIndex: 2,
                marginTop: 0,
              }}
            >
              Connect With Us
            </Typography.Title>
          </Row>

          <br />
          <Row style={{ textAlign: "center", justifyContent: "center" }}>
            <Col xs={24} lg={6}>
            <div data-aos="flip-right">

              <div
                style={{
                  background: "#EAF4FF",
                  borderRadius: "50px",
                  height: "400px",
                  width: "100%",
                  objectFit: "cover",
                  padding: "35px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "space-between",
                  flexDirection: "column",
                }}
              >
                <Row>
                  <Typography.Title
                    className="fontFamily2 textCenter"
                    style={{
                      fontSize: "32px",
                      fontWeight: 600,
                      color: "#222",
                      textAlign: "center",
                      margin: "20px 0 0 0 ",
                    }}
                  >
                    Strategy
                  </Typography.Title>
                </Row>
                <Row>
                  <MainButton
                    onClick={() => navigate("/connect-with-us")}
                    className="fontFamily1"
                    style={{
                      fontWeight: "bold",
                      background: "#1C2854",
                      border: "none",
                      borderRadius: "100px",
                      padding: "14px 35px",
                      height: "auto",
                      fontSize: "16px",
                    }}
                    size="large"
                  >
                    Connect with us
                  </MainButton>
                </Row>
              </div>
              </div>
            </Col>

            <Col xs={24} lg={6}>
            <div data-aos="flip-right" data-aos-delay="300">
              <div
                style={{
                  background: "#023A7B",
                  borderRadius: "50px",
                  height: "400px",
                  width: "100%",
                  objectFit: "cover",
                  padding: "35px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "space-between",
                  flexDirection: "column",
                }}
              >
                <Row>
                  <Typography.Title
                    className="fontFamily2 "
                    style={{
                      fontSize: "32px",
                      fontWeight: 600,
                      color: "white",
                      textAlign: "left",
                      margin: "20px 0 0 0 ",
                    }}
                  >
                    Design & <br />
                    Visual Identity
                  </Typography.Title>
                </Row>
                <Row>
                  <MainButton
                    onClick={() => navigate("/connect-with-us")}
                    className="fontFamily1"
                    style={{
                      fontWeight: "bold",
                      background: "#C9EBF9",
                      border: "none",
                      borderRadius: "100px",
                      padding: "14px 35px",
                      height: "auto",
                      color: "black",
                      fontSize: "16px",
                    }}
                    size="large"
                  >
                    Connect with us
                  </MainButton>
                </Row>
              </div>
              </div>
            </Col>

            <Col xs={24} lg={6}>
            <div data-aos="flip-right" data-aos-delay="600">
              <div
                style={{
                  background: "#EAF4FF",
                  borderRadius: "50px",
                  height: "400px",
                  width: "100%",
                  objectFit: "cover",
                  padding: "35px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "space-between",
                  flexDirection: "column",
                  marginRight: -100,
                }}
              >
                <Row>
                  <Typography.Title
                    className="fontFamily2 "
                    style={{
                      fontSize: "32px",
                      fontWeight: 600,
                      color: "#222",
                      textAlign: "left",
                      margin: "20px 0 0 0 ",
                    }}
                  >
                    Website Development 
                  </Typography.Title>
                </Row>
                <Row>
                  <MainButton
                    onClick={() => navigate("/connect-with-us")}
                    className="fontFamily1"
                    style={{
                      fontWeight: "bold",
                      background: "#1C2854",
                      border: "none",
                      borderRadius: "100px",
                      padding: "14px 35px",
                      height: "auto",
                      fontSize: "16px",
                    }}
                    size="large"
                  >
                    Connect with us
                  </MainButton>
                </Row>
              </div>
              </div>
            </Col>

            <Col xs={24} lg={6}>
            <div data-aos="flip-right" data-aos-delay="900">
              <div
                style={{
                  background: "#023A7B",
                  borderRadius: "50px",
                  height: "400px",
                  width: "100%",
                  objectFit: "cover",
                  padding: "35px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "space-between",
                  flexDirection: "column",
                }}
              >
                <Row>
                  <Typography.Title
                    className="fontFamily2 "
                    style={{
                      fontSize: "32px",
                      fontWeight: 600,
                      color: "white",
                      textAlign: "left",
                      margin: "20px 0 0 0 ",
                    }}
                  >
                    Digital Marketing 
                  </Typography.Title>
                </Row>
                <Row>
                  <MainButton
                    onClick={() => navigate("/connect-with-us")}
                    className="fontFamily1"
                    style={{
                      fontWeight: "bold",
                      background: "#C9EBF9",
                      border: "none",
                      borderRadius: "100px",
                      padding: "14px 35px",
                      height: "auto",
                      color: "black",
                      fontSize: "16px",
                    }}
                    size="large"
                  >
                    Connect with us
                  </MainButton>
                </Row>
              </div>
              </div>
            </Col>
          </Row>
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
          paddingBottom: "50px",
        }}
      >
        <Col xs={20} lg={12} style={{ textAlign: "center" }}>
        <div data-aos="fade-up">
          <Typography.Title
            className="fontFamily2 textCenter"
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#222",
              textAlign: "center",
            }}
          >
            Advising on todays and tomorrow’s startups
          </Typography.Title>
          </div>
          <br />
          <Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "24px", color: "#424242", textAlign: "center" }}
          >
            Utilizing our proficiency, enthusiasm, and results-oriented
            thinking, here’s how we delve into your industry to provide
            exceptional outcomes;
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
          paddingTop: "100px",
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
              <div data-aos="fade-up">
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={120}
                  src="/images/feature1.png"
                />
                </div>
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
                  Strategy
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
                  At the heart of our approach lies a commitment to empowering
                  purpose-driven brands and propelling their growth through the
                  activation of impactful strategies, fostering design
                  empowerment, and facilitating market adoption. We take pride
                  in our ability to nurture innovative ideas and bridge the gap
                  between brands and their customers or users, ultimately
                  leading to their success and significant positive influence in
                  the market.
                </Typography.Text>
              </Row>
              <br />
              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    Brand Positioning
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    Brand Architecture
                  </Typography.Text>
                </li>

                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    Brand Architecture
                  </Typography.Text>
                </li>

                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    Brand Messaging
                  </Typography.Text>
                </li>

                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    Marketing Strategy
                  </Typography.Text>
                </li>

                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    Content Strategy
                  </Typography.Text>
                </li>

                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    Copywriting
                  </Typography.Text>
                </li>

                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    Information Architecture
                  </Typography.Text>
                </li>

                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    Consumer & Market Insights
                  </Typography.Text>
                </li>

                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    Content Creation
                  </Typography.Text>
                </li>
              </ul>
              <br />
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <hr
                  style={{
                    border: "2px solid grey",
                    width: "50px",
                    float: "left",
                  }}
                />
              </div>
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
              <div data-aos="fade-up" data-aos-delay="200">
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={100}
                  src="/images/feature2.png"
                />
                </div>
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
                  Design + Visual Identity
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
                  We utilize atomic design principles to create design systems
                  that are scalable and effectively cater to both the
                  distinctive qualities of your brand and the functional
                  requirements of your business, all while maintaining the
                  potential for expansion. By applying atomic design principles,
                  we systematically construct a design system that encapsulates
                  the essence of your brand. This structured approach guarantees
                  component consistency, ensuring alignment with your brand
                  identity while also adapting seamlessly to various contexts.
                </Typography.Text>
              </Row>
              <br />
              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    Logo Design
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    Design Systems & Style Guides
                  </Typography.Text>
                </li>

                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    Packaging Design
                  </Typography.Text>
                </li>

                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    UI & UX Design
                  </Typography.Text>
                </li>

                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    Experience Design
                  </Typography.Text>
                </li>

                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    Digital Design
                  </Typography.Text>
                </li>

                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    Web Design
                  </Typography.Text>
                </li>

                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    Content & Creative
                  </Typography.Text>
                </li>

                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "18px",
                      color: "#424242",
                      textAlign: "left",
                      fontWeight: 700,
                      lineHeight: "48px",
                      margin: 0,
                    }}
                  >
                    Brand Materials
                  </Typography.Text>
                </li>
              </ul>
              <br />
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <hr
                  style={{
                    border: "2px solid grey",
                    width: "50px",
                    float: "left",
                  }}
                />
              </div>
            </Col>
          </Row>

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
              <div data-aos="fade-up" >
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={120}
                  src="/images/feature3.png"
                />
                </div>
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
                  Website Development
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
                  At the heart of our approach lies a commitment to empowering
                  purpose-driven brands and propelling their growth through the
                  activation of impactful strategies, fostering design
                  empowerment, and facilitating market adoption. We take pride
                  in our ability to nurture innovative ideas and bridge the gap
                  between brands and their customers or users, ultimately
                  leading to their success and significant positive influence in
                  the market.
                </Typography.Text>
              </Row>
              <br />
              <Typography.Text
                className="fontFamily1"
                style={{
                  fontSize: "80px",
                  color: "#424242",
                  textAlign: "left",
                  fontWeight: 300,
                  lineHeight: "48px",
                  margin: 0,
                }}
              >
                +
              </Typography.Text>
              <br />
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
              <div data-aos="fade-up" data-aos-delay="200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="100"
                  viewBox="0 0 42 81"
                  fill="none"
                >
                  <path
                    d="M24 0C9.83688 6.56564 9.89034e-07 21.0086 2.56241e-07 37.7729C2.38293e-07 38.1835 0.00766395 38.5924 0.01915 39L23.9996 39L23.9996 0L24 0Z"
                    fill="#BDC0E7"
                  />
                  <path
                    d="M42 81L42 0C35.749 -2.73241e-07 29.8177 1.31761 24.4858 3.67733L24.4858 41.6962L1.9921e-06 41.6962C0.656381 63.5102 19.2083 81 42 81Z"
                    fill="#1C2854"
                  />
                </svg>
                </div>
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
                  Digital Marketing 
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
                  In the dynamic realm of digital marketing, our approach
                  seamlessly integrates cutting-edge creativity with data-driven
                  digital strategies, ensuring that each visual component aligns
                  with our client’s digital goals. We delve into comprehensive
                  market analysis to gain insights into your online audience and
                  industry trends. {" "}
                </Typography.Text>
              </Row>
              <br />
              <Typography.Text
                className="fontFamily1"
                style={{
                  fontSize: "80px",
                  color: "#424242",
                  textAlign: "left",
                  fontWeight: 300,
                  lineHeight: "48px",
                  margin: 0,
                }}
              >
                +
              </Typography.Text>
              <br />
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
          borderTop: "1px solid #dadada",
          borderBottom: "1px solid #dadada",
          padding: "50px 0",
        }}
      >
        <Marquee>
          <div style={{ padding: "10px 50px" }}>
            <Typography.Text
              className="fontFamily1"
              style={{
                fontSize: "80px",
                color: "#000",
                textAlign: "left",
                fontWeight: 900,
                lineHeight: "48px",
                margin: 0,
              }}
            >
              Emerging Technologies
            </Typography.Text>
          </div>
          <div style={{ padding: "10px 50px" }}>
            <BsDot style={{ fontSize: "100px" }} />
          </div>
          <div style={{ padding: "10px 50px" }}>
            <Typography.Text
              className="fontFamily1"
              style={{
                fontSize: "80px",
                color: "#000",
                textAlign: "left",
                fontWeight: 900,
                lineHeight: "48px",
                margin: 0,
              }}
            >
              Entertainment
            </Typography.Text>
          </div>
          <div style={{ padding: "10px 50px" }}>
            <BsDot style={{ fontSize: "100px" }} />
          </div>

          <div style={{ padding: "10px 50px" }}>
            <Typography.Text
              className="fontFamily1"
              style={{
                fontSize: "80px",
                color: "#000",
                textAlign: "left",
                fontWeight: 900,
                lineHeight: "48px",
                margin: 0,
              }}
            >
              Hospitality
            </Typography.Text>
          </div>
          <div style={{ padding: "10px 50px" }}>
            <BsDot style={{ fontSize: "100px" }} />
          </div>

          <div style={{ padding: "10px 50px" }}>
            <Typography.Text
              className="fontFamily1"
              style={{
                fontSize: "80px",
                color: "#000",
                textAlign: "left",
                fontWeight: 900,
                lineHeight: "48px",
                margin: 0,
              }}
            >
              Education
            </Typography.Text>
          </div>
          <div style={{ padding: "10px 50px" }}>
            <BsDot style={{ fontSize: "100px" }} />
          </div>
        </Marquee>
        <Marquee>
          <div style={{ padding: "10px 50px" }}>
            <Typography.Text
              className="fontFamily1"
              style={{
                fontSize: "80px",
                color: "#000",
                textAlign: "left",
                fontWeight: 900,
                lineHeight: "48px",
                margin: 0,
              }}
            >
              Entertainment
            </Typography.Text>
          </div>
          <div style={{ padding: "10px 50px" }}>
            <BsDot style={{ fontSize: "100px" }} />
          </div>
          <div style={{ padding: "10px 50px" }}>
            <Typography.Text
              className="fontFamily1"
              style={{
                fontSize: "80px",
                color: "#000",
                textAlign: "left",
                fontWeight: 900,
                lineHeight: "48px",
                margin: 0,
              }}
            >
              Emerging Technologies
            </Typography.Text>
          </div>
          <div style={{ padding: "10px 50px" }}>
            <BsDot style={{ fontSize: "100px" }} />
          </div>
          <div style={{ padding: "10px 50px" }}>
            <Typography.Text
              className="fontFamily1"
              style={{
                fontSize: "80px",
                color: "#000",
                textAlign: "left",
                fontWeight: 900,
                lineHeight: "48px",
                margin: 0,
              }}
            >
              Education
            </Typography.Text>
          </div>
          <div style={{ padding: "10px 50px" }}>
            <BsDot style={{ fontSize: "100px" }} />
          </div>

          <div style={{ padding: "10px 50px" }}>
            <Typography.Text
              className="fontFamily1"
              style={{
                fontSize: "80px",
                color: "#000",
                textAlign: "left",
                fontWeight: 900,
                lineHeight: "48px",
                margin: 0,
              }}
            >
              Hospitality
            </Typography.Text>
          </div>
          <div style={{ padding: "10px 50px" }}>
            <BsDot style={{ fontSize: "100px" }} />
          </div>
        </Marquee>
      </Row>

     {/* section 7 */}
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
        <Col xs={20} lg={20} style={{ textAlign: "center" }}>
          <Row justify={"center"}>
          <div data-aos="fade-up" data-aos-delay="200">
              <Typography.Title
                className="fontFamily2 textCenter"
                style={{
                  fontSize: "48px",
                  color: "#222",
                  textAlign: "center",
                  margin: 5,
                  fontWeight:700,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                How We Became the Talk of Town
              </Typography.Title>
              </div>
              </Row> <Row justify={"center"}>
              <Typography.Text
              className="fontFamily1 "
              style={{
                fontSize: "18px",
                color: "#424242",
                textAlign: "left",
             
              }}
            >
            Read what people have to say about us.
            </Typography.Text>
          
           
          </Row>
          <br />
  
          <Row gutter={0} justify={"center"}>

            <Col xs={24} lg={18}>
            <AliceCarousel
  key="carousel"
  mouseTracking
  autoPlay
  autoPlayInterval={1000}
  animationDuration={1000}
  infinite
  disableButtonsControls
  responsive={responsive}
  items={items}
  ref={carousel}
    >
       {items.map((subItem, subIndex) => {
                  return (
                    <div style={{ padding: "20px" }}>
                      <Row
                        style={{
                          border: "1px solid #dadada",
                          borderRadius: "32px",
                          minHeight: "300px",
                          width: "100%",
                          objectFit: "cover",
                          padding: window.innerWidth < 800 ? "14px" : "35px",
                        }}
                      >
                        <Col>
                        <div style={{minHeight:"200px",display:'flex', justifyContent:'center',alignItems:'center'}}>
                          <Typography.Text
                            className="fontFamily2 "
                            style={{
                              fontSize:  window.innerWidth < 800 ? "14px" : "18px",
                              color: "#424242",
                              textAlign: "center",
                              
                            }}
                          >
                          " {subItem.comment} "
                          </Typography.Text>
                          </div>
                      
                          <Row
                          justify={"center"}
                            gutter={10}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                           
                              <Avatar size={50} src={subItem.image} />
                          </Row>
                          <Row
                          justify={"center"}
                            gutter={10}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                          
                              <Typography.Title
                                className="fontFamily1 "
                                style={{
                                  fontSize: "16px",
                                  color: "#424242",
                                  textAlign: "left",
                                  margin: 5,
                                }}
                              >
                               {subItem.author}
                              </Typography.Title>
                              <Typography.Text
                                className="fontFamily1 "
                                style={{
                                  fontSize: "12px",
                                  color: "#6D6E73",
                                  textAlign: "left",
                                  margin: 5,
                                }}
                              >
                               {subItem.position} 
                              </Typography.Text>
                            
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  );
                })}
    </AliceCarousel>

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
          paddingBottom: "150px",
        }}
      >
        <Col xs={24} lg={14} style={{ textAlign: "center" }}>
        <div data-aos="zoom-in-up">

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
          </div>
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

export default ConnectWithUs;
