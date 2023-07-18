import React from "react";
import Heroimg from "./../../../Components/Asstets/CyberSecurity-01.png";
import CommanBtn from "../../CommanBtn/CommanBtn";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="container-fluid mt-5  ">
      <div className="row">
        <div className="col-sm-12 col-md-6 text-light Hero-left-side  ">
          <h1 className="Hero-Heading ">
            We're Here To Secure Your Privace On Your Hands
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            aperiam corrupti accusantium ipsa porro repellat atque debitis cum
            veniam amet.
          </p>
          <div className="gap-5 d-flex mt-2">
            <div>
              <Link to={"/"}>
                <CommanBtn CommanBtn={"Get Start Now"} />
              </Link>
            </div>
            <div>
              <Link to={"/"}>
                <CommanBtn CommanBtn={"Learn More"} />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 ">
          <img src={Heroimg} alt="Heroimg" className="Image-responsive" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
