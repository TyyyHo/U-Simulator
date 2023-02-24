import React from "react";
import "./loading.scss";
import ladingImg from "./asset/loading.webp";

const Loading = ({ isLoad }) => {
 
  return (
    <div className={`loading ${isLoad ? "invisible" : "visible"}`}>
      <img loading="eager" src={ladingImg} alt="Loading" />
      <p>Loading</p>
    </div>
  );
};

export default Loading;
