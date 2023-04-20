import { RequiredFields, RequiredStar } from "@/commonComponents/RequiredStar";
import { SocietyDetailType } from "@/types/authTypes";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  Delete,
  Save,
  Update,
} from "@mui/icons-material";
import { Button, IconButton, TextField, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";

export const initialSocietyInputState = {
  society_id: 0,
  society_name: "",
  society_address: "",
  society_registration_code: "",
  society_registration_date: "",
  society_mobile: "",
};

const SocietyMasterBox = (props: { societyDetails: SocietyDetailType[] }) => {
  const [singleSocietyDetailInput, setSingleSocietyDetailInput] =
    useState<SocietyDetailType>(initialSocietyInputState);
  const [goBackNextState, setGoBackNextState] = useState<number>(0);

  useEffect(() => {
    setSingleSocietyDetailInput(props.societyDetails[goBackNextState]);
  }, [goBackNextState, setSingleSocietyDetailInput, props.societyDetails]);

  const handleGoBack = () => {
    setGoBackNextState(goBackNextState - 1);
  };
  const handleGoNext = () => {
    setGoBackNextState(goBackNextState + 1);
  };

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setSingleSocietyDetailInput((prev) => ({ ...prev, [name]: value }));
  };

  const societyInputData = [
    {
      label: "Society Code",
      name: "society_id",
      type: "text",
      required: true,
    },
    {
      label: "Society Name",
      name: "society_name",
      type: "text",
      required: true,
    },
    {
      label: "Society Address",
      name: "society_address",
      type: "text",
      required: true,
    },
    {
      label: "Society Mobile",
      name: "society_mobile",
      type: "text",
      required: false,
    },
    {
      label: "Society Registration Number",
      name: "society_registration_code",
      type: "text",
      required: true,
    },
    {
      label: "Society Registration Date",
      name: "society_registration_date",
      type: "date",
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
              value={(singleSocietyDetailInput as any)[item.name]}
              id={item.name}
              type={item.type}
              onChange={handleTextInputChange}
              required={item.required}
              sx={{ width: "70%" }}
              variant="outlined"
              size="small"
            />
          </div>
        ))}
        <section>
          <section>
            <Tooltip title="Go Back" placement="top">
              <IconButton
                onClick={handleGoBack}
                disabled={goBackNextState === 0}
                aria-label="back"
                size="large"
              >
                <ArrowBackIosNew />
              </IconButton>
            </Tooltip>
            <Tooltip title="Go Next" placement="top">
              <IconButton
                onClick={handleGoNext}
                disabled={goBackNextState === props.societyDetails.length - 1}
                aria-label="forward"
                size="large"
              >
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
