import React from "react";

const Error = (props: { field: string }) => {
  return <div className="text-red-500">{props.field} is mandetory</div>;
};

export default Error;
