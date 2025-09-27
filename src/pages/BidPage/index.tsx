import { useState } from 'react'
import { Input } from '@/components/ui/input.js'
import { Button } from '@/components/ui/button.js'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.js'
import BidCard from '@/components/customs/BidCard.js'
import { Link } from 'react-router-dom'

export default function BidsPage() {
  const [filter, setFilter] = useState('all')

  const bids = [
    {
      id: 1,
      image: '/CellPhone.svg',
      title: 'MacBook Pro 16” M1 Pro',
      description: 'Powerful laptop for creators and developers.',
      category: 'Electronics',
      currentBid: '$1,200',
      startingPrice: '$1,000',
      bidCount: 12,
      timeRemaining: '2h 15m',
      status: 'live' as const,
      badges: ['Hot', 'No Reserve'],
    },
    {
      id: 2,
      image: '/Camera.svg',
      title: 'Abstract Painting',
      description: 'Original acrylic painting on canvas.',
      category: 'Art',
      currentBid: '$350',
      startingPrice: '$200',
      bidCount: 8,
      timeRemaining: '1d 4h',
      status: 'upcoming' as const,
      badges: ['New'],
    },
    {
      id: 2,
      image: '/Computer.svg',
      title: '2019 Tesla Model 3',
      description: 'Electric sedan, excellent condition.',
      category: 'Cars',
      currentBid: '$25,000',
      startingPrice: '$20,000',
      bidCount: 21,
      timeRemaining: 'Closed',
      status: 'closed' as const,
      badges: ['Featured'],
    },
    {
      id: 4,
      image: '/CellPhone.svg',
      title: '2019 Tesla Model 3',
      description: 'Electric sedan, excellent condition.',
      category: 'Cars',
      currentBid: '$25,000',
      startingPrice: '$20,000',
      bidCount: 21,
      timeRemaining: 'Closed',
      status: 'closed' as const,
      badges: ['Featured'],
    },
  ]

  const filteredBids = filter === 'all' ? bids : bids.filter((b) => b.status === filter)

  return (
    <div className="container mx-auto py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-2xl md:3xl  font-bold text-shadow-cyan-400">Live Auctions</h1>

        <div className="flex items-center gap-2">
          <Input type="text" placeholder="Search items..." className="w-[200px]" />
          <Select onValueChange={(value) => setFilter(value)}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="live">Live</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Sort</Button>
        </div>
      </div>

      {/* Grid of BidCards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3 place-items-center">
        {filteredBids.map((bid, i) => (
          <Link to={`/bids/${bid.id}`}>
            <BidCard key={i} {...bid} />
          </Link>
        ))}
      </div>
    </div>
  )
}
