import React from 'react';
import {Global, css} from '@emotion/core';
import Header from './Header'
import Head from 'next/head';

const Layout = props => {
    return ( 
        <>  
            
            <Head>
                <html lang='es' />
                <title>FIMED</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" 
                integrity="sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI=" 
                crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" 
                rel="stylesheet"/>
                <link href = "/static/css/style.css" rel="stylesheet"/>
            </Head>

            <Header />
            
            
            
            <main>
                {props.children}
            </main>
        </>
     );
}
 

export default Layout;