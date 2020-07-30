import React from 'react'
import Form from '../components/Form/Form'
import Head from '../components/Head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LogoContainer from "../components/Logo";
import {css} from '@emotion/core';

const formDesign = () => {
    return (
        <> 
        <head>
            <Head/>
        </head>
        <body>
            <div>
                <Navbar/>
            </div>
            
            <main>
                <div className="container">
                    <div className="panel panel-default">
                        <div className=" panel-body">
                            <div className= "page-Head" css={css` margin-top:0px; `}>
                                <LogoContainer/>
                            </div>
                            <Form/>
                        </div>
                    </div>
                </div>
                
            </main>
            <Footer/>
        </body>
        </>
     );
} 
export default formDesign