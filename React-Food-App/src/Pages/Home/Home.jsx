import Header from '../../Components/Header/Header'
import Menu from '../../Components/ExploreMenu/Menu'
import { useState } from 'react'
import './Home.css'

const Home = () => {
  const [category, setCategory] = useState('All')
  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home