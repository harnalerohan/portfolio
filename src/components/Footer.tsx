import React from 'react'
import "../css/footer.css"

const Footer = ({bgStatus}: any) => {
  return (
    <div className = {`${bgStatus ? "blackText" : "whiteText"}`}>
      <div style={{backgroundColor: bgStatus ? "white" : "#343a40"}} className={`bg-custom mt-5 pt-30 pt-60 pb-5`}>
        <div className="">
          <div className="p-5">
            <div className="row">
              <div className="col-md-3">
                <h3>About Us</h3>
                <p className="pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="col-md-3">
                <h3>Service</h3>
                <ul>
                  <li><i>First item</i></li>
                  <li><i>Second item</i></li>
                  <li><i>Third item</i></li>
                  <li><i>Fourth item</i></li>
                </ul>
              </div>
            <div className="col-md-3">
              <h3>Important</h3>
              <ul>
                <li><i>First item</i></li>
                <li><i>Second item</i></li>
                <li><i>Third item</i></li>
                <li><i>Fourth item</i></li>
              </ul>
            </div>
            <div className="col-md-3 mobile-none">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search"/>
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">Subscribe</button>
                </div>
                </div>
                <h3>DownloadOur App</h3>
                <div className="download">
                  <i> <i className="fa fa-apple"></i></i>
                  <i> <i className="fa fa-android"></i></i>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <i><i className="fa fa-facebook"></i></i>
            <i><i className="fa fa-twitter"></i></i>
            <i><i className="fa fa-google-plus"></i></i>
            <i><i className="fa fa-linkedin"></i></i>
          </div>
        </div>
      </div>
      <div className="bg-bottom">
        <div>
          <p className="text-center pt-2 mb-2">W3hubs 2020. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
