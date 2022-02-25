import React, { useEffect, useState  } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';

const Home = () => {
  // const [data, setData] = useState({hits:[]});

  // useEffect(async () => {
  //   await axios.get("http://localhost:8000/api/gethome")
  //   .then(response =>response.json())
  //   .then(function(response) {
  //       console.log(response.data);
  //       setData(response);

  //   })
  //   .catch(function(error) {
  //       console.log(error);
  //   });
  //   }, []);
  const [data, setData] = useState([]);

  useEffect(async () => {
    await axios.get("http://localhost:8000/api/gethome")
    .then(function(response) {
        console.log(response.data);
        setData(response.data);

    })
    .catch(function(error) {
        console.log(error);
    });
    }, []);
console.log(data);
    return (
        <div>
            <section id="home" className="container section-show">

            {data.map((item) => (


            <div className="home_container" key={item._id}>
              <div className="section-title">

                <p>{item.name}</p>
                <h4>SOFTWARE ENGINEER, ONE-PROOF LTD</h4>
                <h2>I'm a professional <span>FULL STACT WEB DEVELOPER</span> from Dhaka</h2>

              </div>
                <div className="social-links">
                    <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                    <a href="#" className="google-plus"><i className="bi bi-skype" /></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                </div>


            </div>
          ))}
          </section>

        </div>
    )
}

export default Home
