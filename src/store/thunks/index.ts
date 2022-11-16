import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ITodo } from '../types/ITodo';

export const fetchTodoList = createAsyncThunk(
    'todoList/FETCH',
    async (_, thunkAPI) => {
        try {
            let res = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
            return res.data;
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)