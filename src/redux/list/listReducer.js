import { createSlice} from '@reduxjs/toolkit';
import { fetchList } from './listOperation';


const listSlice = createSlice({
    name: "list",
    initialState: {entities: [], isLoading: false, error:null },
    extraReducers: {
        [fetchList.fulfilled]: (state, action) => {
            return {...state,entities: action.payload}
            
        },
        [fetchList.pending]: state => {
            return {...state, isLoading: true}
        }
    }
})


    export default listSlice.reducer
