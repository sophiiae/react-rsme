import React from "react";
import SideImage from "./SideImage";
import Form from "./Form";

const Wizard = () => {
  return (
    <form className="wizard">
      <section>
        <div className="wizard-inner">
          <SideImage />
          <Form page="1" />
        </div>
      </section>
    </form>
  );
};

export default Wizard;
