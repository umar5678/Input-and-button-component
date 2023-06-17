import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SideBar from "./components/SideBar"
import InputsComp from "./components/InputsComp"
import ColorsComp from "./components/ColorsComp"
import TypographyComp from "./components/TypographyComp"
import GridComp from "./components/GridComp"
import SpacesComp from "./components/SpacesComp"
import ButtonComp from "./components/ButtonComp"



function App() {

  return (
<div className="container">
    <Router >
      <aside className="aside">
        <SideBar />
      </aside>
      <main className="main">
        <Routes>
          <Route path="/inputs" element={<InputsComp />} />
          <Route path="/spaces" element={<SpacesComp />} />
          <Route path="/typography" element={<TypographyComp />} />
          <Route path="/grid" element={<GridComp />} />
          <Route path="/buttons" element={<ButtonComp />} />
          <Route path="/colors" element={<ColorsComp />} />
        </Routes>
      </main>

    </Router>
    </div>

  )
}

export default App
