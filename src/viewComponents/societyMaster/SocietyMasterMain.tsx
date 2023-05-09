import appClient from "@/network/appClient";
import { MasterSocietyDetailType } from "@/types/authTypes";
import React, { useEffect, useState } from "react";
import SocietyMasterBox from "./SocietyMasterBox";
import NotAvailable from "@/commonComponents/NotAvailable";
import MainBox from "@/commonComponents/MainBox";
import { CircularProgress } from "@mui/material";

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
            societyDetails.length === 0 ? (
              <NotAvailable label="Society data" />
            ) : (
              <SocietyMasterBox societyDetails={societyDetails} />
            )
          ) : (
            <CircularProgress />
          )
        }
      />
    </div>
  );
};

export default SocietyMasterMain;
