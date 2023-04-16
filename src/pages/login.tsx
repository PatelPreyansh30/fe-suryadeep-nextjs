import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import {
  AccountCircle,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { toastError, toastSuccess } from "@/utils/toastify";
import appClient from "@/network/AppClient";
import {
  APIConstant,
  ApplicationConstant,
} from "@/applicationConstant/constant";
import { useRouter } from "next/router";

const Login = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const router = useRouter();

  const handleOnClick = async () => {
    appClient
      .post(APIConstant.LOGIN_API, {
        username: "abcd",
        password: "12345",
      })
      .then((res) => {
        localStorage.setItem(
          ApplicationConstant.ACCESS_TOKEN,
          res.data.accessToken
        );
        router.replace(ApplicationConstant.DASHBOARD_PATH);
      })
      .catch(() => {
        toastError("Please try again!!");
      });
  };

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
            startAdornment: <AccountCircle sx={{ marginRight: "10px" }} />,
          }}
          id=""
          variant="outlined"
        />
        <TextField
          label="Password"
          type={isPasswordShow ? "password" : "text"}
          required
          fullWidth
          InputProps={{
            startAdornment: <Lock sx={{ marginRight: "10px" }} />,
            endAdornment: isPasswordShow ? (
              <Visibility
                onClick={() => setIsPasswordShow(!isPasswordShow)}
                sx={{ cursor: "pointer", marginLeft: "10px" }}
              />
            ) : (
              <VisibilityOff
                onClick={() => setIsPasswordShow(!isPasswordShow)}
                sx={{ cursor: "pointer", marginLeft: "10px" }}
              />
            ),
          }}
          id=""
          variant="outlined"
        />
        <Button onClick={handleOnClick} fullWidth variant="contained">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
