import React from 'react'

import {register} from 'swiper/element/bundle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedAuthors from './components/FeaturedAuthors';

import WeekOfBooks from './components/WeekOfBooks';
import Footer from './components/Footer';
import { FeatureBooks } from './data';
import FeaturedBooks from './components/FeaturedBooks';

register();

const App = () => {
  return (
 <>

 < Navbar />

 < Hero />

 <FeaturedAuthors />

<FeaturedBooks />

 < WeekOfBooks />
 

 < Footer />
 
  

 
 </>
  )
}

export default App