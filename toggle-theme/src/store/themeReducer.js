export const TOGGLE_THEME = 'TOGGLE_THEME';

const toggleTheme = (state) => {
    return (state === "light" ? "dark" : "light");
};

const themeReducer = (state = "light", action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return toggleTheme(state);
        default:
            return state;
    }
};

export default themeReducer;
