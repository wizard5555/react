import { BrowserRouter, Routes, Route } from "react-router-dom"
import FormEndereco from "./pages/FormEndereco"
import Products from "./pages/FormEndereco/Products"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Olá mundo!</h1>} />
          <Route path="/listar" element={<Products/>} />
          <Route path="/endereco" element={<FormEndereco />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}