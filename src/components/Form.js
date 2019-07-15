import React from "react";
import LinkedIn from "./linkedin/LinkedIn";
import Next from "./Next";
import Steps from "./Steps";
import Github from "./Github";
import SuccessPage from "./Success";

const stepPage = num => {
  if (num === 1) return <LinkedIn />;
  else if (num === 2) return <Github />;
  else return <SuccessPage />;
};
const Form = props => {
  let pageContent = stepPage(props.page);

  return (
    <div className="form">
      <div className="form-content">
        <Steps page={props.page} />
        <div className="form-header">
          <h2>RSME</h2>
        </div>
        {pageContent}
      </div>
      <Next page={props.page} handleClick={props.handleClick} />
    </div>
  );
};

export default Form;
