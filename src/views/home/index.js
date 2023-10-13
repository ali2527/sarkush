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
          height: "90vh",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Col xs={24} lg={12}>
          <Row>
            <Typography.Title
              className="fontFamily2"
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
              In the World of Cannots
            </Typography.Title>
          </Row>
          <Row>
            <Typography.Title
              className="fontFamily2"
              style={{
                fontSize: "75px",
                color: "#222",
                fontStyle: "normal",
                fontWeight: 700,
                zIndex: 2,
                zIndex: 2,
                lineHeight: "68px",
                marginTop: 10,
              }}
            >
              We Are the Why-Nots
            </Typography.Title>
          </Row>
          <br />
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
              {
                <>
                  A service based platform where we connect, co-relate and
                  co-create <br />
                  opportunities alongside entrepreneurs to help streamline their
                  ideas and <br /> transform their brands into their greatest
                  assets.
                </>
              }
            </Typography.Text>
          </Row>
          <br />
          <br />
          <MainButton
            className="fontFamily1"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
              background: "#1C2854",
              border: "none",
              borderRadius: "100px",
              padding: "14px 35px",
              height: "auto",
              fontSize: "16px",
            }}
            size="large"
          >
            Connect with us <BsArrowRightShort style={{ fontSize: "20px" }} />
          </MainButton>
        </Col>
        <Col xs={24} lg={8} />
        <div style={{ position: "absolute", right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            preview={false}
            alt={"Failed to load image"}
            height={750}
            src="/images/objects.png"
          />
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
          paddingTop: "150px",
        }}
      >
        <Col xs={24} lg={18} style={{ textAlign: "center" }}>
          <Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "20px", color: "#424242", textAlign: "center" }}
          >
            At Surkush, we believe in the power of collaboration and connection
            to help entrepreneurs succeed. We work with founders just like you
            to help turn your vision into a reality. Whether you are starting a
            new business, looking to scale an existing one or looking for
            investors, we have the expertise you need to take your venture to
            the next level. With our comprehensive range of service programs and
            community of fellow entrepreneurs, Surkush is here to support you
            along every step of your journey.
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
        <Col xs={24} lg={18} style={{ textAlign: "center" }}>
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
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={120}
                  src="/images/feature1.png"
                />
              </Row>
              <br />
              <br />
              <Row>
                <Typography.Title
                  className="fontFamily2 textCenter"
                  style={{
                    fontSize: "22px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                  Good for all stages{" "}
                </Typography.Title>
              </Row>
              <Row>
                <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "20px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                  Whether you're getting to know people for the future, or ready
                  to go now.
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
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={100}
                  src="/images/feature2.png"
                />
              </Row>
              <br />
              <br />
              <Row>
                <Typography.Title
                  className="fontFamily2 textCenter"
                  style={{
                    fontSize: "22px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                  Come with or without an idea{" "}
                </Typography.Title>
              </Row>
              <Row>
                <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "20px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                  Don't have the right idea yet? This is a great place to find
                  it.
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
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={100}
                  src="/images/feature3.png"
                />
              </Row>
              <br />
              <br />
              <Row>
                <Typography.Title
                  className="fontFamily2 textCenter"
                  style={{
                    fontSize: "22px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                  Explore on your own terms
                </Typography.Title>
              </Row>
              <Row>
                <Typography.Text
                  className="fontFamily1 textCenter"
                  style={{
                    fontSize: "20px",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                  No commitment, no equity, no strings attached.
                </Typography.Text>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* section 4 */}
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
        <Col xs={24} lg={16} style={{ textAlign: "center" }}>
          <Typography.Title
            className="fontFamily2 textCenter"
            style={{ fontSize: "36px", color: "#222", textAlign: "center" }}
          >
            Our motivation for creating this platform is <br /> rooted in the
            recognition that the entrepreneurial <br />
            journey is rarely straightforward.
          </Typography.Title>
          <br />
          <Typography.Text
            className="fontFamily1 textCenter"
            style={{ fontSize: "20px", color: "#424242", textAlign: "center" }}
          >
            In the complex landscape of business, connecting with individuals
            who share your aspirations and have successfully navigated the
            entrepreneurial path can be indispensable. They are those who have
            experienced the same challenges, understand the pitfalls of
            launching a venture, and possess the wisdom to navigate those
            difficulties.
          </Typography.Text>
        </Col>
      </Row>

      {/* section 5 */}
      <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "150px",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", left: 0, top: 130 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="941"
            height="271"
            viewBox="0 0 941 271"
            fill="none"
          >
            <path
              d="M941 135.5C941 210.336 880.638 271 806.181 271L0 271L1.40645e-06 0L806.181 4.18397e-06C880.64 4.5704e-06 941 60.6642 941 135.5Z"
              fill="#EAF4FF"
            />
          </svg>
        </div>

        <div style={{ position: "absolute", right: 0, top: 100 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="137"
            height="321"
            viewBox="0 0 137 321"
            fill="none"
          >
            <path
              d="M160.5 -1.9744e-05C71.8583 -1.19947e-05 5.48216e-06 71.8583 1.32315e-05 160.5C2.09808e-05 249.142 71.8583 321 160.5 321C249.142 321 321 249.142 321 160.5C321 71.8583 249.142 -2.74933e-05 160.5 -1.9744e-05Z"
              fill="#C9EBF9"
            />
          </svg>
        </div>

        <Col xs={24} lg={16}>
          <Typography.Title
            className="fontFamily2 textCenter"
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              color: "#222",
              textAlign: "center",
            }}
          >
            Our Purpose
          </Typography.Title>
          <br />

          <br />
          <br />
          <Row justify="space-between">
            <Col
              xs={24}
              lg={10}
              style={{
                textAlign: "left",
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                borderTop: "3px solid #dadada",
              }}
            >
              <Row>
                <Typography.Title
                  className="fontFamily2 textCenter"
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#424242",
                    textAlign: "left",
                    marginTop: 0,
                  }}
                >
                  We intend to
                </Typography.Title>
              </Row>

              <Row>
                <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                  establish a dynamic community based platform for
                  entrepreneurs, equipping them with essential resources,
                  steadfast support, and expert guidance required to excel in
                  their business ventures.
                </Typography.Text>
              </Row>
            </Col>
            <Col
              xs={24}
              lg={10}
              style={{
                textAlign: "center",
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                borderTop: "3px solid #dadada",
              }}
            >
              <Row>
                <Typography.Title
                  className="fontFamily2 textCenter"
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                  Our platform aspires to
                </Typography.Title>
              </Row>

              <Row>
                <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "18px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                  evolve into a thriving entrepreneurial ecosystem, offering not
                  only practical assistance but also emotional support,
                  motivation, and a profound sense of belonging to entrepreneurs
                  as they pursue their entrepreneurial ambitions. 
                </Typography.Text>
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
          paddingBottom: "150px",
        }}
      >
        <Col xs={24} lg={12} style={{ textAlign: "left" }}>
          <Row>
            <Typography.Text
              className="fontFamily1 "
              style={{
                fontSize: "20px",
                color: "#424242",
                textAlign: "left",
                fontStyle: "italic",
              }}
            >
              “In the deep weeds of starting out a business, especially when you
              are mired in the details of formulating a plan and get
              discouraged, it can be easy to think about quitting. I thought
              about it too, until I realized the fluidity of the entrepreneurial
              journey and how it delivers failure and success both, in varying
              degrees of intensity. With the following thought,I decided to
              create a platform, where new role-models and business models are
              simultaneously created. Where entrepreneurs connect, collaborate
              and eventually succeed in their ventures."
            </Typography.Text>
          </Row>
          <br />
          <Row gutter={10} style={{ display: "flex", alignItems: "center" }}>
            <Col>
              <Avatar size={64} src={"/images/author.png"} />
            </Col>
            <Col>
              <Typography.Title
                className="fontFamily1 "
                style={{
                  fontSize: "18px",
                  color: "#424242",
                  textAlign: "left",
                  margin: 5,
                }}
              >
                Raamish Lutfi
              </Typography.Title>
              <Typography.Text
                className="fontFamily1 "
                style={{
                  fontSize: "14px",
                  color: "#424242",
                  textAlign: "left",
                  margin: 5,
                }}
              >
                Founder and CEO, Surkush{" "}
              </Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* section 7 */}
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
          <Row>
            <Col xs={24} lg={12}>
              <Typography.Title
                className="fontFamily1 "
                style={{
                  fontSize: "38px",
                  color: "#424242",
                  textAlign: "left",
                  margin: 5,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Case Studies <FiArrowDownRight />
              </Typography.Title>
            </Col>
            <Col
              xs={24}
              lg={12}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Typography.Text
                className="fontFamily1 "
                style={{
                  fontSize: "18px",
                  color: "#424242",
                  textAlign: "right",
                }}
              >
                See all
              </Typography.Text>
            </Col>
          </Row>
          <br />
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
                  className="fontFamily2 textCenter"
                  style={{
                    fontSize: "30px",
                    color: "black",
                    textAlign: "center",
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

       {/* section 7 */}
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
          <Row>
           
              <Typography.Title
                className="fontFamily2 "
                style={{
                  fontSize: "48px",
                  color: "#222",
                  textAlign: "left",
                  margin: 5,
                  fontWeight:700,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                How We Became the Talk of Town
              </Typography.Title>
              </Row><Row>
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
  
          <Row gutter={0}>
          <Col xs={24} lg={3} style={{display:'flex',alignItems:'flex-start', justifyContent:'center',flexDirection:'column'}}>
              
              <Row style={{ padding: "20px 10px 0 10px" }}>
                <div className="arrowButton"  onClick={(e) => carousel?.current?.slideNext(e)}>
                <BsArrowRight />
                </div>
             
              </Row>
              <Row style={{ padding: "0 10px 0 10px" }}>
              <div className="arrowButton" onClick={(e) => carousel?.current?.slidePrev(e)}>
                <BsArrowLeft/>
                </div>
              </Row>
             
            </Col>
            <Col xs={24} lg={21}>
            <AliceCarousel
      key="carousel"
      mouseTracking
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      ref={carousel}
    >
      {items.map((subItem,subIndex) => {
        return(<div style={{padding:'20px'}}>
         <Row  style={{
                    border: "1px solid #868686",
                    borderRadius: "32px",
                    height: "400px",
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
            
            
            <hr style={{margin:"40px 0"}} />
       

            <Row gutter={10} style={{ display: "flex", alignItems: "center" }}>
            <Col>
              <Avatar size={50} src={"/images/author2.png"} />
            </Col>
            <Col>
              <Typography.Title
                className="fontFamily1 "
                style={{
                  fontSize: "16px",
                  color: "#424242",
                  textAlign: "left",
                  margin: 5,
                }}
              >
               Client Name
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
                Position, Business name
              </Typography.Text>
            </Col>
          </Row>
            </Col>
              </Row>
            
            
        </div>)
      })}

    </AliceCarousel>

            </Col>
          
          </Row>
        </Col>
      </Row>

    </Layout>
  );
}

export default Home;
