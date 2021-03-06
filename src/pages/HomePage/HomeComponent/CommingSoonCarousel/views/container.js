import { viewGenerator } from '@/fetchGenerator'
import { API_COMING_SOON } from '@/constants'
import { pageName, moduleName } from '../constant'
import MovieCarouselGenerator from '@/MovieComponents/carouselComponent'
import React from 'react'
import CustomViewGenerator from '@/utils/CustomViewGenerator'
import MovieCard from '@/MovieCard'

const DataView = viewGenerator(
  {
    pageName,
    moduleName,
    API: API_COMING_SOON,
    view: MovieCarouselGenerator({
      itemView: CustomViewGenerator(MovieCard, {})
    })
  }
)


const CommingSoonCarousel = () => (
  <div>
    <h2 className="homeSectionHeader">最近热门电影</h2>
    <DataView />
  </div>
)

export default CommingSoonCarousel