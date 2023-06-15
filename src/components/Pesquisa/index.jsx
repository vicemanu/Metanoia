import './pesquisa.css'


function toSlug() {
    
}

export default function Pesquisa() {
    return(
        <form className='form--pesquisa' onSubmit={toSlug}> 
        <input type="text" />
        <button type="submit"><i className="bi bi-search"></i></button>
        </form>
    )
}