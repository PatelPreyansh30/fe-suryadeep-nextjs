import React from "react";
import NotAvailable from "@/commonComponents/NotAvailable";
import { MasterNomineeDetailType } from "@/types/authTypes";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const MemberMasterNomineeDetail = (props: {
  memberMasterNomineeDetails: MasterNomineeDetailType[];
}) => {
  return (
    <fieldset className="master-nested-section">
      <legend className="master-nested-section-heading">Apartment Nominee Details</legend>
      <div className="master-field-box">
        {props.memberMasterNomineeDetails.length != 0 ? (
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: "18px" }}>ID</TableCell>
                  <TableCell align="right" sx={{ fontSize: "18px" }}>
                    Nominee Name
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "18px" }}>
                    Created At
                  </TableCell>
                </TableRow>
              </TableHead>
              {props.memberMasterNomineeDetails.map((item, index) => (
                <TableBody key={`member-master-transfer-details:${index}`}>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{item.nominee_id}</TableCell>
                    <TableCell align="right">{item.nominee_name}</TableCell>
                    <TableCell align="right">
                      {item.created_at.slice(0, 10)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </TableContainer>
        ) : (
          <NotAvailable label="Apartment nominee detail" />
        )}
      </div>
    </fieldset>
  );
};

export default MemberMasterNomineeDetail;
