import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artigospage from "./pages/Artigospage";
import Artigo from "./pages/Artigo";


export default function Router() {
  return(
    <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/artigos" element={<Artigospage/>}/>
        <Route path="/artigo/:slug" element={<Artigo/>}/>

        {/* Criar pagina do 404 não encontrado */}
    </Routes>
  )
}

