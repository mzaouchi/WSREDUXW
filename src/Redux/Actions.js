import { DECREMENT, HANDLEEDIT, HANDLESHOW, INCREMENT } from "./TypeActions"

export const increment=(payload)=>{
    return(
        {
            type : INCREMENT,
            payload 
        }
    )
}

export const decrement=()=>{
    return(
        {
            type : DECREMENT
        }
    )
}

export const handleEdit=(payload)=>{
    return(
        {
            type : HANDLEEDIT,
            payload
        }
    )
}

export const handleShow =()=>{
    return(
        {
            type : HANDLESHOW
        }
    )
}