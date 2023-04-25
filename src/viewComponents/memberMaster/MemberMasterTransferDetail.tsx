import NotAvailable from "@/commonComponents/NotAvailable";
import { MasterTransferDetailType } from "@/types/authTypes";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const MemberMasterTransferDetail = (props: {
  memberMasterTransferDetails: MasterTransferDetailType[];
}) => {
  return (
    <fieldset className="master-nested-section">
      <legend className="master-nested-section-heading">
        Apartment Transfer Details
      </legend>
      <div className="master-field-box">
        {props.memberMasterTransferDetails.length != 0 ? (
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: "18px" }}>ID</TableCell>
                  <TableCell align="right" sx={{ fontSize: "18px" }}>
                    Transfer Date
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "18px" }}>
                    Created At
                  </TableCell>
                </TableRow>
              </TableHead>
              {props.memberMasterTransferDetails.map((item, index) => (
                <TableBody key={`member-master-transfer-details:${index}`}>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{item.transfer_id}</TableCell>
                    <TableCell align="right">{item.transfer_date}</TableCell>
                    <TableCell align="right">
                      {item.created_at.slice(0, 10)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </TableContainer>
        ) : (
          <NotAvailable label="Apartment transfer detail" />
        )}
      </div>
    </fieldset>
  );
};

export default MemberMasterTransferDetail;
