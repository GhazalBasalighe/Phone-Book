import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContacts: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
export default contactSlice.reducer;

export const { addContacts, deleteContact } = contactSlice.actions;
