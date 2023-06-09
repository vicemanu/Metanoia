import { Link } from 'react-router-dom'
import './artigos.css'

export default function Artigos(props) {


    return (
        <Link to={`/artigo/${props.link}`}  className="container_artigos--box_artigo">
                    <picture className="box_artigo--img_artigo">
                        <img src={props.img} alt="" />
                    </picture>
                    <div className="box_artigo--text">
                        <h3>{props.title}</h3>
                        <p>{props.text}</p>
                    </div>
                    
        </Link>
                

    )
}