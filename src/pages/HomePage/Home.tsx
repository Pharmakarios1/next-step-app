import CustomCarousel from '@/components/customs/Carousel.js'
import CustomTabs from '@/components/customs/CustomTabs.js'
import Hero from '@/components/customs/Hero.js'
import Categories from '@/components/customs/search/Categories.js'
import Listing from '../BidPage/index.js'
import BidsPage from '../BidPage/index.js'
import BidDetailPage from '../BidPage/_partials/BidMenu/Index.js'

const Home = () => {
  return (
    <main className="main-layout my-10">
      <CustomCarousel />
      <Hero />
      <BidsPage />
      <BidDetailPage />
      <CustomTabs />
    </main>
  )
}

export default Home
