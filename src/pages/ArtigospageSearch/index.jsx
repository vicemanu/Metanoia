
import Artigos from '../../components/Artigos'
import Logo from '../../components/Logo'
import './artigospagesearch.css'
import Recomend from '../../components/Recomend'
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'

export default function ArtigospageSearch() {

  const { slug } = useParams()
  const [posts, setPosts] = useState([])


  useEffect(()=> {
      async function buscarPost() {
          const postRef = collection(db, "artigo")
          await getDocs(postRef)
          .then((snapshot)=> {
              let lista = []
              snapshot.forEach((doc) => {
                  lista.push({
                      id: doc.id,
                      title: doc.data().title,
                      img: doc.data().img,
                      text: doc.data().description
                  })
              })
              if(!slug == "") {
                let listaFilter = lista.filter((e)=> {
                  return e.title.toLowerCase().includes(slug.toLowerCase())
                })
                setPosts(listaFilter)
              } else {
                setPosts(lista)
              }
              

              
          
          })
          .catch((error)=> {
              console.log(error)
          })
      }
      buscarPost()
  },[slug])








  return(
    <>
      <header className="header--artigos">
            <div className='header__artigos--shadow'></div>
            <Header/>
        </header>
        <main className='main--artigospage'>
          <section className='main__artigospage--todos__artigos'>

            <h2>Você pesquisou sobre: {slug}</h2>
            <div className='todos__artigos__container--artigos'>
              
              {
                posts.map((e)=> {
                  return(
                      <Artigos key={e.id} link={e.id} img={e.img} title={e.title} text={e.text} /> 
                  )
              })
              }

            </div>
            
            
            {/** mapeamento de todos os artigos com um sistema de filtro de pesquisa */}

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

 
