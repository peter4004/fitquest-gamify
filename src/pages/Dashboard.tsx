import { BarChart, Star, Trophy } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { label: "Current Rank", value: "Silver", icon: Trophy },
    { label: "Total Points", value: "2,547", icon: Star },
    { label: "Workouts", value: "24", icon: BarChart },
  ];

  const bodyGroups = [
    { name: "Arms", level: 4, progress: 75 },
    { name: "Legs", level: 3, progress: 45 },
    { name: "Back", level: 5, progress: 90 },
    { name: "Chest", level: 4, progress: 60 },
    { name: "Core", level: 3, progress: 30 },
    { name: "Cardio", level: 2, progress: 15 },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Welcome back, Athlete!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="stat-card">
            <Icon className="w-6 h-6 mb-2 text-primary" />
            <p className="text-sm text-gray-600">{label}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Body Group Progress</h2>
        <div className="space-y-4">
          {bodyGroups.map(({ name, level, progress }) => (
            <div key={name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{name}</span>
                <span className="text-sm text-gray-600">Level {level}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-value"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;