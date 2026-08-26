import "./Body.css";
import autonomousImgSrc from "../assets/Autonomous.png";
import roboticArmImgSrc from "../assets/arm-transparent.png";
import roboticArmBoxImgSrc from "../assets/robotic-arm-box.png";
import armTransparent from "../assets/arm-transparent-top.png";

import logo from "../assets/favicon.png";
import cameraIcon from "../assets/camera-icon.png";
import brainIcon from "../assets/brain-emoji.png";
import directionIcon from "../assets/direction-icon.png";
import fastIcon from "../assets/fast-icon.png";

function Body() {
  return (
    <>
      <div className="container">
        <div className="body-content">
          <div className="autonomous-img">
            <img src={autonomousImgSrc} alt="Autonomous" />
          </div>
          <div className="robotic-arm-img">
            <img src={roboticArmImgSrc} alt="robot" />
          </div>
          <div className="two-boxes">
            <div className="robotic-arm-box">
              <img src={roboticArmBoxImgSrc} alt="robot" />
            </div>
            <div className="autonomous-list">
              <div className="list-item">
                <img src={cameraIcon} alt="Nexora" />
                <div className="list-items">
                  <b>Perception</b>
                  <p>
                    Advanced sensors and computer vision for real-world
                    understanding.
                  </p>
                </div>
              </div>
              <div className="list-item">
                <img src={brainIcon} alt="Nexora" />
                <div className="list-items">
                  <b>Decision</b>
                  <p>AI models that reason, plan and adapt in real-time.</p>
                </div>
              </div>
              <div className="list-item">
                <img src={directionIcon} alt="Nexora" />
                <div className="list-items">
                  <b>Control</b>
                  <p>Precise motion control for the physical world.</p>
                </div>
              </div>
              <div className="list-item">
                <img src={fastIcon} alt="Nexora" />
                <div className="list-items">
                  <b>Action</b>
                  <p>Reliable execution that delivers results.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="floating-box-container">
            <div className="floating-box">
              <img src={logo} alt="Nexora" />
              <b>Intelligent Robotics Core</b>
              <p>One Software Brain. Infinite Automation</p>
              <img src={armTransparent} alt="robot" className="second-arm" />
            </div>
          </div>
          <div className="texts">
            <h1>Software-Defined Robotics Powered By AI.</h1>
            <p>
              NEXORA builds intelligent robots that perceives, decide and act in
              the real world to drive industrial progress.
            </p>
            <a href="#">
              Explore Solutions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.7"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
