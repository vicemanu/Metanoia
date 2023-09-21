import { Link } from 'react-router-dom'
import Redes from '../Redes'
import './footer.css'

export default function Footer() {


    return (
        <footer className='footer'>
            <Link to={'/artigo/sHVCeWOUiHCw49pwmoDq'} className='footer--img' href="">
            <img src="https://firebasestorage.googleapis.com/v0/b/metanoia-ad952.appspot.com/o/images%2Fdasadsa%2Fcompass-2946959_1280.jpg?alt=media&token=526814ea-b934-45ce-a84c-84c3ec25de7b" alt="" />
            </Link>

            <div className='footer--box_redes'>
                <h3>Redes Sociais</h3>
                <div>
                    <Redes/>
                </div>
            </div>
            <div className='footer--box_direitos'>
                <h4>Direito de Imagem</h4>
                <a target='_blank' href="https://pixabay.com/">pixabay.com</a>
                <a target='_blank' href="https://www.svgrepo.com/svg/446392/world-1">https://www.svgrepo.com</a>
            </div>
            <p className='footer--meu_direito'>© <a target='_blank' href="https://victor-mielke-portfolio.vercel.app/">Victor Mielke</a> 2023</p> 
        </footer>
    )
}