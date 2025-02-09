import { useState } from "react"

export function NewTodoForm({onSubmit}) { // onSubmit passed into this function is a prop. The name matches what is on App.jsx. 
      // the useState is something we want to use that will rerender the application to make those changes take effect.
  // when something is in curly backets, it is run as JavaScript. Even when inside of the JSX. 
  // don't use the array index when setting the id property. 
  //props.onSubmit(newItem)
  const [newItem, setNewItem] = useState("")


  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return 

    onSubmit(newItem)
    
    setNewItem("")
  }
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label>New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
    )
}