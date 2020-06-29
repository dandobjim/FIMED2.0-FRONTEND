import React from 'react';
import Head from 'next/head';
import {css} from '@emotion/core';
import Footer from '../public/static/WEB-INF/Footer';
import Header_loging from '../components/layouts/Header_loging'
import Link from 'next/link';
import HeadLoging from '../public/static/WEB-INF/HeadLoging'


const Loging = () => {
  return ( 
    <>
      
      <HeadLoging/>

      <body>
        <div className = "container">
          <div className="panel panel-default">
            <div className="page-header" css = {css` margin-top:0px; `}></div>
            <Header_loging/> 
             
            <div class="form-group">
              <label for="username" class="col-sm-2 control-label">Username</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="username" name="username"/>
              </div>
            </div>
            
            <div class="form-group">
              <label for="password" class="col-sm-2 control-label">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="password" name="password"/>
              </div>
            </div>

              <div className="form-group">
                <label for="validate" className="col-sm-2 control-label" >Sign In:</label>
                <button  type = "submit" className= "btn btn-primary" css={css`margin-top: 10px;`}>Sign In</button>
              </div>
              <div className="form-group">
                <label for="register" className="col-sm-2 control-label" >Sign up:</label>
                <Link href="/registerUser">
                  <button  type = "button" className= "btn btn-primary" css={css`margin-top: 10px;`}>Sign Up</button>
                </Link>
              </div>
          </div>
          <form>


          </form>

          

        </div>
        <Footer/>
        
      </body>
    </>
   );
}
 
export default Loging;