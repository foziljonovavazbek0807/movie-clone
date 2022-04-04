import React from "react";
import "./Branch.css";

function branch(props) {
  return (
    <div className="Branch">
      <b className="tit">
        <span>{props.name1}</span>
        <span>{props.name2}</span>
      </b>
    </div>
  );
}

export default branch;
