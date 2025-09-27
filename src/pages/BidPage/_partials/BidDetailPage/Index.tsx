import { useParams } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator.js'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.js'
import { Clock, Heart, Share2 } from 'lucide-react'
import { cn } from '@/lib/utils.js'

export default function BidDetailPage() {
  const { id } = useParams()

  // 🔹 For demo: Mock data (replace with API call)
  const bid = {
    id,
    image: '/images/macbook.jpg',
    title: 'MacBook Pro 16” M1 Pro',
    description:
      'This is the 2021 MacBook Pro 16-inch with Apple’s M1 Pro chip, 16GB RAM, and 1TB SSD. Perfect for developers, designers, and creators needing top performance.',
    category: 'Electronics',
    currentBid: '$1,200',
    startingPrice: '$1,000',
    bidCount: 12,
    timeRemaining: '2h 15m',
    status: 'live' as const,
    seller: 'TechStore LTD',
    rating: 4.8,
    badges: ['Hot', 'No Reserve'],
  }

  const bidHistory = [
    { user: 'John Doe', amount: '$1,200', time: '2 min ago' },
    { user: 'Jane Smith', amount: '$1,150', time: '10 min ago' },
    { user: 'Mark Johnson', amount: '$1,100', time: '20 min ago' },
    { user: 'Emily Davis', amount: '$1,050', time: '30 min ago' },
  ]

  return (
    <div className="container mx-auto py-8">
      <Card className="overflow-hidden rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Image */}
          <div className="relative">
            <img src={bid.image} alt={bid.title} className="h-full w-full object-cover" />
            <div className="absolute top-2 left-2 flex gap-1">
              {bid.badges.map((badge, i) => (
                <Badge key={i} variant="secondary" className="capitalize">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <CardContent className="p-6 space-y-4">
            <h1 className="text-2xl font-bold">{bid.title}</h1>
            <p className="text-muted-foreground">{bid.description}</p>

            <Separator />

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Category:</span> {bid.category}
              </div>
              <div>
                <span className="font-medium">Seller:</span> {bid.seller}
              </div>
              <div>
                <span className="font-medium">Current Bid:</span> {bid.currentBid}
              </div>
              <div>
                <span className="font-medium">Starting Price:</span> {bid.startingPrice}
              </div>
              <div>
                <span className="font-medium">Total Bids:</span> {bid.bidCount}
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                {bid.timeRemaining}
              </div>
            </div>

            <Separator />

            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'px-3 py-1 rounded-full text-xs font-semibold uppercase',
                  bid.status === 'live' && 'bg-green-100 text-green-700',
                  //   bid.status === "upcoming" && "bg-yellow-100 text-yellow-700",
                  //   bid.status === "closed" && "bg-red-100 text-red-700"
                )}
              >
                {bid.status}
              </span>
            </div>

            <div className="flex gap-3 pt-2">
              <Button className="flex-1" disabled={bid.status !== 'live'}>
                Place Bid
              </Button>
              <Button variant="ghost" size="icon">
                <Heart size={18} />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 size={18} />
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>

      {/* Bidding History */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Bidding History</h2>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bidder</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bidHistory.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.user}</TableCell>
                  <TableCell className="font-medium">{entry.amount}</TableCell>
                  <TableCell>{entry.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  )
}
