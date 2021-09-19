import React from 'react';
import "../css/contact.css"
import contact from "../images/contact.svg";


const Contact = ({bgStatus}:any) => {
  return (
    <div className="container mb-5">
    <i id="contact"/>
    <div className={bgStatus ? "row envelopedBlack whiteText" : "row envelope blackText"}>
      <div className="devGuy col-lg-6">
        <div className="phoneText text-center page-header">
          <h3 className="subheading">
            Intrested to work together?
            <br/>
            Get in touch.
          </h3>
        </div>
        <img src={contact} alt="contact" />
      </div>
      <div className="col-lg-6 text-lg">
        <div className="pcText page-header">
          <h3>
            Intrested to work together?
            <br/>
            Get in touch.
          </h3>
          <br/>
        </div>
        {/* form */}
        <form className="contactForm link">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" className="form-control" placeholder="Enter Name"/>
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea className="form-control" rows={3}></textarea>
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact
