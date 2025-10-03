import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Globe, 
  Users, 
  Mail, 
  MessageCircle, 
  Target,
  Zap,
  Recycle,
  Heart
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      bio: "Environmental engineer with 15+ years in sustainable technology",
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      bio: "AI specialist focused on eco-friendly technology solutions",
      avatar: "👨‍💻"
    },
    {
      name: "Emily Watson",
      role: "Head of Sustainability",
      bio: "Circular economy expert and former UN sustainability advisor",
      avatar: "👩‍🔬"
    },
    {
      name: "David Kim",
      role: "VP of Operations",
      bio: "Supply chain optimization for sustainable manufacturing",
      avatar: "👨‍⚕️"
    }
  ];

  const stats = [
    { value: "2.3M", label: "Devices Repaired", icon: Recycle },
    { value: "45K", label: "Tons CO₂ Saved", icon: Leaf },
    { value: "180K", label: "Active Users", icon: Users },
    { value: "98%", label: "User Satisfaction", icon: Heart }
  ];

  const impact = [
    {
      title: "Reduce E-Waste",
      description: "Every repaired device prevents harmful electronic waste from entering landfills",
      icon: Recycle,
      stat: "2.3M devices saved"
    },
    {
      title: "Lower Carbon Footprint",
      description: "Extending device lifecycles significantly reduces manufacturing emissions",
      icon: Leaf,
      stat: "45K tons CO₂ prevented"
    },
    {
      title: "Promote Circular Economy",
      description: "Supporting repair, reuse, and sustainable consumption patterns",
      icon: Globe,
      stat: "180K participants"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="text-primary">GreenCart+</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to revolutionize how the world thinks about electronics. 
              Through AI-powered repair guidance and sustainable shopping, we're building 
              a future where technology and environmental responsibility go hand in hand.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardContent className="p-6 space-y-2">
                  <stat.icon className="h-8 w-8 mx-auto text-primary" />
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* The Problem */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl">
                <Target className="h-6 w-6 text-destructive" />
                <span>The E-Waste Crisis</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-destructive">54M</div>
                  <div className="text-sm text-muted-foreground">Tons of e-waste generated annually</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-destructive">20%</div>
                  <div className="text-sm text-muted-foreground">Properly recycled globally</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-destructive">$57B</div>
                  <div className="text-sm text-muted-foreground">Worth of materials wasted yearly</div>
                </div>
              </div>
              <p className="text-center text-muted-foreground">
                Electronic waste is the world's fastest-growing waste stream. Most devices are 
                discarded when simple repairs could extend their lifespan by years.
              </p>
            </CardContent>
          </Card>

          {/* Our Solution */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-foreground">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impact.map((item, index) => (
                <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <item.icon className="h-8 w-8 text-primary" />
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {item.stat}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Team */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-foreground">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="text-center shadow-card">
                  <CardHeader>
                    <div className="text-6xl mb-4">{member.avatar}</div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="font-semibold text-primary">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <Zap className="h-6 w-6 text-primary" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize device repair knowledge and promote sustainable consumption 
                  through AI-powered technology. We believe every broken device is an opportunity 
                  to learn, save money, and protect our planet.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <Globe className="h-6 w-6 text-secondary" />
                  <span>Our Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A world where electronic devices are designed for longevity, repaired instead 
                  of discarded, and where sustainable technology choices are accessible to everyone, 
                  creating a truly circular digital economy.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Get In Touch</CardTitle>
              <CardDescription className="text-center">
                Have questions about our platform or want to join our sustainability mission?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Button variant="outline" size="lg" className="h-16">
                  <Mail className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">Email Us</div>
                    <div className="text-sm text-muted-foreground">hello@greencart.plus</div>
                  </div>
                </Button>
                <Button variant="outline" size="lg" className="h-16">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">Join Community</div>
                    <div className="text-sm text-muted-foreground">Discord & Forum</div>
                  </div>
                </Button>
              </div>
              
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  Ready to make a difference? Start your sustainable tech journey today.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;