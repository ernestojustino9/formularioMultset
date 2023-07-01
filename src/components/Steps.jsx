import React from "react";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

const Steps = ({ currentStep }) => {
  return (
    <div className="stepes">
      {/*  */}
      <div className="step actives">
        <AiOutlineUser />
        <p>Identificacao</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "actives" : ""}`}>
        <AiOutlineStar />
        <p>Avaliacao</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "actives" : ""}`}>
        <FiSend />
        <p>Envio</p>
      </div>
      {/*  */}
    </div>
  );
};

export default Steps;
