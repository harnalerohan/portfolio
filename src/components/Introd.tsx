import "../css/Introd.css";
import "../css/navBar.css";
import logo from "../images/devGuy.svg";
import WhoAMI from "./WhoAmI";

const Introd = ({ bgStatus }: any) => {
  document.getElementsByTagName("meta")[2].content = bgStatus
    ? "#212529"
    : "#FFF";
  return (
    <div className="container">
      <div className={bgStatus ? "row envelopedBlack" : "row envelope"}>
        <div className="intro col-lg-6 text-lg">
          <div className={bgStatus ? "whiteText" : "blackText"}>
            <p className="welcomeText">Welcome to my portfolio...</p>
            <WhoAMI></WhoAMI>
            <p className="description">
              Building a succesful product is a challenge, I am highly energetic
              in web development.
            </p>
          </div>
          <div className="conButtonsPc link">
            <a
              href={process.env.REACT_APP_CVLINK}
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="btn btn-light">
                <i className="fas fa-file-download"></i> Download Resume
              </button>
            </a>
            <button disabled type="button" className="btn btn-dark btn-intro">
              Get a free Quote
            </button>
          </div>
        </div>
        <div className="devGuy col-lg-6 text-center">
          <img src={logo} alt="devGuy" />
          <div className="conButtons">
            <a
              href={process.env.REACT_APP_CVLINK}
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="btn btn-light">
                <i className="fas fa-file-download"></i> Download Resume
              </button>
            </a>
            <button disabled type="button" className="link btn btn-dark btn-intro">
              Get a free Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introd;
