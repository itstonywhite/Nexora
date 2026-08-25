import "./Body.css";

function Body() {
  const autonomousImgSrc = "../../public/images/Autonomous.png";
  const roboticArmImgSrc = "../../public/images/arm-transparent.png";

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
        </div>
      </div>
    </>
  );
}

export default Body;
