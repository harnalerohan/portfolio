import React from 'react'
import "../css/footer.css"

const Footer = ({bgStatus}: any) => {
  return (
    <div className = {`footer ${bgStatus ? "whiteText" : "blackText"}`}>
      <div className={`bg-custom mt-5 pb-4`}>
        <div className = {`link text-center ${bgStatus ? "whiteText" : "blackText"}`}>
          <a href="https://trailblazer.me/id/rohanharnale" target="_blank" rel="noreferrer"><i className="fab fabs fa-salesforce"></i></a>
          <a href="https://www.facebook.com/Harnalerohan/" target="_blank" rel="noreferrer"><i className="fab fabs fa-facebook-f"></i></a>
          <a href="https://twitter.com/rohan_harnale" target="_blank" rel="noreferrer"><i className="fab fabs fa-twitter"></i></a>
          <a href="https://www.instagram.com/heisrohan/" target="_blank" rel="noreferrer"><i className="fab fabs fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/rohan-harnale/" target="_blank" rel="noreferrer"><i className="fab fabs fa-linkedin-in"></i></a>
          <a href="https://github.com/harnalerohan" target="_blank" rel="noreferrer"><i className="fab fabs fa-github"></i></a>
          <a href="https://stackoverflow.com/users/14046979/rohan" target="_blank" rel="noreferrer"><i className="fab fabs fa-stack-overflow"></i></a>
          <a href="https://stackoverflow.com/users/14046979/rohan" target="_blank" rel="noreferrer"><i className="fab fabs fa-medium"></i></a>
        </div>
      </div>
      <div className="credit">
        <span className="text-center">Made with ❤️ by Rohan Harnale</span>
      </div>
    </div>
  )
}

export default Footer
