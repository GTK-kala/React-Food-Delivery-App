import Header from '../../Components/Header/Header'
import Menu from '../../Components/ExploreMenu/Menu'
import { useState } from 'react'
import './Home.css'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {
  const [category, setCategory] = useState('All')
  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload /> 
    </div>
  )
}

export default Home