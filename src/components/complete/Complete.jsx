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
  return (
    <>
      <div className="completePage">
        <h1 className="completePageTitle">完了したタスク</h1>
        <div className="completePageArea">
          <CompleteList completes={completes} />
        </div>
      </div>
    </>
  );
};

export default Complete;
