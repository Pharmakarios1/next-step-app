import CustomCarousel from '@/components/customs/Carousel.js'
import CustomTabs from '@/components/customs/CustomTabs.js'
import Hero from '@/components/customs/Hero.js'
import Categories from '@/components/customs/search/Categories.js'
import Listing from './bidListing/Listing.js'

const Home = () => {
  return (
    <main className="main-layout my-10">
      <CustomCarousel />
      <Hero />
      <Listing />
      <CustomTabs />
    </main>
  )
}

export default Home
