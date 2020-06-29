import React from 'react';
import {css} from '@emotion/core'
import Link from 'next/link'


const NavigationBar = () => {
    return ( 
        <body css = {css`
            .active {
                    background-color: #f5f5f5;
                }
                .dropbtn {
                    background-color: #4CAF50;
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
                    background-color: #f1f1f1
                }
                /* Show the dropdown menu on hover */
                .dropdown:hover .dropdown-content {
                    display: block;
                }
                /* Change the background color of the dropdown button when the dropdown content is shown */
                .dropdown:hover .dropbtn {
                    background-color: #3e8e41;
                }
        `}>


        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <Link href="/home">
                        <a class="navbar-brand" css = {css `
                            padding-top: 0;
                            padding-left: 15px;
                        `}>
                        <img src="/static/img/Fimed_logo.png" css={css `
                            height: 40px;
                        `} />
                        </a>
                    </Link>
                    
                </div>
                <div class="collapse navbar-collapse" id="myNavbar" css = {css `color: #d58512;`}>
                    <ul class="nav navbar-nav">
                        <li class="nav-link">
                            <Link href="/home"><a><strong>Home</strong></a></Link>
                        </li>
                        <li>
                            <Link href = "/createPatient"><a><strong>Add</strong></a></Link> 
                        </li>
                        <li>
                            <Link href = "/searchPage"><a><strong>Search</strong></a></Link>
                        </li>
                        <li class="dropdown">
                            <Link href="#">
                            <a class="dropdown-toggle" data-toggle="dropdown"><strong>Analysis</strong><span class="caret"></span></a>
                            </Link>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link href = "/heatmapPage">
                                        <a><strong>HeatMap</strong></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/clusterheatmapPage">
                                        <a><strong>Dendrogram + Heatmap</strong></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/grnPage">
                                        <a><strong>Gene Regulatory Network</strong></a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <Link href="#">
                                <a class="dropdown-toggle" data-toggle="dropdown" ><strong>About us</strong> <span class="caret"></span></a>
                            </Link>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link href="/aboutUS">
                                        <a><strong>About us</strong></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href ="http://khaos.uma.es/">
                                        <a><strong>Khaos Research </strong></a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href = "/manual">
                                <a><strong>Help</strong> <span class=" glyphicon glyphicon-info-sign"></span></a>
                            </Link>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                        <Link href="/logoutAction">
                            <a><span class="glyphicon glyphicon-log-out"></span><strong>Logout</strong></a>
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        </body>
     );
}
 
export default NavigationBar;