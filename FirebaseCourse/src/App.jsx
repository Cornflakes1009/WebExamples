import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Auth } from './Components/Auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Firebase Course</div>
      <Auth />
      
    </>
  )
}

export default App
