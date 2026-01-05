import { Button } from "./button";
import { Card } from "./card";
import { Input } from "./input";
import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";

export default function AuthModal() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleRegister() {
    const saveName = () => {
      localStorage.setItem("Name stored", name);
    };
    saveName();

    const savePassword = () => {
      localStorage.setItem("Password stored", password)
    };
    savePassword();
  }

  const onClose = () => {}

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <Card className="flex w-[350px] h-[300px] justify-center translate-y-1/2">
        <h2 className="font-bold items-center justify-center flex text-xl">
          Register in our blog
        </h2>
        <IoIosClose className="text-gray-600 z-20 flex" onClick={onClose}/>
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
          <Button type="submit" onClick={handleRegister}>Register</Button>
        </div>
      </Card>
    </>
  );
}
