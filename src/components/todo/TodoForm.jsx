import React, { useState, useEffect } from 'react';
import { addTodo } from '../../features/todo/todoSlice'
import {useDispatch, useSelector} from 'react-redux'


function TodoForm() {
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
  

    const addTodoHandler = (e) => {
        e.preventDefault()
        // dispatch(addTodo(todo))
        // setTodo("")

        if(!todo) {
          alert("Please enter a todo")
        } else {
          dispatch(addTodo(todo))
          setTodo("")
        }
    }

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])


  return (
    <form onSubmit={addTodoHandler} className=' mt-12 flex gap-2'>
        <input 
        type="text"
        placeholder='Enter a Todo...' 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 
        text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-full"
        />
        <button
        type="submit"
        className='bg-indigo-500 hover:bg-indigo-600 text-lg py-2 px-6 w-36 rounded font-medium'
        >
            Add Todo
        </button>
    </form>
  )
}

export default TodoForm

