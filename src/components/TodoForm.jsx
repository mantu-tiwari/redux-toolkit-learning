import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todo/todoSlice";


const TodoForm = () => {

  const [text, setText] = useState('')
  const dispatch =  useDispatch()

  const handleSubmit = (e) => {
      e.preventDefault()
       if (text.trim() === "") return;
        dispatch(addTodo(text));
        console.log(text);
        setText("");
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-wrap gap-4 border w-fit self-center p-4 rounded-lg bg-amber-200' >
      <input className='border px-2 py-1 rounded-lg font-bold bg-white' onChange={(e) => {
          setText(e.target.value)
      }} value={text} type="text" placeholder='Enter Task...' />
      <button className='bg-blue-600 text-white cursor-pointer border px-2 py-1 rounded-lg font-bold'>Add Task</button>
    </form>
  )
}

export default TodoForm
