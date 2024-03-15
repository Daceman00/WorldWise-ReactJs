import React from "react";
import { useNavigate } from "react-router-dom";
import Buton from "./Buton";

function BackButton() {
    const navigate = useNavigate()

  return (
    <Buton
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Buton>
  );
}

export default BackButton;
