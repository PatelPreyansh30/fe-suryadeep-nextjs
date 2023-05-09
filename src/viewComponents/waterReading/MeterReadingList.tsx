import NotAvailable from "@/commonComponents/NotAvailable";
import { PreviousWaterReadingType } from "@/types/authTypes";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import MeterReadingInput from "./MeterReadingInput";

const MeterReadingList = (props: {
  previousWaterReadings: PreviousWaterReadingType[];
}) => {
  return (
    <>
      {props.previousWaterReadings.length === 0 ? (
        <NotAvailable label="Meter readings" />
      ) : (
        <fieldset className="border-black">
          <legend className="px-5 mx-5">Meter Readings</legend>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Index</TableCell>
                  <TableCell align="right">Apartment</TableCell>
                  <TableCell align="right">Previous Reading</TableCell>
                  <TableCell align="right">Current Reading Input</TableCell>
                  <TableCell align="right">Current Reading Date</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.previousWaterReadings.map((item, index) => (
                  <MeterReadingInput
                    prevMeterReading={item}
                    index={index}
                    key={`meter-reading-table:${index}`}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </fieldset>
      )}
    </>
  );
};

export default MeterReadingList;
