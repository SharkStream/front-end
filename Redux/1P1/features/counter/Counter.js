import { increment, decrement, reset, incrementByAmount } from '../counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const patch = useDispatch()

    const [addAmount, setAddMount] = useState(0)

    const incrementAmount = Number(addAmount) || 0

    const resetAll = () => {
        setAddMount(0)
        patch(reset())
    }


    return (
        <div>
            <p>{count}</p>
            <button onClick={() => patch(increment())}>+</button>
            <button onClick={() => patch(decrement())}>-</button>
            <div>
                <input 
                    type='text'
                    value={addAmount}
                    onChange={e => setAddMount(e.target.value)}
                />
                <button onClick={resetAll}>Reset</button>
                <button onClick={()=>patch(incrementByAmount(incrementAmount))}>AddAmount</button>
            </div>
        </div>
    )
}

export default Counter