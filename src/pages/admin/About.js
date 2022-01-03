import React from 'react'
import classes from "./adminlayout.module.css";
const About = () => {
    return (
        <>
          <div className={classes.containerr}>
          <h1>Amin About</h1>

          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Short Description</label>
                <textarea className="form-control"></textarea>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Birth Date</label>
                <input type="text" className="form-control" id="inputEmail4" placeholder="Birth Date" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Age</label>
                <input type="text" className="form-control" id="inputEmail4" placeholder="Age" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Website</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Website" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Degree</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Degree" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">E-mail</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="E-mail" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">City</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="City" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Long Description</label>
                <textarea className="form-control"></textarea>
              </div>
            </div>

            <br></br>
            <button type="submit" className="btn btn-primary">Update</button>
          </form>

          </div>
        </>
    )
}

export default About
