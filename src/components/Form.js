import React from "react";
import LinkedIn from "./LinkedIn";
import LinkedInNote from "./LinkedInNote";
import Steps from "./Steps";

const stepPage = num => {
  if (num == 1)
    return (
      <div>
        <LinkedInNote />
        <LinkedIn />
      </div>
    );
};
const Form = props => {
  let page = stepPage(props.page);

  return (
    <div className="form">
      <div className="form-content">
        <div className="form-header">
          <h2>RSME</h2>
        </div>
        {page}
        <Steps />
      </div>
    </div>
  );
};

export default Form;
