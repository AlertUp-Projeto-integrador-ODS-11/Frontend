import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ListaTemas from './components/temas/listaTema/ListaTema';
import Cadastro from './pages/cadastro/Cadastro';
import SobreNos from './pages/sobreNos/SobreNos';
import Contato from './pages/contato/Contato';
import FormularioTema from './components/temas/formularioTema/FormularioTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaPostagens from "./components/postagens/listaPostagens/ListaPostagens.tsx";
import FormularioPostagem from "./components/postagens/formularioPostagem/FormularioPostagem.tsx";
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem.tsx';
import Perfil from './pages/perfil/Perfil';
import 'react-toastify/dist/ReactToastify.css';
import Temas from './pages/temas/Temas.tsx';
import Visitante from './pages/visitante/Visitante.tsx';

function App() {
  return (
    <AuthProvider>
    <ToastContainer />
      <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Visitante />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/SobreNos" element={<SobreNos />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/verTemas" element={<Temas />} />
            </Routes>
          </div>  
        <Footer />
      </BrowserRouter>
    </ AuthProvider>
  );
}

export default App;
