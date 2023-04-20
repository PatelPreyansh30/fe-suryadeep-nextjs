import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

const ForwardBackwardBtn = (props: {
  setNextBackState: any;
  nextBackState: number;
  arrayLength:number
}) => {
  const handleGoBack = () => {
    props.setNextBackState(props.nextBackState - 1);
  };

  const handleGoNext = () => {
    props.setNextBackState(props.nextBackState + 1);
  };

  return (
    <section>
      <Tooltip title="Go Back" placement="top">
        <IconButton
          onClick={handleGoBack}
          disabled={props.nextBackState === 0}
          aria-label="back"
          size="large"
        >
          <ArrowBackIosNew />
        </IconButton>
      </Tooltip>
      <Tooltip title="Go Next" placement="top">
        <IconButton
          onClick={handleGoNext}
          disabled={props.nextBackState === props.arrayLength - 1}
          aria-label="forward"
          size="large"
        >
          <ArrowForwardIos />
        </IconButton>
      </Tooltip>
    </section>
  );
};

export default ForwardBackwardBtn;
