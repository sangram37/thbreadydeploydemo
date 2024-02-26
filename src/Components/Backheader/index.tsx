import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Backheader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="backheader">
        <div onClick={() => navigate(-1)}>
          <span>
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
          </span>
          Back
        </div>
      </div>
    </>
  );
};

export default Backheader;
