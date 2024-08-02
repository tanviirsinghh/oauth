
import Login from "./Login.jsx"
import Homepage from "./Homepage.jsx"
import { Router,Routes,Route, BrowserRouter } from "react-router-dom"
function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Homepage/>}></Route>
      </Routes>
    </BrowserRouter>

  
   
   </>
  )
}

export default App
