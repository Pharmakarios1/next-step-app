import CustomCarousel from '@/components/customs/Carousel.js'
import CustomTabs from '@/components/customs/CustomTabs.js'

const Home = () => {
  return (
    <main className="main-layout">
      <CustomCarousel />
      <div className=' w-full md:max-w-2/3 mx-auto'>
        <p className='text-xl text-center font-head font-bold '>Nextlot makes every auction thrilling, let you bid confidently, win big, and celebrate every victory together</p>
      </div>
      <CustomTabs />
    </main>
  )
}

export default Home
