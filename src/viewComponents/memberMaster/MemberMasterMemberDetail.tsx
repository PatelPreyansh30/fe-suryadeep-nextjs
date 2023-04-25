import React from "react";
import { TextField } from "@mui/material";
import { MasterMemberDetailType } from "@/types/authTypes";
import { RequiredStar } from "@/commonComponents/RequiredStar";

export const OutlinedFullSmallTextFieldMaster = (props: {
  name: string;
  label: string;
  value: any;
  required: boolean;
  type?: "date" | "email";
}) => {
  return (
    <>
      <label className="master-input-box-label" htmlFor={props.name}>
        {props.label}
        <RequiredStar isShow={props.required} />:
      </label>
      <TextField
        name={props.name}
        value={props.value || ""}
        id={props.name}
        // onChange={handleTextInputChange}
        type={props.type || "text"}
        fullWidth
        variant="outlined"
        size="small"
      />
    </>
  );
};

const MemberMasterMemberDetail = (props: {
  memberMasterMemberDetails: MasterMemberDetailType;
  memberMasterApartmentNumber: string;
  memberMasterApartmentAllotedDate: string | null;
  memberMasterApartmentAddress: string;
}) => {
  return (
    <fieldset className="master-nested-section">
      <legend className="master-nested-section-heading">Member Details</legend>
      <div className="flex align-items-flex-start gap-20 p-10">
        <div className="grid-2 align-items-center">
          <OutlinedFullSmallTextFieldMaster
            label="Member ID"
            name="member_id"
            required
            value={props.memberMasterMemberDetails.member_id}
          />
          <OutlinedFullSmallTextFieldMaster
            label="Member Name"
            name="member_name"
            required
            value={props.memberMasterMemberDetails.member_name}
          />
          <OutlinedFullSmallTextFieldMaster
            label="Member Mobile"
            name="member_mobile"
            required
            value={props.memberMasterMemberDetails.member_mobile}
          />
          <OutlinedFullSmallTextFieldMaster
            label="Member Email"
            name="member_email"
            required={false}
            type="email"
            value={props.memberMasterMemberDetails.member_email}
          />
          <OutlinedFullSmallTextFieldMaster
            label="Member Alternate Mobile"
            name="member_alternative_mobile"
            required={false}
            value={props.memberMasterMemberDetails.member_alternative_mobile}
          />
          <OutlinedFullSmallTextFieldMaster
            label="Member Death Date"
            name="member_death_date"
            required={false}
            type="date"
            value={props.memberMasterMemberDetails.member_death_date}
          />
        </div>
        <div className="grid-2 align-items-center">
          <OutlinedFullSmallTextFieldMaster
            label="Apartment Number"
            name="apartment_number"
            required
            value={props.memberMasterApartmentNumber}
          />
          <OutlinedFullSmallTextFieldMaster
            label="Apartment Alloted Date"
            name="apartment_alloted_date"
            required
            type="date"
            value={props.memberMasterApartmentAllotedDate || ""}
          />
          <OutlinedFullSmallTextFieldMaster
            label="Apartment Address"
            name="apartment_address"
            required
            value={props.memberMasterApartmentAddress}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default MemberMasterMemberDetail;
