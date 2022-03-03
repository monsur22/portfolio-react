import React, { useEffect, useState  } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';

const Resume = () => {
  const [data, setData] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(async () => {
    await axios.get("http://localhost:8000/api/geteducation")
    .then(function(response) {
        console.log(response.data);
        setData(response.data);

    })
    .catch(function(error) {
        console.log(error);
    });
    getexp();
    }, []);

      const getexp = async () => {
        axios.get(`http://localhost:8000/api/getexperience`)
            .then((getexp) => {
                console.log(getexp.data);

                setExperience(getexp.data);
            })
      }

// console.log(data);
    return (
        <div>
                 <section id="resume" className="resume section-show">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
            <p>Check My Resume</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Alice Barkley</h4>
                <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                <p>
                </p><ul>
                  <li>Portland par 127,Orlando, FL</li>
                  <li>(123) 456-7891</li>
                  <li>alice.barkley@example.com</li>
                </ul>
                <p />
              </div>
              <h3 className="resume-title">Education</h3>
              {data.map((item) => (
                <div className="resume-item">
                  <h4>{item.degree}</h4>
                  <h5>{item.year}</h5>
                  <p><em>{item.school}</em></p>
                  <p>{item.s_desc}</p>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              {experience.map((item) => (
                <div className="resume-item">
                  <h4>{item.position}</h4>
                  <h5>{item.year}</h5>
                  <p><em>{item.company} </em></p>
                  <p>
                  </p><ul>
                    <li>{item.s_desc1}</li>
                    <li>{item.s_desc2}</li>
                    <li>{item.s_desc3}</li>
                    <li>{item.s_desc4}</li>
                  </ul>
                  <p />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Resume
