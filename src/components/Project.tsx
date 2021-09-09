import React from 'react'
import "../css/project.css";
import "../css/Introd.css";
import rdcr from '../images/redecormyhome.png'
import makmobilize from '../images/makmobilize.png'
import tees from '../images/tees.png'
import netflix from '../images/netflix.png';
import cityPedia from '../images/cityPedia.png';

const Project = ({bgStatus}:any) => {
  return (
    <div className="mt-4 container">
      <i id="projects"/>
      <div className={bgStatus ? "row whiteText" : "row blackText"}>
        <div className="col-12 mb-5">
          <h3 className="one">Things I have developed.</h3>
        </div>
      </div>
      {/* corousel */}
      <div className='flex-corousel'>
        {/* left button on pc */}
      <div className="arrowpc">
        <button className="left-arrow" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <i className="fas fa-arrow-left"></i>
        </button>
      </div>

        <div id="carouselExampleInterval" className={`carousel carousel-${bgStatus ? `` : `dark`} slide`} data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <a href="https://citypedia.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src={cityPedia} className="d-block w-100" alt="cityPedia.png"/>  
              </a>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <a href="https://netflix-38844.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                <img src={netflix} className="d-block w-100" alt="netflix.png"/>  
              </a>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <a href="https://teesstore.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src={tees} className="d-block w-100" alt="teesStore.png"/>
              </a>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <a href="https://redecormyhome.com/" target="_blank" rel="noopener noreferrer">
                <img src={rdcr} className="d-block w-100" alt="redecormyhome.png"/>
              </a>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <a href="https://makmobilize.co.in/" target="_blank" rel="noopener noreferrer">
                <img src={makmobilize} className="d-block w-100" alt="makmobilize.png"/>  
              </a>
            </div>
          </div>
        </div>
        {/* right button on pc */}
        <div className="arrowpc">
          <button className="right-arrow" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* arrows for phone */}
      <div className={`arrowsphone`}>
        <button className="left-arrow" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <i className={`fas fa-arrow-left ${bgStatus ? `whiteText` : `blackText`}`}></i>
        </button>
        <button className="right-arrow" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <i className={`fas fa-arrow-right ${bgStatus ? `whiteText` : `blackText`}`}></i>
        </button>
        
      </div>
    </div>
  )
}

export default Project
