import Header from "../../components/Header"
import Slide from "./Slide"

import './home.css'
import Artigos from '../../components/Artigos'
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createData } from "../../redux/data/slice"

export default function Home() {

    const { data, loading } = useSelector(rootReducer => rootReducer.data)
    const dispatch = useDispatch();

    const [destaque, setDestaque] = useState([])

    useEffect(()=> {

        function buscarPost() {
            dispatch(createData())
        }
        buscarPost()
    },[])




  return(
    <>
    <Header/>


{/* Slide com os artigos em destaque */}


    <Slide artigos={destaque}/>




{/* Gerar os artigos na tela */}

    <section id="artigos">
        <h2 className="artigos--title">Artigos</h2>
        <div className="artigos--div">
            {
                data.map((e, indice)=> {

                    if(indice <= 8) {
                        return(
                            <Artigos key={e.id} link={e.id} img={e.img} title={e.title} text={e.text} /> 
                        )
                    }
                    
                })
            }
            
        </div>
        <Link to={'/artigos'} className="artigos--button">Ver Mais</Link>
    </section>

    </>
  )
}

