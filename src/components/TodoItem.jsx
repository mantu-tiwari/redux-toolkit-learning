import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete, updateTodo,} from "../features/todo/todoSlice";

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
    <div className="flex justify-center">
      <div className="border p-3 rounded-lg flex mt-4 bg-white justify-between items-center w-90">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleComplete(todo.id))}
        />

        {isEditing ? (
          <input
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
        ) : (
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginLeft: "10px",
            }}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div>
        {isEditing ? (
          <button onClick={handleUpdate} className="border gap-2 px-2 rounded-lg font-semibold bg-green-700 text-white cursor-pointer " >Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="border gap-2 px-2 rounded-lg font-semibold bg-yellow-700 text-white cursor-pointer " >Edit</button>
        )}
        <button onClick={() => dispatch(deleteTodo(todo.id))} className="border gap-2 px-2 rounded-lg font-semibold bg-red-700 text-white cursor-pointer " >Delete</button>
      </div>
    </div>
    </div>
  );
};

export default TodoItem;
