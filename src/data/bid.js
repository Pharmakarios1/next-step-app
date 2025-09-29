// src/data/bids.ts
// export type BidStatus = "live" | "upcoming" | "closed"

// export interface Bid {
//   id: string
//   image: string
//   title: string
//   description: string
//   category: string
//   currentBid: string
//   startingPrice: string
//   bidCount: number
//   timeRemaining: string
//   status: BidStatus
//   seller: string
//   badges: string[]
// }

export const bids = [
  {
    id: '1',
    image: '/macbok.webp',
    title: 'MacBook Pro 16” M1 Pro',
    description:
      '2021 MacBook Pro 16-inch with Apple M1 Pro chip, 16GB RAM, and 1TB SSD. Perfect for developers, designers, and creators.',
    category: 'Electronics',
    currentBid: '$1,200',
    startingPrice: '$1,000',
    bidCount: 12,
    timeRemaining: '2h 15m',
    status: 'live',
    seller: 'TechStore LTD',
    badges: ['Hot', 'No Reserve'],
  },
  {
    id: '2',
    image: '/images/painting.jpg',
    title: 'Abstract Painting',
    description:
      'Original acrylic painting on canvas. Unique modern art piece signed by the artist.',
    category: 'Art',
    currentBid: '$350',
    startingPrice: '$200',
    bidCount: 8,
    timeRemaining: '1d 4h',
    status: 'upcoming',
    seller: 'Creative Arts',
    badges: ['New'],
  },
  {
    id: '3',
    image: '/images/car.jpg',
    title: '2019 Tesla Model 3',
    description: 'Electric sedan in excellent condition, 50,000 miles, full self-driving included.',
    category: 'Cars',
    currentBid: '$25,000',
    startingPrice: '$20,000',
    bidCount: 21,
    timeRemaining: 'Closed',
    status: 'closed',
    seller: 'AutoHub',
    badges: ['Featured'],
  },
  {
    id: '4',
    image: '/images/car.jpg',
    title: '2019 Tesla Model 3',
    description: 'Electric sedan in excellent condition, 50,000 miles, full self-driving included.',
    category: 'Cars',
    currentBid: '$25,000',
    startingPrice: '$20,000',
    bidCount: 21,
    timeRemaining: 'Closed',
    status: 'closed',
    seller: 'AutoHub',
    badges: ['Featured'],
  },
]
