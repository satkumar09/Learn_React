import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  //to take input into todo
  const [todo, setTodo] = useState("")

  //calling the custom hook to get the method
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    //if nothing in todo then return
    if (!todo) return;

    //add the input and set completed as false(initially)
    addTodo({
      todo: todo,
      completed: false,
    });

    //empty the state
    setTodo("")
  };

  return (
    <form onSubmit = {add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
