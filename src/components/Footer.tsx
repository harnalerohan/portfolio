import React from 'react'
import "../css/footer.css"

const Footer = ({bgStatus}: any) => {
  return (
    <div className = {`footer ${bgStatus ? "whiteText" : "blackText"}`}>
      <div className={`bg-custom mt-5 pb-4`}>
        <div className="text-center">
          <i><i className="fab fabs fa-facebook-f"></i></i>
          <i><i className="fab fabs fa-twitter"></i></i>
          <i><i className="fab fabs fa-instagram"></i></i>
          <i><i className="fab fabs fa-linkedin-in"></i></i>
          <i><i className="fab fabs fa-medium"></i></i>
        </div>
      </div>
      <div className="credit">
        <span className="text-center">Made with ❤️ by Rohan Harnale</span>
      </div>
    </div>
  )
}

export default Footer
