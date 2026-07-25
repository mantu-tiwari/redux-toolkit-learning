import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold self-center">Redux To-List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

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
