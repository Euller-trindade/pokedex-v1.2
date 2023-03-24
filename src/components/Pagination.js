import React from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

import './pagination.css'

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <div className="pagination-container">
      <button onClick={onLeftClick}>
        {" "}
        <FcPrevious />
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>
        {" "}
        <FcNext />
      </button>
    </div>
  );
};

export default Pagination;
