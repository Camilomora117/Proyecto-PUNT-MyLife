import { Muerte } from "./components/Muerte";
import { Vida } from "./components/Vida";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>

      <Routes>

        <Route exact path='/vida' element={<Vida/> } /> 

        <Route exact path='/' element={<Muerte/>} />

      </Routes>

  </Router>
  );
}

export default App;
