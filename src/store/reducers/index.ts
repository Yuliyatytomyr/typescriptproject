import { ITodo } from '../types/ITodo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTodoList } from '../thunks';

interface state {
    todoList: ITodo[];
    isLoading: boolean;
    error: string;
}

const initialState: state = {
    todoList: [],
    isLoading: false,
    error: "",
}

export const appReducer = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTodoList.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchTodoList.fulfilled.type]: (state, action: PayloadAction<ITodo[]>) => {
            state.isLoading = false;
            state.todoList = action.payload;
            state.error = "";
        },
        [fetchTodoList.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default appReducer.reducer;