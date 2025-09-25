import CustomCarousel from '@/components/customs/Carousel.js'
import CustomTabs from '@/components/customs/CustomTabs.js'
import Hero from '@/components/customs/Hero.js'
import Categories from '@/components/customs/search/Categories.js'

const Home = () => {
  return (
    <main className="main-layout">
      <CustomCarousel />
      <Hero />
      <Categories/>
      <CustomTabs />
    </main>
  )
}

export default Home
