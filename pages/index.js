import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Create Stunning Thumbnails, Ads & Social Posts with AI</h1>
        <p className="text-xl mb-6">No more endless editing. Generate eye-catching designs, captions & schedule posts — all in one place.</p>
        <Button size="lg" className="bg-white text-purple-600 font-bold">Start Free →</Button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">⚡ AI Thumbnail & Ad Creator</h3>
            <p>Generate thumbnails, banners & ads in seconds. Templates for YouTube, TikTok, Instagram, Facebook.</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">🤖 AI Social Media Manager</h3>
            <p>Auto-generate captions, hashtags & replies. Schedule posts across all major platforms.</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">📈 Smart Growth Tools</h3>
            <p>Boost engagement with AI-suggested comments and keep your brand’s style consistent.</p>
          </CardContent>
        </Card>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="font-bold text-xl mb-2">1. Input</h3>
            <p>Enter text or upload an image (e.g., “Make me a YouTube thumbnail about gaming”).</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">2. AI Generates</h3>
            <p>Our AI creates multiple designs/captions for you to choose from.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">3. Publish</h3>
            <p>Download instantly or schedule across platforms with one click.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
              <p className="mb-4">Max quality: <b>720p</b></p>
              <p className="mb-6">Perfect for testing the platform.</p>
              <Button className="w-full">Start Free</Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">HD Quality</h3>
              <p className="mb-4">₹50 per ad/thumbnail in HD</p>
              <p className="mb-6">Great for creators who need premium quality occasionally.</p>
              <Button className="w-full">Upgrade to HD</Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">4K Bundle</h3>
              <p className="mb-4">₹100 for 4 videos in 4K</p>
              <p className="mb-6">Best value for serious creators.</p>
              <Button className="w-full">Go 4K</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Grow Your Audience Faster with AI?</h2>
        <p className="mb-6 text-lg">Join creators already saving hours and boosting engagement.</p>
        <Button size="lg" className="bg-white text-purple-600 font-bold">Get Started Free →</Button>
      </section>
    </div>
  )
}
