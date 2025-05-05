import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "../../@/components/ui/input";
import { Button } from "../../@/components/ui/button";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
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

          <div className="flex-1 max-w-md mx-auto md:mx-0 md:ml-8">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                className="w-full pl-8 bg-background"
              />
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-4 mt-4 md:mt-0">
            <Button variant="outline" asChild>
              <Link href="/sign-in">Sing In</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Sing up</Link>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
