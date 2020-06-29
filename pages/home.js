import React from 'react';
import Layout from '../components/layouts/Layout';
import Header from '../components/layouts/Header';
import Head from '../public/static/WEB-INF/Head';
import Footer from '../public/static/WEB-INF/Footer';
import NavigationBar from '../public/static/WEB-INF/NavigationBar';
import {css} from '@emotion/core';


const Home = () => {
  return ( 
    <>
      <Head/>
      <body>
        <Header/>
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">Home</li>
                </ol>
            </nav>

            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="page-header" css={css`margin-top: 0px;`}>
                        <h1>Add or search a patient (s):</h1>
                    </div>

                    <form>
                        <div class="row">
                            <div class="col-md-6">
                                <h3>Add patient's data columns </h3>
                                <button type="submit" class="btn btn-primary btn-lg btn-block">Form design</button>
                            </div>
                            <div class="col-md-6">
                                <h3>Search patients</h3>
                                <button type="submit" class="btn btn-primary btn-lg btn-block">Search patient (s)</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <h3>Add new patient</h3>
                                <button type="submit" class="btn btn-primary btn-lg btn-block">Add patient (s)</button>
                            </div>
                            <div class="col-md-6">
                                <h3>Analyze your patients' genetic expression data</h3>
                                <button type="submit" class="btn btn-primary btn-lg btn-block">Gene level expression analysis</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        <Footer/>
        <NavigationBar/>
      </body>
    </>
   );
}
 
export default Home;