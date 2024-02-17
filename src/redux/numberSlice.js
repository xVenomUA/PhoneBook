import { createSlice } from "@reduxjs/toolkit";
import { fetchAddContact, fetchContacts, fetchDeleteContact } from "./operations";

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const numberSlice = createSlice({
  name: "numbers",
  initialState: {
    number: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.number = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(fetchAddContact.pending, handlePending)
      .addCase(fetchAddContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.number.push(action.payload);
      })
      .addCase(fetchAddContact.rejected, handleRejected)

      .addCase(fetchDeleteContact.pending, handlePending)
      .addCase(fetchDeleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.number = state.number.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(fetchDeleteContact.rejected, handleRejected);
  },
});

export const { deleteNumber, addNumber } = numberSlice.actions;
export const numberReducer = numberSlice.reducer;
