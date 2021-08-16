const initialState = {
    theme: 'dark'
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case '@theme/changeTheme':
            return {
                theme: action.theme,
            };
        default:
            return state;
    }
}

export const changeTheme = (theme) => {
    if (theme === 'dark') {
        return {
            type: '@theme/changeTheme',
            theme: 'light'
        }
    }

    return {
        type: '@theme/changeTheme',
        theme: 'dark'
    }
}

export default themeReducer