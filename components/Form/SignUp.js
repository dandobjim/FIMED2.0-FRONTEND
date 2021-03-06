import React, { useState } from "react";
import { CONSTANTS } from "../../shared/Constants";
import { css } from "@emotion/core";
import Link from "next/link";
import Router from "next/router";
import Recaptcha from "react-recaptcha";

const FormSignUp = () => {
  const [data, setData] = useState({
    username: "",
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [verified, setVerified] = useState(false);

  const recaptchaLoaded = () => {
    console.log("captcha loaded");
  };

  const verifiedLoadCaptcha = () => {
    setVerified(true);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation
    if (verified == true) {
      fetch(`${CONSTANTS.API.url}/api/v2/auth/register`, {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          alert("User created satisfactory, redirecting to login page");
          return res.json();
        })
        .then((res) => {
          Router.push("/");
        })
        .catch((err) => {
          console.log(err);
          console.log(`Error ${err.status}`);
          err.json().then((data) => {
            data.detail.map((item, index) => {
              alert(item.msg);
            });
          });
        });
    } else {
      alert("Please verify that you are not a robot");
    }
  };

  const prueba = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <form
        id="sign-up"
        method="post"
        encType="multipart/form-data"
        acceptCharset="UTF-8"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <div className="form-group">
          <label htmlFor="name" className="col-sm-2 control-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>
        </div>
        <br />
        <div className="form-group">
          <label for="name" className="col-sm-2 control-label">
            Surname
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="surname"
              name="surname"
              required
            />
          </div>
        </div>
        <br />
        <div className="form-group">
          <label for="email" className="col-sm-2 control-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>
        </div>
        <br />
        <div className="form-group">
          <label for="username" className="col-sm-2 control-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              required
            />
          </div>
        </div>
        <br />
        <div className="form-group">
          <label for="password" className="col-sm-2 control-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
            />
          </div>
        </div>
        <br />
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <input
              type="submit"
              className="btn-sm btn-primary button-field"
              css={css`
                margin-top: 7px;
              `}
              value="Sign Up"
            />
            <div
              css={css`
                margin-top: 10px;
              `}
            >
              <Recaptcha
                sitekey="6LdB9eMZAAAAAKjyP8lF-LsJi0gtnOOAFs6s-yZE"
                render="explicit"
                onloadCallback={recaptchaLoaded}
                verifyCallback={verifiedLoadCaptcha}
              />
            </div>
          </div>
        </div>
      </form>
      <br />
      <br />
      <br />
      <form>
        <div className="form-group">
          <a
            css={css`
              font-family: bold;
            `}
          >
            Come back to Login page:{" "}
          </a>
          <Link href="/">
            <button
              type="submit"
              className="btn btn-primary"
              css={css`
                margin-top: 7px;
                margin-left: 7px;
              `}
            >
              Go to login
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default FormSignUp;
