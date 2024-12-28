import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Brain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function WorkspaceHeader({ fileName }) {
  return (
    <div className="p-4 flex justify-between shadow-md">
      {/* <Image src={"/mylogo.svg"} alt="logo" width={140} height={100} /> */}
      <Link className="flex items-center justify-center" href="/">
        <Brain className="h-8 w-8 text-blue-600 transition-transform duration-300 transform hover:scale-110" />
        <span className="ml-3 text-2xl font-extrabold text-gray-800 hover:text-blue-600 transition-colors duration-300">
          NoteFlix.ai
        </span>
      </Link>
      <h2 className="font-bold">{fileName}</h2>
      <div className="flex gap-2 items-center">
        <Button>Save</Button>
        <UserButton />
      </div>
    </div>
  );
}

export default WorkspaceHeader;
