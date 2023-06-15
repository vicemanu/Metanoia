import './recomend.css'
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import { Link } from 'react-router-dom'

export default function Recomend() {

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
                      text: doc.data().text
                  })
              })
            
            //   Criando lista de recomendados

            function Recomend() {
                let listaRecomendado = []
                let art1 = lista[Math.round(Math.random() * (lista.length - 1))];
                let art2 = lista[Math.round(Math.random() * (lista.length - 1))];
                let art3 = lista[Math.round(Math.random() * (lista.length - 1))];
                
  
                listaRecomendado.push(art1, art2, art3)
  
                setPosts(listaRecomendado)
            }
            Recomend()
              
          })
          .catch((error)=> {
              console.log(error)
          })
      }
      buscarPost()
  },[])








    return (
        <section className="recomend">         
            <div className="recomend--container_recomend">

            {posts.map((e, indice) => {
                return(
                <Link to={`/artigo/${e.id}`} onClick={Recomend} key={indice} className="container_recomend--box_recomend">
                    <div className='box_recomend--Shadow'>
                        <img className='box_recomend--img' src={e.img} alt="" />
                        <div className="box_recomend--text">
                            <h3>{e.title}</h3>
                        </div>
                    </div>
                    
                </Link>
                )
            })
            }
                

            </div>
        </section>
    )
}