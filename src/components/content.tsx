import React, { FC } from "react";

interface ContentProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}
const Content: FC<ContentProps> = ({ children, style }) => {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "10px 15px",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Content;
