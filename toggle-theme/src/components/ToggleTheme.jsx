import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const ToggleTheme = () => {
    const theme = useSelector(state => state.theme);

    const dispatch = useDispatch();

    const toggleTheme = (() => {
        dispatch({ type: 'TOGGLE_THEME' });
    });

    return (
        <div className={theme}>
            <h1>theme: {theme}</h1>
            <button onClick={toggleTheme}>Сменить тему</button>
        </div>
    );
};



