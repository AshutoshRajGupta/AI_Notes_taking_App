"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Brain, Layout, Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import UploadPdf from "./UploadPdf";
import { useUser } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideBar() {
  const { user } = useUser();

  const path = usePathname();
  const GetUserInfo = useQuery(api.user.GetUserInfo, {
    userEmail: user?.primaryEmailAddress?.emailAddress,
  });

  console.log(GetUserInfo);

  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    userEmail: user?.primaryEmailAddress?.emailAddress,
  });
  return (
    <div className="shadow-md h-screen p-7">
      {/* <Image src={"/mylogo.svg"} alt="logo" width={170} height={120} /> */}
      <Link className="flex items-center justify-center" href="/">
        <Brain className="h-8 w-8 text-blue-600 transition-transform duration-300 transform hover:scale-110" />
        <span className="ml-3 text-2xl font-extrabold text-gray-800 hover:text-blue-600 transition-colors duration-300">
          NoteFlix.ai
        </span>
      </Link>
      <div className="mt-10">
        <UploadPdf
          isMaxFile={
            fileList?.length >= 10 && !GetUserInfo.upgrade ? true : false
          }
        >
          <Button className="w-full">+ Upload Pdf</Button>
        </UploadPdf>
        <Link href={"/dashboard"}>
          <div
            className={`flex gap-2 items-center p-3 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer
        ${path == "/dashboard" && "bg-slate-200"}`}
          >
            <Layout />
            <h2>Workspace</h2>
          </div>
        </Link>
        <Link href={"/dashboard/upgrade"}>
          <div
            className={`flex gap-2 items-center p-3 mt-2 hover:bg-slate-100 rounded-lg cursor-pointer
        ${path == "/dashboard/upgrade" && "bg-slate-200"}`}
          >
            <Shield />
            <h2>Upgrade</h2>
          </div>
        </Link>
      </div>

      {!GetUserInfo?.upgrade && (
        <div className="absolute bottom-24 w-[80%]">
          <Progress value={(fileList?.length / 10) * 100} />
          <p className="text-sm mt-1">
            {fileList?.length} out of 10 Pdf Uploaded
          </p>

          <p className="text-sm  text-gray-400 mt-2">
            Upgrade to Upload more PDF
          </p>
        </div>
      )}
    </div>
  );
}

export default SideBar;
