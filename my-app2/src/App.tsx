import {Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import PageNot from "./pages/PageNot";
import './App.css'

function App() {
  

  return (
    <>
    <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Bootcam" element={<About/>}/>
          <Route path="Login" element={<LoginPage/>}/>
          <Route path="*"element={<PageNot/>}/>

      </Routes>
    </>
  )
}

export default App
