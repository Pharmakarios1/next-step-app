
import { Button } from '../ui/button.js'
import { ArrowRight, Scale } from 'lucide-react'

const Hero = () => {
  return (
    <div className=" max-w-full sm:max-w-2/3 md:max-w-1/2 mx-auto my-7 md:my-0 ">
      <p className="text-md sm:text-xl md:text-2xl text-center text-gray-600 font-inter  font-bold ">
        Nextlot is the future of digital auctions, merging technology, transparency, and trust into
        every bidding experience worldwide.
      </p>
     <div className='flex flex-col justify-center gap-3 md:flex-row items-center my-5 '>
       <Button className='bg-gradient min-w-1/2 cursor-pointer'>Bid Now! <ArrowRight/></Button>
      <Button className='bg-gradient  min-w-1/2 cursor-pointer'>Compare Bids<Scale/></Button>
     </div>
    </div>
  )
}

export default Hero
