import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Projects from "./pages/Projects";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      < Route path="/" element = {<Home />} />
      < Route path="/About" element = {<About />} />
      < Route path="/projects" element = {<Projects />} />
      < Route path="/signin" element = {<SignIn />} />
      < Route path="/signup" element = {<SignUp />} />
      < Route path="/dashboard" element = {<Dashboard />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
