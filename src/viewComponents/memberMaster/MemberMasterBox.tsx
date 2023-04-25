import ForwardBackwardBtn from "@/commonComponents/ForwardBackwardBtn";
import { RequiredFields, RequiredStar } from "@/commonComponents/RequiredStar";
import { MasterMemberDetailType, MemberDetailType } from "@/types/authTypes";
import { Delete, Save, Update } from "@mui/icons-material";
import { Button, TextField, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";

const MemberMasterBox = (props: { memberDetails: MemberDetailType[] }) => {
  const [masterMemberDetail, setMasterMemberDetail] =
    useState<MasterMemberDetailType>({
      member_id: 0,
      member_name: "",
      member_email: "",
      member_mobile: "",
      member_alternative_mobile: "",
      member_business: "",
      member_death_date: "",
    });
  const [goBackNextState, setGoBackNextState] = useState<number>(0);

  useEffect(() => {
    setMasterMemberDetail(props.memberDetails[goBackNextState].member);
  }, [props.memberDetails, goBackNextState]);

  const memberDetailsInputFields = [
    {
      label: "Member ID",
      name: "member_id",
      type: "text",
      required: true,
    },
    {
      label: "Member Name",
      name: "member_name",
      type: "text",
      required: true,
    },
    {
      label: "Member Email",
      name: "member_email",
      type: "email",
      required: false,
    },
    {
      label: "Member Mobile",
      name: "member_mobile",
      type: "text",
      required: true,
    },
    {
      label: "Member Alternate Mobile",
      name: "member_alternative_mobile",
      type: "text",
      required: false,
    },
    {
      label: "Member Business",
      name: "member_business",
      type: "text",
      required: false,
    },
    {
      label: "Member Death Date",
      name: "member_death_date",
      type: "date",
      required: false,
    },
  ];
  return (
    <>
      <RequiredFields />

      {memberDetailsInputFields.map((item, index) => (
        <div className="master-input-box" key={`member-master-index:${index}`}>
          <label className="master-input-box-label" htmlFor={item.name}>
            {item.label}
            <RequiredStar isShow={item.required} />:
          </label>
          <TextField
            name={item.name}
            value={(masterMemberDetail as any)[item.name] || ""}
            id={item.name}
            type={item.type}
            // onChange={handleTextInputChange}
            required={item.required}
            sx={{ width: "70%" }}
            variant="outlined"
            size="small"
          />
        </div>
      ))}

      <section className="master-field-box-section">
        <ForwardBackwardBtn
          arrayLength={props.memberDetails.length}
          nextBackState={goBackNextState}
          setNextBackState={setGoBackNextState}
        />
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
    </>
  );
};

export default MemberMasterBox;
