// использование themeReducer из '../store/themeReducer'
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { TOGGLE_THEME } from '../store/themeReducer';

// export const ToggleTheme = () => {
//     const theme = useSelector(state => state.theme);

//     const dispatch = useDispatch();

//     const toggleTheme = (() => {
//         dispatch({ type: TOGGLE_THEME });
//     });

//     return (
//         <>
//             <h1>theme: {theme}</h1>
//             <button onClick={toggleTheme}>Сменить тему</button>
//         </>
//     );
// };


// createSlice является современной альтернативой устаревшему switch/case из themeReducer
// использование с createSlice из '../store/themeSlice'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

export const ToggleTheme = () => {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <>
            <h1>theme: {theme}</h1>
            <button onClick={handleToggleTheme}>Сменить тему</button>
        </>
    );
};