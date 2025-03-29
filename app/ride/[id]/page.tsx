"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, Navigation, ArrowLeft, Shield, Share2, User, Car } from "lucide-react"
import Link from "next/link"

export default function RideDetailPage({ params }: { params: { id: string } }) {
  const [showSafetyDialog, setShowSafetyDialog] = useState(false)
  const [selectedContact, setSelectedContact] = useState("")

  // Mock ride data - in a real app, this would be fetched based on the ID
  const ride = {
    id: params.id,
    status: "in-progress", // in-progress, completed, cancelled
    startLocation: "123 Main St, Anytown",
    endLocation: "456 Oak Ave, Othertown",
    checkpoints: ["789 Pine Rd, Anytown"],
    distance: "8.5 miles",
    estimatedTime: "25 mins",
    price: 28,
    startTime: "10:15 AM",
    estimatedArrival: "10:40 AM",
    driver: {
      name: "Robert Smith",
      rating: 4.8,
      avatar: "/placeholder.svg?height=40&width=40",
      car: "Toyota Camry",
      licensePlate: "ABC-1234",
    },
  }

  return (
    <div className="container max-w-3xl py-8">
      <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to home</span>
      </Link>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Ride Details</h1>
        <Badge
          variant={ride.status === "in-progress" ? "default" : ride.status === "completed" ? "success" : "destructive"}
          className="text-sm py-1"
        >
          {ride.status === "in-progress" ? "In Progress" : ride.status === "completed" ? "Completed" : "Cancelled"}
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Navigation className="h-5 w-5 text-primary" />
                Route Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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

              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Distance</span>
                  <span className="font-medium">{ride.distance}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Est. Time</span>
                  <span className="font-medium">{ride.estimatedTime}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Price</span>
                  <span className="font-medium text-primary">${ride.price}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Time Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Start Time</span>
                  <span className="font-medium">{ride.startTime}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Est. Arrival</span>
                  <span className="font-medium">{ride.estimatedArrival}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Safety Features
              </CardTitle>
              <CardDescription>Share your ride with trusted contacts for added safety</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Share2 className="h-4 w-4 text-muted-foreground" />
                  <span>Share this ride</span>
                </div>
                <Button variant="outline" size="sm" onClick={() => setShowSafetyDialog(true)}>
                  Add Safety Contact
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Driver Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={ride.driver.avatar} alt={ride.driver.name} />
                  <AvatarFallback>{ride.driver.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">{ride.driver.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="flex items-center">★ {ride.driver.rating}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t">
                <div className="flex items-center gap-2">
                  <Car className="h-4 w-4 text-muted-foreground" />
                  <span>{ride.driver.car}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-muted px-2 py-1 rounded-md font-medium">{ride.driver.licensePlate}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Contact Driver
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ride Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Shield className="h-4 w-4 mr-2" />
                Emergency Assistance
              </Button>
              {ride.status === "in-progress" && (
                <Button variant="destructive" className="w-full justify-start">
                  Cancel Ride
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={showSafetyDialog} onOpenChange={setShowSafetyDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Safety Contact</DialogTitle>
            <DialogDescription>Select a trusted contact who will be notified about your ride</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Select Contact</label>
              <Select value={selectedContact} onValueChange={setSelectedContact}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a contact" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="contact1">Sarah Johnson</SelectItem>
                  <SelectItem value="contact2">Michael Chen</SelectItem>
                  <SelectItem value="contact3">Jessica Williams</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Contact Type</label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2 rounded-md border p-2">
                  <input type="radio" id="regular" name="contact-type" className="h-4 w-4" defaultChecked />
                  <label htmlFor="regular" className="text-sm">
                    Regular Contact
                  </label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-2">
                  <input type="radio" id="ghost" name="contact-type" className="h-4 w-4" />
                  <label htmlFor="ghost" className="text-sm">
                    Ghost Recipient
                  </label>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Ghost recipients will only be notified if you don't confirm your safe arrival
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSafetyDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowSafetyDialog(false)}>Add Contact</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

