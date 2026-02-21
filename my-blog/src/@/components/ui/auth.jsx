import { Button } from "./button";
import { Card } from "./card";
import { Input } from "./input";
import { useState } from "react";
import { X } from "lucide-react";

export default function AuthModal({ IsModalOpen, setIsModalOpen }) {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleRegister() {
    localStorage.setItem("Name stored", name);
    localStorage.setItem("Password stored", password);
  }

  return (
    <>
      {IsModalOpen ? (
        <div className="inset-0 fixed justify-items-center min-h-screen min-w-screen z-50 bg-blue-100">
          <Card className="flex w-[350px] h-[350px] justify-center translate-y-1/2">
            <button
              onClick={() => setIsModalOpen(false)}
              type="button"
              className="flex place-items-center justify-end mr-4">
              <X className="text-black flex cursor-pointer" />
            </button>

            <h2 className="font-bold items-center justify-center flex text-2xl">
              Register in our blog
            </h2>

            <div className="flex flex-col gap-y-4 p-6">
              <Input
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" onClick={handleRegister}>
                Register
              </Button>
            </div>
          </Card>
        </div>
      ) : null}
    </>
  );
}
