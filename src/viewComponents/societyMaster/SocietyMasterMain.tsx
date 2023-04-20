import appClient from "@/network/appClient";
import { SocietyDetailType } from "@/types/authTypes";
import React, { useEffect, useState } from "react";
import SocietyMasterBox from "./SocietyMasterBox";
import NotAvailable from "@/commonComponents/NotAvailable";

const SocietyMasterMain = () => {
  const [societyDetails, setSocietyDetails] = useState(undefined);

  const getSocietyDetails = async () => {
    const res = await appClient.get("/society");
    setSocietyDetails(res.data);
  };

  useEffect(() => {
    getSocietyDetails();
  }, []);

  return (
    <div>
      <div className="society-master-main-box">
        <h2>Society Information</h2>
        <div>
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
