import React, { ReactNode } from "react";

const MainBox = (props: { heading: string; component: ReactNode }) => {
  return (
    <div className="master-main-box">
      <h2 className="master-main-box-h2">{props.heading}</h2>
      <div className="master-field-box">{props.component}</div>
    </div>
  );
};

export default MainBox;
