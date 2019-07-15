import React from "react";

const getText = page => {
  return page === 3 ? "PDF" : "Next";
};
const Next = props => {
  let txt = getText(props.page);
  return (
    <div className="next">
      <button onClick={props.handleClick}>{txt}</button>
    </div>
  );
};

export default Next;
