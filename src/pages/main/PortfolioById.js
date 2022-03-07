import React, { useEffect, useState  } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";


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
                        <img src="assets/img/portfolio/portfolio-details-1.jpg" alt />
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
                    <h3>Project information</h3>
                    <ul>
                      <li><strong>Category</strong>: Web design</li>
                      <li><strong>Client</strong>: ASU Company</li>
                      <li><strong>Project date</strong>: 01 March, 2020</li>
                      <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                    </ul>
                    <p>
                      Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                    </p>
                  </div>
                </div>
              </div>

          </section>
        </div>
    )
}

export default PortfolioById
