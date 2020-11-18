import React, { useState } from "react";
import { css } from "@emotion/core";
import { CONSTANTS } from "../../shared/Constants";
import Link from "next/link";
import Router from "next/router";
import Cookies from "js-cookie";
import Recaptcha from "react-recaptcha";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [verified, setVerified] = useState(false);

  const recaptchaLoaded = () => {
    console.log("captcha loaded");
  };

  const verifiedLoadCaptcha = () => {
    setVerified(true);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (verified == true) {
      let formData = new URLSearchParams();
      formData.append("username", user.username);
      formData.append("password", user.password);

      fetch(`${CONSTANTS.API.url}/api/v2/auth/login`, {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*, ",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      })
        .then((res) => {
          if (!res.ok) {
            throw res;
          }

          return res.json();
        })
        .then((res) => {
          Cookies.set("fimedtk", res.access_token);
          Router.push("/home");
        })
        .catch((err) => {
          console.log(`Error ${err.status}`);
          if (err.status == 422) {
            err.json().then((user) => {
              user.detail.map((item, index) => {
                alert(item.msg);
              });
            });
          } else if (err.status == 401) {
            alert(
              "Usuario o contraseña erroneos, por favor intentelo de nuevo con las credenciales correctas"
            );
          } else {
            console.log("Error de autenticacion");
          }
        });
    } else {
      alert("Please verify that you are not a robot");
    }
  };

  return (
    <>
      <form
        id="login"
        method="post"
        encType="multipart/form-data"
        acceptCharset="UTF-8"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="username" className="col-sm-2 control-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="col-sm-2 control-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="validate" className="col-sm-2 control-label">
            Sign In:
          </label>
          <button
            type="submit"
            className="btn btn-primary"
            css={css`
              margin-top: 10px;
            `}
          >
            Sign In
          </button>
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
      </form>
    </>
  );
};

export default Login;
