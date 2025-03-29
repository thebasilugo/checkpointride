"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock data for available rides
const availableRides = [
  {
    id: "ride1",
    startLocation: "123 Main St, Anytown",
    endLocation: "456 Oak Ave, Othertown",
    checkpoints: ["789 Pine Rd, Anytown"],
    distance: "8.5 miles",
    estimatedTime: "25 mins",
    price: 28,
    createdAt: "5 mins ago",
  },
  {
    id: "ride2",
    startLocation: "987 Elm St, Anytown",
    endLocation: "654 Maple Dr, Othertown",
    checkpoints: ["321 Cedar Ln, Anytown", "555 Birch Blvd, Midtown"],
    distance: "12.3 miles",
    estimatedTime: "35 mins",
    price: 42,
    createdAt: "12 mins ago",
  },
  {
    id: "ride3",
    startLocation: "111 First Ave, Downtown",
    endLocation: "222 Second St, Uptown",
    checkpoints: [],
    distance: "5.7 miles",
    estimatedTime: "18 mins",
    price: 22,
    createdAt: "20 mins ago",
  },
]

export default function AvailableRidesPage() {
  const [selectedRide, setSelectedRide] = useState<string | null>(null)

  return (
    <div className="container max-w-3xl py-8">
      <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to home</span>
      </Link>

      <h1 className="text-3xl font-bold mb-8">Available Rides</h1>

      <Tabs defaultValue="nearby">
        <TabsList className="mb-6">
          <TabsTrigger value="nearby">Nearby</TabsTrigger>
          <TabsTrigger value="highest-paying">Highest Paying</TabsTrigger>
          <TabsTrigger value="quickest">Quickest</TabsTrigger>
        </TabsList>

        <TabsContent value="nearby" className="space-y-4">
          {availableRides.map((ride) => (
            <Card key={ride.id} className={selectedRide === ride.id ? "border-primary" : ""}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">
                    {ride.startLocation.split(",")[0]} to {ride.endLocation.split(",")[0]}
                  </CardTitle>
                  <Badge variant="outline" className="ml-2">
                    <Clock className="h-3 w-3 mr-1" />
                    {ride.createdAt}
                  </Badge>
                </div>
                <CardDescription>
                  {ride.checkpoints.length > 0
                    ? `${ride.checkpoints.length} checkpoint${ride.checkpoints.length > 1 ? "s" : ""}`
                    : "Direct route"}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex flex-col">
                    <span className="text-muted-foreground">Distance</span>
                    <span className="font-medium">{ride.distance}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground">Est. Time</span>
                    <span className="font-medium">{ride.estimatedTime}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground">Price</span>
                    <span className="font-medium text-primary">${ride.price}</span>
                  </div>
                </div>

                {selectedRide === ride.id && (
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-medium mb-2">Route Details:</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">Start</div>
                          <div className="text-sm text-muted-foreground">{ride.startLocation}</div>
                        </div>
                      </div>

                      {ride.checkpoints.map((checkpoint, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <div className="font-medium">Checkpoint {index + 1}</div>
                            <div className="text-sm text-muted-foreground">{checkpoint}</div>
                          </div>
                        </div>
                      ))}

                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">Destination</div>
                          <div className="text-sm text-muted-foreground">{ride.endLocation}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedRide(selectedRide === ride.id ? null : ride.id)}
                >
                  {selectedRide === ride.id ? "Hide Details" : "View Details"}
                </Button>
                <Button size="sm">Accept Ride</Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="highest-paying">
          {[...availableRides]
            .sort((a, b) => b.price - a.price)
            .map((ride) => (
              <Card key={ride.id} className="mb-4">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">
                      {ride.startLocation.split(",")[0]} to {ride.endLocation.split(",")[0]}
                    </CardTitle>
                    <Badge variant="outline" className="ml-2">
                      <Clock className="h-3 w-3 mr-1" />
                      {ride.createdAt}
                    </Badge>
                  </div>
                  <CardDescription>
                    {ride.checkpoints.length > 0
                      ? `${ride.checkpoints.length} checkpoint${ride.checkpoints.length > 1 ? "s" : ""}`
                      : "Direct route"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Distance</span>
                      <span className="font-medium">{ride.distance}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Est. Time</span>
                      <span className="font-medium">{ride.estimatedTime}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Price</span>
                      <span className="font-medium text-primary">${ride.price}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedRide(selectedRide === ride.id ? null : ride.id)}
                  >
                    {selectedRide === ride.id ? "Hide Details" : "View Details"}
                  </Button>
                  <Button size="sm">Accept Ride</Button>
                </CardFooter>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="quickest">
          {[...availableRides]
            .sort((a, b) => {
              const aTime = Number.parseInt(a.estimatedTime.split(" ")[0])
              const bTime = Number.parseInt(b.estimatedTime.split(" ")[0])
              return aTime - bTime
            })
            .map((ride) => (
              <Card key={ride.id} className="mb-4">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">
                      {ride.startLocation.split(",")[0]} to {ride.endLocation.split(",")[0]}
                    </CardTitle>
                    <Badge variant="outline" className="ml-2">
                      <Clock className="h-3 w-3 mr-1" />
                      {ride.createdAt}
                    </Badge>
                  </div>
                  <CardDescription>
                    {ride.checkpoints.length > 0
                      ? `${ride.checkpoints.length} checkpoint${ride.checkpoints.length > 1 ? "s" : ""}`
                      : "Direct route"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Distance</span>
                      <span className="font-medium">{ride.distance}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Est. Time</span>
                      <span className="font-medium">{ride.estimatedTime}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Price</span>
                      <span className="font-medium text-primary">${ride.price}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedRide(selectedRide === ride.id ? null : ride.id)}
                  >
                    {selectedRide === ride.id ? "Hide Details" : "View Details"}
                  </Button>
                  <Button size="sm">Accept Ride</Button>
                </CardFooter>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

