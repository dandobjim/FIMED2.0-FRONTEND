import React,{useState} from 'react';
import {CONSTANTS} from "../shared/Constants";
import {css} from "@emotion/core";
import Link from 'next/link';

const FormSignUp = () => {
    
    const [data, setData] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
    
        fetch(`${CONSTANTS.API.url}/api/v2/auth/register`, {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ data: data})
        }).then((res) => {
          console.log(res)
        })
    }
    
    const prueba = e => {
        console.log(e)
    }

    return(
        <>
            <form id="login" method="post" enctype="multipart/form-data" acceptcharset="UTF-8" onSubmit={prueba}>
                
                <div className="form-group">
                    <label for="name" className="col-sm-2 control-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" name="name" required/>
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label for="name" className="col-sm-2 control-label">Surname</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="apellidos" name="apellidos" required/>
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label for="email" className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="email" name="email" required/>
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label for="username" className="col-sm-2 control-label">Username</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="username" name="username" required/>
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label for="password" className="col-sm-2 control-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="password" name="password" required/>
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <input type="submit" className="btn-sm btn-primary button-field" css={css`margin-top: 7px;`} value="Sign Up" />
                    </div>
                </div>
            </form>
            <br /><br /><br />
            <form  >
                <div className="form-group">
                    <a css={css`font-family:bold;`}>Come back to Login page: </a>
                    <Link href = "/">
                        <button type="submit" className="btn btn-primary" css={css`margin-top: 7px; margin-left: 7px;`}>Go to login</button>
                    </Link>
                </div>
            </form>
        </>
    )
}

export default FormSignUp;