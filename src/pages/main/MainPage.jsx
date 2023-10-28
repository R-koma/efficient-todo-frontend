import React from "react";
import TodoPage from "../../components/todo/TodoPage";
import ReviewPage from "../../components/review/ReviewPage";
import Complete from "../../components/complete/Complete";

const MainPage = () => {
  return (
    <>
      <TodoPage />
      <ReviewPage />
      <Complete />
    </>
  );
};

export default MainPage;
