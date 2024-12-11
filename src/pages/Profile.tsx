import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Award, Calendar, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Profile = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground">Manage your profile and view your achievements</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Personal Info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">John Doe</h3>
                <p className="text-muted-foreground">Fitness Enthusiast</p>
              </div>
            </div>
            <div className="pt-4 space-y-2">
              <p>Member since: January 2024</p>
              <p>Total Workouts: 67</p>
              <p>Current Streak: 5 days</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Workout Warrior", "Early Bird", "Strength Master"].map((achievement) => (
                <div
                  key={achievement}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                >
                  <div className="achievement-badge">
                    <Award className="w-4 h-4" />
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

export default Profile;