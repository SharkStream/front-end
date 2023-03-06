import { increment, decrement, incrementByAmount, reset } from "./counterSlice";
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState(0)

    const addAmount = Number(incrementAmount) || 0

    const resetAll = () => {
        setIncrementAmount(0)
        dispatch(reset())
    }

    return (
        <section>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <div>
                <input 
                    type="text"
                    value={addAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button onClick={() => dispatch(incrementByAmount(addAmount))}>Add Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    )
}

export default Counter