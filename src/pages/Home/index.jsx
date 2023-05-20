import Header from "../../components/Header"
import Slide from "./Slide"

import './home.css'
import Artigos from '../../components/Artigos'

export default function Home() {

    
  return(
    <>
    <Header/>
    <Slide/>
    <Artigos title={true}/>    

    {/* <div id="artigos">
            <h2>Artigos</h2>
            
            <div id="conteudocriado">
                
                <a class="ListaDeArtigos" href="artigos/2022/proposito e confiança em deus - como essas duas coisas podem mudar sua vida.html">
                    <img class="img rtd" src="https://i.pinimg.com/originals/d7/b1/12/d7b112f7661e5fcbf91ec6ca058adbe9.jpg" alt=""/>
                    <h2>Proposito e confiança em Deus - Como essas duas coisas podem mudar sua vida</h2>
                </a>

                <a class="ListaDeArtigos" href="artigos/2022/devocional por que se relacionar com deus pela manha.html"  >
                    <img class="img rtd" src="https://i.pinimg.com/originals/8c/c0/7d/8cc07d408e4ed9328dd58557d631f3ad.jpg" alt=""/>
                    <h2>|Devocional| Por que se relacionar com Deus pela manhã?</h2>
                </a>
                <a class="ListaDeArtigos" href="artigos/2022/como ter mais intimidade com deus.html"  >
                    <img class="img rtd" src="https://i.pinimg.com/originals/1e/1d/c4/bc1qzk3kxhdxnzkpdgdn9ueg34y08smxgfv0hxvcu3.jpg" alt=""/>
                    <h2>Como ter mais intimidade com Deus</h2>
                </a>
                <a class="ListaDeArtigos" href="artigos/2022/eclesiastes- porque nada na sua vida não faz sentido!.html"  >
                    <img class="img rtd" src="https://i.pinimg.com/originals/42/11/84/421184b75ea2d411af958d225f52c7c3.jpg" alt=""/>
                    <h2>|Eclesiastes| Sua vida não faz sentido!</h2>
                </a>
            
                <div class="botaovazio">
                </div>
                <div class="botaovazio">
                </div>
                <div class="botaovazio">
                </div>
            </div>

        </div> */}



    </>
  )
}

