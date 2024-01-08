import {createContext, useContext} from "react"

//creating context
export const TodoContext = createContext({
/*
//todos structure: 
todos: [
    {
        id: 1, 
        todo: "Todo msg",
        completed: false,     //when true we will strike through the respective todo entry
    }, {}, {}
]
//Functionalties:
addTodo: (todo) => {},        //to add a new todo entry
updateTodo: (id, todo) => {}, //update existing entry
deleteTodo: (id) => {},       //delete the created entry
toggleComplete: (id) => {}    //to strike-through the entry
*/
addTodo: (todo) => {},        
updateTodo: (id, todo) => {},
deleteTodo: (id) => {},
toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}


//exporting the context provider
export const TodoProvider = TodoContext.Provider