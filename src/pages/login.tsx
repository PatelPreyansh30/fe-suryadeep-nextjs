import React from "react";
import { TextField, Button } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="login-box">
        <p className="login-box-heading-text">
          <span className="text-red-500">SURYADEEP</span> COMPLEX
        </p>
        <hr />
        <p className="text-red-500 mb-2">* Required fields</p>
        <TextField
          label="Username"
          required
          fullWidth
          InputProps={{
            startAdornment: <AccountCircle />,
          }}
          id=""
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          required
          fullWidth
          InputProps={{
            startAdornment: <Lock />,
          }}
          id=""
          variant="outlined"
        />
        <Button fullWidth variant="contained">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
