import React from 'react';
import "../css/timeline.css";

const Timeline = ({bgStatus}: any) => {
  return (
    <div className="container">
      <div className="page-header mt-4">
        <h3 id="timeline" className={bgStatus ? "whiteText" : "blackText"}>Skills</h3>
      </div>
    <ul className={`timeline ${bgStatus ? "whiteText" : "blackText"}`}>

        <li>
          <div className="timeline-badge danger"><i className="fab fa-js-square"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h5 className="timeline-title">JavaScript</h5>
            </div>
            <div className="timeline-body">
              <p>Mussum ipsum cacilds, vidis litro abertis.</p>
            </div>
          </div>
        </li>

        <li className="timeline-inverted">
          <div className="timeline-badge danger"><i className="fas fa-code"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h5 className="timeline-title">TypeScript</h5>
            </div>
            <div className="timeline-body">
              <p>Mussum ipsum cacilds, vidis litro abertis.</p>
            </div>
          </div>
        </li>

        <li>
          <div className="timeline-badge"><i className="fab fa-node"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h5 className={`timeline-title`}>Node.Js</h5>
            </div>
            <div className="timeline-body">
              <p>Mussum ipsum cacilds, vidis litro abertis.</p>
            </div>
          </div>
        </li>

        <li className="timeline-inverted">
          <div className="timeline-badge info">
          <i className="fab fa-react"></i>
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h5 className="timeline-title">React</h5>
            </div>
            <div className="timeline-body">
              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis.</p>
            </div>
          </div>
        </li>

        <li>
          <div className="timeline-badge info"><i className="fas fa-code-branch"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h5 className="timeline-title">Version Control</h5>
            </div>
            <div className="timeline-body">
              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis.</p>
            </div>
          </div>
        </li>

        <li className="timeline-inverted">
          <div className="timeline-badge success"><i className="glyphicon glyphicon-thumbs-up"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h5 className="timeline-title">Lorem Ipsum</h5>
            </div>
            <div className="timeline-body">
              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis.</p>
            </div>
          </div>
        </li>

    </ul>
    </div>
  )
}

export default Timeline