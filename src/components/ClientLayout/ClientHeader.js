import { useState } from "react";
import { Image } from "antd";
import { MdMenu } from "react-icons/md";
import { Layout, Row, Col, Menu, Button, Modal, Drawer, Typography, Alert } from "antd";
import { useNavigate } from "react-router";
import MainButton from "../../components/MainButton"
import "../../App.css"
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
                width={35}
                src="/images/logo.png"
                style={{ maxWidth: 200 }}
                onClick={()=> navigate("/")}
              />
            
            </Col>
            <Col
              xs={0}
              md={16}
              style={{
                justifyContent: "center",
                alignItems: "center",
                display:window.innerWidth < 800 ? "none" : 'flex'
        
              }}
              
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
              style={{ textAlign: "right", display:window.innerWidth < 800 ? "none" : 'flex' }}
              className="site-header-logo hide-on-phone"
            >
            <MainButton onClick={() => navigate("/connect-with-us")} className='fontFamily1' style={{background:"#1C2854", border:'none', borderRadius:"100px",padding:"14px 35px",height:"auto", fontSize:"16px"}} size="large">
              Connect with us
            </MainButton>
            
            </Col>
            <Col
              xs={4}
              md={0}
              style={{ textAlignLast: "right", alignItems:"center", justifyContent: "right", display:window.innerWidth < 800 ? "flex" : 'none'   }}

            >
           
                
              <MdMenu
                style={{ fontSize:50, color: "#1c2854" }}
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
        style={{backgroundColor:"#1c2854"}}
        key={"drawer"}
      >

        <Menu
          style={{
            fontSize: 24,
            fontWeight: 500,
            backgroundColor: "#1c2854",
            color:"white"
          }}
          mode="inline"
          className="header-menu-mobile "
        >
     <Menu.Item key="home" style={{padding:"30px 0"}} className="hover"   onClick={()=> {setVisible(false); navigate("/")}}>
                  Home
                </Menu.Item>

                <Menu.Item key="about" style={{padding:"30px 0"}} className="hover"   onClick={()=>{setVisible(false); navigate("/about-us")}}>
                  About Us
                </Menu.Item>
               <Menu.Item key="blog" style={{padding:"30px 0"}} className="hover"   onClick={()=> {setVisible(false); navigate("/blog")}}>
                  Blog
                </Menu.Item>
              
                <Menu.Item key="contact_us" style={{padding:"30px 0"}} className="hover"   onClick={()=> {setVisible(false); navigate("/contact-us")}}>
                  Contact Us
                </Menu.Item>
                <Menu.Item key="connect_with_us"  style={{padding:"30px 0"}} className="hover"   onClick={()=> {setVisible(false); navigate("/connect-with-us")}}>
                  Connect with Us
                </Menu.Item>
        </Menu>
        <br/><br/>
       
      </Drawer>




    </Header>

    
  );
};

export default ClientHeader;
