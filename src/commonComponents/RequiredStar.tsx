import React from "react";

export const RequiredStar = (props: { isShow: boolean }) => {
  return (
    <span className="text-red-500" style={{ margin: "0 3px" }}>
      {props.isShow ? "*" : undefined}
    </span>
  );
};

export const RequiredFields = () => {
  return <p className="text-red-500 mb-2">* Required fields</p>;
};
