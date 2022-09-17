import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

function App() {
  const [counties, setCounties] = useState<string[]>([]);
  console.log({ counties });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCounties(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      {/*Select//Box//TextField//MenuItem//slect with useState*/}
      <TextField
        label="select country"
        select
        onChange={handleChange}
        value={counties}
        fullWidth
        SelectProps={{ multiple: true }}
        size="small"
        color="success"
        helperText="please select country from dropdown"
        error
      >
        <MenuItem value="usa">USA</MenuItem>
        <MenuItem value="uk">UK</MenuItem>
      </TextField>
    </Box>
  );
}

export default App;
