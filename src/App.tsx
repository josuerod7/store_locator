import { useState } from 'react'
import './App.css'
import Map from './components/Map';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Map/>
    </div>
  )
}

export default App
