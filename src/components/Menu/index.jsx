import { Link } from 'react-router-dom'
import Logo from '../Logo'
import './menu.css'
import Pesquisa from '../Pesquisa'
import { useEffect, useState } from 'react'

export default function Menu() {

    const [larguraTela, setLarguraTela] = useState(window.innerWidth)

    useEffect (()=> {
        const handleResize = () => {
            setLarguraTela(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

    },[])


    function gerarMenu() {
        return(
                <>
                    <Logo/>
                    <Pesquisa/>
                    <nav>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/artigos'}>Artigos</Link>
                        {larguraTela}
                    </nav>
                </>
            )

    }

    return(
        <menu className="menu">
         {larguraTela > 750 && gerarMenu}

        </menu>
        // Fazer o nav do mobile
        
    )
}