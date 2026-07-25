import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";
import {
  deleteTodo,
  toggleComplete,
  updateTodo,
} from "../features/todo/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleUpdate = () => {
    if (updatedText.trim() === "") return;
    dispatch(
      updateTodo({
        id: todo.id,
        text: updatedText,
      }),
    );
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col mt-4">
      <div className="bg-yellow-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5  flex justify-between items-center">
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleComplete(todo.id))}
            className="w-5 h-5 accent-green-500 cursor-pointer"
          />

          {isEditing ? (
            <input
              value={updatedText}
              onChange={(e) => setUpdatedText(e.target.value)}
              className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <span
              className={`text-lg font-medium ${
                todo.completed ? "line-through text-gray-400" : "text-gray-700"
              }`}
            >
              {todo.text}
            </span>
          )}
        </div>

        <div className="flex gap-3">
          {isEditing ? (
            <button
              onClick={handleUpdate}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition shadow"
            >
              <FaSave />
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-xl transition shadow"
            >
              <FaEdit />
            </button>
          )}

          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition shadow"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
