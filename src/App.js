import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home"
import Details from "./components/Details"


const App = ()=> 
<BrowserRouter>
<Routes>
  <Route path = "/" element={<Home/>}/> 
  <Route path = "/name/:cityname" element={<Details/>} />
</Routes>
 </BrowserRouter>

export default App;