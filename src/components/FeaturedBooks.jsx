import React from 'react'
import { FeatureBooks } from '../data'


const FeaturedBooks = () => {
  return (
    <>
    
    <div className='mx-20 my-10'>
      <h1 className='text-xl font-bold mb-5 text-center'>Featured Books</h1>
      <swiper-container slides-per-view="8" autoplay="true" enabled="true" navigation="true">
        {
          FeatureBooks.map((book, i) => (
            <swiper-slide>
              <div className='flex flex-col items-center'>
                <a>
                  <img src={book.book_cover} alt={book.title} width="100px" />
                </a>
                <p className='font-semibold'>Rs. {book.selling_price} <span className='line-through font-thin text-sm'>{book.mrp}</span> </p>
              </div>
            </swiper-slide>
          ))
        }
      </swiper-container>
    </div>


    </>
  )
}

export default FeaturedBooks