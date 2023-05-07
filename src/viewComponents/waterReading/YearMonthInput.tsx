import { RequiredFields } from "@/commonComponents/RequiredStar";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const YearMonthInput = () => {
  const [waterReadingInputs, setWaterReadingInputs] = useState({
    year: 0,
    month: 1,
  });

  const months = [
    { value: 1, name: "January" },
    { value: 2, name: "Febuary" },
    { value: 3, name: "March" },
    { value: 4, name: "April" },
    { value: 5, name: "May" },
    { value: 6, name: "June" },
    { value: 7, name: "July" },
    { value: 8, name: "August" },
    { value: 9, name: "September" },
    { value: 10, name: "October" },
    { value: 11, name: "November" },
    { value: 12, name: "December" },
  ];

  useEffect(() => {
    const date = new Date();
    setWaterReadingInputs({ year: date.getFullYear(), month: date.getMonth() });
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWaterReadingInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnClick = () => {
    console.log(waterReadingInputs);
  };

  return (
    <>
      <RequiredFields />
      <FormControl required sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-select-small-label">Society</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          // value={age}
          label="Society"
          // onChange={handleChange}
        >
          <MenuItem value={1}>Society 1</MenuItem>
          <MenuItem value={2}>Society 2</MenuItem>
          <MenuItem value={3}>Society 3</MenuItem>
          <MenuItem value={4}>Society 4</MenuItem>
        </Select>
      </FormControl>
      <TextField
        name="year"
        value={waterReadingInputs.year}
        onChange={handleOnChange}
        sx={{ m: 1, minWidth: 200 }}
        required
        id="outlined-basic"
        label="Year"
        variant="outlined"
      />
      <FormControl required sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-select-small-label">Month</InputLabel>
        <Select
          name="month"
          value={waterReadingInputs.month}
          onChange={(e: any) => handleOnChange(e)}
          label="Month"
          labelId="demo-select-small-label"
          id="demo-select-small"
        >
          {months.map((item, index) => (
            <MenuItem
              value={item.value}
              key={`water-reading-month-input:${index}`}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        onClick={handleOnClick}
        sx={{ m: 1, minWidth: 200 }}
        variant="contained"
        size="large"
      >
        Get Previous Readings
      </Button>
    </>
  );
};

export default YearMonthInput;
