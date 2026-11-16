// import heroImg from './assets/hero.png'
import './App.css'
import { Outlet } from 'react-router'

function App() {
  return (
    <div className="hero">
      <div className="  " id="center">
        <Outlet />
      </div>
    </div>
  )
}

export default App
