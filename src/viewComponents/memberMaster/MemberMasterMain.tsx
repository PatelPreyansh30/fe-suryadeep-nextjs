import NotAvailable from "@/commonComponents/NotAvailable";
import React, { useEffect, useState } from "react";
import MemberMasterBox from "./MemberMasterBox";
import { MemberDetailType } from "@/types/authTypes";
import appClient from "@/network/appClient";
import MainBox from "@/commonComponents/MainBox";
import { CircularProgress } from "@mui/material";

const MemberMasterMain = () => {
  const [memberDetails, setMemberDetails] = useState<MemberDetailType[]>();

  const getMembersDetails: any = async () => {
    const res = await appClient.get("/member");
    setMemberDetails(res.data);
  };

  useEffect(() => {
    getMembersDetails();
  }, []);

  return (
    <div>
      <MainBox
        heading="Member Information"
        component={
          memberDetails ? (
            memberDetails.length === 0 ? (
              <NotAvailable label="Members data" />
            ) : (
              <MemberMasterBox memberDetails={memberDetails} />
            )
          ) : (
            <CircularProgress />
          )
        }
      />
    </div>
  );
};

export default MemberMasterMain;
