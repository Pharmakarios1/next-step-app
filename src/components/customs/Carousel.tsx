import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel.js'
import Autoplay from 'embla-carousel-autoplay'

const CustomCarousel = () => {
  const AuctoCarousel = [
    {
      id: 1,
      boldtext: 'Bid smart, Win Big Bounties!',
      minitext: 'Auction your less needed valuable for quick cash',
    },
    {
      id: 2,
      boldtext: 'Your Next Lot, Your Next Win',
      minitext: 'All bids are sync in realtime, no room for delays',
    },
    {
      id: 3,
      boldtext: 'Auction the Future, One Lot at a Time',
      minitext: 'Checkout Bidboard for leaders in this industry',
    },
    {
      id: 4,
      boldtext: 'Bid Boldly, Win Confidently',
      minitext: 'Take a closer look at bids to for more choices',
    },
  ]
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[Autoplay({ delay: 5000 })]}
      orientation="vertical"
      className="w-full mx-auto max-w-[768px]  mt-5 px-10 "
    >
      <CarouselContent className="mt-1 h-[80px]  text-center">
        {AuctoCarousel.map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-2/3">
            <div className="p-1">
              <span className=" text-4xl sm:text-4xl  md:text-5xl  font-body font-bold text-gradient">
                {_.boldtext}
              </span>
              {/* <p className="text-[10px] sm:text-base text-gray-400">{_.minitext}</p> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CustomCarousel
