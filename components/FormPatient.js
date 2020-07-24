import React from 'react';
import {CONSTANTS} from "../shared/Constants";
import fetch from 'node-fetch';
import { css } from '@emotion/core';


const FormPatient = () => {

    return ( 
        {form.map((s,index)=>{
            return(
                <table className ="table table-condensed table-striped">
                    <thead>
                        <tr>
                            <th align="center" css={css`text-align:"center"; font-size:14px; `} colSpan="2">Name: {s}</th>
                        </tr>
                    </thead>
                </table>
            )       
        })}
     );
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(`${CONSTANTS.API.url}/api/v2/form/see_form`, {
        method: "GET",
        headers: {"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJNYW51ZWwiLCJleHAiOjE1OTU1MDUzNTJ9.V_P-HuOaaDq4eNudklymwFd4Qt5hxterWAZ356TofxE"}
    });
    

    const form = await res.json();
    //console.log(patients)
    return {
        props: {
            form,
        },
    }
}

export default FormPatient;