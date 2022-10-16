type ActionType = ReturnType<typeof RootAC>

type StateReducer = {
    id: number
    name: string
}

const rootState = [{id: 1, name: 'igor'}]

const RootAC = () => ({type: 'ROOT'})


export const ReducerOne = (state: StateReducer[] = rootState, action: ActionType): StateReducer[] => {
    switch (action.type) {
        case 'ROOT': {
            return [...state]
        }
        default: {
            return state
        }
    }
};
