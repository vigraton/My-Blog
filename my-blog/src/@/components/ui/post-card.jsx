import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Badge } from "./badge";

export default function PostCard({
  id,
  description,
  username,
  created_at,
  tags,
  imageUrl,
}) {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-md">
      <Link
        to={`#/posts/${id}`}
        className="block overflow-hidden relative h-48">
        <img
          src={imageUrl}
          className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
        />
        {tags.map((tag) => (
          <Badge key={tag.id} className="absolute top-2 right-2">
            {tag}
          </Badge>
        ))}
      </Link>

      <section>
        <CardHeader>
          <Link to={`#/posts/${id}`} className="hover:underline">
            <h2 className="text-xl font-bold line-clamp-2">{title}</h2>
          </Link>
        </CardHeader>

        <CardContent className="pb-2 flex-1">
          <p className="text-muted-foreground line-clamp-3">{description}</p>
        </CardContent>

        <CardFooter className="text-s text-muted-foreground pt-0 flx flex-wrap gap-3">
          <div className="flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            <span>{created_at}</span>
          </div>
          <div className="flex items-center">
            <User className="h-3.5 w-3.5 mr-1" />
            <span>{username}</span>
          </div>
        </CardFooter>
      </section>
    </Card>
  );
}
