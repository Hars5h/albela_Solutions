import React from "react";
import "./WorkFlow.css";
import workflow from "../../assets/work_flow.svg";
import devlopimg from "../../assets/DevelopmentSkill.svg";
import thumbsupimg from "../../assets/ThumbsUp.svg";
import clostag from "../../assets/SourceCode.svg";
function WorkFlow() {
  return (
    <div className="work-Flow-Wrapper">
      <h3 className="header-We-Are">Who We Services</h3>
      <div className="containt-it-div"></div>
      <div className="work-flow-img">
        <img src={workflow} style={{ width: "80%" }} />
      </div>
      <div className="it-div">
        <div className="it-div-1">
          <div className="it-div-1-main">
            <div className="containt-it-div-img">
              <img src={devlopimg} style={{ width: "80%", height: "70%" }} />
            </div>
            <div className="containt-it-div-text">
              <h1 className="header-of-it-div">25+ </h1>
              <p className="small-text-it">years of Experience</p>
            </div>
          </div>
        </div>
        <div className="it-div-1">
          <div className="it-div-1-main">
            <div className="containt-it-div-img">
              <img src={clostag} style={{ width: "80%", height: "70%" }} />
            </div>
            <div className="containt-it-div-text">
              <h1 className="header-of-it-div">25+ </h1>
              <p className="small-text-it">years of Experience</p>
            </div>
          </div>
        </div>
        <div className="it-div-1">
          <div className="it-div-1-main">
            <div className="containt-it-div-img">
              <img src={thumbsupimg} style={{ width: "80%", height: "70%" }} />
            </div>
            <div className="containt-it-div-text">
              <h1 className="header-of-it-div">25+ </h1>
              <p className="small-text-it">years of Experience</p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default WorkFlow;
