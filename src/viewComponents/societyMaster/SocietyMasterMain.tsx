import appClient from "@/network/appClient";
import { MasterSocietyDetailType } from "@/types/authTypes";
import React, { useEffect, useState } from "react";
import SocietyMasterBox from "./SocietyMasterBox";
import NotAvailable from "@/commonComponents/NotAvailable";
import MainBox from "@/commonComponents/MainBox";

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
      <MainBox
        heading="Society Information"
        component={
          societyDetails ? (
            <SocietyMasterBox societyDetails={societyDetails} />
          ) : (
            <NotAvailable label="Society data" />
          )
        }
      />
    </div>
  );
};

export default SocietyMasterMain;
