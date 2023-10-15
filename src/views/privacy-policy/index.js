import React, { useRef } from "react";
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

function PrivacyPolicy() {
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
          padding: "100px",
          textAlign: "center",
        }}
      >
        <Col xs={24} lg={16}>
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
              Privacy Policy
            </Typography.Title>
          </Row>
          <br />
          <Typography.Text
            className="fontFamily1 textCenter"
            style={{
              fontSize: "18px",
              color: "#424242",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            At Surkush, we value your privacy and are committed to protecting your personal information. This
Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use
our services.
          </Typography.Text>
        </Col>
      </Row>
      <Row style={{ borderTop: "1px solid #dadada" }} />

      {/* section 5 */}
      <Row
        className="whiteBackground"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 0",
          position: "relative",
        }}
      >
        <Col xs={20} lg={20}>
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
              1. Information We Collect
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
              a. Personal Information: We may collect personal information such as your name, email address, and
phone number when you provide it to us voluntarily, for example when you sign up for an account or
contact us.

            </Typography.Text>
          </Row>
          <br/>
          <Row>
            <Typography.Text
              className="fontFamily1 "
              style={{
                fontSize: "18px",
                color: "#424242",
                textAlign: "left",
              }}
            >
             b. Log Data: We automatically collect certain information when you visit our website, including your IP
address, browser type, referring/exit pages, and the pages you access. We may also collect information
about your actions on the site.

            </Typography.Text>
          </Row>
          <br/>
          <Row>
            <Typography.Text
              className="fontFamily1 "
              style={{
                fontSize: "18px",
                color: "#424242",
                textAlign: "left",
              }}
            >
             c. Cookies: We use cookies and similar tracking technologies to collect information about your browsing
behavior. You can control or disable cookies through your browser settings

            </Typography.Text>
          </Row>

          <br />

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
             2. How We Use Your Information

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
              We use the information we collect for the following purposes:
            </Typography.Text>
          </Row>

      
          <ul>
            
          <li style={{margin:"10px 0"}}>
            <Typography.Text
              className="fontFamily1 "
              style={{
                fontSize: "18px",
                color: "#424242",
                textAlign: "left",
              }}
            >
             To provide, maintain, and improve our services.
            </Typography.Text>
            </li>
            <li style={{margin:"10px 0"}}>
            <Typography.Text
              className="fontFamily1 "
              style={{
                fontSize: "18px",
                color: "#424242",
                textAlign: "left",
              }}
            >
             To communicate with you, including responding to your inquiries and sending updates about our services.

            </Typography.Text>
            </li>
            <li style={{margin:"10px 0"}}>
            <Typography.Text
              className="fontFamily1 "
              style={{
                fontSize: "18px",
                color: "#424242",
                textAlign: "left",
              }}
            >
            To personalize your experience on our website.

            </Typography.Text>
            </li>
            <li style={{margin:"10px 0"}}>
            <Typography.Text
              className="fontFamily1 "
              style={{
                fontSize: "18px",
                color: "#424242",
                textAlign: "left",
              }}
            >
             To analyze usage patterns and improve our website and services
            </Typography.Text>
            </li>
            <li style={{margin:"10px 0"}}>
            <Typography.Text
              className="fontFamily1 "
              style={{
                fontSize: "18px",
                color: "#424242",
                textAlign: "left",
              }}
            >
             To comply with legal obligations and protect our rights.

            </Typography.Text>
            </li>
          </ul>
          <br />

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
   3. Data Sharing
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
    We may share your information in the following circumstances:

  </Typography.Text>
</Row>


<ul>
  
<li style={{margin:"10px 0"}}>
  <Typography.Text
    className="fontFamily1 "
    style={{
      fontSize: "18px",
      color: "#424242",
      textAlign: "left",
    }}
  >
   With trusted third-party service providers that assist us in providing and improving our services.

  </Typography.Text>
  </li>
  <li style={{margin:"10px 0"}}>
  <Typography.Text
    className="fontFamily1 "
    style={{
      fontSize: "18px",
      color: "#424242",
      textAlign: "left",
    }}
  >
   With trusted third-party service providers that assist us in providing and improving our services.


  </Typography.Text>
  </li>
  <li style={{margin:"10px 0"}}>
  <Typography.Text
    className="fontFamily1 "
    style={{
      fontSize: "18px",
      color: "#424242",
      textAlign: "left",
    }}
  >
  In response to a legal request or to protect our rights, privacy, safety, or property.

  </Typography.Text>
  </li>
  <li style={{margin:"10px 0"}}>
  <Typography.Text
    className="fontFamily1 "
    style={{
      fontSize: "18px",
      color: "#424242",
      textAlign: "left",
    }}
  >
  In connection with a merger, acquisition, or sale of assets.

  </Typography.Text>
  </li>
</ul>

          <br />
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
   4. Data Security

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
    We take reasonable measures to protect your personal information. However, please be aware that no
method of transmission over the internet or electronic storage is completely secure, and we cannot
guarantee the absolute security of your data
  </Typography.Text>
</Row>



<br />
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
  5. Your Choices


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
    You have the right to:
  </Typography.Text>
</Row>

<ul>
  
<li style={{margin:"10px 0"}}>
  <Typography.Text
    className="fontFamily1 "
    style={{
      fontSize: "18px",
      color: "#424242",
      textAlign: "left",
    }}
  >
   Access, update, or delete your personal information.


  </Typography.Text>
  </li>
  <li style={{margin:"10px 0"}}>
  <Typography.Text
    className="fontFamily1 "
    style={{
      fontSize: "18px",
      color: "#424242",
      textAlign: "left",
    }}
  >
   Opt out of receiving promotional communications from us.



  </Typography.Text>
  </li>
  <li style={{margin:"10px 0"}}>
  <Typography.Text
    className="fontFamily1 "
    style={{
      fontSize: "18px",
      color: "#424242",
      textAlign: "left",
    }}
  >
  Disable cookies in your browser.

  </Typography.Text>
  </li>
</ul>

<br />
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
6. Children's Privacy
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
    Our services are not intended for individuals under the age of 13. We do not knowingly collect personal
information from children.

  </Typography.Text>
</Row>
<br />
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
7. Changes to This Privacy Policy
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
    We may update this Privacy Policy from time to time to reflect changes in our practices. We will notify
you of any material changes through the website or other means.

  </Typography.Text>
</Row>

<br/>
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
8. Contact Us
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
   If you have any questions or concerns about this Privacy Policy, please contact us at
surkushsupport@gmail.com
  </Typography.Text>
</Row>

          <br />
        </Col>
      </Row>
    </Layout>
  );
}

export default PrivacyPolicy;
