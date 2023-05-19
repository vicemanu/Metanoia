
import Footer from '../../components/Footer'
import Artigos from '../../components/Artigos'
import Logo from '../../components/Logo'
import './header.css'

export default function Artigospage() {
  return(
    <>
      <header className="header--artigos">
            <div className='header__artigos--shadow'></div>
            <div className='header__artigos--title_header'>
                <h1><Logo/></h1>
                <p>Transformando a sua mente em Cristo</p>
            </div>
        </header>
        <main>
          <section>
            <Artigos/>
          </section>
          <section>
          </section>
        </main>
        
    <Footer/>
    </>
  )
}

 
