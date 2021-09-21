import axios from 'axios';
import React, { useState } from 'react';
import "../css/contact.css"
import contact from "../images/contact.svg";


const Contact = ({bgStatus}:any) => {
  const initializeForm = {
    name: '',
    email: '',
    message: '',
    subject: ''
  }

  const [formData, setFormData] = useState(initializeForm);
  const [status, setStatus] = useState(0);

  // 0 = initial hidden stage
  //1 = loading will appear
  //2 = success
  //3 = failure

  const onChange = (event:any) => {
    const {name,value}= event.target
    setFormData({...formData,[name]:value})
  }

  const sendMessage = (e: any) => {
    e.preventDefault();
    setStatus(1);
    let userData={
      name:formData.name,
      email: formData.email,
      message: `Message: ${formData.message} | Email: ${formData.email}`,
      subject: formData.subject
    };

    axios.post('http://localhost:5000/app/sendmail', userData)
      .then(result => {
        console.log("results", result)
        if(result.status === 200){
          // setLoading(false);
          setStatus(2);
        }else{
          setStatus(3)
        }
        setTimeout(() => {
          setStatus(0);
        }, 2000);
      }).catch(e => {
        setStatus(3);
        setTimeout(() => {
          setStatus(0);
        }, 2000);
        console.log("error", e)
      })
  }


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
            <input name="name" value={formData.name} onChange={onChange} type="text" className="form-control" placeholder="Enter Name"/>
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input name="email" value={formData.email} onChange={onChange} type="email" className="form-control" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input name="subject" value={formData.subject} onChange={onChange} type="text" className="form-control" placeholder="Enter Subject"/>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={onChange} className="form-control" rows={2}></textarea>
          </div>
          <div className="col-6 btn-div">
            <button onClick={sendMessage} type="submit" className="btn btn-dark contact-button">Submit</button>
          </div>
          <div style={status === 1 ? {display: "block"} : {display : "none"}} className={"spinner-border"} role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="col-6">
            <i className={status === 2 ? "notification fas fa-check" : status === 3 ?  "notification fas fa-times" : ""}></i>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact
