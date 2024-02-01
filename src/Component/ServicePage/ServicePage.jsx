import React from "react";
import "./ServicePage.css";
import Ellipse from "../../assets/Ellipse.svg";
import phone from "../../assets/phone.svg";
import monitor from "../../assets/monitor.svg"
import erp from "../../assets/erp.svg";
function ServicePage() {
  return (
    <div className="our-service-wrapper">
      <div className="our-service-wrapper-background-div-1">
        <img src={Ellipse} className="rotate" />
        <div
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "#FFF",
            position: "absolute",
            top: "14%",
          }}
        ></div>
      </div>
      <div className="our-service-wrapper-background-div-2">
        <h3 className="header-Our-Services">Our Services</h3>
      </div>
      <div className="our-service-wrapper-background-div-3">
        <div
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "#FFF",
            position: "absolute",
            top: "14%",
          }}
        ></div>
        <img src={Ellipse} className="elipse" />
      </div>
      <div className="cards-our-service-div">
        <div className="cards-our-service">
          <img src={erp} className="card-img"/>
          <p style={{marginTop:"8%",padding:"1rem",textAlign:"center",fontWeight:"600",fontSize:"1.8rem"}}>ERP Development</p>
          <p style={{fontSize:"1.5rem",padding:"1rem"}}>we specialize in creating custom web solutions tailored to your unique business needs. Our team of experienced developers employ industry best practices to build responsive , user-friendly sites and apps that are effective and efficient while delivering value to your organization </p>
        </div>
        <div className="cards-our-service">
        <img src={phone} className="card-img"/>
        <p style={{marginTop:"8%",padding:"1rem",textAlign:"center",fontWeight:"600",fontSize:"1.8rem"}}>App Development</p>
          <p style={{fontSize:"1.5rem",padding:"1rem"}}>we specialize in creating custom web solutions tailored to your unique business needs. Our team of experienced developers employ industry best practices to build responsive , user-friendly sites and apps that are effective and efficient while delivering value to your organization </p>
        </div>
        <div className="cards-our-service">
        <img src={monitor} className="card-img"/>
        <p style={{marginTop:"8%",padding:"1rem",textAlign:"center",fontWeight:"600",fontSize:"1.8rem"}}>Web Development</p>
          <p style={{fontSize:"1.5rem",padding:"1rem"}}>we specialize in creating custom web solutions tailored to your unique business needs. Our team of experienced developers employ industry best practices to build responsive , user-friendly sites and apps that are effective and efficient while delivering value to your organization </p>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
