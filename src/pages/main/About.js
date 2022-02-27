import React, { useEffect, useState  } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';
import proimg from '../../monsur-passport.jpg'

const About = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await axios.get("http://localhost:8000/api/getabout")
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
                  {/* ======= About Section ======= */}
      <section id="about" className="about section-show">
        {/* ======= About Me ======= */}
        <div className="about-me container">
          <div className="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src={proimg} className="img-fluid" alt />
            </div>
            {data.map((item) => (
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>{item.tittle}</h3>
              <p className="fst-italic">
                {item.s_desc}
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> <span>{item.birth}</span></li>
                    <li><i className="bi bi-chevron-right" /> <strong>Website:</strong> <span>{item.web}</span></li>
                    <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>{item.city}</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> <span>{item.age}</span></li>
                    <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>{item.degree}</span></li>
                    <li><i className="bi bi-chevron-right" /> <strong>PhEmailone:</strong> <span>{item.email}</span></li>
                  </ul>
                </div>
              </div>
              <p>
                {item.desc}
              </p>
            </div>
          ))}

          </div>
        </div>{/* End About Me */}
        {/* ======= Counts ======= */}
        {/* <div className="counts container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile" />
                <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-journal-richtext" />
                <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
                <p>Projects</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-headset" />
                <span data-purecounter-start={0} data-purecounter-end={1463} data-purecounter-duration={1} className="purecounter" />
                <p>Hours Of Support</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-award" />
                <span data-purecounter-start={0} data-purecounter-end={24} data-purecounter-duration={1} className="purecounter" />
                <p>Awards</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* ======= Skills  ======= */}
        <div className="skills container">
          <div className="section-title">
            <h2>Skills</h2>
          </div>
          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">HTML <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">CSS <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">JavaScript <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">React Js <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">Node Js <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">PHP <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">Laravel <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">Express js <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">Django <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">Docker <i className="val">60%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
            </div>
          </div>
        </div>{/* End Skills */}

      </section>{/* End About Section */}
        </div>
    )
}

export default About
