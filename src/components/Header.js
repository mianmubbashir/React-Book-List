import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import profile from "../assets/images/pic1.png";
import icon from "../assets/images/pic2.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(4),
  marginLeft: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "120ch",
    },
  },
}));

export default function PrimarySearchAppBar({ onSearch }) {
  return (
    <Toolbar sx={{ backgroundColor: "#FFFFFF", justifyContent: "center" }}>
      <Avatar src={icon} style={{ padding: 3 }} />
      <Search
        sx={{ backgroundColor: "#EFEFEF", color: "black", width: "100%" }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => onSearch(e.target.value)}
        />
        <IconButton type="submit" aria-label="search"></IconButton>
      </Search>
      <Avatar alt="Search" src={profile} />
    </Toolbar>
  );
}
