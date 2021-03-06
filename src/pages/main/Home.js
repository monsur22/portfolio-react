import React, { useEffect, useState  } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';

const Home = () => {
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
                <h4>{item.position}</h4>
                <h2>{item.tittle} </h2>

              </div>
                <div className="social-links">
                    <a href={item.github} className="twitter"><i className="bi bi-github" /></a>
                    <a href={item.facebook} className="facebook"><i className="bi bi-facebook" /></a>
                    <a href={item.skype} className="google-plus"><i className="bi bi-skype" /></a>
                    <a href={item.linkedin} className="linkedin"><i className="bi bi-linkedin" /></a>
                </div>


            </div>
          ))}
          </section>

        </div>
    )
}

export default Home
