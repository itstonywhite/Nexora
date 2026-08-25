import "./Body.css";

function Body() {
  const autonomousImgSrc = "../../public/images/Autonomous.png";
  const roboticArmImgSrc = "../../public/images/arm-transparent.png";
  const roboticArmBoxImgSrc = "../../public/images/robotic-arm-box.png";

  return (
    <>
      <div className="body-content">
        <div className="container">
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
                <img src="../../public/images/camera-icon.png" alt="Nexora" />
                <b>Perception</b>
                <p>
                  Advanced sensors and computer vision for real-world
                  understanding.
                </p>
              </div>
              <div className="list-item">
                <img src="../../public/images/brain-emoji.png" alt="Nexora" />
                <b>Decision</b>
                <p>AI models that reason, plan and adapt in real-time.</p>
              </div>
              <div className="list-item">
                <img
                  src="../../public/images/direction-icon.png"
                  alt="Nexora"
                />
                <b>Control</b>
                <p>Precise motion control for the physical world.</p>
              </div>
              <div className="list-item">
                <img src="../../public/images/fast-icon.png" alt="Nexora" />
                <b>Action</b>
                <p>Reliable execution that delivers results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
