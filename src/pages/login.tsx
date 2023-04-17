import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import {
  AccountCircle,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { toastError, toastSuccess } from "@/utils/toastify";
import authClient from "@/network/authClient";
import {
  APIConstant,
  ApplicationConstant,
} from "@/applicationConstant/constant";
import { useRouter } from "next/router";
import { LoginInputType } from "@/types/authTypes";

const Login = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [loginInput, setLoginInput] = useState<LoginInputType>({
    username: "",
    password: "",
  });

  const router = useRouter();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setLoginInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnClick = async () => {
    authClient
      .post(APIConstant.LOGIN_API, loginInput)
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
          name="username"
          onChange={handleOnChange}
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
          name="password"
          onChange={handleOnChange}
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
