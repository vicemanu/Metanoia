import './artigos.css'

export default function Artigos(props) {


    return (
        <section className="artigos">
            {/* { props.title &&  
            <h2 className="artigos--text">
                Artigos
            </h2>}
             */}
            <div className="artigos--container_artigos">

                <a href={props.link}  className="container_artigos--box_artigo">
                    <picture style={{backgroundImage:`url(${props.img})`}} className="box_artigo--img"></picture>
                    <div className="box_artigo--text">
                        <h3>{props.title}</h3>
                        <p>{props.text}</p>
                    </div>
                </a>
                

            </div>
        </section>
    )
}