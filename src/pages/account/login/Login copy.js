import React from 'react'
import classes from './Login.module.css'
const Login = () => {
    return (
        <div>
            <form>
                <h3>Sign In</h3>

                <div className={classes.form-group}>
                    <label>Email address</label>
                    <input type="email" className={classes.form-control} placeholder="Enter email" />
                </div>

                <div className={classes.form-group}>
                    <label>Password</label>
                    <input type="password" className={classes.form-control} placeholder="Enter password" />
                </div>

                <div className={classes.form-group}>
                    <div className={[classes.custom-control], [classes.custom-checkbox]}>
                        <input type="checkbox" className={classes.custom-control-input} id="customCheck1" />
                        <label className={classes.custom-control-label} htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className={[classes.btn] [classes.btn-primary] [classes.btn-block]}>Submit</button>
                <p className={[classes.forgot-password] [classes.text-right]}>
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </div>
    )
}

export default Login
