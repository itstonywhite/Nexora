import "./Body.css";

function Body() {
  const autonomousImgSrc = "../../public/images/autonomous_2.png";
  return (
    <>
      <div className="body-content">
        <div className="container">
          <div className="autonomous-img">
            <img src={autonomousImgSrc} alt="Autonomous" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
