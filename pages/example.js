import React, { useState } from "react";
import { css } from "@emotion/core";
import Footer from "../components/Footer";
import Head from "../components/Head";
import LogoContainer from "../components/Logo";
import Navbar from "../components/Navbar";
import { CONSTANTS } from "../shared/Constants";
import fetch from "node-fetch";
import Cookies from "js-cookie";
import { useUser } from "../lib/hooks/useUser";
import cookies from "next-cookies";

const example = ({ form }) => {
  const user = useUser({ redirectTo: "/" });

  const cookie = Cookies.get("fimedtk");

  return (
    <>
      <head>
        <Head />
      </head>

      <body>
        <Navbar />
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
                  <h2>Create Patient</h2>
                  <hr />
                  <div>
                    <form
                      id="crate-patient"
                      method="post"
                      encType="multipart/form-data"
                      onSubmit={handleSubmit}
                      onChange={handleChange}
                    >
                      <table className="table table-condensed table-striped">
                        {form.rows.map((s, index) => {
                          return (
                            <div className="row" key={index}>
                              <div className="col-md-6 col-md">
                                <label className="control-label">
                                  {s.name}
                                </label>
                                <input
                                  className="form-control"
                                  type={s.rtype}
                                  name={s.name}
                                ></input>
                              </div>
                            </div>
                          );
                        })}
                      </table>
                      <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                          <input
                            type="submit"
                            className="btn-sm btn-primary button-field"
                            css={css`
                              margin-top: 7px;
                            `}
                            value="Create Patient"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </>
  );
};

export async function getServerSideProps(ctx) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const allCookies = cookies(ctx);
  const res = await fetch(`${CONSTANTS.API.url}/api/v2/form/see_form`, {
    method: "GET",
    headers: { Authorization: `Bearer ${allCookies.fimedtk}` },
  });

  const form = await res.json();
  console.log(form)
  return {
    props: {
      form,
    },
  };
}

export default example;
