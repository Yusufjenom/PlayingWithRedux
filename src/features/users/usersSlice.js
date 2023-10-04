import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {id:'0', name:'Dauda Yusuf'},
    {id:'1' , name:'Yusuf Jenom'},
    {id:'2', name:'Kayode Kayus'}
]
export const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
});

export const selectAllUsers = (state) => state.users;
export const {} = userSlice.actions;
export default userSlice.reducer;