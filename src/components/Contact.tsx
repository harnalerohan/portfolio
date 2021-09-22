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
    // eslint-disable-next-line
    const localUrl = 'http://localhost:5000/app/sendmail';
    // eslint-disable-next-line
    const deployedUrl = 'https://shielded-refuge-62729.herokuapp.com/app/sendmail';
    e.preventDefault();
    setStatus(1);
    let userData : any ={
      name:formData.name,
      email: formData.email,
      message: `Message: ${formData.message} | Email: ${formData.email}`,
      subject: formData.subject
    };

    axios.post(deployedUrl, userData)
      .then(result => {
        if(result.status === 200){
          //success          
          setStatus(2);
          //send reply from my side
          // userData.email = "harnalerohan@gmail.com"
          userData.subject = "Thanks For Getting In Touch With Me."
          userData.message = `Hello ${userData.name}, 
Thank you for reaching me out, I have recieved your query and I will respond you back as soon as possible.

Thanks & Regards,
Rohan Harnale,

rohanharnale.com`
          userData.name = "Rohan Harnale"
          userData["to"] = userData.email

          axios.post(deployedUrl, userData)
            .then(secondResult => {
              if(secondResult.status === 200){
                console.log("Response sent")
              }else{
                console.log("Failed to send response");
              }
            }).catch(err => {
              console.log("Failed to send response")
            })
        }else{
          //error
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
        <form onSubmit={sendMessage} className="contactForm link">
          <div className="form-group">
            <label>Full Name</label>
            <input required={true} name="name" value={formData.name} onChange={onChange} type="text" className="form-control" placeholder="Enter Name"/>
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input name="email" value={formData.email} onChange={onChange} type="email" className="form-control" placeholder="Enter email" required/>
            <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input name="subject" value={formData.subject} onChange={onChange} type="text" className="form-control" placeholder="Enter Subject" required/>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={onChange} className="form-control" rows={2} required></textarea>
          </div>
            <button type="submit" className="btn btn-dark contact-button">Submit</button>
            <div className="status">
              <div style={status === 1 ? {display: "block"} : {display : "none"}} className={"status spinner-border"} role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div>
                <i className={status === 2 ? "status notification fas fa-check" : status === 3 ?  "status notification fas fa-times" : ""}></i>
              </div>
            </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact
