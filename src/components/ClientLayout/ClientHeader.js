import { useState } from "react";
import { Image } from "antd";
import { MdMenu } from "react-icons/md";
import { Layout, Row, Col, Menu, Button, Modal, Drawer, Typography, Alert } from "antd";
import { useNavigate } from "react-router";
import MainButton from "../../components/MainButton"

const { Header } = Layout;

const ClientHeader = () => {
  const navigate = useNavigate()
  const [logoutModal, setLogoutModal] = useState(false);
  const [visible, setVisible] = useState(false);





  return (
    <Header
      style={{
        height: "auto",
        boxShadow:"0px 8px 9px 0px rgba(0, 0, 0, 0.05)",
        zIndex:20,
        padding: "20px",
        background: "white",
        scrollBehavior: "smooth",
      }}
    >
      <Row
        style={{
          padding: "5px 0",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col xs={24} md={21}>
          <Row
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Col
              xs={18}
              md={4}
              style={{ textAlign: "left" }}
              className="site-header-logo"
            >
              {/* <Link href={"/"}> */}
              <Image
                preview={false}
                alt={"Failed to load image"}
         
                height={70}
                src="/images/logo.png"
                style={{ maxWidth: 200 }}
                onClick={()=> navigate("/")}
              />
            
            </Col>
            <Col
              xs={0}
              md={16}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
        
              }}
              className="hide-on-phone"
            >
              <Menu
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  backgroundColor: "transparent",
                  width:"100%",
                  justifyContent:"center"
                }}
                mode="horizontal"
                className="header-menu"
              >
                <Menu.Item key="home" className="hover"   onClick={()=> navigate("/")}>
                  Home
                </Menu.Item>

                <Menu.Item key="about" className="hover"   onClick={()=> navigate("/about-us")}>
                  About Us
                </Menu.Item>
               <Menu.Item key="blog" className="hover"   onClick={()=> navigate("/blog")}>
                  Blog
                </Menu.Item>
              
                <Menu.Item key="contact_us" className="hover"   onClick={()=> navigate("/contact-us")}>
                  Contact Us
                </Menu.Item>
              </Menu>
          
            </Col>
            <Col
              xs={18}
              md={4}
              style={{ textAlign: "right" }}
              className="site-header-logo"
            >
            <MainButton className='fontFamily1' style={{background:"#1C2854", border:'none', borderRadius:"100px",padding:"14px 35px",height:"auto", fontSize:"16px"}} size="large">
              Connect with us
            </MainButton>
            
            </Col>
            <Col
              xs={4}
              md={0}
              style={{ textAlignLast: "right", justifyContent: "right" }}
              className="display-on-phone"
            >
           
                
              <MdMenu
                style={{ fontSize: 26, color: "white" }}
                onClick={()=> setVisible(true)}
                />
         
            </Col>
          </Row>
        </Col>
      </Row>

      <Drawer
        className="drawer"
        placement={"left"}
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        style={{backgroundColor:"#264067"}}
        key={"drawer"}
      >
         <Image
                preview={false}
                alt={"Failed to load image"}
                width={150}
                height={80}
                src="/images/logo-header 1.png"
                style={{ maxWidth: 200 }}
              />
              <br/><br/><br/>
        <Menu
          style={{
            fontSize: 18,
            fontWeight: 500,
            backgroundColor: "#264067",
            color:"white"
          }}
          mode="inline"
          className="header-menu-mobile "
        >
    <Menu.Item key="home" className="hover fontFamily1" >
                  Home
                </Menu.Item>
                <Menu.Item key="about" className="hover fontFamily1">
                  About
                </Menu.Item>
                <Menu.Item key="contact_us" className="hover fontFamily1">
                  Contact Us
                </Menu.Item>
        </Menu>
        <br/><br/>
        <Row gutter={20}>
          <Col span={12}>
          <Button
          block
                  style={{
                    padding: "0px 30px",
                    cursor: "pointer",
                  }}
                  
                  ghost
                  size="large"
                >
                  Login
                </Button>
          </Col>
          <Col span={12}>
          <Button
                  style={{
                    padding: "0px 30px",
                    cursor: "pointer",
                  }}
                  block
                  ghost
                  size="large"
                >
                  Register
                </Button>
          </Col>
        </Row>
      </Drawer>




    </Header>

    
  );
};

export default ClientHeader;
