import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from './pages/Table'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/table' element={<Table />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
