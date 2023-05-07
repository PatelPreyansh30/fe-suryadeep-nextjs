import MainBox from "@/commonComponents/MainBox";
import React from "react";
import YearMonthInput from "./YearMonthInput";

const WaterReadingViewMain = () => {
  return (
    <MainBox
      heading="Water Readings"
      component={
        <>
          <YearMonthInput />
        </>
      }
    />
  );
};

export default WaterReadingViewMain;
