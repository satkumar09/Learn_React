import { useState, useEffect } from 'react'
import "./App.css";
import { TodoProvider } from "./contexts";
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([])


  //defining functionalities:

  const addTodo = (todo) => {
    //setTodos(todo)   -> will delete every old entries and replace it with the new one 
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])   //spread operator to spread the array and add component at the beginning
  }

  const updateTodo = (id, todo) => {
    //traverse through array of todo and check if any todo id matches the passed todo, if it matches it updates it with todo if not the previous todo value is reassigned
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo: prevTodo)))
  }

  const deleteTodo = (id) => {
    //filter and keep those todos which don't have the same id as the targetted one
    //will eventually filter out the todo with same id
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    // setTodos((prev) => prev.map((todo) => {
    //   if(todo.id === id){
    //     todo.completed = !todo.completed;
    //   }
    // }))

    //
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
    //...prevTodo will spread the entire object, and then we overwrite the completed key with the reverse
  }

  //To use local storage: 
  //whenever page will refresh, useEffect will get the todo values from the local 
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

  //check if there is any todos if not, don't do anything, if there are, then just add those todos using use
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  //to push todo values into local storage:
  //whenever there is a change in todos, useEffect will set the todo item into local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])


  return (
    //we wrap the whole content in Todo Provider, now it have access to all the Todo functionalities
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form to add new entries*/}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key = {todo.id} className='w-full'>
                <TodoItem todo = {todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
