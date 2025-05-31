'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const slides = [
    {
      title: "Welcome to the",
      subtitle: "PUPCE Alumni Network",
      description: "Connect with fellow graduates, access career opportunities, and stay engaged with the Polytechnic University of the Philippines College of Engineering community.",
      primaryButton: "Join Alumni Network",
      secondaryButton: "Explore Directory",
      background: "from-red-50 to-[#800000]/10"
    },
    {
      title: "Build Your",
      subtitle: "Professional Network",
      description: "Access our comprehensive alumni directory and connect with thousands of engineering graduates across various industries and career levels.",
      primaryButton: "Browse Directory",
      secondaryButton: "Learn More",
      background: "from-[#800000]/5 to-red-100/80"
    },
    {
      title: "Advance Your",
      subtitle: "Engineering Career",
      description: "Discover exclusive job opportunities, mentorship programs, and career development resources tailored for PUPCE engineering alumni.",
      primaryButton: "Find Opportunities",
      secondaryButton: "View Jobs",
      background: "from-red-100/60 to-[#800000]/15"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-[#800000]/10">
      {/* Navigation Header */}
      <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#800000] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">★</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">PUPCE ALUMNI</h1>
                <p className="text-sm text-muted-foreground">College of Engineering</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-[#800000] border-b-2 border-[#800000] pb-1 font-medium">Home</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Alumni Directory</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Events</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">News</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <Button className="bg-[#800000] text-white px-4 py-2 rounded-md hover:bg-[#600000] transition-colors">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <section className="relative overflow-hidden">
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className={`bg-gradient-to-br ${slide.background} transition-all duration-700 ease-in-out`}>
                  <div className="relative py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                      <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 transition-all duration-500">
                          {slide.title}
                          <span className="block text-[#800000]">{slide.subtitle}</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto transition-all duration-500">
                          {slide.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button size="lg" className="bg-gradient-to-r from-[#800000] to-[#600000] text-white px-8 py-4 font-semibold hover:from-[#600000] hover:to-[#400000] transition-all duration-300 shadow-lg">
                            {slide.primaryButton}
                          </Button>
                          <Button variant="outline" size="lg" className="px-8 py-4 font-semibold border-2 border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white transition-colors">
                            {slide.secondaryButton}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 border-none" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 border-none" />
        </Carousel>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-[#800000]/5 to-[#800000]/10 hover:shadow-lg transition-all duration-300 hover:shadow-[#800000]/20 border border-[#800000]/10">
              <CardHeader>
                <div className="w-12 h-12 bg-[#800000] rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Alumni Directory</CardTitle>
                <CardDescription>Connect with fellow graduates and build your professional network.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="text-[#800000] font-medium hover:text-[#600000] p-0">
                  Browse Directory →
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#600000]/5 to-[#600000]/10 hover:shadow-lg transition-all duration-300 hover:shadow-[#600000]/20 border border-[#600000]/10">
              <CardHeader>
                <div className="w-12 h-12 bg-[#600000] rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Upcoming Events</CardTitle>
                <CardDescription>Stay updated with career fairs, networking events, and reunions.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="text-[#600000] font-medium hover:text-[#800000] p-0">
                  View Events →
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#400000]/5 to-[#400000]/10 hover:shadow-lg transition-all duration-300 hover:shadow-[#400000]/20 border border-[#400000]/10">
              <CardHeader>
                <div className="w-12 h-12 bg-[#400000] rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Career Opportunities</CardTitle>
                <CardDescription>Explore job openings and career development resources.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="text-[#400000] font-medium hover:text-[#800000] p-0">
                  Find Jobs →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Latest Updates</h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-[#800000]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">March 08, 2025</span>
                  <Badge variant="secondary" className="bg-[#800000]/10 text-[#800000]">Event</Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">2025 Career Fest (Part 1)</h3>
                <p className="text-muted-foreground">Join us for our annual career festival featuring top employers and networking opportunities.</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-[#600000]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">November 11, 2024</span>
                  <Badge variant="secondary" className="bg-[#600000]/10 text-[#600000]">Workshop</Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Labor Laws and Standards Orientation</h3>
                <p className="text-muted-foreground">Comprehensive online orientation covering current labor laws and workplace standards.</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-[#400000]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">June 13, 2024</span>
                  <Badge variant="secondary" className="bg-[#400000]/10 text-[#400000]">Career</Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Career Development Talk 2024</h3>
                <p className="text-muted-foreground">Professional development session focusing on industry trends and career advancement strategies.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#800000] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#800000] font-bold text-lg">★</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">PUPCE ALUMNI</h3>
                  <p className="text-red-100 text-sm">College of Engineering</p>
                </div>
              </div>
              <p className="text-red-100">
                Connecting engineering graduates and fostering lifelong relationships within the PUP community.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-red-100">
                <li><a href="#" className="hover:text-white transition-colors">Alumni Directory</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-red-100">
                <li><a href="#" className="hover:text-white transition-colors">Job Board</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentorship Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Alumni Benefits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-red-100 mb-2">Polytechnic University of the Philippines</p>
              <p className="text-red-100 mb-2">College of Engineering</p>
              <p className="text-red-100">alumni@pup.edu.ph</p>
            </div>
          </div>
          <div className="border-t border-red-300 mt-8 pt-8 text-center text-red-100">
            <p>&copy; 2024 PUP College of Engineering Alumni Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
