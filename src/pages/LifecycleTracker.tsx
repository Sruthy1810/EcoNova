import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Smartphone, Laptop, Watch, Calendar, Wrench, Recycle, TrendingUp, Bell } from "lucide-react";

const LifecycleTracker = () => {
  const devices = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      type: "smartphone",
      icon: Smartphone,
      purchaseDate: "2022-10-15",
      lastMaintenance: "2024-01-15",
      batteryHealth: 87,
      overallHealth: 92,
      nextMaintenance: "2024-04-15",
      status: "Good",
      repairs: 1,
      sustainabilityScore: 85
    },
    {
      id: 2,
      name: "MacBook Pro M2",
      type: "laptop",
      icon: Laptop,
      purchaseDate: "2023-03-20",
      lastMaintenance: "2024-02-01",
      batteryHealth: 94,
      overallHealth: 96,
      nextMaintenance: "2024-05-01",
      status: "Excellent",
      repairs: 0,
      sustainabilityScore: 92
    },
    {
      id: 3,
      name: "Apple Watch Series 8",
      type: "wearable",
      icon: Watch,
      purchaseDate: "2023-01-10",
      lastMaintenance: "2024-01-10",
      batteryHealth: 78,
      overallHealth: 82,
      nextMaintenance: "2024-04-10",
      status: "Fair",
      repairs: 0,
      sustainabilityScore: 78
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "maintenance",
      message: "iPhone 14 Pro: Battery optimization recommended",
      date: "2024-03-25",
      urgent: false
    },
    {
      id: 2,
      type: "recycle",
      message: "Old Samsung Galaxy S10: Consider trade-in program",
      date: "2024-03-20",
      urgent: true
    },
    {
      id: 3,
      type: "warranty",
      message: "MacBook Pro warranty expires in 30 days",
      date: "2024-03-18",
      urgent: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Excellent": return "bg-primary text-primary-foreground";
      case "Good": return "bg-accent text-accent-foreground";
      case "Fair": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getHealthColor = (health: number) => {
    if (health >= 90) return "text-primary";
    if (health >= 80) return "text-accent";
    return "text-destructive";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Device Lifecycle Tracker
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Monitor your devices' health, schedule maintenance, and get personalized 
              recommendations to maximize their lifespan and sustainability impact.
            </p>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="shadow-card">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Active Devices</div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-secondary">1</div>
                <div className="text-sm text-muted-foreground">Repairs Done</div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-accent">85%</div>
                <div className="text-sm text-muted-foreground">Avg. Health</div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">2.5kg</div>
                <div className="text-sm text-muted-foreground">CO₂ Saved</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Device List */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Your Devices</h2>
              
              {devices.map((device) => (
                <Card key={device.id} className="shadow-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <device.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{device.name}</CardTitle>
                          <CardDescription>
                            Purchased: {new Date(device.purchaseDate).toLocaleDateString()}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getStatusColor(device.status)}>
                        {device.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Health Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Battery Health</span>
                          <span className={`text-sm font-bold ${getHealthColor(device.batteryHealth)}`}>
                            {device.batteryHealth}%
                          </span>
                        </div>
                        <Progress value={device.batteryHealth} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Overall Health</span>
                          <span className={`text-sm font-bold ${getHealthColor(device.overallHealth)}`}>
                            {device.overallHealth}%
                          </span>
                        </div>
                        <Progress value={device.overallHealth} className="h-2" />
                      </div>
                    </div>

                    {/* Device Info */}
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div className="text-center">
                        <Wrench className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                        <div className="font-medium">{device.repairs}</div>
                        <div className="text-muted-foreground">Repairs</div>
                      </div>
                      <div className="text-center">
                        <Calendar className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                        <div className="font-medium">
                          {new Date(device.nextMaintenance).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                        <div className="text-muted-foreground">Next Check</div>
                      </div>
                      <div className="text-center">
                        <TrendingUp className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                        <div className="font-medium">{device.sustainabilityScore}</div>
                        <div className="text-muted-foreground">Eco Score</div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        <Wrench className="h-3 w-3 mr-1" />
                        Maintenance
                      </Button>
                      <Button variant="outline" size="sm">
                        <Recycle className="h-3 w-3 mr-1" />
                        Trade-in
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Notifications & Timeline */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Notifications</h2>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-primary" />
                    <span>Recent Updates</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                      <div className={`p-1 rounded-full ${notification.urgent ? 'bg-destructive' : 'bg-primary'}`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.date}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Sustainability Impact */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Recycle className="h-5 w-5 text-primary" />
                    <span>Environmental Impact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">2.5kg</div>
                    <div className="text-sm text-muted-foreground">CO₂ emissions saved</div>
                    <div className="text-xs text-muted-foreground">
                      By extending device lifecycle vs. buying new
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Repairs vs Replace</span>
                      <span className="text-sm font-bold text-primary">1.8kg CO₂</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Optimal Usage</span>
                      <span className="text-sm font-bold text-secondary">0.7kg CO₂</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    View Full Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifecycleTracker;