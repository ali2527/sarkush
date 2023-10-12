import { useEffect, useState } from 'react'
import { Layout, Modal, message } from 'antd';
import ClientHeader from './ClientHeader';
import ClientFooter from './ClientFooter';
import { SITE_NAME } from '../../constants';




const ClientLayout = ({ children, head, footer= true }) => {



    let title = head?.title ? head?.title : ""
    if (title) {
        title += ` - ${SITE_NAME}`
    }
    else {
        title = SITE_NAME
    }

    return (
        <Layout style={{ backgroundColor: "#fff", scrollBehavior: "smooth", position:'relative' }}>
            {/* <Head>
                <title>{title}</title>
                <meta name="description" content={head?.description} />
                <meta name="robots" content="noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}
            <ClientHeader />
            {children}
          {footer && <ClientFooter />}

           
           
        </Layout>
    );
}

export default ClientLayout