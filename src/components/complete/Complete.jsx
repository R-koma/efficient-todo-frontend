import React, { useEffect, useState } from "react";
import "./Complete.css";
import axios from "axios";
import CompleteList from "./CompleteList";

const Complete = () => {
  const [completes, setCompletes] = useState([]);

  useEffect(() => {
    const fetchCompletes = async () => {
      const response = await axios.get("/complete");
      setCompletes(response.data);
    };
    fetchCompletes();
  }, [completes]);

  const todoDeleteButton = async (id) => {
    try {
      await axios.delete(`/complete/${id}`);
      setCompletes((prevCompletes) =>
        prevCompletes.filter((complete) => complete._id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="completePage">
        <div className="completePageArea">
          <h2 className="completePageTitle">完了したタスク</h2>
          <CompleteList completes={completes} onDelete={todoDeleteButton} />
        </div>
      </div>
    </>
  );
};

export default Complete;
