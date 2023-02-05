import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] =>  { // need to fix any
    let newState = [...state]
    switch (action.type) {
        case 'sort': { // by name
            return newState.sort((a, b) => {
                return (action.payload === 'up') ? a.name <= b.name ? -1 : 1 : a.name <= b.name ? 1 : -1
        })}

        case 'check': {
            return newState.filter(a => a.age >= action.payload) // need to fix

        }
        default:
            return state
    }
}
