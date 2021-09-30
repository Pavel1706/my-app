const initState: StateType = {
    loading: false
}

export type StateType = {
    loading: boolean
}

export const loadingReducer = (state = initState, action: LoadingACType): StateType => {
    console.log(action.loading)
    switch (action.type) {
        case 'LOAD': {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => {
    return {
        type: 'LOAD',
        loading: loading,
    } as const
}
type  LoadingACType = ReturnType<typeof loadingAC>