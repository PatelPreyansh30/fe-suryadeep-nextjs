import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ApplicationConstant } from "@/applicationConstant/constant";
import Head from "next/head";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: "10px 0",
          color: "red",
        },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem(ApplicationConstant.ACCESS_TOKEN)) {
      router.replace("/dashboard");
    }
    router.replace("/login");
  }, []);

  return (
    <>
      <ToastContainer autoClose={2500} newestOnTop theme="colored" />
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Head>
            <title>Suryadeep Complex</title>
          </Head>
          <Component {...pageProps} />
        </LocalizationProvider>
      </ThemeProvider>
    </>
  );
}
