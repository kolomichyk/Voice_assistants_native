import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   actions: [],
   action: {},
   search: "",
};

export const actionSlice = createSlice({
   name: 'action',
   initialState,
   reducers: {
       setActions: (state, { payload }) => {
           console.log('setDevices');
           state.actions = payload;
       },
       setAction: (state, { payload }) => {
           console.log('setDevice');
           state.action = payload;
       },
       resetAction: (state) => {
           console.log('resetDevice');
           state.action = {};
       },
       setSearchString: (state, { payload }) => {
        console.log('setSearch');
        state.search = payload;
       },
   },
});

export const actionReducer = actionSlice.reducer;

export const { setActions, setAction, resetAction, setSearchString } = actionSlice.actions;