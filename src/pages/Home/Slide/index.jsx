
import { useState } from 'react'
import './slide.css'

export default function Slide() { 
    
    const [btn, setBtn] = useState(1);

    const [img, setImg] = useState('https://i.pinimg.com/originals/d7/b1/12/d7b112f7661e5fcbf91ec6ca058adbe9.jpg');
    const [title, setTitle] = useState('Titulo do Artigo');
    const [text, setText] = useState('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eius omnis tenetur voluptatem velit necessitatibus, animi quas maiores ducimus quo natus aliquid, nisi id incidunt eveniet, porro laborum laboriosam facere?');
    const [link, setLink] = useState('');

    function somaBtn() {
       let n = btn + 1
       if(n == 5) {
        n = 1
       }
      setBtn(n)
      gerarTela(n)
    }

    function subBtn() {
      let n = btn - 1
      if(n == 0) {
        n = 4
      }
      setBtn(n)
      gerarTela(n)
    }

    function gerarTela(n) {
      if(n == 1) {
        setImg('https://i.pinimg.com/originals/d7/b1/12/d7b112f7661e5fcbf91ec6ca058adbe9.jpg')
        setTitle('Titulo do Artigo 1')
        setText('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eius omnis tenetur voluptatem velit necessitatibus, animi quas maiores ducimus quo natus aliquid, nisi id incidunt eveniet, porro laborum laboriosam facere?')
        setLink('')
      } else if( n == 2){
        setImg('https://cdn.pixabay.com/photo/2023/03/28/19/55/lake-7884049_960_720.jpg')
        setTitle('Titulo do Artigo 2')
        setText('animi quas maiores ducimus quo natus aliquid,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eius omnis tenetur voluptatem velit necessitatibus, animi quas maiores ducimus quo natus aliquid, nisi id incidunt eveniet, porro laborum laboriosam facere?')
        setLink('')
      } else if(n == 3) {
        setImg('https://cdn.pixabay.com/photo/2023/04/14/17/18/flower-7925599_640.jpg')
        setTitle('Titulo do Artigo 3')
        setText('incidunt eveniet, porro laborum laboriosam facere?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eius omnis tenetur voluptatem velit necessitatibus, animi quas maiores ducimus quo natus aliquid, nisi id incidunt eveniet, porro laborum laboriosam facere?')
        setLink('')
      } else if(n == 4) {
        setImg('https://cdn.pixabay.com/photo/2023/04/20/11/55/village-7939562_960_720.jpg')
        setTitle('Titulo do Artigo 4')
        setText('nisi id incidunt eveniet, porro laborum laboriosam facere? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eius omnis tenetur voluptatem velit necessitatibus, animi quas maiores ducimus quo natus aliquid, nisi id incidunt eveniet, porro laborum laboriosam facere?')
        setLink('')
      }
    }
  
    

    return (
        <section className="home--slide-home">
          <div style={{backgroundImage: `url(${img})`}} className='slide_home--picture_box'>

            <div className='picture_box--btns'>
              <span className='btn1' style={{backgroundColor: btn == 1 ? 'white': ""}}></span>
              <span className='btn2' style={{backgroundColor: btn == 2 ? 'white': ""}}></span>
              <span className='btn3' style={{backgroundColor: btn == 3 ? 'white': ""}}></span>
              <span className='btn4' style={{backgroundColor: btn == 4 ? 'white': ""}}></span>
            </div>

            <div className='picture_box--box_arrow'>
              <button onClick={()=> {
                subBtn()
              }} className='box_arrow--left'>
                <i class="bi bi-caret-left-fill"></i>
                </button>
              <button onClick={()=> {
                somaBtn()
              }} className='box_arrow--rigth'>
                <i class="bi bi-caret-right-fill"></i>
                </button>
            </div>
            
          </div>
          <div className='slide-home--text_box_slide'>
            <h2 className='text_box_slide--title'>{title}</h2>
            <p className='text_box_slide--text'>{text}</p>
            <a href={link} className='text_box_slide--link'>Ler mais </a>
          </div>
        </section>
    )
}