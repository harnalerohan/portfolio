import React from 'react'
import "../css/project.css";
import "../css/Introd.css";
import rdcr from '../images/redecormyhome.png'
import makmobilize from '../images/makmobilize.png'
import tees from '../images/tees.png'

const Project = ({bgStatus}:any) => {
  return (
    <div className="container mt-4">
      <div className={bgStatus ? "row whiteText" : "row blackText"}>
        <div className="col-12 mb-5">
          <h4 className="one">Things I have developed.</h4>
        </div>
      </div>
      {/* corousel */}
      <div id="carouselExampleInterval" className={`carousel carousel-${bgStatus ? `` : `dark`} slide mb-5`} data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item" data-bs-interval="2000">
            <a href="https://teesstore.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src={tees} className="d-block w-100" alt="tees"/>
            </a>
          </div>
          <div className="carousel-item active" data-bs-interval="10000">
            <a href="https://redecormyhome.com/" target="_blank" rel="noopener noreferrer">
              <img src={rdcr} className="d-block w-100" alt="..."/>
            </a>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <a href="https://makmobilize.co.in/" target="_blank" rel="noopener noreferrer">
              <img src={makmobilize} className="d-block w-100" alt="makmobilize"/>  
            </a>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Project
