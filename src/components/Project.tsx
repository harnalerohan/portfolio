import React from 'react'
import "../css/project.css";
import "../css/Introd.css";

const Project = ({bgStatus}:any) => {
  return (
    <div className="container mt-4">
      <div className={bgStatus ? "row whiteText" : "row blackText"}>
        <div className="col-12">
          <h4 className="one">Things I have designed for clients.</h4>
        </div>
      </div>
      {/* corousel */}
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="..." className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="..." className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..."/>
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
