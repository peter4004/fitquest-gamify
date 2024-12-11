import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare, ThumbsUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Community = () => {
  const posts = [
    {
      id: 1,
      user: "John Doe",
      badge: "Fitness Enthusiast",
      content: "Just completed my 100th workout! 💪 Feeling stronger than ever!",
      likes: 24,
      comments: 5,
    },
    {
      id: 2,
      user: "Jane Smith",
      badge: "Running Pro",
      content: "New personal best on my 5K run! Thanks for all the support everyone!",
      likes: 18,
      comments: 3,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Community</h1>
        <p className="text-muted-foreground">Connect with fellow fitness enthusiasts!</p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{post.user}</h3>
                <Badge variant="secondary">{post.badge}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{post.content}</p>
              <div className="flex gap-4 text-muted-foreground">
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  {post.likes}
                </button>
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  {post.comments}
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Community;