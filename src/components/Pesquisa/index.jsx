import { Link } from 'react-router-dom'
import './pesquisa.css'
import { useState } from 'react'


export default function Pesquisa() {

    const [dados, setDados] = useState()
    
    return(
        <div className='form--pesquisa'>
        <input type="text" onChange={e => setDados(e.target.value)} />
        <Link to={`/artigos/${dados}`}><i className="bi bi-search"></i></Link>
        </div>
    )

}
