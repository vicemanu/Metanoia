
import Artigos from '../../components/Artigos'
import './artigo.css'
import Recomend from '../../components/Recomend'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase'
import { useEffect, useState } from 'react'
import { collection, doc, getDoc } from 'firebase/firestore'

export default function Artigo() {

    const { slug } = useParams()
    const {art, setArt} = useState('')


    useEffect(()=> {
      async function artigo() {
        const postRef = collection( db, "artigo")
        await getDoc(doc(postRef, slug))
        .then((snapshot)=> {
          let lista = []
              
          lista.push({
              id: snapshot.id,
              title: snapshot.data().title0,
              img: snapshot.data().img0,
              text: snapshot.data().text01
          })
          
          })
          setArt(lista)
        }

      artigo()
    })

    console.log(art)
  return(
    <>
      <header className="header--artigo" style={{backgroundImage: 'url(/img/wall1.jpg)'}}> {/** Imagem que vai do artigo */}
            <div className='header__artigo--shadow'></div>
            <div className='header__artigo--title_header'>
                <h1>{slug}</h1>
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

 
