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
    <form
  onSubmit={handleSubmit}
  className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4  shadow-lg rounded-2xl p-6 border border-gray-200 bg-white"
>
  <input
    type="text"
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder="Enter your task..."
    className="w-full sm:w-[420px] px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder:text-gray-400 transition-all"
  />
  <button
    type="submit"
    className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-md"
  >
    + Add Task
  </button>
</form>
  )
}

export default TodoForm
