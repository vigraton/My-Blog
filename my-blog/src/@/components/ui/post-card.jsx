import React from "react";

import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Badge } from "./badge";

export default function PostCard({ post }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-md">
      <Link
        to={`#/posts/${post.id}`}
        className="block overflow-hidden relative h-48"
      >
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
        ></img>
        <Badge className="absolute top-2 right-2">{post.category}</Badge>
      </Link>

      <CardHeader>
        <Link to={`#/posts/${post.id}`} className="hover:underline">
          <h2 className="text-xl font-bold line-clamp-2">{post.title}</h2>
        </Link>
      </CardHeader>

      <CardContent className="pb-2 flex-1">
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>

      <CardFooter className="text-s text-muted-foreground pt-0 flx flex-wrap gap-3">
        <div className="flex items-center">
          <Calendar className="h-3.5 w-3.5 mr-1" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center">
          <User className="h-3.5 w-3.5 mr-1" />
          <span>{post.author}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
