import React from "react";
import augImg from "../../../assets/images/staff_AugmentationB.png";

export const Augmentation = (props) => {
  const handleClick = () => {
    const infoSection = document.getElementById("aug_footer");
    infoSection.scrollIntoView({ behavior: "smooth" });
  };

return (
    <div><img src="augImg" alt="Augmentation Banner">
      </img></div>
        

  );
};
