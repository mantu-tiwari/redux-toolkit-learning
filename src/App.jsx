import Dashboard from "./components/Dashboard";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodos } from "./features/todo/todoSlice";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      dispatch(setTodos(savedTodos));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6">
      <h1 className="text-4xl font-bold text-center">Redux Task Manager</h1>

      <p className="text-center text-gray-500 mt-2">
        Manage your daily tasks efficiently.
      </p>

      <Dashboard />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;

// // Counter
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "./features/counterSlice";
// const App = () => {
//   const dispatch = useDispatch();
//   const count = useSelector((state) => state.counter.value);
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <div className="btn">
//         <button onClick={() => dispatch(decrement())}>
//           Decrease
//         </button>
//         <button onClick={() => dispatch(increment())}>
//           Increase
//         </button>
//       </div>
//     </div>
//   );
// };
// export default App;
