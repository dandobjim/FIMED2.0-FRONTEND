import React from "react";
import Link from "next/link";
import { Global, css } from "@emotion/core";
import cookies from "next-cookies";
import router from "next/router";
import Cookies from "js-cookie";

let navCss = css`
  .active {
    background-color: #f5f5f5;
  }
  .dropbtn {
    background-color: #4caf50;
    color: white;
    padding: 12px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }
  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }
  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }
  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }
`;

const Navbar = () => {
  const logoutClick = (e) => {
    e.preventDefault();
    Cookies.remove("fimedtk");
    router.push("/");
  };

  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <Global styles={navCss} />
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link href="/home">
            <a
              className="navbar-brand"
              css={css`
                padding-top: 0 !important;
                padding-left: 15px !important;
              `}
            >
              <img
                src="/static/img/logo.png"
                css={css`
                  height: 40px;
                `}
              />
            </a>
          </Link>
        </div>
        <div
          className="collapse navbar-collapse"
          id="myNavbar"
          css={css`
            color: #d58512;
          `}
        >
          <ul className="nav navbar-nav">
            <li className="nav-link">
              <Link href="/home">
                <a>
                  <strong>Home</strong>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/createPatient">
                <a>
                  <strong>Add</strong>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/patientList">
                <a>
                  <strong>Search</strong>
                </a>
              </Link>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <strong>Analysis</strong>
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/heatmapPage">
                    <a>
                      <strong>HeatMap</strong>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/clusterheatmapPage">
                    <a>
                      <strong>Dendrogram + Heatmap</strong>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/grnPage">
                    <a>
                      <strong>Gene Regulatory Network</strong>
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <strong>About us</strong> <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/aboutUS">
                    <a>
                      <strong>About us</strong>
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="http://khaos.uma.es/">
                    <strong>Khaos Research </strong>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/manual">
                <a>
                  <strong>Help</strong>{" "}
                  <span className=" glyphicon glyphicon-info-sign"></span>
                </a>
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a onClick={logoutClick}>
                <strong>Logout</strong>{" "}
                <span className="glyphicon glyphicon-log-out"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
