"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, LockIcon, Mail } from "lucide-react";
import Splash from "@/components/common/Splash";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from "sonner";

import { ENDPOINTS } from "@/lib/api-config";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(ENDPOINTS.FORGOT_PASSWORD, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Password reset link sent! Please check your email.");
      } else {
        toast.error(data.message || "Failed to send reset link. Please try again.");
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      toast.error("An error occurred. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-60 p-4 w-full max-w-6xl">
        <div className="justify-center items-center flex">
          <Image
            src="/logo.png"
            alt="Christful Logo"
            width={300}
            height={300}
            className="animate-fade-in w-[200px] md:w-[300px]"
          />
        </div>
        <div className="w-full max-w-sm mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-10">
              <h1 className="text-2xl font-bold mb-2 text-xl mb-5 font-semibold leading-none tracking-tight">
                Forgotten your password
              </h1>
              <p className="text-muted-foreground text-sm text-medium">
                Enter the email address used to create your account
              </p>
            </div>
            <div className="relative mb-6">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="mb-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Proceed"}
              </Button>
            </div>
            <div className="text-center mt-6">
              <Link href="/auth/login">
                <Button variant="secondary" className="w-full" disabled={isLoading}>
                  Nevermind, I remembered
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

