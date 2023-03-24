import React from "react";
import NotFoundImg from "../assets/notFound.png";

import "./notFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Este pokémon não existe!</h2>
      <img src={NotFoundImg} alt="Not Found" />
    </div>
  );
};

export default NotFound;
