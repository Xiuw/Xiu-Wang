import React from "react";
import "./Homepage.css";
import Fade from "react-reveal/Fade";

const Homepage = () => {
  return (
    <div className="pb4" id="home">
      <div className="dt vh-100 w-100">
        <div className=" dtc v-mid">
          <div className="center tc mw8 pt3">
            <div className="f1-ns f2 mid-gray fw9 pl2 pr2 flex flex-wrap justify-center">
              {/* <Fade top cascade duration={1000}>
                <span>Hi, I'm </span>
              </Fade> */}
              <Fade top cascade duration={1000} delay={500}>
                <span className="white f1">I'm Xiu Wang,</span>
              </Fade>
            </div>
            <Fade bottom cascade duration={1000}>
              <p className="mid-gray pa1 f2-ns f3 mt4 a fw6">
                a Full Stack Developer.
              </p>
            </Fade>
            <Fade bottom delay={1000}>
              <div className="list pl2 mt5">
                <a
                  className="linkBtn fw6 ph4 pa3 pointer f5 dib ba white no-underline"
                  href="#project"
                >
                  Learn More
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
