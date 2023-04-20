import appClient from "@/network/appClient";
import { SocietyDetailType } from "@/types/authTypes";
import React, { useEffect, useState } from "react";
import SocietyMasterBox from "./SocietyMasterBox";

const SocietyMasterMain = () => {
  const [societyDetails, setSocietyDetails] = useState<SocietyDetailType[]>();

  useEffect(() => {
    getSocietyDetails();
  }, []);

  const getSocietyDetails = async () => {
    const res = await appClient.get("/society");
    setSocietyDetails(res.data);
  };

  return (
    <div>
      {societyDetails ? (
        <SocietyMasterBox societyDetails={societyDetails} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SocietyMasterMain;
