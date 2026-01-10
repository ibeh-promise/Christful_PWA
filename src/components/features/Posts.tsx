"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { FileVideo2, AudioLines, Text as TextIcon } from "lucide-react";
import { PostCard } from "@/components/common/PostCard"
import { posts } from "@/postdata";

export function Posts() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredPosts = posts.filter((post) => {
    if (activeTab === "All") return true;
    if (activeTab === "Video") return post.postType === "video";
    if (activeTab === "Audio") return post.postType === "audio";
    if (activeTab === "Text") return post.postType === "text";
    return true;
  });

  return (
    <div className="flex justify-center w-full px-4 md:px-0">
      <div className="w-full max-w-[500px]">
        <div className="flex justify-center sticky top-20 z-40 bg-[#FBFDFF]/80 backdrop-blur-sm py-3 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-2 sm:gap-4 overflow-x-auto no-scrollbar pb-1">
            <Badge
              variant={activeTab === "All" ? "default" : "secondary"}
              className="rounded-[5px] px-4 py-1.5 cursor-pointer transition-all whitespace-nowrap"
              onClick={() => setActiveTab("All")}
            >
              All
            </Badge>
            <Badge
              variant={activeTab === "Video" ? "default" : "secondary"}
              className="rounded-[5px] px-4 py-1.5 cursor-pointer transition-all flex gap-1.5 items-center whitespace-nowrap"
              onClick={() => setActiveTab("Video")}
            >
              <FileVideo2 className="h-3.5 w-3.5" />
              Video
            </Badge>
            <Badge
              variant={activeTab === "Audio" ? "default" : "secondary"}
              className="rounded-[5px] px-4 py-1.5 cursor-pointer transition-all flex gap-1.5 items-center whitespace-nowrap"
              onClick={() => setActiveTab("Audio")}
            >
              <AudioLines className="h-3.5 w-3.5" />
              Audio
            </Badge>
            <Badge
              variant={activeTab === "Text" ? "default" : "secondary"}
              className="rounded-[5px] px-4 py-1.5 cursor-pointer transition-all flex gap-1.5 items-center whitespace-nowrap"
              onClick={() => setActiveTab("Text")}
            >
              <TextIcon className="h-3.5 w-3.5" />
              Text
            </Badge>
          </div>
        </div>
        <div className="mt-5">
          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}