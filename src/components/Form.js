import React from "react";
import LinkedIn from "./linkedin/LinkedIn";
import Next from "./Next";
import Steps from "./Steps";
import Github from "./Github";

const stepPage = num => {
  if (num === 1) return <LinkedIn />;
  else if (num === 2) return <Github />;
};
const Form = props => {
  let page = stepPage(props.page);

  return (
    <div className="form">
      <div className="form-content">
        <Steps pg={props.page} />
        <div className="form-header">
          <h2>RSME</h2>
        </div>
        {page}
      </div>
      <Next />
    </div>
  );
};

export default Form;
