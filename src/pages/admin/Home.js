import React from 'react'
import classes from "./adminlayout.module.css";
const Home = () => {
    return (
        <>
          <div className={classes.containerr}>
          <h1>Amin Home</h1>

          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Name</label>
                <input type="text" className="form-control" id="inputEmail4" placeholder="Name" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Designation</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Designation" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Description</label>
                <textarea className="form-control"></textarea>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Facebook</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Facebook" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Github</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Github" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Skype</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Skype" />
              </div>
            </div>

            <br></br>
            <button type="submit" className="btn btn-primary">Update</button>
          </form>

          </div>
        </>
    )
}

export default Home
