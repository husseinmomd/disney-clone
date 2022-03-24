import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import "./App.css"
import Navbar from "./components/Navbar";

const App = () => {
  return (
    

    <BrowserRouter>  
    <Navbar/>
    <Routes>
    <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
