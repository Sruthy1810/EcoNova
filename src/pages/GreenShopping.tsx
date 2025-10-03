import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Leaf, ShoppingCart, Eye, GitCompare } from "lucide-react";

const GreenShopping = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const products = [
    {
      id: 1,
      name: "Refurbished iPhone 14 Pro",
      image: "📱",
      price: "$649",
      originalPrice: "$999",
      ecoScore: 92,
      condition: "Excellent",
      warranty: "12 months",
      features: ["Face ID", "128GB", "Battery 95%"],
      sustainabilityNotes: "Professionally refurbished, reduces e-waste by extending device life"
    },
    {
      id: 2,
      name: "Recycled Material Laptop Stand",
      image: "💻",
      price: "$45",
      originalPrice: "$65",
      ecoScore: 88,
      condition: "New",
      warranty: "24 months",
      features: ["Bamboo base", "Adjustable height", "Cable management"],
      sustainabilityNotes: "Made from 100% recycled aluminum and sustainable bamboo"
    },
    {
      id: 3,
      name: "Solar Power Bank 20000mAh",
      image: "🔋",
      price: "$39",
      originalPrice: "$59",
      ecoScore: 85,
      condition: "New",
      warranty: "18 months",
      features: ["Solar charging", "Fast charge", "Waterproof"],
      sustainabilityNotes: "Reduces dependence on grid power, sustainable energy solution"
    },
    {
      id: 4,
      name: "Refurbished MacBook Air M1",
      image: "💻",
      price: "$849",
      originalPrice: "$1199",
      ecoScore: 90,
      condition: "Very Good",
      warranty: "12 months",
      features: ["M1 Chip", "8GB RAM", "256GB SSD"],
      sustainabilityNotes: "Professionally restored, certified performance, reduces manufacturing demand"
    }
  ];

  const getEcoScoreColor = (score: number) => {
    if (score >= 90) return "bg-primary text-primary-foreground";
    if (score >= 80) return "bg-accent text-accent-foreground";
    return "bg-destructive text-destructive-foreground";
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Green Shopping Assistant
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover sustainable electronics with environmental impact scores. 
              Shop refurbished, eco-friendly, and responsibly manufactured products.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for sustainable electronics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-base"
              />
            </div>
          </div>

          {/* Eco Score Legend */}
          <div className="bg-card rounded-lg p-4 shadow-card">
            <h3 className="font-semibold mb-3 flex items-center">
              <Leaf className="h-5 w-5 text-primary mr-2" />
              Eco-Score Guide
            </h3>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Badge className="bg-primary text-primary-foreground">90+</Badge>
                <span>Excellent sustainability</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-accent text-accent-foreground">80-89</Badge>
                <span>Good environmental impact</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-destructive text-destructive-foreground">&lt;80</Badge>
                <span>Consider alternatives</span>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-4xl">{product.image}</div>
                    <Badge className={getEcoScoreColor(product.ecoScore)}>
                      {product.ecoScore}
                    </Badge>
                  </div>
                  <CardTitle className="text-base font-semibold">{product.name}</CardTitle>
                  <CardDescription className="text-sm">
                    Condition: {product.condition} • {product.warranty} warranty
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Sustainability Notes */}
                  <div className="bg-primary/5 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <Leaf className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground">{product.sustainabilityNotes}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <GitCompare className="h-3 w-3" />
                    </Button>
                    <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                      <ShoppingCart className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found for "{searchQuery}"</p>
              <Button 
                variant="outline" 
                onClick={() => setSearchQuery("")}
                className="mt-4"
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GreenShopping;