import { RequiredFields, RequiredStar } from "@/commonComponents/RequiredStar";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  Delete,
  Save,
  Update,
} from "@mui/icons-material";
import { Button, IconButton, TextField, Tooltip } from "@mui/material";
import React from "react";

const SocietyMasterBox = () => {
  const societyInputData = [
    {
      label: "Society Code",
      name: "societyCode",
      type: "text",
      required: true,
    },
    {
      label: "Society Name",
      name: "societyName",
      type: "text",
      required: true,
    },
    {
      label: "Society Address",
      name: "societyAddress",
      type: "text",
      required: true,
    },
    {
      label: "Society Mobile",
      name: "societyMobile",
      type: "text",
      required: false,
    },
    {
      label: "Society Registration Number",
      name: "societyRegistrationNumber",
      type: "text",
      required: true,
    },
    {
      label: "Society Registration Date",
      name: "societyRegistrationDate",
      type: "text",
      required: true,
    },
  ];
  return (
    <div className="society-master-main-box">
      <h2>Society Information</h2>
      <div>
        <RequiredFields />
        {societyInputData.map((item, index) => (
          <div key={`society-master-index:${index}`}>
            <label htmlFor={item.name}>
              {item.label}
              <RequiredStar isShow={item.required} />:
            </label>
            <TextField
              name={item.name}
              label={item.label}
              id={item.name}
              variant="outlined"
              size="small"
              required={item.required}
            />
          </div>
        ))}
        <section>
          <section>
            <Tooltip title="Go Back" placement="top">
              <IconButton aria-label="back" size="large">
                <ArrowBackIosNew />
              </IconButton>
            </Tooltip>
            <Tooltip title="Go Next" placement="top">
              <IconButton aria-label="forward" size="large">
                <ArrowForwardIos />
              </IconButton>
            </Tooltip>
          </section>
          <section>
            <Tooltip title="Update" placement="top">
              <Button
                sx={{ margin: "0 5px" }}
                color="warning"
                variant="contained"
                size="small"
                startIcon={<Update />}
              >
                Update
              </Button>
            </Tooltip>
            <Tooltip title="Save" placement="top">
              <Button
                sx={{ margin: "0 5px" }}
                color="success"
                disabled
                variant="contained"
                size="small"
                startIcon={<Save />}
              >
                Save
              </Button>
            </Tooltip>
            <Tooltip title="Delete" placement="top">
              <Button
                sx={{ margin: "0 5px" }}
                color="error"
                disabled
                variant="outlined"
                size="small"
                startIcon={<Delete />}
              >
                Delete
              </Button>
            </Tooltip>
          </section>
        </section>
      </div>
    </div>
  );
};

export default SocietyMasterBox;
