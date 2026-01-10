"use client";

import { Search, House, Users, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NotificationBell } from "@/components/common/NotificationBell";

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white fixed top-0 left-0 right-0 z-50">

      {/* Left */}
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="Christful Logo" width={80} height={80} />

        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search sermons..."
            className="pl-10 rounded-full w-64"
          />
        </div>
      </div>

      {/* Center (Desktop only) */}
      <div className="hidden md:flex items-center gap-20 mr-35">
        <House className="h-6 w-6 text-muted-foreground cursor-pointer" />
        <Users className="h-6 w-6 text-muted-foreground cursor-pointer" />
      </div>

      {/* Right */}
      <div className="flex items-center gap-8">
        <Search className="h-6 w-6 text-muted-foreground md:hidden cursor-pointer" />

        <div className="flex items-center gap-4">
          <Button className="hidden md:flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Create
          </Button>

          {/* Notification Bell with count */}
          <NotificationBell count={3} />
        </div>

        <Avatar className="hidden md:flex">
          <AvatarImage src="/dextrus.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
