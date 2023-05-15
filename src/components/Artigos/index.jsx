import './artigos.css'

export default function Artigos() {

    var data = [ {
        img: 'https://i.pinimg.com/originals/d7/b1/12/d7b112f7661e5fcbf91ec6ca058adbe9.jpg', title : 'Titulo do Artigo 1', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eius omnis tenetur voluptatem velit necessitatibus, animi quas maiores ducimus quo natus aliquid, nisi id incidunt eveniet, porro laborum laboriosam facere?', link: ''
    }, {
        img: 'https://i.pinimg.com/originals/d7/b1/12/d7b112f7661e5fcbf91ec6ca058adbe9.jpg', title : 'Titulo do Artigo 1', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eius omnis tenetur voluptatem velit necessitatibus, animi quas maiores ducimus quo natus aliquid, nisi id incidunt eveniet, porro laborum laboriosam facere?', link: ''
    }, {
        img: 'https://i.pinimg.com/originals/d7/b1/12/d7b112f7661e5fcbf91ec6ca058adbe9.jpg', title : 'Titulo do Artigo 1', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eius omnis tenetur voluptatem velit necessitatibus, animi quas maiores ducimus quo natus aliquid, nisi id incidunt eveniet, porro laborum laboriosam facere?', link: ''
    }
    
    ]







    return (
        <section className="artigos">
            <h2 className="artigos--text">
                Artigos
            </h2>
            <div className="artigos--container_artigos">

            {data.map(e => {
                return(
                <a href={e.link}  className="container_artigos--box_artigo">
                    <picture style={{backgroundImage:`url(${e.img})`}} className="box_artigo--img"></picture>
                    <div className="box_artigo--text">
                        <h3>{e.title}</h3>
                        <p>{e.text}</p>
                    </div>
                </a>
                )
            })
            }
                

            </div>
        </section>
    )
}