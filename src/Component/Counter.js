import { useDispatch, useSelector } from "react-redux"
import { decrement, handleEdit, increment } from "../Redux/Actions"

const Counter=()=>{
    const count = useSelector(state => state.count)
    const txtWided = useSelector(state => state.txtWided)
    const dispatch = useDispatch()
        return(
            <div>
                <button onClick={()=>dispatch(decrement())}>-</button>
                <h2>{count}</h2>
                <button onClick={()=>dispatch(increment(5))}>+</button>
                <br/>
                <br/>
                <input onChange={(e)=> dispatch(handleEdit(e.target.value))}/>
                <h3>{txtWided}</h3>
            </div>
        )
}

export default Counter