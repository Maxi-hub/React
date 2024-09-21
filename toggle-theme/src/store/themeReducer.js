const TOGGLE_THEME = 'TOGGLE_THEME';

export const themeReducer = (state = "light", action) => {
    const toggleTheme = () => {
        return (state === "light" ? "dark" : "light");
    };

    switch (action.type) {
        case TOGGLE_THEME:
            return state = toggleTheme();
        default:
            return state;
    }
}; 

