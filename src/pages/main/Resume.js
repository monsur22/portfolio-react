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
      //   useEffect(async () => {
      // await axios.get("http://localhost:8000/api/getexperience")
      // .then(function(response) {
      //     console.log(response.experience);
      //     setExperience(response.experience);

      // })
      // .catch(function(error) {
      //     console.log(error);
      // });
      // }, []);
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
              <div className="resume-item">
                <h4>Senior graphic design specialist</h4>
                <h5>2019 - Present</h5>
                <p><em>Experion, New York, NY </em></p>
                <p>
                </p><ul>
                  <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                  <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                  <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                  <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                </ul>
                <p />
              </div>
              <div className="resume-item">
                <h4>Graphic design specialist</h4>
                <h5>2017 - 2018</h5>
                <p><em>Stepping Stone Advertising, New York, NY</em></p>
                <p>
                </p><ul>
                  <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                  <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                  <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                  <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                </ul>
                <p />
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Resume
