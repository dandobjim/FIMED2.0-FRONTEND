import React, {useState} from 'react';
import {css} from '@emotion/core';
import {CONSTANTS} from "../shared/Constants";

const FormLogin = () =>{

    const [user, setUser] = useState({})

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();

        fetch(`${CONSTANTS.API.url}/api/v2/auth/login`, {
            method:'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((res) => {
            if(!res.ok){
                throw res;
            }
            return res.json();
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(`Error ${err.status}`);
            err.json().then(user => {user.detail.map((item,index) => {alert(item.msg)})});
        });
    }

    const prueba = e => {
        e.preventDefault();
        console.log(user);
    }

    return(
        <>
        <form id="login" method="post" encType="multipart/form-data" acceptCharset ="UTF-8" onChange={handleChange} onSubmit={handleSubmit}>
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


        </form>
        </>
    )
}


export default FormLogin;