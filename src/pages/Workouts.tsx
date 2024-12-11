import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell } from "lucide-react";

const Workouts = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Workouts</h1>
        <p className="text-muted-foreground">Choose your workout and start training!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Strength Training', 'Cardio', 'HIIT', 'Yoga', 'Flexibility', 'Core'].map((workout) => (
          <Card key={workout} className="hover:shadow-lg transition-all duration-200 cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dumbbell className="w-5 h-5" />
                {workout}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Discover and track your {workout.toLowerCase()} workouts
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Workouts;