import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleComplete,
  editTodo,
} from "../../features/todo/todoSlice";

function TodoItems() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [editableTodoId, setEditableTodoId] = useState(null);
  const [updatedTodoText, setUpdatedTodoText] = useState("");

  const handleToggle = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleEditClick = (todo) => {
    setEditableTodoId(todo.id);
    setUpdatedTodoText(todo.todoTxt); // Prefill input with the current todo text
  };

  const handleSaveClick = (id) => {
    dispatch(editTodo({ id, updatedTodoText }));
    setEditableTodoId(null); // Exit edit mode
  };

  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-x-3 mt-4 px-4 py-2 rounded bg-zinc-800"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />

            {editableTodoId === todo.id ? (
              <input
                type="text"
                value={updatedTodoText}
                onChange={(e) => setUpdatedTodoText(e.target.value)}
                className={`text-white border rounded  bg-transparent w-full flex justify-start ${editableTodoId === todo.id ? "border-white px-2" : "border-transparent"}`}
              />
            ) : (
              <span
                className={`text-white w-full flex justify-start ${
                  todo.completed ? "line-through" : ""
                }`}
              >
                {todo.todoTxt}
              </span>
            )}

            {editableTodoId === todo.id ? (
              <button
                onClick={() => handleSaveClick(todo.id)}
                className="bg-green-500 px-4 py-1 rounded hover:bg-green-600"
              >
                Save
              </button>
            ) : (
              <button
                disabled={todo.completed}
                onClick={() => handleEditClick(todo)}
                className="bg-blue-500 px-4 py-1 rounded hover:bg-blue-600 disabled:opacity-50"
              >
                Edit
              </button>
            )}

            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-white bg-red-500 px-4 py-1 rounded hover:bg-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoItems;



// {/* <div className={`text-white w-full flex justify-start ${todo.completed ? "line-through" : ""}`}>{todo.todoTxt}</div> */}

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   deleteTodo,
//   toggleComplete,
//   editTodo,
// } from "../../features/todo/todoSlice";

// function TodoItems() {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos);

//   const handelToggle = (id) => {
//     dispatch(toggleComplete(id));
//   }

//   return (
//     <>
//       <ul className="list-none">
//         {todos.map((todo) => (
//           <li key={todo.id}
//           className="flex items-center gap-x-3 mt-4 px-4 py-2 rounded bg-zinc-800">
//             <input type="checkbox"
//             checked={todo.completed}
//             onChange={() => handelToggle(todo.id)}
//             />
//             <input 
//             type="text"
//             value={todo.todoTxt}
//             className={`text-white bg-transparent w-full flex justify-start ${todo.completed ? "line-through" : ""}`}
//             />
            
//             <button disabled={todo.completed} className="bg-blue-500 px-4 py-1 rounded hover:bg-blue-600">Edit</button>
//             <button 
//             onClick={() => dispatch(deleteTodo(todo.id))}
//             className="text-white bg-red-500 px-4 py-1 rounded hover:bg-red-600">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                 />
//               </svg>
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default TodoItems;