import { useSelector } from "react-redux";

const Dashboard = () => {
    
  const todos = useSelector((state) => state.todo.todos);
  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="grid grid-cols-3 gap-4 my-6">
      <div className="bg-blue-500 text-white rounded-lg p-4 text-center">
        <h3>Total</h3>

        <h2>{totalTasks}</h2>
      </div>

      <div className="bg-green-500 text-white rounded-lg p-4 text-center">
        <h3>Completed</h3>

        <h2>{completedTasks}</h2>
      </div>

      <div className="bg-red-500 text-white rounded-lg p-4 text-center">
        <h3>Pending</h3>

        <h2>{pendingTasks}</h2>
      </div>
    </div>
  );
};

export default Dashboard;
