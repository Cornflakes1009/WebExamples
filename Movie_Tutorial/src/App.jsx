import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import { MovieCard } from './Components/MovieCard'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Favorite from './pages/Favorites'
import NavBar from './Components/NavBar'
import { MovieProvider } from './context/MovieContext'


// this defines a route. when going to /, we show the Home component.
// <Routes> 
//    <Route path='/' element={<Home />} />
//    </Routes>

function App() {
  const [count, setCount] = useState(0);
  //const displayMovie = 2;
  return (
    <>
      <MovieProvider>
        <NavBar />
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/favorites" element={<Favorite />} />
          </Routes>
        </main>
        {/* simple ternary way of conditional rendering.  */}
        {/* { displayMovie === 1 ? 
        <MovieCard movie={{title: "First Film", release_date: "2024"}} />  :
        <MovieCard movie={{title: "Second Film", release_date: "2024"}} />     
      }  */}

        {/* short circuit way of conditional rendering. Second half is always true because the component does exist. */}
        {/* { displayMovie === 2 && <MovieCard movie={{title: "Second Film", release_date: "2024"}} />    } */}
      </MovieProvider>


    </>
  )
}

export default App
