import Error from "@/commonComponents/Error";
import appClient from "@/network/appClient";
import { PreviousWaterReadingType } from "@/types/authTypes";
import { toastSuccess } from "@/utils/toastify";
import { Button, TableCell, TableRow, TextField } from "@mui/material";
import React, { useState } from "react";

const MeterReadingInput = (props: {
  prevMeterReading: PreviousWaterReadingType;
  index: number;
}) => {
  const [readingInput, setReadingInput] = useState({
    meterReadingInput: "",
    meterReadingDate: "",
  });
  const [meterReadingInputError, setMeterReadingInputError] = useState(false);
  const [meterReadingDateError, setMeterReadingDateError] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeterReadingInputError(false);
    setMeterReadingDateError(false);

    const { name, value } = e.target;
    setReadingInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnClick = () => {
    if (readingInput.meterReadingInput === "") {
      setMeterReadingInputError(true);
      return;
    } else if (readingInput.meterReadingDate === "") {
      setMeterReadingDateError(true);
      return;
    } else {
      addMeterReadings();
    }
  };

  const addMeterReadings = async () => {
    let res = await appClient.post("/water-reading/", {
      water_reading: readingInput.meterReadingInput,
      reading_date: readingInput.meterReadingDate,
      apartment: props.prevMeterReading.apartment,
    });
    toastSuccess("Meter reading added");
  };

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {props.index + 1}
      </TableCell>
      <TableCell align="right">
        {props.prevMeterReading.apartment_info.apartment_number}
      </TableCell>
      <TableCell align="right">
        {props.prevMeterReading.water_reading}
      </TableCell>
      <TableCell align="right">
        <TextField
          name="meterReadingInput"
          value={readingInput.meterReadingInput}
          onChange={handleOnChange}
          type="number"
          required
          size="small"
          variant="outlined"
        />
        {meterReadingInputError && <Error field="Meter reading" />}
      </TableCell>
      <TableCell align="right">
        <TextField
          name="meterReadingDate"
          value={readingInput.meterReadingDate}
          onChange={handleOnChange}
          type="date"
          required
          size="small"
          variant="outlined"
        />
        {meterReadingDateError && <Error field="Reading date" />}
      </TableCell>
      <TableCell align="right">
        <Button onClick={handleOnClick} variant="contained" size="small">
          Add
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default MeterReadingInput;
