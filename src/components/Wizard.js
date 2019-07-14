import React from "react";
import SideImage from "./SideImage";
import Form from "./Form";

const Wizard = () => {
  let page = 2;
  return (
    <div className="wizard">
      <section>
        <div className="wizard-inner">
          <SideImage page={page} />
          <Form page={page} />
        </div>
      </section>
    </div>
  );
};

export default Wizard;
