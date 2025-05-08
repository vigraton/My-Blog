import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Badge } from "./badge";

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default function PostCard({ post }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-md">
      <Link className="block overflow-hidden relatve h-48">
        <img
          src={
            post.imageUrl ||
            "https://i.pinimg.com/1200x/2a/86/a5/2a86a560f0559704310d98fc32bd3d32.jpg"
          }
          alt={post.title || "Getting started with React"}
          className="w-70 h-48 object-cover transition-transform hover:scale-105 duration-300"
        ></img>
        <Badge className="absolute top-48 right-170">
          {post.category || "Development"}
        </Badge>
      </Link>
    </Card>
  );
}
