import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material";
import { ToastContainer } from "react-toastify";

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
  return (
    <>
      <ToastContainer
        autoClose={2500}
        newestOnTop
        theme="colored"
      />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
