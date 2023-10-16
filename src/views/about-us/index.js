import React, { useRef,useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MainButton from "../../components/MainButton";
import { Col, Row, Image, Typography, Layout, Avatar } from "antd";
import AOS from 'aos';
import 'aos/dist/aos.css'



function AboutUs() {

  useEffect(() => {
    AOS.init({disable: 'mobile',mirror:true});
    AOS.refresh();
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Row
        className="hero"
        style={{
          minHeight:  window.innerWidth < 800 ? "50vh" : "90vh",
          background: "#EAF4FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          textAlign: "center",
          padding:"50px 0"
        }}
      >
        <Col xs={20} lg={12}>
          <Row style={{ textAlign: "center", justifyContent: "center" }}>
          <div data-aos="zoom-in" data-aos-easing="ease-in-sine">
            <Typography.Title
              className="fontFamily2 textCenter"
              style={{
                fontSize:  window.innerWidth < 800 ? "35px" : "68px",
                paddingTop:window.innerWidth < 800 ? "50px" : "0px",
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
            </div>
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
              Our name is basically derived from a terminology in Urdu which
              means unruly, because we believe every entrepreneur is steadfast
              and fear-less:  a dare-r and do-er, who puts insights,
              experiences, and stories above vanity and we embrace this
              challenge with out hesitation.
            </Typography.Text>
          </Row>
        </Col>

        <div style={{ position: "absolute", right: 0, top: 0, zIndex: 0,display: window.innerWidth < 800 ? "none" : "auto", }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1440"
            height="850"
            viewBox="0 0 1440 850"
            fill="none"
          >
            <path
              d="M1440 850L1440 -368L-5.32405e-05 -368C792.314 -362.415 1433.4 179.894 1440 850Z"
              fill="#1C2854"
            />
          </svg>
        </div>

        <div style={{ position: "absolute", left: 0, zIndex: 0,display: window.innerWidth < 800 ? "none" : "auto", }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="377"
            height="408"
            viewBox="0 0 377 408"
            fill="none"
          >
            <path
              d="M141.027 0H-35L-34.7843 408H377V146.523C374.534 146.596 372.06 146.64 369.576 146.64C268.141 146.643 180.753 86.5385 141.027 0Z"
              fill="#C9EBF9"
            />
          </svg>
        </div>

        <div style={{ position: "absolute", left: 150, top: 100, zIndex: 0,display: window.innerWidth < 800 ? "none" : "auto", }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="501"
            height="252"
            viewBox="0 0 501 252"
            fill="none"
          >
            <path
              d="M501 0H0C0 37.5061 8.14965 73.0939 22.745 105.085H257.899V252C392.822 248.062 501 136.75 501 0Z"
              fill="#C9EBF9"
            />
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
          padding: "50px 0",
        }}
      >
        <Col xs={20} lg={12} style={{ textAlign: "center" }}>
        <div data-aos="zoom-in" data-aos-easing="ease-in-out">
          <Typography.Title
            className="fontFamily2 textCenter"
            style={{
              fontSize:  window.innerWidth < 800 ? "35px" : "50px",
                paddingTop:window.innerWidth < 800 ? "50px" : "0px",
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
            Our vision is to unleash the full potential of entrepreneurs and
            equip them with the tools and resources they need to thrive and
            grow. We strive to provide a cutting-edge social platform that is
            user-friendly, accessible, and constantly evolving to meet the needs
            of entrepreneurs.
          </Typography.Text>
          </div>
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
        <Col xs={20} lg={12} style={{ textAlign: "center" }}>
        <div data-aos="zoom-in" data-aos-easing="ease-in-out">
          <Typography.Title
            className="fontFamily2 textCenter"
            style={{
              fontSize:  window.innerWidth < 800 ? "35px" : "50px",
                paddingTop:window.innerWidth < 800 ? "50px" : "0px",
              fontWeight: "bold",
              color: "#222",
              textAlign: "center",
            }}
          >
            Our Core Values{" "}
          </Typography.Title>
          <br />
          <Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "20px", color: "#424242", textAlign: "center" }}
          >
            We have been in the market for 5 years - with a small team that
            serves as a powerhouse for every business,thrives on pushing
            boundaries and thinks outside the box.
          </Typography.Text>
          </div>
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
        }}
      >
        <Col xs={24} lg={18} style={{ textAlign: "left" }}>
          <div style={{ padding: "20px" }}>
          <div data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease-in-out">
            <Row
              style={{
                background: "#EAF4FF",
                borderRadius: "32px 32px 0 0",
                height: "500px",
                width: "100%",
                objectFit: "cover",
                padding: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col xs={24} lg={18} style={{ textAlign: "center" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="156"
                  height="79"
                  viewBox="0 0 156 79"
                  fill="none"
                >
                  <path
                    d="M77.6572 78.0439H155.306V77.3798C154.953 35.0168 120.676 0.739744 78.3212 0.386719H76.9931C34.6301 0.739744 0.353025 35.0168 0 77.3798V78.0439H77.6572Z"
                    fill="#BDC0E7"
                  />
                  <path
                    d="M77.2627 0V28.4084C104.675 28.4084 126.896 50.6306 126.896 78.043H155.305C155.306 34.9403 120.365 0 77.2627 0Z"
                    fill="#1C2854"
                  />
                  <path
                    d="M-3.40949e-06 78L28.3928 78C28.3928 50.6024 50.6027 28.3931 78 28.3931L78 1.51563e-08C34.921 -0.00084195 -1.52646e-06 34.9214 -3.40949e-06 78Z"
                    fill="#C9EBF9"
                  />
                </svg>
                <Typography.Title
                  className="fontFamily2 textCenter"
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#222",
                    textAlign: "center",
                    margin: "20px 0 0 0 ",
                  }}
                >
                  Building the Best Product & Brands{" "}
                </Typography.Title>
                <br />
                <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                  Our notion of the best product is all about unrivaled
                  functionality, innovation and durability. So we create the
                  best of the best, by ensuring deep integrity in whatever we
                  create.
                </Typography.Text>
              </Col>
            </Row>
            </div>
            <div data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease-in-out">
            <Row
              style={{
                background: "#9FCCFF",
                borderRadius: "32px 32px 0 0",
                height: "500px",
                width: "100%",
                objectFit: "cover",
                padding: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-30px",
              }}
            >
              <Col xs={24} lg={18} style={{ textAlign: "center" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="187"
                  height="188"
                  viewBox="0 0 187 188"
                  fill="none"
                >
                  <path
                    d="M93.5016 1.12833L0.62793 94.002L93.5016 186.876L186.375 94.002L93.5016 1.12833Z"
                    fill="#1C2854"
                  />
                  <path
                    d="M186.837 94.001L152.861 60.0249C120.076 92.8097 66.923 92.8087 34.1382 60.0239L0.162109 94C51.7112 145.551 135.288 145.55 186.837 94.001Z"
                    fill="#C9EBF9"
                  />
                </svg>
                <Typography.Title
                  className="fontFamily2 textCenter"
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#222",
                    textAlign: "center",
                    margin: "20px 0 0 0 ",
                  }}
                >
                  Teach and Lead{" "}
                </Typography.Title>
                <br />
                <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                  Having a growth mindset, we believe in sharing our learning
                  with our partners, to mutually unearth valuable insights and
                  help them achieve their desirable goals.
                </Typography.Text>
              </Col>
            </Row>
            </div>
            <div data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease-in-out">
            <Row
              style={{
                background: "#C0DDFF",
                borderRadius: "32px",
                height: "500px",
                width: "100%",
                objectFit: "cover",
                padding: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-30px",
              }}
            >
              <Col xs={24} lg={18} style={{ textAlign: "center" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="77"
                  height="76"
                  viewBox="0 0 77 76"
                  fill="none"
                >
                  <path
                    d="M77 76V0H0C0 41.9737 34.474 76 77 76Z"
                    fill="#BDC0E7"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="78"
                  height="76"
                  viewBox="0 0 78 76"
                  fill="none"
                >
                  <path
                    d="M0 76C43.0783 76 78 41.9737 78 0H0V76Z"
                    fill="#1C2854"
                  />
                </svg>

                <Typography.Title
                  className="fontFamily2 textCenter"
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#222",
                    textAlign: "center",
                    margin: "20px 0 0 0 ",
                  }}
                >
                  Delivering What We Promise{" "}
                </Typography.Title>
                <br />
                <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                  We are purpose led and profit driven. Hence, maintaining
                  transparency with our partners about our progress and
                  deadlines, helps us stay true to our commitment and ahead of
                  the fierce competition.
                </Typography.Text>
              </Col>
            </Row>
            </div>
          </div>
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
          padding:window.innerWidth < 800 ? "50px 0" : "250px 0px",
        }}
      >
        <div style={{position:'absolute',display: window.innerWidth < 800 ? "none" : "auto",}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="717" height="717" viewBox="0 0 717 717" fill="none">
<path opacity="0.2" d="M106 717C106 379.54 379.592 106 717 106" stroke="#C9EBF9" stroke-width="210.17" stroke-miterlimit="10"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="717" height="717" viewBox="0 0 717 717" fill="none">
  <path opacity="0.2" d="M611 717C611 379.54 337.408 106 0 106" stroke="#C9EBF9" stroke-width="210.17" stroke-miterlimit="10"/>
</svg>
        </div>
        <Col xs={20} lg={12} style={{ textAlign: "center" }}>
        <div data-aos="zoom-in" data-aos-easing="ease-in-out">
          <Typography.Title
            className="fontFamily2 textCenter"
            style={{
              fontSize:  window.innerWidth < 800 ? "35px" : "50px",
              fontWeight: "bold",
              color: "#222",
              textAlign: "center",
            }}
          >
            Our Mission{" "}
          </Typography.Title>
          <br />
          <Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "20px", color: "#424242", textAlign: "center" }}
          >
            At Surkush, we are dedicated to creating an empowering environment
            where entrepreneurs can excel, connect, and thrive together. Through
            valuable resources, collaborative opportunities, and a supportive
            ecosystem, we fuel the growth and success of our members.
          </Typography.Text>
          </div>
        </Col>
      </Row>


        {/* section 3 */}
        <Row
        className="whiteBackground"
        style={{
          backgroundColor: "#1C2854",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          padding: "100px 0 100px",
        }}
      >
        <Col xs={24} lg={20} style={{ textAlign: "center" }}>
          <Typography.Title
            className="fontFamily2 textCenter"
            style={{
              
              fontSize:  window.innerWidth < 800 ? "35px" : "50px",
              color: "white",
              textAlign: "center",
              margin: 0,
            }}
          >
            We Can Simply Put Ourselves As{" "}
          </Typography.Title>
          <br />
          <br />
          <br />
          <Col xs={24} lg={24} style={{ textAlign: "center",display:window.innerWidth < 800 ? "none" :"auto" }}> 
            <Row gutter={[30 , 30]} justify="space-between">
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
                <div data-aos="zoom-in" data-aos-easing="ease-in-out">
                <Row>
                  <Typography.Title
                    className="fontFamily2 textCenter"
                    style={{
                      fontSize: "32px",
                      color: "white",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    Think{" "}
                  </Typography.Title>
                </Row>
                <Row>
                  <Typography.Text
                    className="fontFamily1 textCenter"
                    style={{
                      fontSize: "20px",
                      color: "white",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    & Solve
                  </Typography.Text>
                </Row>
                </div>
                
                
              
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
                <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="200" >
                <Row>
                  <Typography.Title
                    className="fontFamily2 textCenter"
                    style={{
                      fontSize: "32px",
                      color: "white",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    Design{" "}
                  </Typography.Title>
                </Row>
                <Row>
                  <Typography.Text
                    className="fontFamily1 textCenter"
                    style={{
                      fontSize: "20px",
                      color: "white",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    & Build
                  </Typography.Text>
                </Row>
                </div>
  
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
                   <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="400" >
                <Row>
                  <Typography.Title
                    className="fontFamily2 textCenter"
                    style={{
                      fontSize: "32px",
                      color: "white",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    Launch{" "}
                  </Typography.Title>
                </Row>
                <Row>
                  <Typography.Text
                    className="fontFamily1 textCenter"
                    style={{
                      fontSize: "20px",
                      color: "white",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    & Test
                  </Typography.Text>
                </Row>
                </div>

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
                <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="600" >
                <Row>
                  <Typography.Title
                    className="fontFamily2 textCenter"
                    style={{
                      fontSize: "32px",
                      color: "white",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    Learn{" "}
                  </Typography.Title>
                </Row>
                <Row>
                  <Typography.Text
                    className="fontFamily1 textCenter"
                    style={{
                      fontSize: "20px",
                      color: "white",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    Iterate
                  </Typography.Text>
                </Row>
                </div>
              </Col>
            </Row>
            <Row justify="space-between" style={{padding:"50px"}}>
              <Image src={"./images/steps.png"} preview={false} />
              

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
                  padding:"30px"
                }}
              >
             
                <Row>
                  <Typography.Text
                    className="fontFamily1 textCenter"
                    style={{
                      fontSize: "20px",
                      color: "white",
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

<Row style={{ textAlign: "center",display:window.innerWidth < 800 ? "auto" :"none" }}>
<Col xs={24} lg={24} > 
              <Row gutter={[30 , 30]} justify="space-between">
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
                    <Typography.Title
                      className="fontFamily2 textCenter"
                      style={{
                        fontSize: "32px",
                        color: "white",
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      Think{" "}
                    </Typography.Title>
                  </Row>
                  <Row>
                    <Typography.Text
                      className="fontFamily1 textCenter"
                      style={{
                        fontSize: "20px",
                        color: "white",
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      & Solve
                    </Typography.Text>
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
                    <Typography.Title
                      className="fontFamily2 textCenter"
                      style={{
                        fontSize: "32px",
                        color: "white",
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      Design{" "}
                    </Typography.Title>
                  </Row>
                  <Row>
                    <Typography.Text
                      className="fontFamily1 textCenter"
                      style={{
                        fontSize: "20px",
                        color: "white",
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      & Build
                    </Typography.Text>
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
                    <Typography.Title
                      className="fontFamily2 textCenter"
                      style={{
                        fontSize: "32px",
                        color: "white",
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      Launch{" "}
                    </Typography.Title>
                  </Row>
                  <Row>
                    <Typography.Text
                      className="fontFamily1 textCenter"
                      style={{
                        fontSize: "20px",
                        color: "white",
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      & Test
                    </Typography.Text>
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
                    <Typography.Title
                      className="fontFamily2 textCenter"
                      style={{
                        fontSize: "32px",
                        color: "white",
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      Learn{" "}
                    </Typography.Title>
                  </Row>
                  <Row>
                    <Typography.Text
                      className="fontFamily1 textCenter"
                      style={{
                        fontSize: "20px",
                        color: "white",
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      Iterate
                    </Typography.Text>
                  </Row>
                </Col>
              </Row>
            </Col>
           
</Row>
         

          <br/>
          <br/>
          <br/>

          <Row style={{justifyContent:'center'}}>
            <Col xs={20} md={12}>
            <Typography.Text
                    className="fontFamily1 textCenter"
                    style={{
                      fontSize: "20px",
                      color: "white",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                  Collaboration & effective communication are integral to my process. I work closely with stakeholders, developers, and other team members to ensure a shared understanding of the design vision.
                  </Typography.Text>
            </Col>
              
                </Row>
        </Col>
      </Row>
    </Layout>
  );
}

export default AboutUs;
