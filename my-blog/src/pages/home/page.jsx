import { Link } from "react-router-dom";
import { Button } from "../../@/components/ui/button";
import PostCard from "../../@/components/ui/post-card";
import Header from "../../@/components/ui/header";

function Home() {
  const posts = [
    {
      id: 1,
      title: "Getting started with Next.js",
      excerpt:
        "Learn how to build modern web applications with React and Vite.",
      date: "May 1, 2025",
      author: "Jane Smith",
      category: "Development",
      imageUrl: "https://placehold.co/400x200/png",
    },

    {
      id: 2,
      title: "Title",
      excerpt: "Too lazy to make something up",
      date: "May 12, 2025",
      author: "Well...me",
      category: "Design",
      imageUrl: "https://placehold.co/400x200/png",
    },
  ];

  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <main className="flex-1 py-10 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px:8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Latest Posts</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                All
              </Button>
              <Button variant="ghost" size="sm">
                Development
              </Button>
              <Button variant="ghost" size="sm">
                Design
              </Button>
              <Button variant="ghost" size="sm">
                React
              </Button>
            </div>
          </div>

          {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </section> */}

          <section className="mt-10 flex justify-center">
            <Button variant="outline" className="mr-2">
              Previous
            </Button>
            <Button variant="outline">Next</Button>
          </section>
        </div>
      </main>

      <footer className="bg-muted py-6 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2025 BlogHub. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
