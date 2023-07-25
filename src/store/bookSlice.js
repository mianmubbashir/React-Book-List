import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
  loading: false,
  error: false,
};

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (search) => {
    try {
      const response = await axios.get(
        "https://books-list-api.vercel.app/books/",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-api-key": "#b0@6hX8YasCq6^unOaPw1tqR",
          },
          params: {
            query: search,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("Error:", error);
      throw error;
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default bookSlice.reducer;
