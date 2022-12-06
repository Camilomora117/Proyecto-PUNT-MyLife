import React from 'react';
import Carousel from 'better-react-carousel';
import { useNavigate } from "react-router-dom";
import './vida.css';

const Vida = () => {
  const navigate = useNavigate();

  
  function redirect() {
    navigate('/');
  }
  return (
    <div className="AppV">
      <div className="headerV">
        <h1>MI VIDA</h1>
      </div>
      <div className="bodyV">
        <div>
          <button className="botonV" onClick={redirect}>Experiencias</button>
        </div>
        <div>
        <Carousel cols={1} rows={1} loop >
            <Carousel.Item>
              <div className='contenidoV'>
                <div className="imagenV">
                  <img className="imgV" src="https://www.semana.com/resizer/GrITy4jt0jRjzi5nTryviIjMzYM=/1200x646/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/NG7IFHZ2NBEKTH7SNFZVDJXVOU.jpg" />
                </div>
                <div className='contenedorDes'>
                  <h2 className='descripcionV'>Me gusta mi pueblo por su tranquilidad</h2>
                </div>
              </div>
            </Carousel.Item>
            
            <Carousel.Item>
              <div className='contenidoV'>
                <div className="imagenV">
                  <img className="imgV" src="https://cdn.discordapp.com/attachments/967211557274669097/1049691747254538331/WhatsApp_Image_2022-12-06_at_9.19.16_AM.jpeg" />
                </div>
                <div className='contenedorDes'>
                  <h2 className='descripcionV'>Me gustan los animales :)</h2>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='contenidoM'>
                <div className="imagenM">
                  <img className="imgM" src="https://elturismoencolombia.com/wp-content/uploads/2016/05/nevado_del_ruiz_turismo_colombia.jpg" />
                </div>
                <div className='contenedorDes'>
                  <h2 className='descripcionM'>Me gusta la naturaleza</h2>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='contenidoM'>
                <div className="imagenM">
                  <img className="imgM" src="https://i.blogs.es/3588cb/aoe/840_560.jpg" />
                </div>
                <div className='contenedorDes'>
                  <h2 className='descripcionM'>Me gustan los videojuegos</h2>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='contenidoM'>
                <div className="imagenM">
                  <img className="imgM" src="https://i.pinimg.com/736x/c7/5a/fc/c75afc4936f580418699df3a50068fc1.jpg" />
                </div>
                <div className='contenedorDes'>
                  <h2 className='descripcionM'>Me gustan la musica</h2>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='contenidoM'>
                <div className="imagenM">
                  <img className="imgM" src="https://img.freepik.com/foto-gratis/agencia-joven-adulto-profesion-destaco-negro_1134-1279.jpg" />
                </div>
                <div className='contenedorDes'>
                  <h2 className='descripcionM'>Me estreso facil :)</h2>
                </div>
              </div>
            </Carousel.Item>

          </Carousel>
        </div>
      </div>
    </div>
  )
}

export {Vida}
