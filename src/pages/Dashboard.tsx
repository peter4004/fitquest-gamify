import { BarChart, Star, Trophy, Dumbbell, Activity, Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const stats = [
    { label: "Current Rank", value: "Silver", icon: Trophy, color: "text-secondary" },
    { label: "Total Points", value: "2,547", icon: Star, color: "text-yellow-500" },
    { label: "Workouts", value: "24", icon: Dumbbell, color: "text-primary" },
    { label: "Streak", value: "5 days", icon: Flame, color: "text-orange-500" },
  ];

  const bodyGroups = [
    { name: "Arms", level: 4, progress: 75, title: "Advanced" },
    { name: "Legs", level: 3, progress: 45, title: "Intermediate" },
    { name: "Back", level: 5, progress: 90, title: "Expert" },
    { name: "Chest", level: 4, progress: 60, title: "Advanced" },
    { name: "Core", level: 3, progress: 30, title: "Intermediate" },
    { name: "Cardio", level: 2, progress: 15, title: "Novice" },
  ];

  const recentAchievements = [
    "10 Workouts Completed",
    "First Cardio Session",
    "100kg Total Weight Lifted",
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Welcome back, Athlete!</h1>
        <p className="text-muted-foreground">Track your progress and crush your fitness goals!</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <Card key={label} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Icon className={`w-8 h-8 ${color}`} />
                <div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="text-2xl font-bold">{value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Body Group Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {bodyGroups.map(({ name, level, progress, title }) => (
              <div key={name}>
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{name}</span>
                    <Badge variant="secondary">{title}</Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">Level {level}</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAchievements.map((achievement) => (
                <div
                  key={achievement}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                >
                  <div className="achievement-badge">
                    <Star className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;