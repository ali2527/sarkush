import { Col, Image, Typography, Layout, Row, List, Input, Button } from "antd";
import {
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoInstagram,
} from "react-icons/bi";
import { useNavigate } from "react-router";
import { BsArrowRightShort, BsArrowLeft, BsArrowUp } from "react-icons/bs";

const { Footer } = Layout;
const { TextArea } = Input;

const ClientFooter = () => {
  const navigate = useNavigate();
  return (
    <Footer
      className="footer"
      style={{ height: "auto", padding: "0", background: "white" }}
    >
      <Row
        style={{
          justifyContent: "center",
          padding: "0 10px",
        }}
      >
        <Col xs={20} md={22} style={{ borderTop: "1px solid #868686" }}>
          <Row style={{ justifyContent: "center" }}>
            <Col
              xs={24}
              md={5}
              style={{ padding: "30px 0", fontFamily: "Lato" }}
              className={"footer-column"}
            >
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Col span={4}>
                  <Image
                    preview={false}
                    alt={"Failed to load image"}
                    height={70}
                    width={35}
                    src="/images/logo.png"
                    style={{ maxWidth: 200 }}
                    onClick={() => navigate("/")}
                  />
                </Col>
                <Col span={20}>
                  <Typography.Text
                    className="fontFamily1 "
                    style={{
                      fontSize: "14px",
                      color: "#424242",
                      textAlign: "left",
                      display: "inline-flex",
                    }}
                  >
                    Fueling Your Startup's Success with Innovative Digital
                    Marketing and Design Solutions
                  </Typography.Text>
                </Col>
              </Row>
            </Col>

            <Col
              xs={24}
              md={4}
              style={{
                padding: "30px 0",
                fontFamily: "Lato",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className={"footer-column"}
            >
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "12px",
                    color: "#424242",
                    textAlign: "left",
                    display: "inline-flex",
                    marginBottom: "10px",
                  }}
                >
                  INSTAGRAM
                </Typography.Text>
              </Row>

              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "12px",
                    color: "#424242",
                    textAlign: "left",
                    display: "inline-flex",
                  }}
                >
                  LINKDLIN
                </Typography.Text>
              </Row>
            </Col>

            <Col
              xs={24}
              md={4}
              style={{
                padding: "30px 0",
                fontFamily: "Lato",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className={"footer-column"}
            >
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "12px",
                    color: "#424242",
                    textAlign: "left",
                    display: "inline-flex",
                    marginBottom: "10px",
                  }}
                  onClick={() => navigate("/")}
                >
                  HOME
                </Typography.Text>
              </Row>

              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "12px",
                    color: "#424242",
                    textAlign: "left",
                    display: "inline-flex",
                  }}
                  onClick={() => navigate("/about-us")}
                >
                  ABOUT US
                </Typography.Text>
              </Row>
            </Col>

            <Col
              xs={24}
              md={4}
              style={{
                padding: "30px 0",
                fontFamily: "Lato",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className={"footer-column"}
            >
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "12px",
                    color: "#424242",
                    textAlign: "left",
                    display: "inline-flex",
                    marginBottom: "10px",
                  }}
                  onClick={() => navigate("/blog")}
                >
                  BLOG
                </Typography.Text>
              </Row>

              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "12px",
                    color: "#424242",
                    textAlign: "left",
                    display: "inline-flex",
                  }}
                  onClick={() => navigate("/contact-us")}
                >
                  CONNECT WITH US
                </Typography.Text>
              </Row>
            </Col>

            <Col
              xs={24}
              md={5}
              style={{
                padding: "30px 0",
                fontFamily: "Lato",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className={"footer-column"}
            >
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Col>
                  <Typography.Text
                    className="fontFamily1 "
                    style={{
                      fontSize: "12px",
                      color: "#424242",
                      textAlign: "left",
                      display: "inline-flex",
              
                    }}
                  >
                    (720) 734-7017
                    <br />
                   1007 N Orange St. 4th Floor Suite
                    <br />
                    #2536, Wilmgton, Delaware 19801,
                    <br/>
                    United States
                    <br />
                    raamishlutfi@Surkush.com
                  </Typography.Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          justifyContent: "center",
          padding: "0 10px",
        }}
      >
        <Col xs={24} md={22}>
          <Row style={{ justifyContent: "flex-end" }}>
            <Col
              xs={0}
              md={10}
              style={{ padding: "30px 0", fontFamily: "Lato" }}
              className={"footer-column"}
            />

            <Col
              xs={24}
              md={4}
              style={{
                padding: "30px 0",
                fontFamily: "Lato",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className={"footer-column"}
            >
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="arrowButton2"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth", // You can use 'auto' for instant scrolling
                    })
                  }
                >
                  <BsArrowUp />
                </div>
              </Row>
            </Col>
            <Col
              xs={24}
              md={10}
              style={{
                padding: "30px 0",
                fontFamily: "Lato",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
              className={"footer-column"}
            >
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "14px",
                    color: "#424242",
                    textAlign: "left",
                    display: "inline-flex",
                  }}
                >
                  CONTACT
                </Typography.Text>
                &emsp;&emsp;&emsp;
                <Typography.Text
                  className="fontFamily1 "
                  style={{
                    fontSize: "14px",
                    color: "#424242",
                    textAlign: "left",
                    display: "inline-flex",
                  }}
                >
                  LEGAL
                </Typography.Text>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Footer>
  );
};

export default ClientFooter;
