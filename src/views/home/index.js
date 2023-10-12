import React from "react";
import MainButton from "../../components/MainButton";
import { Col, Row, Image, Typography, Layout, Avatar } from "antd";
import { BsArrowRightShort, BsArrowDownRight } from "react-icons/bs";
import { FiArrowDownRight } from "react-icons/fi";

function Home() {
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
          <Row gutter={50}>
          <Col xs={24} lg={4} style={{display:'flex',alignItems:'flex-start', justifyContent:'center',flexDirection:'column'}}>
              
              <Row style={{ padding: "20px 10px 0 10px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">
  <g filter="url(#filter0_d_102_183)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M46 78C27.2247 78 12 62.779 12 44C12 25.2247 27.2247 10 46 10C64.7754 10 80 25.2247 80 44C80 62.779 64.7754 78 46 78Z" fill="white"/>
  </g>
  <path d="M43.5236 55.8651C44.1283 56.4877 45.1268 56.4909 45.7355 55.8723C46.325 55.2732 46.3281 54.313 45.7425 53.7101L37.862 45.596H59.404C60.2855 45.596 61 44.8814 61 44C61 43.1186 60.2855 42.404 59.404 42.404H37.862L45.74 34.3182C46.3278 33.7148 46.3286 32.7532 45.7417 32.1489C45.1308 31.5199 44.1209 31.5199 43.51 32.1489L32.6767 43.3033C32.2998 43.6913 32.2998 44.3087 32.6767 44.6967L43.5236 55.8651Z" fill="#868686"/>
  <defs>
    <filter id="filter0_d_102_183" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="6"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_183"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_183" result="shape"/>
    </filter>
  </defs>
</svg>
              </Row>
              <Row style={{ padding: "0 10px 0 10px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">
  <g filter="url(#filter0_d_102_180)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M46 78C64.7753 78 80 62.779 80 44C80 25.2247 64.7753 10 46 10C27.2246 10 12 25.2247 12 44C12 62.779 27.2246 78 46 78Z" fill="white"/>
  </g>
  <path d="M48.4764 55.8651C47.8717 56.4877 46.8732 56.4909 46.2645 55.8723C45.675 55.2732 45.6719 54.313 46.2575 53.7101L54.138 45.596H32.596C31.7145 45.596 31 44.8814 31 44C31 43.1186 31.7145 42.404 32.596 42.404H54.138L46.26 34.3182C45.6722 33.7148 45.6714 32.7532 46.2583 32.1489C46.8692 31.5199 47.8791 31.5199 48.49 32.1489L59.3233 43.3033C59.7002 43.6913 59.7002 44.3087 59.3233 44.6967L48.4764 55.8651Z" fill="#222222"/>
  <defs>
    <filter id="filter0_d_102_180" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="6"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_180"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_180" result="shape"/>
    </filter>
  </defs>
</svg>
              </Row>
             
            </Col>
            <Col xs={24} lg={10}>
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
            <Col xs={24} lg={10}>
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

    </Layout>
  );
}

export default Home;
