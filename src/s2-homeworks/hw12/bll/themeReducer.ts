const initState = {
    themeId: 3
}

type initStateType = typeof initState

export const themeReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return  {...state,
            themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any

type ActionType = ReturnType<typeof changeThemeId>
