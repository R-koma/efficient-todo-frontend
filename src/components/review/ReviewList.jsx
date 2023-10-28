import React from "react";
import "./ReviewList.css";

const ReviewList = ({ reviews, onComplete, onDelete }) => {
  return (
    <>
      <div className="reviewList">
        <ul className="reviewListWrapper">
          {reviews.map((review) => (
            <li className="reviewListTitle" key={review._id}>
              <div
                className="reviewCheckBox"
                onClick={() => onComplete(review._id)}
              >
                <i className="fa-regular fa-circle"></i>
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="reviewTitle">{review.title}</div>
              <button
                className="reviewDeleteButton"
                onClick={() => onDelete(review._id)}
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

export default ReviewList;
