import { Link, useLocation } from "react-router-dom";
import { Home, Dumbbell, Trophy, Users, User } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/workouts", icon: Dumbbell, label: "Workouts" },
    { to: "/leaderboard", icon: Trophy, label: "Leaderboard" },
    { to: "/community", icon: Users, label: "Community" },
    { to: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t md:relative md:border-t-0">
      <div className="flex justify-around md:flex-col md:h-screen md:w-20 md:justify-start md:pt-8">
        {links.map(({ to, icon: Icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`p-4 flex flex-col items-center text-sm ${
              location.pathname === to
                ? "text-primary"
                : "text-gray-500 hover:text-primary"
            }`}
          >
            <Icon className="h-6 w-6 mb-1" />
            <span className="md:hidden">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;