"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Plus, Trash2, Navigation, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewRidePage() {
  const [checkpoints, setCheckpoints] = useState([
    { id: 1, address: "" },
    { id: 2, address: "" },
  ])
  const [suggestedPrice, setSuggestedPrice] = useState(25)
  const [userPrice, setUserPrice] = useState(25)
  const [shareWithFriends, setShareWithFriends] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState("")

  const addCheckpoint = () => {
    if (checkpoints.length < 5) {
      const newId = Math.max(...checkpoints.map((cp) => cp.id)) + 1
      setCheckpoints([...checkpoints, { id: newId, address: "" }])
    }
  }

  const removeCheckpoint = (id: number) => {
    if (checkpoints.length > 2) {
      setCheckpoints(checkpoints.filter((cp) => cp.id !== id))
    }
  }

  const updateCheckpoint = (id: number, address: string) => {
    setCheckpoints(checkpoints.map((cp) => (cp.id === id ? { ...cp, address } : cp)))
  }

  // This would normally calculate based on the route
  const calculatePrice = () => {
    // Simple simulation - in a real app this would use distance, time, etc.
    const basePrice = 15
    const perCheckpointPrice = 5
    const checkpointCount = checkpoints.length - 2 // Subtract start and end

    return basePrice + checkpointCount * perCheckpointPrice
  }

  return (
    <div className="container max-w-3xl py-8">
      <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to home</span>
      </Link>

      <h1 className="text-3xl font-bold mb-8">Plan Your Ride</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Set Your Route
          </CardTitle>
          <CardDescription>Add your starting point, destination, and any checkpoints along the way</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {checkpoints.map((checkpoint, index) => (
            <div key={checkpoint.id} className="flex items-center gap-2">
              <div className="flex-shrink-0 w-24 text-sm font-medium">
                {index === 0 ? "Start" : index === checkpoints.length - 1 ? "Destination" : `Checkpoint ${index}`}
              </div>
              <Input
                placeholder={`Enter ${index === 0 ? "starting" : index === checkpoints.length - 1 ? "destination" : "checkpoint"} address`}
                value={checkpoint.address}
                onChange={(e) => updateCheckpoint(checkpoint.id, e.target.value)}
                className="flex-1"
              />
              {checkpoints.length > 2 && index !== 0 && index !== checkpoints.length - 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeCheckpoint(checkpoint.id)}
                  className="flex-shrink-0"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}

          {checkpoints.length < 5 && (
            <Button variant="outline" size="sm" onClick={addCheckpoint} className="mt-2">
              <Plus className="h-4 w-4 mr-2" />
              Add Checkpoint
            </Button>
          )}
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="h-5 w-5 text-primary" />
            Set Your Price
          </CardTitle>
          <CardDescription>Our suggested price is ${suggestedPrice}, but you can adjust within limits</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Your price: ${userPrice}</Label>
              <span className="text-sm text-muted-foreground">
                Min: ${Math.floor(suggestedPrice * 0.8)} | Max: ${Math.ceil(suggestedPrice * 1.2)}
              </span>
            </div>
            <Slider
              value={[userPrice]}
              min={Math.floor(suggestedPrice * 0.8)}
              max={Math.ceil(suggestedPrice * 1.2)}
              step={1}
              onValueChange={(value) => setUserPrice(value[0])}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Safety Features
          </CardTitle>
          <CardDescription>Share your ride with friends for added safety</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-2">
            <Switch id="share-ride" checked={shareWithFriends} onCheckedChange={setShareWithFriends} />
            <Label htmlFor="share-ride">Share this ride with friends</Label>
          </div>

          {shareWithFriends && (
            <div className="space-y-2">
              <Label htmlFor="select-friend">Select trusted contact</Label>
              <Select value={selectedFriend} onValueChange={setSelectedFriend}>
                <SelectTrigger id="select-friend">
                  <SelectValue placeholder="Select a friend" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="friend1">Sarah Johnson</SelectItem>
                  <SelectItem value="friend2">Michael Chen</SelectItem>
                  <SelectItem value="friend3">Jessica Williams</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button variant="outline">Save for Later</Button>
        <Button>Request Ride</Button>
      </div>
    </div>
  )
}

