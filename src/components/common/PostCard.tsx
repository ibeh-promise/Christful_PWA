"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Share, Ellipsis, Play, Pause, Volume2, MessageSquareText, Heart, Repeat2, Eye } from "lucide-react"
import Link from "next/link";

export interface PostCardProps {
  postType: 'image' | 'video' | 'audio' | 'text';
  authorName: string;
  authorAvatar: string;
  date: string;
  textContent?: string;
  mediaUrl?: string;
  mediaAlt?: string;
}

export function PostCard({
  postType,
  authorName,
  authorAvatar,
  date,
  textContent,
  mediaUrl,
  mediaAlt
}: PostCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);

  const renderMedia = () => {
    switch (postType) {
      case 'image':
        return mediaUrl && (
          <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg">
            <Image
              src={mediaUrl}
              alt={mediaAlt || "Post image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        );

      case 'video':
        return mediaUrl && (
          <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg">
            <video
              src={mediaUrl}
              className="w-full h-full object-cover"
              controls
            />
          </div>
        );

      case 'audio':
        return (
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-primary/90"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Volume2 size={16} className="text-gray-500" />
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${audioProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'text':
      default:
        return null;
    }
  };

  const hasMedia = postType !== 'text' && mediaUrl;

  return (
    <Card className="overflow-hidden shadow-none">
      <CardHeader className="flex items-center justify-between">
        <div className="flex gap-3 items-start">
          <Avatar>
            <AvatarImage src={authorAvatar} />
            <AvatarFallback>
              {authorName.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div>
            <CardTitle className="text-base font-semibold">
              {authorName}
              <Link href="">
                <span className="text-xs text-medium text-[#556B2F] ml-2">
                  · Follow
                </span>
              </Link>
            </CardTitle>
            <CardDescription className="text-sm">{date}</CardDescription>
          </div>
        </div>

        <CardAction className="flex gap-2">
          <Share className="h-5 w-5 cursor-pointer hover:text-gray-600" />
          <Ellipsis className="h-5 w-5 cursor-pointer hover:text-gray-600" />
        </CardAction>
      </CardHeader>

      <CardContent className="space-y-4">
        {textContent && (
          <p className="text-gray-800 whitespace-pre-line">{textContent}</p>
        )}

        {hasMedia && renderMedia()}

        {!textContent && postType === 'text' && (
          <p className="text-gray-500 italic">No content</p>
        )}
      </CardContent>

      <CardFooter className="border-t py-4">
        <div className="flex items-center justify-between w-full text-sm text-gray-600 sm:justify-start sm:gap-12">
          <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <MessageSquareText size={18} />
            <span className="font-medium">2K</span>
          </button>
          <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Heart size={18} />
            <span className="font-medium">1K</span>
          </button>
          <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Repeat2 size={18} />
            <span className="font-medium">100</span>
          </button>
          <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Eye size={18} />
            <span className="font-medium">100M</span>
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}