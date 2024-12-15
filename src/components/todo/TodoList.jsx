import React, { useState } from "react";

const TodoList = ({ todos, deleteTodo, toggleComplete, updateTodo }) => {
  const [editId, setEditId] = useState(null);
  const [editTask, setEditTask] = useState("");

  const handleEdit = (id, task) => {
    setEditId(id);
    setEditTask(task);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(editId, editTask);
    setEditId(null);
    setEditTask("");
  };

  return (
    <div className="w-full max-w-lg">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`flex items-center justify-between p-4 mb-2 rounded-lg shadow-sm ${
            todo.completed ? "bg-green-100" : "bg-white"
          }`}
        >
          {editId === todo.id ? (
            <form onSubmit={handleUpdate} className="flex items-center space-x-2">
              <input
                type="text"
                value={editTask}
                onChange={(e) => setEditTask(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Update
              </button>
            </form>
          ) : (
            <>
              <div
                onClick={() => toggleComplete(todo.id)}
                className={`flex-1 cursor-pointer ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.task}
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleEdit(todo.id, todo.task)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
