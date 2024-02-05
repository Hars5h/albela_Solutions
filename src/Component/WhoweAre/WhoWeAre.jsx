import React from "react";
import "./WhoWeAre.css";
import Ellipse from "../../assets/backgroundcircle.svg";
import whoWeimg from "../../assets/whoWeimg.svg";
import paperplane from "../../assets/PaperPlane.svg"
function WhoWeAre() {
  return (
    <div className="We-Are-Wrapeer">
      <h3 className="header-We-Are">Who We Services</h3>
     
      <div className="we-are-img-text">
       <div className="we-are-img-div">
        <img src={whoWeimg} style={{height:"100%"}}/>
        </div>
        <div className="img_and_text-div-who-we"> 
         
          <div className="text-div-who-we">
            <p className="text-p-tag">A Company working with Young <p  className="text-p-tag" style={{color:"#012086"}}> Engineer’s, Entrepreneur's </p>and
             <p className="text-p-tag" style={{display:"contents",color:"#012086"}} > Innovative Team</p>.</p>
            <p className="who-we-are-text-paragraph" >Albela Solutions An organization where we 
              totally focus on business development of our clients. 
              Our motto is to providing consulting and IT Solutions for your business growth.
               We will pleased to serve you more and more from Albela Solutions.
                Want to know more about us</p>
                <div className="button-who-we-contact"><span style={{width:"70%",fontWeight:"700",fontSize:"1.5rem",textAlign:"center"}}>Contact Us</span> <img src={paperplane} style={{height:"65%",width:"30%"}}/></div>
          </div>
          <div style={{position:"absolute",width:"42%",right:0,zIndex:"-1"}}>  <img src={Ellipse} style={{height:"65%"}}/> </div>
         
         </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
