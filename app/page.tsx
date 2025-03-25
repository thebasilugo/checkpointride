import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Navigation, Shield, Users, Clock, DollarSign } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Navigation className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">CheckpointRide</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline">
              How It Works
            </Link>
            <Link href="#safety" className="text-sm font-medium hover:underline">
              Safety
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Journey, Your Checkpoints
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Plan your ride with multiple stops, set your price, and travel with confidence knowing your friends
                    can follow your journey.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/rider/new-ride">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Book a Ride
                    </Button>
                  </Link>
                  <Link href="/driver/available-rides">
                    <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                      Drive & Earn
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative w-full max-w-[500px] aspect-square rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-muted border rounded-xl">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full"></div>
                  <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-primary rounded-full"></div>
                  <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-primary rounded-full"></div>
                  <div className="absolute top-3/4 left-2/3 w-3 h-3 bg-primary rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="font-medium">Multiple checkpoints, one journey</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Features</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Everything you need for a safe and customized ride experience
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <MapPin className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Checkpoint Routing</h3>
                <p className="text-center text-muted-foreground">
                  Set multiple stops along your journey for maximum convenience
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <DollarSign className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Dynamic Pricing</h3>
                <p className="text-center text-muted-foreground">
                  Set your desired price with fair minimum and maximum constraints
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Shield className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Safety First</h3>
                <p className="text-center text-muted-foreground">
                  Share your ride with trusted contacts for peace of mind
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Users className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Friend Features</h3>
                <p className="text-center text-muted-foreground">
                  Add friends, share rides, and enable them to join your journey
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Clock className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Real-time Adjustments</h3>
                <p className="text-center text-muted-foreground">Prices update automatically based on route changes</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Navigation className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Ride Tracking</h3>
                <p className="text-center text-muted-foreground">
                  Friends can watch your progress in real-time for added security
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Simple steps to get you where you need to go
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Plan Your Route</h3>
                <p className="text-center text-muted-foreground">
                  Set your starting point, destination, and any checkpoints along the way
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Set Your Price</h3>
                <p className="text-center text-muted-foreground">
                  Choose a fair price within the suggested range based on your route
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Ride Safely</h3>
                <p className="text-center text-muted-foreground">
                  Share your ride with friends or trusted contacts for added security
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="safety" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Safety is Our Priority</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    With CheckpointRide's unique safety features, you're never truly riding alone
                  </p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Trusted Contacts</h3>
                      <p className="text-muted-foreground">Select friends to follow your journey in real-time</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Ghost Recipients</h3>
                      <p className="text-muted-foreground">
                        Automatic alerts sent to your chosen contacts if you don't confirm your safe arrival
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Friend Permissions</h3>
                      <p className="text-muted-foreground">
                        Control who can see your rides with customizable privacy settings
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mx-auto lg:mx-0 relative w-full max-w-[500px] aspect-square rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-muted border rounded-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-[80%]">
                      <div className="flex flex-col items-center gap-4 text-center">
                        <Shield className="h-12 w-12 text-primary" />
                        <h3 className="text-xl font-bold">Peace of Mind with Every Ride</h3>
                        <p className="text-muted-foreground">
                          Our safety features ensure someone is always looking out for you
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Navigation className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold">CheckpointRide</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 CheckpointRide. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

