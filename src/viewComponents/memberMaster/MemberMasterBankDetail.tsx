import NotAvailable from "@/commonComponents/NotAvailable";
import { MasterBankDetailType } from "@/types/authTypes";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const MemberMasterBankDetail = (props: {
  memberMasterBankDetails: MasterBankDetailType[];
}) => {
  return (
    <section className="master-nested-section">
      <p className="master-nested-section-heading">Member Bank Deatils</p>
      <div className="master-field-box">
        {props.memberMasterBankDetails.length != 0 ? (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: "18px" }}>ID</TableCell>
                  <TableCell align="right" sx={{ fontSize: "18px" }}>
                    Bank Name
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "18px" }}>
                    Bank IFSC
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "18px" }}>
                    Bank Address
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "18px" }}>
                    Created At
                  </TableCell>
                </TableRow>
              </TableHead>
              {props.memberMasterBankDetails.map((item, index) => (
                <TableBody key={`member-master-bank-details:${index}`}>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{item.bank_id}</TableCell>
                    <TableCell align="right">{item.bank_name}</TableCell>
                    <TableCell align="right">{item.bank_ifsc}</TableCell>
                    <TableCell align="right">{item.bank_address}</TableCell>
                    <TableCell align="right">
                      {item.created_at.slice(0, 10)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </TableContainer>
        ) : (
          <NotAvailable label="Member bank detail" />
        )}
      </div>
    </section>
  );
};

export default MemberMasterBankDetail;
