import React, { useEffect } from 'react';
import { Container, Grid } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../store';
import { fetchTodoList } from '../../store/thunks';
import { useStyles } from './styles';

const Home = () => {
    const dispatch = useAppDispatch();
    const { todoList, isLoading, error } = useAppSelector(state => state.appReducer);
    const classes = useStyles();

    useEffect(() => {
        dispatch(fetchTodoList())
    }, []);

    return (
        <Container>
            <Grid container spacing={3}>
                {
                    todoList.map(todo =>
                        <Grid key={todo.id} item xs={12} md={6} lg={4}>
                            <div className={classes.root}>{todo.title}</div>
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    )
};

export default Home;