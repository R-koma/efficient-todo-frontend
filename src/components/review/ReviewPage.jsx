import React, { useEffect, useState } from "react";
import "./ReviewPage.css";
import ReviewList from "./ReviewList";
import axios from "axios";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios.get("/review");
      setReviews(response.data);
    };
    fetchReviews();

    // 1分ごとにタスクを再取得
    const intervalId = setInterval(fetchReviews, 60000);
    return () => clearInterval(intervalId);
  }, [reviews]);

  const completeTodo = async (id) => {
    try {
      await axios.put(`/review/${id}/complete`);
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review._id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const todoDeleteButton = async (id) => {
    try {
      await axios.delete(`/review/${id}`);
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review._id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="reviewPage">
        <div className="reviewPageArea">
          <h2 className="reviewPageTitle">復習タスク</h2>
          <ReviewList
            reviews={reviews}
            onComplete={completeTodo}
            onDelete={todoDeleteButton}
          />
        </div>
      </div>
    </>
  );
};

export default ReviewPage;
