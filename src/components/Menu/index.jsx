import { Link } from 'react-router-dom'
import Logo from '../Logo'
import './menu.css'
import Pesquisa from '../Pesquisa'
import { useEffect, useState } from 'react'

export default function Menu() {

    const [displayBlock, setDisplayBlock] = useState(false)

    return(
        <menu className="menu">
            <Logo/>
            <Pesquisa/>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/artigos'}>Artigos</Link>
            </nav>
            <div className='menu--mobile'>
                <button onClick={e => setDisplayBlock(!displayBlock)}><i className="bi bi-list"></i></button>
                <nav className='menu_mobile--nav' style={{display: displayBlock ? "flex": "none" }}>
                    <button onClick={e => setDisplayBlock(!displayBlock)}><i class="bi bi-x-circle"></i></button>
                    <Logo/>
                    <Link onClick={e => setDisplayBlock(!displayBlock)} to={'/'}>Home</Link>
                    <Link onClick={e => setDisplayBlock(!displayBlock)} to={'/artigos'}>Artigos</Link>
                </nav>
            </div>
        </menu>
        // Fazer o nav do mobile
        
    )
}