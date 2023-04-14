import Image from "next/image";
import logo from "../../public/logo.png";
import React from "react";
import { TextField, Button } from "@mui/material";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="login-box">
        <Image src={logo} alt="Logo" className="w-[120px] mb-[10px]" />
        <hr className="w-100 h-2" />
        <TextField
          label="Username"
          required
          fullWidth
          id=""
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          required
          fullWidth
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
