import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "../../@/components/ui/input";
import { Button } from "../../@/components/ui/button";
import PostCard from "../../@/components/ui/post-card";
import { useState } from "react";
import AuthModal from "../../@/components/ui/auth";

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
  const [authModal, setAuthModal] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex justify-between items-center">
        <header className="border-b w-full">
          <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-row">
            <div className=" flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Link href="/" className="flex items-center">
                <div
                  className="w-10 h-10 bg-primary rounded-md 
                flex items-center justify-center text-primary-foreground font-bold text-xl"
                >
                  B
                </div>
                <span className="ml-2 text-xl font-bold">BlogHub</span>
              </Link>
            </div>

            <div className="flex-1 justify-center max-w-md mx-auto md:mx-0 md:ml-8">
              <div className="relative px-4">
                <Search className="absolute left-6 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search posts..."
                  className="w-full pl-8 bg-background "
                />
              </div>
            </div>

            <div className="flex flex-row justify-end md:justify-end gap-4 mt-4 md:mt-0">
              <Button variant="outline" asChild>
                <Link href="/sign-in">Sing In</Link>
              </Button>
              <Button onClick={() => setAuthModal(true)}>
                <Link href="/sign-up">Sing up</Link>
              </Button>

              {authModal && (
                <div className="absolute justify-center">
                  <AuthModal />
                </div>
              )}

              <Button variant="secondary">
                <a href="../my-post">New Post</a>
              </Button>
            </div>
          </div>
        </header>
      </div>

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
