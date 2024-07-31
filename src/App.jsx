import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/slice/counterSlice'


const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(increment())} className='bg-green-500 py-2 w-20 rounded-md text-white mx-5 my-5'>Increment</button>
      <button onClick={() => dispatch(decrement())} className='bg-red-500 py-2 w-20 rounded-md text-white'>Decrement</button>
      <button onClick={() => dispatch(reset())} className='bg-gray-500 py-2 border rounded-md mx-5 w-14'>Reset</button>

      <h1>Count:{count}</h1>
    </div>
  )
}

export default App