import React from 'react';
import { css } from '@emotion/core';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from '../components/Head';
import LogoContainer from '../components/Logo';

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
                <div class="form-group">
                  <label for="username" class="col-sm-2 control-label">Username</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="username" name="username" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="password" class="col-sm-2 control-label">Password</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control" id="password" name="password" />
                  </div>
                </div>

                <div className="form-group">
                  <label for="validate" className="col-sm-2 control-label" >Sign In:</label>
                  <button type="submit" className="btn btn-primary" css={css`margin-top: 10px;`}>Sign In</button>
                </div>
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