
const InitialValues = {
    lang: 'Ar',
    theam: 'Dark'
}

export default function Reducer(state = InitialValues, action) {
    switch (action.type) {
        case 'CHANGELANG':
            return {
                ...state,
                lang: action.payload
}
        default:
            return state
         
    }
}