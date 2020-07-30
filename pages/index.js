import React from 'react';
import { css } from '@emotion/core';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from '../components/Head';
import LogoContainer from '../components/Logo';
import Login from '../components/Form/Login';

const Logging = () => {
  return (
    <>
      <head>
        <Head />
      </head>
      <body>
        <main>
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="page-header" css={css` margin-top:0px; `}>
                  <LogoContainer />
                  <h2>Login Page:</h2>
                </div>
                <Login/>
                <div className="form-group">
                  <label for="register" className="col-sm-2 control-label" >Sign up:</label>
                  <Link href="/signup">
                      <button type="button" className="btn btn-primary" css={css`margin-top: 10px;`}>Sign Up</button>
                  </Link>
              </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </>
  );
}

export default Logging;