import './recomend.css'

export default function Recomend(props) {

    var data = [ {
        img: 'https://i.pinimg.com/originals/d7/b1/12/d7b112f7661e5fcbf91ec6ca058adbe9.jpg', title : 'Titulo do Artigo 1', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eius omnis tenetur voluptatem velit necessitatibus, animi quas maiores ducimus quo natus aliquid, nisi id incidunt eveniet, porro laborum laboriosam facere?', link: ''
    }, {
        img: 'https://i.pinimg.com/originals/d7/b1/12/d7b112f7661e5fcbf91ec6ca058adbe9.jpg', title : 'Titulo do Artigo 1', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eius omnis tenetur voluptatem velit necessitatibus, animi quas maiores ducimus quo natus aliquid, nisi id incidunt eveniet, porro laborum laboriosam facere?', link: ''
    }, {
        img: 'https://i.pinimg.com/originals/d7/b1/12/d7b112f7661e5fcbf91ec6ca058adbe9.jpg', title : 'Titulo do Artigo 1', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eius omnis tenetur voluptatem velit necessitatibus, animi quas maiores ducimus quo natus aliquid, nisi id incidunt eveniet, porro laborum laboriosam facere?', link: ''
    }
    
    ]







    return (
        <section className="recomend">         
            <div className="recomend--container_recomend">

            {data.map(e => {
                return(
                <a href={e.link}  className="container_recomend--box_recomend" style={{backgroundImage:`url(${e.img})`}}>
                    <div className='box_recomend--Shadow'>
                        <div className="box_recomend--text">
                            <h3>{e.title}</h3>
                        </div>
                    </div>
                    
                </a>
                )
            })
            }
                

            </div>
        </section>
    )
}