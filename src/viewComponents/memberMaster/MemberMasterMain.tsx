import NotAvailable from "@/commonComponents/NotAvailable";
import React, { useEffect, useState } from "react";
import MemberMasterBox from "./MemberMasterBox";
import { MemberDetailType } from "@/types/authTypes";
import appClient from "@/network/appClient";

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
      <div className="master-main-box">
        <h2 className="master-main-box-h2">Member Information</h2>
        <div className="master-field-box">
          {memberDetails ? (
            <MemberMasterBox memberDetails={memberDetails} />
          ) : (
            <NotAvailable label="Members data" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberMasterMain;
