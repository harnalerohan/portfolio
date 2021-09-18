import React from 'react';
import "../css/timeline.css";

const Timeline = ({bgStatus}: any) => {
  return (
    <div className="container">
      <div className="page-header mt-4">
        <h3 id="timeline" className={`subheading ${bgStatus ? "whiteText" : "blackText"}`}>Technical Skills</h3>
      </div>
      <ul className={`timeline ${bgStatus ? "whiteText" : "blackText"}`}>

        <li>
          <div className="timeline-badge"><i className="fab fa-js-square"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h5 className="timeline-title">JavaScript</h5>
            </div>
            <div className="timeline-body">
              <p>JavaScript is a scripting or programming language that allows you to implement complex features on web pages</p>
            </div>
          </div>
        </li>

        <li className="timeline-inverted">
          <div className="timeline-badge"><i className="fas fa-code"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h5 className="timeline-title">TypeScript</h5>
            </div>
            <div className="timeline-body">
              <p>TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor.It Catches errors early in your editor.</p>
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
              <p>It is an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.</p>
            </div>
          </div>
        </li>

        <li className="timeline-inverted">
          <div className="timeline-badge">
          <i className="fab fa-react"></i>
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h5 className="timeline-title">React</h5>
            </div>
            <div className="timeline-body">
              <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces.</p>
            </div>
          </div>
        </li>

        <li>
          <div className="timeline-badge"><i className="fas fa-code-branch"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h5 className="timeline-title">Git</h5>
            </div>
            <div className="timeline-body">
              <p>Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Timeline