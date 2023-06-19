import { useEffect, useState } from 'react'
import './artigo.css'
import Recomend from '../../components/Recomend'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore'

export default function Artigo() {

    const { slug } = useParams()
    const [artigo, setArtigo] = useState([""])


    useEffect(()=> {
    async function artigo() {

        const postRef = doc( db, "artigo", slug)

        await getDoc(postRef)
        .then((snapshot)=> {
          setArtigo(snapshot.data())
        })
        .catch((e)=> {
            console.log(e)
          
        })
      }

      artigo()
    },[])

    console.log(artigo)
  return(
    <>
      <header className="header--artigo">
            <div className='header__artigo--shadow'>
              <img src={artigo.img} alt=""/>
            </div>
            <div className='header__artigo--title_header'>
                <h1>{artigo.title}</h1>
                <p>{artigo.description}</p>
            </div>
        </header>
        <main className='main--artigo'>
          <section className='main__artigo--todo__artigo'>
            <article className='todo__artigo--conteudo__artigo'>
                {
                  artigo.conteudo?.map((elem, index)=> {
                    return(
                      <div key={index}  className='conteudo__artigo--box_artigo' >

                        {/* Titulo da parte do conteudo */}

                        <h2>{elem.title}</h2>

                        {/* Retorne as citações */}
                        {
                          elem.citation?.map((e, index)=> {
                            if(e) {
                              return(

                                <div key={index} className='box_artigo--citation'>
                                    <p>{e}</p>
                                    <span>{elem.author[index]}</span>
                                </div>
                              )
                            } 
                            
                          })
                        }

                        {/* Retorne todos os paragrafos */}

                        {elem?.paragraph.map((e, index)=> {
                          return(
                             <p key={index} className='box_artigo--paragraph'>{e}</p> 
                           
                          )
                        })}

                        {/* Retornar a imagem */}

                        {elem?.img.map((e, index)=> {
                          return <img className='box_artigo--img' key={index} src={e} alt=""  />
                        })}
                      </div>
                    )
                  })
                }
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

 
