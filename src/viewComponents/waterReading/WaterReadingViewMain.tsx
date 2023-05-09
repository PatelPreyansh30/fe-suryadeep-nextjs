import MainBox from "@/commonComponents/MainBox";
import React, { useState } from "react";
import YearMonthInput from "./YearMonthInput";
import { PreviousWaterReadingType } from "@/types/authTypes";
import { CircularProgress } from "@mui/material";
import MeterReadingList from "./MeterReadingList";

const WaterReadingViewMain = () => {
  const [previousWaterReadings, setPreviousWaterReadings] =
    useState<PreviousWaterReadingType[]>();
  const [isApiCalling, setIsApiCalling] = useState(false);

  return (
    <MainBox
      heading="Water Readings"
      component={
        <>
          <YearMonthInput
            setIsApiCalling={setIsApiCalling}
            setPreviousWaterReadings={setPreviousWaterReadings}
          />
          <div className="mt-10">
            {isApiCalling ? (
              <CircularProgress />
            ) : (
              <MeterReadingList
                previousWaterReadings={previousWaterReadings || []}
              />
            )}
          </div>
        </>
      }
    />
  );
};

export default WaterReadingViewMain;
