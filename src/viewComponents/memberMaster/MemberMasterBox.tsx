import ForwardBackwardBtn from "@/commonComponents/ForwardBackwardBtn";
import { RequiredFields, RequiredStar } from "@/commonComponents/RequiredStar";
import { MasterMemberDetailType, MemberDetailType } from "@/types/authTypes";
import { Delete, Save, Update } from "@mui/icons-material";
import { Button, TextField, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import MemberMasterBankDetail from "./MemberMasterBankDetail";
import MemberMasterTransferDetail from "./MemberMasterTransferDetail";
import MemberMasterNomineeDetail from "./MemberMasterNomineeDetail";
import MemberMasterMemberDetail from "./MemberMasterMemberDetail";

const MemberMasterBox = (props: { memberDetails: MemberDetailType[] }) => {
  const [goBackNextState, setGoBackNextState] = useState<number>(0);

  return (
    <>
      <RequiredFields />
      <MemberMasterMemberDetail
        memberMasterMemberDetails={props.memberDetails[goBackNextState].member}
        memberMasterApartmentNumber={
          props.memberDetails[goBackNextState].apartment_number
        }
        memberMasterApartmentAddress={
          props.memberDetails[goBackNextState].apartment_address
        }
        memberMasterApartmentAllotedDate={
          props.memberDetails[goBackNextState].apartment_alloted_date
        }
      />
      <MemberMasterBankDetail
        memberMasterBankDetails={props.memberDetails[goBackNextState].bank}
      />
      <MemberMasterTransferDetail
        memberMasterTransferDetails={
          props.memberDetails[goBackNextState].transfer
        }
      />
      <MemberMasterNomineeDetail
        memberMasterNomineeDetails={
          props.memberDetails[goBackNextState].nominee
        }
      />

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
