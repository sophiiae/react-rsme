import React from "react";

const getImg = page => {
  if (page === 1) return require("../img/im11.jpg");
  else if (page === 2) return require("../img/im22.jpg");
  else return require("../img/im33.jpg");
};
const SideImage = props => {
  const imgSrc = getImg(props.page);
  return (
    <div className="image-holder">
      <img className="img" src={imgSrc} alt="sideImage" />
    </div>
  );
};

export default SideImage;
