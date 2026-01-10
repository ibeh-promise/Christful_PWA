"use client";
import { Button } from "@/components/ui/button";
import { Plus, BookOpenText, Handshake, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export function SideNav() {
  // Seven following defferent identity
  // 7 different identity
  const FOLLOWING_DATA = [
    { name: "Micheal Oropko", avatar: "/d.png" },
    { name: "Arome Osayi", avatar: "/avatar.png" },
    { name: "Tolu Luke", avatar: "/d.png" },
    { name: "Frank Udem", avatar: "/avatar.png" },
    { name: "Martins Daniels", avatar: "/d.png" },
    { name: "Francis Arome", avatar: "/avatar.png" },
    { name: "James Matthew", avatar: "/d.png" },
  ];

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <Button className="rounded-full bg-secondary px-5 text-foreground w-fit">
            <Plus /> Create
          </Button>
          <Button className="rounded-full bg-secondary px-5 text-foreground w-fit">
            <BookOpenText /> Library
          </Button>
          <Button className="rounded-full bg-secondary px-5 text-foreground w-fit">
            <Handshake /> Invite a Friend
          </Button>
        </div>
        <hr />
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 items-center">
            <h1 className="text-[20px] font-medium text-[#556B2F]">Following</h1>
            <Link href="">
              <span className="text-sm text-foreground">
                <MoreHorizontal size={20} />
              </span>
            </Link>
          </div>
          {FOLLOWING_DATA.map((author, index) => (
            <Link key={index} href="">
              <div className="flex gap-3 items-start">
                <Avatar>
                  <AvatarImage src={author.avatar} />
                  <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-base font-semibold text-medium text-[14px]">
                    {author.name}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}