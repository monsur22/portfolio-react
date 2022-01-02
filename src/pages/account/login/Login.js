import React from 'react'
import classes from './Login.module.css';
const Login = () => {

    return (
        <div className={classes.acocunt}>
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" style={{margin: "5px 0px 0 px 0px"}}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" style={{margin: "5px 0px 0 px 0px"}} />
                </div>


                <button type="submit" id ="sub-btn" className={classes.subbtn}>Submit</button>

            </form>
        </div>
    )
}

export default Login
