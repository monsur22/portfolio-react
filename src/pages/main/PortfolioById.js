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
          <section id="portfolio" className="portfolio section-show">
            <div className="container">
              <div className="section-title">
                <h2>Portfolio</h2>
                <p>My Works</p>
              </div>
              <div className="row portfolio-container">
              <h1>HEllo Vai{data.id}</h1>


              </div>
            </div>
          </section>
        </div>
    )
}

export default PortfolioById
