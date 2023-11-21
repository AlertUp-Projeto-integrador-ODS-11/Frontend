import { Link, useNavigate } from "react-router-dom";
import { Home, Mail, PlusCircle, Users, LogOut } from 'react-feather';
import { Chats, Cards, PlusSquare } from "@phosphor-icons/react";
import { toastAlerta } from "../../utils/toastAlerta";

function Navbar (){

    const navigate = useNavigate();

    function logout(){
        toastAlerta("Usuário deslogado com sucesso!", "sucesso");
        navigate("/")
    }

    return (
        <>
            <div className='w-full bg-primary text-white
                flex justify-center py-5'>

                <div className="container flex justify-between flex items-center ... text-lg ">
                <Link to='/home' title="Home" className='hover:opacity-70'>
                <img
                        src="/images/alertup-logo.png"
                        alt="AlertUp Logo"
                        className="h-12 mr-4"
                    /> </Link>
                

                    <div className="flex gap-6 ">
                        <Link to='/home'title="Home" className='hover:opacity-70'><Home className="text-white h-8 w-8" /></Link>
                        <Link to='/cadastroPostagem' title="Cadatrar Postagem" className='hover:opacity-70'><PlusSquare className="text-white h-8 w-8" /></Link>
                        <Link to='/postagens' title="Postagens" className='hover:opacity-70'><Chats className="text-white h-8 w-8" /></Link>
                        <Link to='/temas' title="Tema" className='hover:opacity-70'><Cards className="text-white h-8 w-8" /></Link>
                        <Link to='/cadastroTema' title="Cadastrar tema" className='hover:opacity-70'><PlusCircle className="text-white h-8 w-8" /></Link>
                        <Link to='/contato' title="Contato" className='hover:opacity-70'><Mail className="text-white h-8 w-8" /></Link>
                        <Link to='/sobrenos' title="Sobre Nós" className='hover:opacity-70'><Users className="text-white h-8 w-8" /></Link>
                        <Link to='' title="Sair" onClick={logout} className='hover:opacity-70'><LogOut className="text-white h-8 w-8" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;