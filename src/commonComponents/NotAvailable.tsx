import React from "react";

const NotAvailable = (props: { label?: string }) => {
  return (
    <div className="text-red-500 mb-2">
      {props.label ? `${props.label} not available` : "Not available"}
    </div>
  );
};

export default NotAvailable;
