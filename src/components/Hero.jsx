import React from 'react'
import { Books } from '../data'

const Hero = () => {
  return (
   <>
    
   <div className='mt-16 mx-10 md:mx-40 flex gap-28'>
    <div >
    <h1 className='text-9xl font-bold mb-10'>Unlock Worlds, <br /> turn pages...</h1>
    <br />
    <p className='text-3xl'> <blockquote>"Books are the plane, and the train, and the road. <br /> They are the destination, and the journey. They are home."</blockquote> ― <cite>Anna Quindlen</cite></p>
    </div>
     
    <br /> 

    <div className='w-72'>
      <swiper-container effect="cards" autoplay="true" >
        {
          
          Books.map((book, i) => (
            <swiper-slide>
             <img src={book.book_cover} alt={book.title} width='200px'/>
            </swiper-slide>
          ))
        }
      </swiper-container>
    </div>

   </div>




   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D3D9D1" fillOpacity="1" d="M0,64L40,101.3C80,139,160,213,240,234.7C320,256,400,224,480,181.3C560,139,640,85,720,101.3C800,117,880,203,960,250.7C1040,299,1120,309,1200,272C1280,235,1360,149,1400,106.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

  
   

   
   </>
  )
}

export default Hero