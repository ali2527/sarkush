import { useEffect, useState } from 'react'
import { Layout, Modal, Image } from 'antd';
import ClientHeader from './ClientHeader';
import ClientFooter from './ClientFooter';
import { SITE_NAME } from '../../constants';




const ClientLayout = ({ children, head, footer= true }) => {
    const [loading,setLoading] = useState(true);
    const [animationClass, setAnimationClass] = useState('');
    const [scrollY, setScrollY] = useState(0);


    useEffect(() => {
        setTimeout(() =>{
            setAnimationClass('animate');
        //   setLoading(false)
      },300)

        setTimeout(() =>{
            // setAnimationClass('animate');
          setLoading(false)
      },1000)
  
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      // Attach the event listener when the component mounts
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [])



    let title = head?.title ? head?.title : ""
    if (title) {
        title += ` - ${SITE_NAME}`
    }
    else {
        title = SITE_NAME
    }

    if(loading) {
        return(<div style={{height:"100vh",overflow:'hidden',display:'flex', justifyContent:'center' , alignItems:'center',flexDirection:'column'}}>
<svg className={`centered-svg ${animationClass}`} xmlns="http://www.w3.org/2000/svg" width="86" height="172" viewBox="0 0 86 172" fill="none">
  <path d="M0 86C2.674 133.97 40.1639 172 86 172V86H0Z" fill="#023A7B"/>
 
</svg>
<svg className={`centered-svg2 ${animationClass}`} xmlns="http://www.w3.org/2000/svg" width="86" height="172" viewBox="0 0 86 172" fill="none">
  <path d="M0 0C2.674 47.9699 40.1639 86 86 86V0H0Z" fill="#023A7B"/>
</svg>

        </div>)
    }else{
        return (
            <Layout style={{ backgroundColor: "#fff", scrollBehavior: "smooth", position:'relative' }}>
                <ClientHeader isScroll={scrollY > 100 ? true : false}  />
                <span style={{marginTop:"100px"}}>
                {children}
                </span>
              {footer && <ClientFooter />}
    
               
               
            </Layout>
        );
    }
 
}

export default ClientLayout