import React from 'react';
import Carousel from 'better-react-carousel';
import { useNavigate } from "react-router-dom";
import './primero.css';

const Muerte = () => {
  const navigate = useNavigate();

  
  function redirect() {
    navigate('/vida');
  }
  return (
    <div className="AppM">
      <div className="headerM">
        <h1>MI VIDA</h1>
      </div>
      <div className="bodyM">
        <div>
          <button className="botonM" onClick={redirect}>Gustos</button>
        </div>
        <div>
        <Carousel cols={1} rows={1} loop >
            <Carousel.Item>
              <div className='contenidoM'>
                <div className="imagenM">
                  <img className="imgM" src="https://cdn2.excelsior.com.mx/media/pictures/2021/12/30/2693531.jpg" />
                </div>
                <div className='contenedorDes'>
                  <h2 className='descripcionM'>Prohibición Tatuajes</h2>
                </div>
              </div>
            </Carousel.Item>
            
            <Carousel.Item>
              <div className='contenidoM'>
                <div className="imagenM">
                  <img className="imgM" src="https://fotografias.lasexta.com/clipping/cmsimages01/2015/06/03/2A28A047-BC31-4768-B176-EE989C536466/default.jpg?crop=778,438,x11,y0&width=1900&height=1069&optimize=low" />
                </div>
                <div className='contenedorDes'>
                  <h2 className='descripcionM'>Familia muy catolica</h2>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='contenidoM'>
                <div className="imagenM">
                  <img className="imgM" src="https://vcm.emol.com/wp-content/uploads/2019/05/estres-universidad-wordpres.jpg" />
                </div>
                <div className='contenedorDes'>
                  <h2 className='descripcionM'>Exigencia por estudiar</h2>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='contenidoM'>
                <div className="imagenM">
                  <img className="imgM" src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.18169-9/17553836_792758987539925_1288504584470132099_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFoRTwxe31SDfxntx_K2gSzxV4pKUrRMTDFXikpStExMMgNtsZ66lsHrJH8PhSYDUodmUn38hIMEDkUiC5kgnWe&_nc_ohc=GfgMOyuwyoEAX-TWdrd&_nc_ht=scontent-bog1-1.xx&oh=00_AfBIg2xCHBZHur0Rr3IVbLEDtpeHs_z8hKffP1wlIhdSUQ&oe=63B6C4A7" />
                </div>
                <div className='contenedorDes'>
                  <h2 className='descripcionM'>La primera muerte de un familiar (Mi abuelo)</h2>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='contenidoM'>
                <div className="imagenM">
                  <img className="imgM" src="https://cdn.discordapp.com/attachments/967211557274669097/1049711135122796674/WhatsApp_Image_2022-12-06_at_9.16.09_AM.jpeg" />
                </div>
                <div className='contenedorDes'>
                  <h2 className='descripcionM'>Conocer a mi mejor amiga</h2>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='contenidoM'>
                <div className="imagenM">
                  <img className="imgM" src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.18169-9/18119490_660331610823989_214780684484924100_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFsq1N5SqoP5A-cM_Oa1ysW6VtCP8PmlT7pW0I_w-aVPkDRNmYuKRW6E8OJj7Hx9cIkCTQHpMzo6YaEMa0GGn1e&_nc_ohc=wEARf9Dm5bIAX-SEjfp&_nc_ht=scontent-bog1-1.xx&oh=00_AfBT2emBHEHWQBrP6uW1jLU7C-wJxVcd5CvqQIAInArnDw&oe=63B6E989" />
                </div>
                <div className='contenedorDes'>
                  <h2 className='descripcionM'>Siempre tuve animeles a mi alrededor</h2>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='contenidoM'>
                <div className="imagenM">
                  <img className="imgM" src="https://scontent-bog1-1.xx.fbcdn.net/v/t31.18172-8/20280506_703523156504834_3671278143589345406_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeHk1wOtPzrtqCrEsa0svF5FO34HS5ZtsmY7fgdLlm2yZleIkGKoSGZA-fbqEXNsNLsRHsiY7bKrhqMPb5H1UvSL&_nc_ohc=eJ5iUAjgLxQAX8UlaL9&_nc_ht=scontent-bog1-1.xx&oh=00_AfDSb9kDC2L5zWZVGKA291i26HYkJL7laqpmSwZlVjGMCg&oe=63B6B8F1" />
                </div>
                <div className='contenedorDes'>
                  <h2 className='descripcionM'>De niño vivi rodeado de naturaleza</h2>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='contenidoM'>
                <div className="imagenM">
                  <img className="imgM" src="https://depor.com/resizer/x-ehQyzNE5KzGty-wzrsWEkwR2Q=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/MZHJJVGAHNDHTAD7ZYOKZ22OYE.jpg" />
                </div>
                <div className='contenedorDes'>
                  <h2 className='descripcionM'>De niño me prohibian salir despues de las 6pm</h2>
                </div>
              </div>
            </Carousel.Item>
            
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export {Muerte}
