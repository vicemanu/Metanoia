


export default function Slide() { 

    /* Slide de artigos */

    var back = "https://i.pinimg.com/originals/d7/b1/12/d7b112f7661e5fcbf91ec6ca058adbe9.jpg"
    
    return (
        <section className="home__slide-home">

            <div className="slide-home__box-slide-home" style={{backgroundImage: `url(${back})` }}>
                <div className="box-slide-home__shadow"></div>
                <div className="box-slide-home__title-slide">
                    <h2>Proposito e confiança em Deus</h2>
                </div>
                <div className="box-slide-home__text-slide">
                    <p>Como Proposito e confiança em Deus podem mudar sua vida.</p>
                </div>
                <div className="box-slide-home__bl-slide">
                    <span className="bl1"></span>
                    <span className="bl2"></span>
                    <span className="bl3"></span>
                    <span className="bl4"></span>         
                </div>
            </div>
    </section>
    )
}