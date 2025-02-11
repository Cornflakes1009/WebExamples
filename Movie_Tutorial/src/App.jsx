import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MovieCard } from './Components/MovieCard'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0);
  //const displayMovie = 2;
  return (
    <>
    <Home />
      {/* simple ternary way of conditional rendering.  */}
      {/* { displayMovie === 1 ? 
        <MovieCard movie={{title: "First Film", release_date: "2024"}} />  :
        <MovieCard movie={{title: "Second Film", release_date: "2024"}} />     
      }  */}

      {/* short circuit way of conditional rendering. Second half is always true because the component does exist. */}
      {/* { displayMovie === 2 && <MovieCard movie={{title: "Second Film", release_date: "2024"}} />    } */}
       
    </>
  )
}

export default App
