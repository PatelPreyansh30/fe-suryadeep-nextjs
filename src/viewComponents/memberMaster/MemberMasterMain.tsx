import NotAvailable from "@/commonComponents/NotAvailable";
import React, { useState } from "react";
import MemberMasterBox from "./MemberMasterBox";

const MemberMasterMain = () => {
  const [memberDetails, setMemberDetails] = useState(undefined);

  return (
    <div>
      <div className="society-master-main-box">
        <h2>Member Information</h2>
        <div>
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
