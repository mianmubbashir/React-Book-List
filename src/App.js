import { Box } from "@mui/material";
import BookList from "./components/BookList";
import PrimarySearchAppBar from "./components/Header";
import FullWidthGrid from "./components/Images";
import React, { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Box style={{ margin: -8 }}>
      <PrimarySearchAppBar onSearch={handleSearch} />
      <FullWidthGrid />
      <BookList searchQuery={searchQuery} />
    </Box>
  );
}

export default App;
