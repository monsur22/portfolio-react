import React, { useEffect, useState  } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await axios.get("http://localhost:8000/api/getskill")
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
              <section id="services" className="services section-show">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>My Services</p>
          </div>
          <div className="row">
          {data.map((item) => (
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-world" /></div>
                <h4><a href>{item.tittle}</a></h4>
                <p>{item.s_desc}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
        </div>
    )
}

export default Services
