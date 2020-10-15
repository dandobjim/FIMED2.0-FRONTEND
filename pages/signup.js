import React, { Component } from "react";
import { css } from "@emotion/core";
import Footer from "../components/Footer";
import Head from "../components/Head";
import LogoContainer from "../components/Logo";
import SignUp from "../components/Form/SignUp";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      submitted: false,
    };
  }

  render() {
    const title = "Sign Up";
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
                  <div
                    className="page-header"
                    css={css`
                      margin-top: 0px;
                    `}
                  >
                    <LogoContainer />
                    <h2>Registration Page</h2>
                  </div>
                  <SignUp />
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </body>
      </>
    );
  }
}

export default Signup;
