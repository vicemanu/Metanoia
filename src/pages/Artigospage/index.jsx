
import Artigos from '../../components/Artigos'
import './artigospage.css'
import Recomend from '../../components/Recomend'
import { useEffect, useState } from "react"
import Header from '../../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { createData } from "../../redux/data/slice"

export default function Artigospage() {

  const { data, loading } = useSelector(rootReducer => rootReducer.data)
  const dispatch = useDispatch();
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=> {

      function buscarPost() {
          dispatch(createData())
      }
      buscarPost()
  },[])

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(data.length / itemsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }



  return(
    <>
      <header className="header--artigos">
            <div className='header__artigos--shadow'></div>
            <Header/>
        </header>
        <main className='main--artigospage'>
          
          <section className='main__artigospage--todos__artigos'>
            
          <div className='btn-page'>
            
          </div>

          <div className='artigos--filtro'>
            {
              currentItems.map((e)=> {
                  return(
                      <Artigos key={e.id} link={e.id} img={e.img} title={e.title} text={e.text} /> 
                  )
              })
          }
          </div>
            
          <div className='btn-page'>
            
          </div>

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

 
