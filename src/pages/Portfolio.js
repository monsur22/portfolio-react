import React, { useState } from 'react'
import { Button,Modal, } from 'react-bootstrap';
import port1 from '../portfolio/portfolio-1.jpg'
import port2 from '../portfolio/portfolio-2.jpg'
import port3 from '../portfolio/portfolio-3.jpg'

const Portfolio = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
                  <section id="portfolio" className="portfolio section-show">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My Works</p>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={port1} className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus" onClick={handleShow}/></a>
                    <a href="#" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details" onClick={handleShow}><i className="bx bx-link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={port2} className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                    <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={port3} className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus" /></a>
                    <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Portfolio
