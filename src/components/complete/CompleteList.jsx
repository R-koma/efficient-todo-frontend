import React from "react";
import "./CompleteList.css";

const CompleteList = ({ completes }) => {
  return (
    <>
      <div className="completeList">
        <ul className="completeListWrapper">
          {completes.map((complete) => (
            <li className="completeListTitle" key={complete._id}>
              <div className="completeTitle">{complete.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CompleteList;
