import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel.js'
import Autoplay from 'embla-carousel-autoplay'

const CustomCarousel = () => {
  const AuctoCarousel = [
    {
      id: 1,
      boldtext: 'The new generation Auction with ease!',
      minitext: 'Auction your less needed valuable for quick cash',
    },
    {
      id: 2,
      boldtext: 'Bid in real time with Confidence',
      minitext: 'All bids are sync in realtime, no room for delays',
    },
    {
      id: 3,
      boldtext: 'Bidboard shows leading Bidders',
      minitext: 'Checkout Bidboard for leaders in this industry',
    },
    {
      id: 4,
      boldtext: 'Compare prices of items in Auctions',
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
      <CarouselContent className="mt-1 h-[75px]  text-center">
        {AuctoCarousel.map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-2/3">
            <div className="p-1">
              <span className=" text-3xl sm:text-4xl  md:text-5xl  font-body font-bold text-gradient">
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
