import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Camera, Wrench, CheckCircle, AlertCircle, MapPin } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const RepairAdvisor = () => {
  const [deviceImage, setDeviceImage] = useState<File | null>(null);
  const [issueDescription, setIssueDescription] = useState("");
  const [severity, setSeverity] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setDeviceImage(file);
    }
  };

  const handleAnalyze = async () => {
    if (!deviceImage || !issueDescription.trim() || !severity) return;
    
    setIsAnalyzing(true);
    // Simulate AI analysis based on severity
    setTimeout(() => {
      const isMajorDamage = severity === "major";
      const confidence = isMajorDamage ? 65 : 92;
      
      setResults({
        confidence,
        diagnosis: "Screen Display Issue - Likely LCD Damage",
        severity,
        repairSteps: [
          "Power off the device completely",
          "Remove the back cover using appropriate tools",
          "Disconnect the battery connector",
          "Carefully remove the damaged LCD screen",
          "Install the new LCD screen",
          "Reconnect all cables and test functionality"
        ],
        difficulty: severity === "major" ? "Advanced" : "Intermediate",
        estimatedTime: severity === "major" ? "90-120 minutes" : "45-60 minutes",
        requiredTools: ["Screwdriver set", "Plastic prying tools", "Suction cup"],
        certifiedCenters: [
          { 
            name: "EcoNova Repair Center", 
            distance: "2.3 miles", 
            rating: 4.8,
            address: "123 Green Tech Ave, EcoCity",
            phone: "(555) 123-4567",
            coordinates: [51.505, -0.09]
          },
          { 
            name: "Sustainable Electronics Fix", 
            distance: "4.1 miles", 
            rating: 4.6,
            address: "456 Repair St, TechTown",
            phone: "(555) 234-5678",
            coordinates: [51.515, -0.1]
          },
          { 
            name: "Green Circuit Solutions", 
            distance: "5.7 miles", 
            rating: 4.9,
            address: "789 Eco Blvd, RepairVille",
            phone: "(555) 345-6789",
            coordinates: [51.525, -0.11]
          }
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              EcoNova AI Repair Advisor
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Upload a photo of your device and describe the issue. Our AI will provide 
              personalized repair guidance and connect you with certified repair centers.
            </p>
          </div>

          {/* Upload Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Camera className="h-5 w-5 text-primary" />
                <span>Device Analysis</span>
              </CardTitle>
              <CardDescription>
                Provide details about your device issue for accurate diagnosis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Image Upload */}
              <div className="space-y-2">
                <Label htmlFor="device-image">Device Image</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <input
                    id="device-image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById('device-image')?.click()}
                    className="mb-4"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Image
                  </Button>
                  {deviceImage && (
                    <p className="text-sm text-muted-foreground">
                      Selected: {deviceImage.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Issue Description */}
              <div className="space-y-2">
                <Label htmlFor="issue-description">Describe the Issue</Label>
                <Textarea
                  id="issue-description"
                  placeholder="e.g., Screen is cracked and not responding to touch..."
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                  rows={4}
                />
              </div>

              {/* Severity Selection */}
              <div className="space-y-2">
                <Label htmlFor="severity">Damage Severity</Label>
                <Select value={severity} onValueChange={setSeverity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select damage severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minor">Minor Damage</SelectItem>
                    <SelectItem value="moderate">Moderate Damage</SelectItem>
                    <SelectItem value="major">Major Damage</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Analyze Button */}
              <Button
                onClick={handleAnalyze}
                disabled={!deviceImage || !issueDescription.trim() || !severity || isAnalyzing}
                className="w-full bg-primary hover:bg-primary/90"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Wrench className="mr-2 h-4 w-4" />
                    Analyze Device
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Analysis Results */}
          {isAnalyzing && (
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Analyzing Your Device...</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Processing image...</span>
                    <span>67%</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
              </CardContent>
            </Card>
          )}

          {results && (
            <div className="space-y-8">
              {results.severity === "major" && results.confidence < 70 && (
                <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/10">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-2 text-amber-800 dark:text-amber-200">
                      <AlertCircle className="h-5 w-5" />
                      <p className="font-medium">
                        Major damage detected with low confidence. We recommend consulting certified repair centers below.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Diagnosis Results */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Diagnosis Results</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {results.confidence}% Confidence
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{results.diagnosis}</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Severity:</span>
                          <p className="font-medium capitalize">{results.severity}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Difficulty:</span>
                          <p className="font-medium">{results.difficulty}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Est. Time:</span>
                          <p className="font-medium">{results.estimatedTime}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Required Tools:</h4>
                      <div className="flex flex-wrap gap-2">
                        {results.requiredTools.map((tool: string, index: number) => (
                          <Badge key={index} variant="outline">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {(results.severity !== "major" || results.confidence >= 70) && (
                      <div>
                        <h4 className="font-semibold mb-2">Repair Steps:</h4>
                        <div className="space-y-2">
                          {results.repairSteps.map((step: string, index: number) => (
                            <div key={index} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Certified Repair Centers */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Certified Repair Centers</span>
                    </CardTitle>
                    <CardDescription>
                      Professional EcoNova certified repair services near you
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {results.certifiedCenters.map((center: any, index: number) => (
                      <div key={index} className="border rounded-lg p-4 space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold">{center.name}</h4>
                          <Badge variant="secondary" className="bg-accent/10 text-accent">
                            ★ {center.rating}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{center.address}</p>
                        <p className="text-sm text-muted-foreground">{center.phone}</p>
                        <p className="text-sm font-medium text-primary">{center.distance} away</p>
                        <Button variant="outline" size="sm" className="w-full">
                          Contact Center
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Interactive Map */}
              {results.certifiedCenters && results.certifiedCenters.length > 0 && (
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Repair Centers Map</CardTitle>
                    <CardDescription>
                      Interactive map showing certified repair centers in your area
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96 w-full rounded-lg overflow-hidden">
                      <MapContainer
                        center={[51.505, -0.09]}
                        zoom={12}
                        style={{ height: '100%', width: '100%' }}
                      >
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {results.certifiedCenters.map((center: any, index: number) => (
                          <Marker key={index} position={center.coordinates}>
                            <Popup>
                              <div className="space-y-2">
                                <h4 className="font-semibold">{center.name}</h4>
                                <p className="text-sm">{center.address}</p>
                                <p className="text-sm">{center.phone}</p>
                                <p className="text-sm">Rating: ★ {center.rating}</p>
                                <p className="text-sm text-primary font-medium">{center.distance} away</p>
                              </div>
                            </Popup>
                          </Marker>
                        ))}
                      </MapContainer>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepairAdvisor;