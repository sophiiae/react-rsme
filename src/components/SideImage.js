import React from "react";

const SideImage = props => {
  return (
    <div className="image-holder">
      <img className="img" src={require("../img/im1.jpg")} alt="sideImage" />
    </div>
  );
};

export default SideImage;
