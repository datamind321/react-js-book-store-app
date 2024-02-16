import React from 'react'
import { Authors } from '../data'

const FeaturedAuthors = () => {
  return (
    <>
    
    <h1 className='texyt-4xl font-bold text-center my-8'>Featured Authors</h1>
    
    <div className='flex justify-around text-center'>
   
    {

    Authors.map((author,i)=>(
      
        <div className='flex flex-col items-center'>
            <img src={author.profile_image} alt={author.name} className='mx-auto mb-4 w-28 h-28 round-lg'/>
            <h5>{author.name}</h5>
        </div>
        
    ))

    

    }
 

   </div>

    
    </>
  )
}

export default FeaturedAuthors