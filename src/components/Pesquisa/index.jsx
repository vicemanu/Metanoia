import { redirect } from 'react-router-dom'
import './pesquisa.css'
import { useState } from 'react'


export default function Pesquisa() {

    const [dados, setDados] = useState()

    function toSlug(e) {
        return redirect(`/artigos/${dados}`)
        
    }

    return(
        <form className='form--pesquisa' onSubmit={toSlug}> 
        <input type="text" onChange={e => setDados(e.target.value)} />
        <button type="submit"><i className="bi bi-search"></i></button>
        </form>
    )
}