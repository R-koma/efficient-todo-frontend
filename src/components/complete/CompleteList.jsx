import React from "react";
import "./CompleteList.css";

const CompleteList = ({ completes, onDelete }) => {
  return (
    <>
      <div className="completeList">
        <ul className="completeListWrapper">
          {completes.map((complete) => (
            <li className="completeListTitle" key={complete._id}>
              <div className="completeTitle">・{complete.title}</div>
              <button
                className="completeDeleteButton"
                onClick={() => onDelete(complete._id)}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CompleteList;
