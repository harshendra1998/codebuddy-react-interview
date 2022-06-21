import { createStore } from "react-redux"

export default store = (state = {} , action) => {
    switch (action.type){
        case 'STOREDATA':
            return {... state, ... action.payload }
        default:
            return state
    }

}


