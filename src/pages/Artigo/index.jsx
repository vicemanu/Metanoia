
import Artigos from '../../components/Artigos'
import './artigo.css'
import Recomend from '../../components/Recomend'

export default function Artigo() {
  return(
    <>
      <header className="header--artigo" style={{backgroundImage: 'url(/img/wall1.jpg)'}}> {/** Imagem que vai do artigo */}
            <div className='header__artigo--shadow'></div>
            <div className='header__artigo--title_header'>
                <h1>Nome do artigo</h1>
                <p>descrição</p>
            </div>
        </header>
        <main className='main--artigo'>
          <section className='main__artigo--todo__artigo'>
            <article className='todo__artigo--conteudo__artigo'>

            </article>
          </section>
          <section className='main__artigo--recomendados'>
            <h3 className='recomendados--title'>
              Recomendados
            </h3>
            <Recomend/> {/** Artigos recomendados */}
          </section>
        </main>
        
    </>
  )
}

 
