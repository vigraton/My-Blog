import { Button } from "./button";
import AuthModal from "./auth";
import { Search } from "lucide-react";
import { Input } from "./input";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [authModal, setAuthModal] = useState(false);
  const onOpen = () => {
    window.open();
  };

  return (
    <>
      <header className="border-b w-full justify-between">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-row items-center">
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
              <div className="inset-0 fixed justify-items-center min-h-screen min-w-screen z-50 bg-blue-100">
                <AuthModal onOpen={onOpen} />
              </div>
            )}

            <Button variant="secondary">
              <a href="../my-post">New Post</a>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
