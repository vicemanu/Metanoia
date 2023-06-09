import Logo from '../Logo'
import Pesquisa from '../Pesquisa'
import './header.css'

export default function Header() {
    return (
        <header className="header">
            <div className='header__shadow'></div>
            <div className='header__title-header'>
                <h1><Logo/></h1>
                <p>Transformando a sua mente em Cristo</p>
                <Pesquisa/>
            </div>
                
        </header>
    )
}