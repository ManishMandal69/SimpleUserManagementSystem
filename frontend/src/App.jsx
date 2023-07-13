import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ViewUser from "./pages/ViewUser"
import CreateUser from "./pages/CreateUser"

function App () {
  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/form/:query" element={<CreateUser/>}/>
      <Route exact path="/viewuser/:id" element={<ViewUser/>}/>
    </Routes>
  </Router>
  )
}

export default App