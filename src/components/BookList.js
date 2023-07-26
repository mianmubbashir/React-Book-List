import {
  CircularProgress,
  Grid,
  Modal,
  Paper,
  Rating,
  Typography,
  createTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../store/bookSlice";

const App = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books.books.data);
  const [selectedBook, setSelectedBook] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: 20,
      },
    },
  });

  const handleBookClick = (bookItem) => {
    setSelectedBook(bookItem);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredBooks(book);
    } else {
      const filtered = book.filter((bookItem) =>
        bookItem.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  }, [book, searchQuery]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={5}>
        <Grid item>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            {filteredBooks && filteredBooks.length > 0 ? (
              filteredBooks.map((bookItem, index) => (
                <Grid
                  key={index}
                  item
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                  onClick={() => handleBookClick(bookItem)}
                  sx={{ cursor: "pointer" }}
                >
                  <Paper
                    sx={{
                      height: 400,
                      width: 290,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  >
                    <img
                      src={bookItem.imageLink}
                      alt={bookItem.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                    />
                  </Paper>
                  <Typography
                    gutterBottom
                    style={{ marginTop: 10, marginBottom: 7 }}
                  >
                    {bookItem.title.length > 22
                      ? `${bookItem.title.slice(0, 22)}...`
                      : bookItem.title}
                  </Typography>
                  <Rating name="read-only" value={bookItem.rating} readOnly />
                  <p style={theme}>${bookItem.price}</p>
                </Grid>
              ))
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            )}
          </Grid>
        </Grid>

        <Modal open={Boolean(selectedBook)} onClose={handleCloseModal}>
          <Box
            sx={{
              position: "absolute",
              top: "5%",
              left: "30%",
              width: "40%",
              "@media (max-width: 600px)": {
                width: "80%",
                left: "10%",
              },
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <CardMedia
                  component="img"
                  sx={{
                    height: 800,
                    width: 435,
                    "@media (max-width: 1500px)": {
                      display: "none",
                    },
                    "@media (max-width: 600px)": {
                      height: 600,
                      width: "100%",
                    },
                  }}
                  image={
                    selectedBook
                      ? selectedBook.imageLink
                      : "../assets/images/placeholder.png"
                  }
                />
              </Box>

              <Box>
                <CardContent
                  sx={{
                    height: 760,
                    width: 300,
                    "@media (min-width: 500px)": {
                      height: 600,
                      width: 300,
                    },
                    "@media (max-width: 600px)": {
                      height: 600,
                      width: "90%",
                    },
                  }}
                >
                  {selectedBook ? (
                    <div>
                      <h2
                        style={{
                          fontFamily: "Poppins",
                        }}
                      >
                        {selectedBook.title}
                      </h2>

                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={4}>
                            <Box>
                              <h5
                                style={{
                                  fontWeight: 500,
                                  fontFamily: "Poppins",
                                  fontSize: 20,
                                }}
                              >
                                Rating
                              </h5>
                              <Rating
                                name="size-small"
                                value={selectedBook.rating}
                                size="small"
                                readOnly
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={4}>
                            <h5
                              style={{
                                fontWeight: 500,
                                fontFamily: "Poppins",
                                fontSize: 20,
                              }}
                            >
                              Reviews
                            </h5>
                            <Box>{selectedBook.reviews}</Box>
                          </Grid>
                          <Grid item xs={4}>
                            <h5
                              style={{
                                fontWeight: 500,
                                fontFamily: "Poppins",
                                fontSize: 20,
                              }}
                            >
                              Price
                            </h5>
                            <Box>{selectedBook.price}</Box>
                          </Grid>
                        </Grid>
                      </Box>

                      <Box>
                        <h5>
                          <span
                            style={{
                              fontWeight: 600,
                              fontFamily: "Poppins",
                            }}
                          >
                            Author:
                          </span>
                          <span
                            style={{
                              fontWeight: "normal",
                              fontFamily: "Poppins",
                            }}
                          >
                            {selectedBook.author}
                          </span>
                        </h5>

                        <h5>
                          <span
                            style={{
                              fontWeight: 600,
                              fontFamily: "Poppins",
                            }}
                          >
                            Country:
                          </span>
                          <span
                            style={{
                              fontWeight: "normal",
                              fontFamily: "Poppins",
                            }}
                          >
                            {selectedBook.country}
                          </span>
                        </h5>

                        <h5>
                          <span
                            style={{
                              fontWeight: 600,
                              fontFamily: "Poppins",
                            }}
                          >
                            Language:
                          </span>
                          <span
                            style={{
                              fontWeight: "normal",
                              fontFamily: "Poppins",
                            }}
                          >
                            {selectedBook.language}
                          </span>
                        </h5>

                        <h5>
                          <span
                            style={{
                              fontWeight: 600,
                              fontFamily: "Poppins",
                            }}
                          >
                            Year:
                          </span>
                          <span
                            style={{
                              fontWeight: "normal",
                              fontFamily: "Poppins",
                            }}
                          >
                            {selectedBook.year}
                          </span>
                        </h5>

                        <h5>
                          <span
                            style={{
                              fontWeight: 600,
                              fontFamily: "Poppins",
                            }}
                          >
                            Pages:
                          </span>
                          <span
                            style={{
                              fontWeight: "normal",
                              fontFamily: "Poppins",
                            }}
                          >
                            {selectedBook.pages}
                          </span>
                        </h5>
                        {selectedBook && (
                          <a
                            href={selectedBook.link}
                            target="_blank"
                            style={{
                              width: "90%",
                              textDecoration: "none",
                              display: "inline-block",
                              backgroundColor: theme.palette.primary.main,
                              color: "#fff",
                              padding: "8px 16px",
                              borderRadius: "4px",
                              cursor: "pointer",
                              textAlign: "center",
                            }}
                          >
                            View Details
                          </a>
                        )}
                      </Box>
                    </div>
                  ) : (
                    <div>
                      <h2>No book selected</h2>
                      <p>Please select a book</p>
                    </div>
                  )}
                </CardContent>
              </Box>
            </Card>
          </Box>
        </Modal>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
