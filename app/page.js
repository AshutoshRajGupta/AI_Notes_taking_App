"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

import {
  Brain,
  FileText,
  MessageSquare,
  Search,
  Zap,
  Lock,
  Users,
  Star,
  Menu,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { user } = useUser();
  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    user && CheckUser();
  }, [user]);

  const CheckUser = async () => {
    const result = await createUser({
      email: user?.primaryEmailAddress?.emailAddress,
      imageURL: user?.imageUrl,
      userName: user?.fullName,
    });

    console.log(result);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
      <header className="px-6 lg:px-8 h-16 flex items-center justify-between border-b sticky top-0 bg-background z-50 shadow-md">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-8 w-8 text-blue-600 transition-transform duration-300 transform hover:scale-110" />
          <span className="ml-3 text-2xl font-extrabold text-gray-800 hover:text-blue-600 transition-colors duration-300">
            NoteFlix.ai
          </span>
        </Link>

        <div className="md:hidden ml-auto">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition duration-200"
          >
            <Menu className="h-7 w-7 text-gray-800 hover:text-blue-600 transition-colors duration-300" />
          </Button>
        </div>

        <nav
          className={`${
            mobileMenuOpen ? "flex" : "hidden"
          } md:flex absolute md:relative top-16 left-0 right-0 bg-background md:top-0 flex-col md:items-center md:flex-row gap-8 md:gap-12 md:ml-auto p-6 md:p-0 border-b md:border-none transition-all duration-300 ease-in-out`}
        >
          <Link
            className="text-lg font-medium text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 transition-colors duration-300"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-lg font-medium text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 transition-colors duration-300"
            href="#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-lg font-medium text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 transition-colors duration-300"
            href="#pricing"
          >
            Pricing
          </Link>

          <Link
            className="text-lg flex bg-blue-600 gap-3 p-3 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-300"
            href="/dashboard"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <div className="ml-3">
            <UserButton className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300" />
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container max-w-[1400px] mx-auto px-6 md:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              {/* Left Side Content */}
              <div className="flex flex-col justify-center space-y-6">
                {/* Title */}
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-500 leading-tight tracking-tight">
                  Smart PDF Notes with Artificial Intelligence
                </h1>

                {/* Description */}
                <p className="max-w-[650px] text-lg md:text-xl text-gray-700 dark:text-gray-300">
                  Transform your PDFs into interactive knowledge. Ask questions,
                  get instant answers, and unlock insights with NoteFlix.ai.
                </p>

                {/* Action Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/dashboard"
                    className="w-fit py-3 px-6 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    Try NoteFlix.ai Free
                  </Link>
                </div>
              </div>

              {/* Right Side Image/Illustration */}
              <div className="flex justify-center items-center">
                <div className="relative">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/020/607/768/non_2x/white-chat-ai-background-free-vector.jpg"
                    alt="Smart PDF Notes Illustration"
                    className="w-full max-w-[450px] mx-auto rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105"
                  />
                  {/* Adding border and shadow to image */}
                  <div className="absolute inset-0 border-4 border-gradient-to-r from-pink-500 to-teal-500 rounded-lg shadow-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md dark:bg-gray-800">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 20h5l-1.405-5.62A2 2 0 0016.635 13H15M8 20H3l1.405-5.62A2 2 0 017.365 13H9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Analysis</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Extract key insights from your PDFs effortlessly with advanced
                  AI algorithms.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md dark:bg-gray-800">
                <div className="w-16 h-16 flex items-center justify-center bg-teal-500 text-white rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 12H4m16 0c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm-16 0c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Collaborative Tools</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Work with your team to analyze PDFs and share insights
                  seamlessly.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md dark:bg-gray-800">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-600 text-white rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 17l-4-4m0 0l4-4m-4 4h12"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Intelligent Search</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Quickly find specific details across all your uploaded PDFs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              How NoteFlix.ai Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Upload Your PDF</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Simply upload your PDF document to our secure NoteFlix.ai
                  platform.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Ask Questions</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Type your questions about the PDF content in natural language.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Get Instant Answers</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Receive accurate, AI-generated answers based on your PDF
                  content.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Affordable Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col p-6 bg-gray-100 rounded-lg shadow-md dark:bg-gray-800 text-center">
                <h3 className="text-xl font-bold mb-4">Basic Plan</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">
                  $9.99/month
                </p>
                <ul className="mb-6 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>Upload up to 10 PDFs</li>
                  <li>AI-powered search</li>
                  <li>Basic analytics</li>
                </ul>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                  Choose Plan
                </button>
              </div>

              <div className="flex flex-col p-6 bg-blue-600 text-white rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-4">Pro Plan</h3>
                <p className="text-2xl font-bold mb-4">$29.99/month</p>
                <ul className="mb-6 space-y-2">
                  <li>Upload unlimited PDFs</li>
                  <li>Advanced AI insights</li>
                  <li>Collaborative tools</li>
                  <li>Priority support</li>
                </ul>
                <button className="bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-100">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full items-center px-6 md:px-8 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 dark:from-gray-800 dark:to-gray-900 border-t border-blue-300 shadow-lg">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          © 2024 NoteFlix.ai. All rights reserved.
        </p>

        <nav className="sm:ml-auto flex gap-6">
          <Link
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-all duration-300 ease-in-out"
            href="/terms-of-service"
          >
            Terms of Service
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-all duration-300 ease-in-out"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-all duration-300 ease-in-out"
            href="/cookie-policy"
          >
            Cookie Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
