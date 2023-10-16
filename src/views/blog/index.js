import React, { useRef,useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MainButton from "../../components/MainButton";
import {
  Col,
  Row,
  Tabs,
  Image,
  Typography,
  Layout,
  Avatar,
  Button,
} from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { FiArrowDownRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'


function Blogs() {

  useEffect(() => {
    AOS.init({disable: 'mobile',mirror:true});
    AOS.refresh();
  }, []);


  const navigate = useNavigate()
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "View All",
    },
    {
      key: "2",
      label: "Design",
    },
    {
      key: "3",
      label: "Development",
    },
    {
      key: "4",
      label: "Marketing",
    },
    {
      key: "5",
      label: "Technology",
    },
    {
      key: "6",
      label: "Web 3.0",
    },
    {
      key: "7",
      label: "Startups",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
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
        <Col xs={20} lg={12}>
        <div data-aos="zoom-in" data-aos-easing="ease-in-sine">
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography.Title
              className="fontFamily2 "
              style={{
                fontSize: "50px",
                color: "#222",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "68px",
                marginBottom: 5,
                zIndex: 2,
                marginTop: 0,
              }}
            >
              News & Insights
            </Typography.Title>
          </Row>
          <br />
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
          <Typography.Text
            className="fontFamily1 textCenter"
            style={{
              fontSize: "18px",
              color: "#424242",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            Immerse yourself in our blog page, where we share valuable insights,
            industry trends, and expert advice to empower your business. Stay
            updated with the latest strategies, gain fresh perspectives, and
            fuel your entrepreneurial journey with our curated content.
          </Typography.Text>
          </Row>
          </div>
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
          padding: "50px 0 50px",
        }}
      >
        <Tabs
          indicatorSize={0}
          className="blogTabs"
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
      </Row>

      {/* section 5 */}
      <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "50px",
          position: "relative",
        }}
      >
        <Col xs={20} lg={20}>
          <Row
            style={{
              border: "1px solid #dadada",
              borderRadius: 25,
              overflow: "hidden",
            }}
          >
            <Col
              xs={24}
              lg={12}
              style={{
                textAlign: "left",
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                background:"#f5fcff"
              }}
            >
              <div data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="200">
              <Image
                preview={false}
                alt={"Failed to load image"}
                height={500}
                width={"100%"}
                style={{ objectFit: "cover" }}
                src="/images/blog0.png"
              />
              </div>
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

                padding: "30px",
              }}
            >
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  style={{
                    color: "white",
                    borderRadius: 0,
                    background: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                  }}
                >
                  Technology
                </Button>
                &emsp;
                <Typography.Text
                  className="fontFamily2 "
                  style={{
                    fontSize: "12px",

                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                  5 mins ago
                </Typography.Text>
              </Row>

              <Row>
                <Typography.Title
                  className="fontFamily2 "
                  style={{
                    fontSize: "35px",
                    fontWeight: 700,
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                  How To Collaborate With Local Influencers To Drive Global...
                </Typography.Title>
              </Row>

              <Row>
                <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "16px",
                    color: "#424242",
                    textAlign: "left",
                  }}
                >
                  With the mountain of competition in B2B, establishing trust
                  with potential buyers is no easy feat. Unlike in ecommerce,
                  where transactions are typically swift, and purchases are at
                  far lower prices, B2B sales cycles are lengthier and involve
                  much higher...
                </Typography.Text>
              </Row>

              <br />
              <br />
              <Row>
                <Button
                  style={{
                    color: "grey",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                  }}
                >
                  Read More &nbsp; <IoIosArrowForward />
                </Button>
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
          paddingBottom: "50px",
        }}
      >
        <Col xs={20} lg={20} style={{ textAlign: "left" }}>
          <Row gutter={[25,25]}>
            <Col xs={24} lg={8} onClick={() => { window.scrollTo({
                      top: 0,
                      behavior: "smooth", // You can use 'auto' for instant scrolling
                    }); navigate("/blog/5")}}>
              <Row>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  style={{
                    border: "1px solid #f2f2f2",
                    borderRadius: "24px 24px 0px 0px",
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src="/images/news1.png"
                  width={"100%"}
                />
              </Row>
              <div
                style={{
                  border: "1px solid #dadada",
                  padding: 0,
                  borderRadius: "0 0 24px 24px",
                  padding: "20px",
                }}
              >
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      color: "white",
                      borderRadius: 6,
                      background: "#1C2854",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    Design
                  </Button>
                  &emsp;
                  <Typography.Text
                    className="fontFamily2 "
                    style={{
                      fontSize: "12px",

                      color: "#424242",
                      textAlign: "left",
                    }}
                  >
                    5 mins read
                  </Typography.Text>
                </Row>

                <Row>
                  <Typography.Title
                    className="fontFamily2 "
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#424242",
                      textAlign: "left",
                    }}
                  >
                    12 inspiring graphic design trends for 2023
                  </Typography.Title>
                </Row>

                <Row>
                  <Typography.Text
                    className="fontFamily1 "
                    style={{
                      fontSize: "16px",
                      color: "#424242",
                      textAlign: "left",
                    }}
                  >
                    The 2023 graphic design trends have arrived for another year
                    of aesthetic revivals and new experiments in creativity.
                  </Typography.Text>
                </Row>

                <br />
                <Row>
                  <Button
                    style={{
                      color: "grey",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    Read More &nbsp; <IoIosArrowForward />
                  </Button>
                </Row>
              </div>
            </Col>
            <Col xs={24} lg={8}>
              <Row>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  style={{
                    border: "1px solid #f2f2f2",
                    borderRadius: "24px 24px 0px 0px",
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src="/images/news2.png"
                  width={"100%"}
                />
              </Row>
              <div
                style={{
                  border: "1px solid #dadada",
                  padding: 0,
                  borderRadius: "0 0 24px 24px",
                  padding: "20px",
                }}
              >
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      color: "white",
                      borderRadius: 6,
                      background: "#1C2854",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    Design
                  </Button>
                  &emsp;
                  <Typography.Text
                    className="fontFamily2 "
                    style={{
                      fontSize: "12px",

                      color: "#424242",
                      textAlign: "left",
                    }}
                  >
                    5 mins read
                  </Typography.Text>
                </Row>

                <Row>
                  <Typography.Title
                    className="fontFamily2 "
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#424242",
                      textAlign: "left",
                    }}
                  >
                    12 inspiring graphic design trends for 2023
                  </Typography.Title>
                </Row>

                <Row>
                  <Typography.Text
                    className="fontFamily1 "
                    style={{
                      fontSize: "16px",
                      color: "#424242",
                      textAlign: "left",
                    }}
                  >
                    The 2023 graphic design trends have arrived for another year
                    of aesthetic revivals and new experiments in creativity.
                  </Typography.Text>
                </Row>

                <br />
                <Row>
                  <Button
                    style={{
                      color: "grey",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    Read More &nbsp; <IoIosArrowForward />
                  </Button>
                </Row>
              </div>
            </Col>
            <Col xs={24} lg={8}>
              <Row>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  style={{
                    border: "1px solid #f2f2f2",
                    borderRadius: "24px 24px 0px 0px",
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src="/images/news3.png"
                  width={"100%"}
                />
              </Row>
              <div
                style={{
                  border: "1px solid #dadada",
                  padding: 0,
                  borderRadius: "0 0 24px 24px",
                  padding: "20px",
                }}
              >
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      color: "white",
                      borderRadius: 6,
                      background: "#1C2854",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    Design
                  </Button>
                  &emsp;
                  <Typography.Text
                    className="fontFamily2 "
                    style={{
                      fontSize: "12px",

                      color: "#424242",
                      textAlign: "left",
                    }}
                  >
                    5 mins read
                  </Typography.Text>
                </Row>

                <Row>
                  <Typography.Title
                    className="fontFamily2 "
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#424242",
                      textAlign: "left",
                    }}
                  >
                    12 inspiring graphic design trends for 2023
                  </Typography.Title>
                </Row>

                <Row>
                  <Typography.Text
                    className="fontFamily1 "
                    style={{
                      fontSize: "16px",
                      color: "#424242",
                      textAlign: "left",
                    }}
                  >
                    The 2023 graphic design trends have arrived for another year
                    of aesthetic revivals and new experiments in creativity.
                  </Typography.Text>
                </Row>

                <br />
                <Row>
                  <Button
                    style={{
                      color: "grey",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    Read More &nbsp; <IoIosArrowForward />
                  </Button>
                </Row>
              </div>
            </Col>

            <Col xs={24} lg={8}>
              <Row>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  style={{
                    border: "1px solid #f2f2f2",
                    borderRadius: "24px 24px 0px 0px",
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src="/images/news4.png"
                  width={"100%"}
                />
              </Row>
              <div
                style={{
                  border: "1px solid #dadada",
                  padding: 0,
                  borderRadius: "0 0 24px 24px",
                  padding: "20px",
                }}
              >
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      color: "white",
                      borderRadius: 6,
                      background: "#1C2854",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    Design
                  </Button>
                  &emsp;
                  <Typography.Text
                    className="fontFamily2 "
                    style={{
                      fontSize: "12px",

                      color: "#424242",
                      textAlign: "left",
                    }}
                  >
                    5 mins read
                  </Typography.Text>
                </Row>

                <Row>
                  <Typography.Title
                    className="fontFamily2 "
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#424242",
                      textAlign: "left",
                    }}
                  >
                    12 inspiring graphic design trends for 2023
                  </Typography.Title>
                </Row>

                <Row>
                  <Typography.Text
                    className="fontFamily1 "
                    style={{
                      fontSize: "16px",
                      color: "#424242",
                      textAlign: "left",
                    }}
                  >
                    The 2023 graphic design trends have arrived for another year
                    of aesthetic revivals and new experiments in creativity.
                  </Typography.Text>
                </Row>

                <br />
                <Row>
                  <Button
                    style={{
                      color: "grey",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    Read More &nbsp; <IoIosArrowForward />
                  </Button>
                </Row>
              </div>
            </Col>

            <Col xs={24} lg={8}>
              <Row>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  style={{
                    border: "1px solid #f2f2f2",
                    borderRadius: "24px 24px 0px 0px",
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src="/images/news5.png"
                  width={"100%"}
                />
              </Row>
              <div
                style={{
                  border: "1px solid #dadada",
                  padding: 0,
                  borderRadius: "0 0 24px 24px",
                  padding: "20px",
                }}
              >
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      color: "white",
                      borderRadius: 6,
                      background: "#1C2854",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    Design
                  </Button>
                  &emsp;
                  <Typography.Text
                    className="fontFamily2 "
                    style={{
                      fontSize: "12px",

                      color: "#424242",
                      textAlign: "left",
                    }}
                  >
                    5 mins read
                  </Typography.Text>
                </Row>

                <Row>
                  <Typography.Title
                    className="fontFamily2 "
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#424242",
                      textAlign: "left",
                    }}
                  >
                    12 inspiring graphic design trends for 2023
                  </Typography.Title>
                </Row>

                <Row>
                  <Typography.Text
                    className="fontFamily1 "
                    style={{
                      fontSize: "16px",
                      color: "#424242",
                      textAlign: "left",
                    }}
                  >
                    The 2023 graphic design trends have arrived for another year
                    of aesthetic revivals and new experiments in creativity.
                  </Typography.Text>
                </Row>

                <br />
                <Row>
                  <Button
                    style={{
                      color: "grey",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    Read More &nbsp; <IoIosArrowForward />
                  </Button>
                </Row>
              </div>
            </Col>

            <Col xs={24} lg={8}>
              <Row>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  style={{
                    border: "1px solid #f2f2f2",
                    borderRadius: "24px 24px 0px 0px",
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src="/images/news6.png"
                  width={"100%"}
                />
              </Row>
              <div
                style={{
                  border: "1px solid #dadada",
                  padding: 0,
                  borderRadius: "0 0 24px 24px",
                  padding: "20px",
                }}
              >
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      color: "white",
                      borderRadius: 6,
                      background: "#1C2854",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    Design
                  </Button>
                  &emsp;
                  <Typography.Text
                    className="fontFamily2 "
                    style={{
                      fontSize: "12px",

                      color: "#424242",
                      textAlign: "left",
                    }}
                  >
                    5 mins read
                  </Typography.Text>
                </Row>

                <Row>
                  <Typography.Title
                    className="fontFamily2 "
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#424242",
                      textAlign: "left",
                    }}
                  >
                    12 inspiring graphic design trends for 2023
                  </Typography.Title>
                </Row>

                <Row>
                  <Typography.Text
                    className="fontFamily1 "
                    style={{
                      fontSize: "16px",
                      color: "#424242",
                      textAlign: "left",
                    }}
                  >
                    The 2023 graphic design trends have arrived for another year
                    of aesthetic revivals and new experiments in creativity.
                  </Typography.Text>
                </Row>

                <br />
                <Row>
                  <Button
                    style={{
                      color: "grey",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    Read More &nbsp; <IoIosArrowForward />
                  </Button>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
}

export default Blogs;
