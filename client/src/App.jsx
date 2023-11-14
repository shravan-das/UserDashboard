import LeftSidebar from './components/LeftSidebar'
import Home from './pages/Home'
import {Route,Routes} from 'react-router-dom'

function App() {
  
  return (

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<LeftSidebar/>}/>





    </Routes>
    

    
  )
}

export default App
