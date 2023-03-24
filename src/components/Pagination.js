import React from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

const Pagination = ({ page, totalPages, onLeftClick, onRightClick }) => {
  return (
    <div className="pagination-container">
      <button onClick={onLeftClick}>
        <FcPrevious />
      </button>
      <div>
        <p>
         {page} de {totalPages}
        </p>
      </div>
      <button onClick={onRightClick}>
        {" "}
        <FcNext />
      </button>
    </div>
  );
};

export default Pagination;
