import React, { useState } from "react";
import SideImage from "./SideImage";
import Form from "./Form";

const Wizard = () => {
  let [page, setPage] = useState(1);

  const handleClick = () => {
    if (page < 3) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };

  return (
    <div className="wizard">
      <section>
        <div className="wizard-inner">
          <SideImage page={page} />
          <Form page={page} handleClick={handleClick} />
        </div>
      </section>
    </div>
  );
};

export default Wizard;
