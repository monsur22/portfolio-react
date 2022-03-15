import React, { useEffect, useState  } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import portdetails from '../../portfolio/portfolio-details-2.jpg'

const PortfolioById = () => {
  const { id } = useParams(); // <-- access id match param here

  const [data, setData] = useState({});
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [img, setImg] = useState('');
  const apiUrl = "http://localhost:8000/api/getportfolio/" + id;

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get(apiUrl)
          setData(result.data);
          console.log(result.data);
        };

        fetchData();
      }, []);
console.log(data);
    return (
        <div>
          <section id="portfolio" className="portfolio-details section-show">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <h2 className="portfolio-title">This is an example of portfolio detail</h2>
                    <div className="portfolio-details-slider swiper">
                      {/* <div class="swiper-wrapper align-items-center"> */}
                      <div className="swiper-slide">
                        {/* <img src="assets/img/portfolio/portfolio-details-1.jpg" alt /> */}
                        { data.image == null ?<img src={portdetails} alt="Red dot" /> :<img src={portdetails} alt="Red dot" />

                        }
                        {/* <p>{data.image}</p> */}
                      </div>
                      {/* <div class="swiper-slide">
                        <img src="assets/img/portfolio/portfolio-details-2.jpg" alt="">
                      </div>

                      <div class="swiper-slide">
                        <img src="assets/img/portfolio/portfolio-details-3.jpg" alt="">
                      </div> */}
                      {/* </div> */}
                      {/* <div class="swiper-pagination"></div> */}
                    </div>
                  </div>
                  <div className="col-lg-4 portfolio-info">
                    <h3>{data.tittle}</h3>
                    <ul>
                      <li><strong>Project Overview</strong>: {data.overview}</li>
                      <li><strong>Technology</strong>: {data.technology}</li>
                      <li><strong>Part Name</strong>: {data.part_name}</li>
                      <li><strong>Role</strong>: {data.your_role}</li>
                    </ul>
                    <p>
                      {data.s_desc}
                    </p>
                  </div>
                </div>
              </div>

          </section>
        </div>
    )
}

export default PortfolioById
