import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import splash from "../assets/images/Pic3.jpg";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    },
  },
});

export default function FullWidthGrid() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container mb={10} sx={{ height: "100%", width: "100%" }}>
        <Grid
          md={6}
          p={10}
          style={{
            backgroundColor: "#004D6D",
            color: "white",
            fontFamily: "Poppins",
            fontSize: "30px",
          }}
        >
          <h4 style={{ fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet consectetur.
          </h4>
          <p style={{ fontWeight: 300 }}>
            Lorem ipsum dolor sit amet consectetur. Viverr scelerisqu.
          </p>
        </Grid>
        <Grid md={6}>
          <Box
            component="img"
            sx={{
              height: "100%",
              width: "100%",
              flex: 1,
            }}
            alt="The house from the offer."
            src={splash}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
