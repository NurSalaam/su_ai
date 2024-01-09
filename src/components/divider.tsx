import React, { FC } from "react";
import pattern from "../assets/images/pattern.png";

const Divider: FC<{ height: string }> = ({ height }) => {
  return (
    <div
      style={{
        height: `${height}`,
        width: "100%",
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: "repeat",
      }}
    ></div>
  );
};

export default Divider;
