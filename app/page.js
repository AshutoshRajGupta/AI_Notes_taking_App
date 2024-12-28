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
    // <div>
    //   <h2>Hello,my name is ashu!! </h2>
    //   <Button>Subscribe</Button>

    //   <UserButton />
    // </div>

    <div className="flex flex-col min-h-screen ">
      <header className="px-4 lg:px-6 h-14 flex  items-center border-b sticky top-0 bg-background z-50">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold">Notely.ai</span>
        </Link>
        <div className="md:hidden ml-auto">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <nav
          className={`${mobileMenuOpen ? "flex" : "hidden"}  md:flex absolute md:relative top-14 left-0 right-0 bg-background md:top-0 flex-col md:items-center md:flex-row gap-12 md:ml-auto p-4 md:p-0 border-b md:border-none`}
        >
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>

          <Link
            className="text-sm flex bg-blue-600 gap-3 p-2 text-white rounded-md font-medium"
            href="/dashboard"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          <UserButton />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter  sm:text-[48px] leading-[1.2] xl:text-[60px] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                    Smart PDF Notes with Artificial Intelligence
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Transform your PDFs into interactive knowledge. Ask
                    questions, get instant answers, and unlock insights with
                    Notely.ai.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href={"/dashboard"}
                    className="bg-blue-600  w-fit py-2 text-white hover:bg-blue-700 flex items-center px-2 rounded-lg"
                  >
                    Try Notely Free
                  </Link>
                  {/* <Button size="lg" variant="outline">
                    Watch Demo
                  </Button> */}
                </div>
              </div>
              {/* <div className="flex items-center justify-center">
                <Card className="w-full ">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-blue-600" />
                      Ask Notely
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">research_paper.pdf</span>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="text-sm">
                          What are the key findings of the study?
                        </p>
                      </div>
                      <div className="p-4 bg-blue-600/10 rounded-lg">
                        <p className="text-sm">
                          The study found three major impacts:
                          <br /> 1&#41; 45% improvement in learning retention{" "}
                          <br />
                          2&#41; 30% reduction in study time <br /> 3&#41; 92%
                          user satisfaction rate.
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Input
                          className="flex-grow"
                          placeholder="Ask about your PDF..."
                        />
                        <Button
                          size="icon"
                          className="bg-blue-600 text-white hover:bg-blue-700"
                        >
                          <MessageSquare className="h-4 w-4" />
                          <span className="sr-only">Send</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div> */}
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
        >
          {/* <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Brain className="w-8 h-8 mb-2 text-teal-500" />
                  <CardTitle>AI-Powered Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  Our advanced AI processes your PDFs, extracting key
                  information and providing intelligent insights.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MessageSquare className="w-8 h-8 mb-2 text-teal-500" />
                  <CardTitle>Natural Language Queries</CardTitle>
                </CardHeader>
                <CardContent>
                  Ask questions in plain English and get accurate answers from
                  your PDF content instantly.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Search className="w-8 h-8 mb-2 text-teal-500" />
                  <CardTitle>Smart Search</CardTitle>
                </CardHeader>
                <CardContent>
                  Quickly find specific information across multiple PDFs with
                  our intelligent search functionality.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="w-8 h-8 mb-2 text-teal-500" />
                  <CardTitle>Fast Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  Experience lightning-fast PDF analysis and question-answering,
                  saving you valuable time.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="w-8 h-8 mb-2 text-teal-500" />
                  <CardTitle>Secure and Private</CardTitle>
                </CardHeader>
                <CardContent>
                  Your documents are encrypted and processed securely, ensuring
                  your sensitive information stays protected.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 mb-2 text-teal-500" />
                  <CardTitle>Collaboration Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  Share insights and work together on PDF analysis with built-in
                  collaboration features.
                </CardContent>
              </Card>
            </div>
          </div> */}
        </section>

        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              How Notely.ai Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Upload Your PDF</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Simply upload your PDF document to our secure Notely.ai
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

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your PDF Experience?
                </h2>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                  Join thousands of professionals who are revolutionizing the
                  way they interact with PDF documents using Notely.ai.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1 bg-white text-blue-600 placeholder:text-blue-600/50"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    className="bg-white text-blue-600 hover:bg-white/90"
                  >
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-white/60">
                  Try Notely.ai free for 14 days. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-200">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Notely.ai. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Cookie Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
