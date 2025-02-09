import { NewTodoForm } from "./NewTodoForm"
import "./style.css"
import { useEffect, useState } from "react"
import { TodoList } from "./TodoList"

// to run this, open in Terminal and type: npm run dev
export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")

    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  // this is called a hook and MUST beat the top of the code. Can't be inside of if statements, loops, etc. Must be at the top level. 
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos)) // storing the items in local storage
  }, [todos]) // any time todos change, we run the localStorage.setItem function.

function addTodo(title) {
  setTodos((currentTodos) => {
    return [
      ...currentTodos,
      {
        // don't use the array index when setting the id property. 
        id: crypto.randomUUID(), title, completed:
          false
      },
    ]
  })
}

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed } // the ...todo created and returns a new todo item. You can't mutate state. For example, you can't do todo.completed = completed. 
        }

        return todo
      })
    })
  }

  // eg. call: () => deleteTodo(todo.id)
  // don't just use deleteTodo(todo.id). This will automatically run and not in the onClick
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  // <> is called a fragment. It's used for returning multiple elements that aren't wrapped inside of a div. It closes with </> 
  return (
    <>
    <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}
