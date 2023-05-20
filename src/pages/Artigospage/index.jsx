
import Artigos from '../../components/Artigos'
import Logo from '../../components/Logo'
import './artigospage.css'
import Recomend from '../../components/Recomend'

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
        <main className='main--artigospage'>
          <section className='main__artigospage--todos__artigos'>
            <Artigos title={false}/> {/** mapeamento de todos os artigos com um sistema de filtro de pesquisa */}
          </section>
          <section className='main__artigospage--recomendados'>
            <h3 className='recomendados--title'>
              Recomendados
            </h3>
            <Recomend/> {/** Artigos recomendados */}
          </section>
        </main>
        
    </>
  )
}

 
