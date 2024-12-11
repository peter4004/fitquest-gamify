import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: "Alex Smith", points: 5240, badge: "Elite" },
    { rank: 2, name: "Sarah Johnson", points: 4890, badge: "Master" },
    { rank: 3, name: "Mike Brown", points: 4670, badge: "Expert" },
    { rank: 4, name: "Emma Wilson", points: 4500, badge: "Advanced" },
    { rank: 5, name: "James Davis", points: 4320, badge: "Intermediate" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Leaderboard</h1>
        <p className="text-muted-foreground">See how you rank against other athletes!</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Global Rankings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leaderboardData.map((user) => (
              <div
                key={user.rank}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-muted-foreground w-8">
                    {user.rank}
                  </span>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <Badge variant="secondary">{user.badge}</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Medal className="w-4 h-4 text-primary" />
                  <span className="font-bold">{user.points}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;