import { Button } from "./button";
import { Card } from "./card";
import { Input } from "./input";
import { useState } from "react";

export default function AuthModal() {
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  return (
    <>
      <Card className="flex w-[350px] h-[300px] justify-center">
        <h2 className="font-bold items-center justify-center flex text-xl">
          Register in our blog
        </h2>
        <div className="flex flex-col gap-y-4 p-6">
          <Input placeholder="name" type="text" value={nome} />
          <Input placeholder="password" type="password" value={senha} />
          <Button className="">Register</Button>
        </div>
      </Card>
    </>
  );
}
