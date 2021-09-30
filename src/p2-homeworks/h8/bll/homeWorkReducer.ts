import {UserType} from "../HW8";

const initialState: Array<UserType> = []


export const homeWorkReducer = (state: Array<UserType> = initialState, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let stateCopy = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? stateCopy : stateCopy.reverse()
        }


        case 'check': {
            let stateCopy = [...state]
            return stateCopy.filter(t => t.age >= action.payload)
        }
        default:
            return state
    }
}

const SortNameUpAC = (payload: 'up') => {
    return {
        type: 'sort',
        payload: payload
    } as const
}
const SortNameDownAC = (payload: 'down') => {
    return {
        type: 'sort',
        payload: payload
    } as const
}
const CheckAgeAC = (payload: number) => {
    return {
        type: 'check',
        payload: payload
    } as const
}

type SortNameUpACType = ReturnType<typeof SortNameUpAC>
type SortNameDownACType = ReturnType<typeof SortNameDownAC>
type CheckAgeACType = ReturnType<typeof CheckAgeAC>

type ActionType = SortNameUpACType | SortNameDownACType | CheckAgeACType