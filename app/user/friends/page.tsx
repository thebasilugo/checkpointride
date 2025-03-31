"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, UserPlus, Users, ArrowLeft, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

// Mock data for friends
const friendsList = [
  {
    id: "friend1",
    name: "Sarah Johnson",
    username: "@sarahj",
    avatar: "/placeholder.svg?height=40&width=40",
    canSeeRides: true,
  },
  {
    id: "friend2",
    name: "Michael Chen",
    username: "@mikechen",
    avatar: "/placeholder.svg?height=40&width=40",
    canSeeRides: false,
  },
  {
    id: "friend3",
    name: "Jessica Williams",
    username: "@jesswill",
    avatar: "/placeholder.svg?height=40&width=40",
    canSeeRides: true,
  },
  {
    id: "friend4",
    name: "David Rodriguez",
    username: "@drodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    canSeeRides: false,
  },
]

// Mock data for friend requests
const friendRequests = [
  {
    id: "request1",
    name: "Alex Thompson",
    username: "@alexthompson",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "request2",
    name: "Olivia Martinez",
    username: "@oliviam",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function FriendsPage() {
  const [friends, setFriends] = useState(friendsList)
  const [requests, setRequests] = useState(friendRequests)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleRideVisibility = (friendId: string) => {
    setFriends(
      friends.map((friend) => (friend.id === friendId ? { ...friend, canSeeRides: !friend.canSeeRides } : friend)),
    )
  }

  const acceptRequest = (requestId: string) => {
    const request = requests.find((req) => req.id === requestId)
    if (request) {
      setFriends([
        ...friends,
        {
          ...request,
          canSeeRides: false,
        },
      ])
      setRequests(requests.filter((req) => req.id !== requestId))
    }
  }

  const rejectRequest = (requestId: string) => {
    setRequests(requests.filter((req) => req.id !== requestId))
  }

  const filteredFriends = friends.filter(
    (friend) =>
      friend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      friend.username.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container max-w-3xl py-8">
      <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to home</span>
      </Link>

      <h1 className="text-3xl font-bold mb-8">Friends & Safety</h1>

      <div className="flex items-center justify-between mb-6">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search friends..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Add Friend
        </Button>
      </div>

      <Tabs defaultValue="friends">
        <TabsList className="mb-6">
          <TabsTrigger value="friends" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Friends ({friends.length})
          </TabsTrigger>
          <TabsTrigger value="requests" className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Requests ({requests.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="friends" className="space-y-4">
          {filteredFriends.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {searchQuery ? "No friends match your search" : "You haven't added any friends yet"}
            </div>
          ) : (
            filteredFriends.map((friend) => (
              <Card key={friend.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={friend.avatar} alt={friend.name} />
                        <AvatarFallback>
                          {friend.name.charAt(0)}
                          {friend.name.split(" ")[1]?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{friend.name}</h3>
                        <p className="text-sm text-muted-foreground">{friend.username}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center space-x-2">
                        <Switch
                          id={`ride-visibility-${friend.id}`}
                          checked={friend.canSeeRides}
                          onCheckedChange={() => toggleRideVisibility(friend.id)}
                        />
                        <Label htmlFor={`ride-visibility-${friend.id}`} className="text-sm flex items-center gap-1">
                          {friend.canSeeRides ? (
                            <>
                              <Eye className="h-3 w-3" />
                              <span>Can see rides</span>
                            </>
                          ) : (
                            <>
                              <EyeOff className="h-3 w-3" />
                              <span>Can't see rides</span>
                            </>
                          )}
                        </Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="requests">
          {requests.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">You have no pending friend requests</div>
          ) : (
            <div className="space-y-4">
              {requests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={request.avatar} alt={request.name} />
                          <AvatarFallback>
                            {request.name.charAt(0)}
                            {request.name.split(" ")[1]?.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{request.name}</h3>
                          <p className="text-sm text-muted-foreground">{request.username}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => rejectRequest(request.id)}>
                          Decline
                        </Button>
                        <Button size="sm" onClick={() => acceptRequest(request.id)}>
                          Accept
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

