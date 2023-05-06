import NotAvailable from "@/commonComponents/NotAvailable";
import React, { useEffect, useState } from "react";
import MemberMasterBox from "./MemberMasterBox";
import { MemberDetailType } from "@/types/authTypes";
import appClient from "@/network/appClient";
import MainBox from "@/commonComponents/MainBox";

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
            <MemberMasterBox memberDetails={memberDetails} />
          ) : (
            <NotAvailable label="Members data" />
          )
        }
      />
    </div>
  );
};

export default MemberMasterMain;
