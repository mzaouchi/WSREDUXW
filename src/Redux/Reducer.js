import { DECREMENT, HANDLEEDIT, HANDLESHOW, INCREMENT } from "./TypeActions"

const initialState = {
    count : 0,
    txtWided : '',
    show : true
}


const Reducer=(state = initialState, action)=>{
    switch (action.type) {
            
        case INCREMENT : return {...state, count : state.count + action.payload}

        case DECREMENT : return {...state, count : state.count>0 ? state.count -1 : 0}

        case HANDLEEDIT : return {...state, txtWided : action.payload}

        case HANDLESHOW : return {...state, show : !state.show}

        default: return state
          
    }
}

export default Reducer