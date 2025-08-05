import {Routes , Route} from "react-router-dom"
import Homepage from "./Pages/Homepage"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Policy from "./Pages/Policy"
import PagenoFound from "./Pages/PagenoFound"
import Register from "./Pages/Auth/Register"
import Login from "./Pages/Auth/Login"

export default function App() {
  return (
 <>
 <Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/policy" element={<Policy/>}/>
  <Route path="/*" element={<PagenoFound/>}/>

  <Route path="/register" element={<Register/>}/>
  <Route path="/login" element={<Login/>}/>
 </Routes>
  
 </>
  )
}