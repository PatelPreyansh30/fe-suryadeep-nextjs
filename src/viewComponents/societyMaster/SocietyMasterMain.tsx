import appClient from "@/network/appClient";
import { MasterSocietyDetailType } from "@/types/authTypes";
import React, { useEffect, useState } from "react";
import SocietyMasterBox from "./SocietyMasterBox";
import NotAvailable from "@/commonComponents/NotAvailable";

const SocietyMasterMain = () => {
  const [societyDetails, setSocietyDetails] =
    useState<MasterSocietyDetailType[]>();

  const getSocietyDetails: any = async () => {
    const res = await appClient.get("/society");
    setSocietyDetails(res.data);
  };

  useEffect(() => {
    getSocietyDetails();
  }, []);

  return (
    <div>
      <div className="master-main-box">
        <h2 className="master-main-box-h2">Society Information</h2>
        <div className="master-field-box">
          {societyDetails ? (
            <SocietyMasterBox societyDetails={societyDetails} />
          ) : (
            <NotAvailable label="Society data" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SocietyMasterMain;
