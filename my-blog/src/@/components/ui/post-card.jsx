import React from "react";
// import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader } from "./card";
import { Badge } from "./badge";

// Aparentemente essa propTypes não faz diferença alguma no código :)
// PostCard.propTypes = {
//   post: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     excerpt: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     category: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default function PostCard({ post }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-md">
      <Link to={`#/${post.id}`} className="block overflow-hidden relative h-48">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
        ></img>
        <Badge className="absolute top-48 right-170">{post.category}</Badge>
      </Link>
      <CardContent>
        <CardHeader>
          <h1 className="flex font-bold text-2xl">{post.title}</h1>
        </CardHeader>

        <section>
          <CardDescription className={"text-1xl"}>
            {post.excerpt}
          </CardDescription>

          <section className={"flex flex-row gap-4 text-muted-foreground"}>
            <section
              className={
                "flex flex-row space-x-1 py-2 justify-content: items-center"
              }
            >
              <Calendar className={"w-4 h-4"} />
              <CardDescription>{post.date}</CardDescription>
            </section>

            <section className="flex flex-row  space-x-1 justify-content: items-center">
              <User className={"w-4 h-4"} />
              <p>{post.author}</p>
            </section>
          </section>
        </section>
      </CardContent>
    </Card>
  );
}
