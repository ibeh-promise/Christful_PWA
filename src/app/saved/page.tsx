"use client";
import { Header } from "@/components/common/Header";
import { BottomNav } from "@/components/common/BottomNav";
import { PageGrid } from "@/components/common/PageGrid";
import { SideNav } from "@/components/features/SideNav";
import { PostCard } from "@/components/common/PostCard";
import { Bookmark, Inbox, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useApi } from "@/hooks/use-api";
import { ENDPOINTS } from "@/lib/api-config";

interface SavedPostResponse {
    posts: any[];
    total: number;
    page: number;
    totalPages: number;
}

export default function SavedPage() {
    const { data, isLoading, error } = useApi<SavedPostResponse>(ENDPOINTS.SAVED_POSTS);

    const savedPosts = data?.posts || [];

    return (
        <div className="min-h-screen bg-[#F0F2F5] pb-20 md:pb-0">
            <Header />
            <PageGrid
                left={<SideNav />}
                center={
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 px-1 mt-2">
                            <div className="bg-white p-2 rounded-xl border shadow-sm">
                                <Bookmark className="h-6 w-6 text-[#800517]" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900">Saved Posts</h1>
                                <p className="text-sm text-slate-500 font-medium">Your spiritual treasury</p>
                            </div>
                        </div>

                        {isLoading ? (
                            <div className="flex flex-col items-center justify-center py-20">
                                <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
                                <p className="text-slate-500 font-medium">Loading your saved treasures...</p>
                            </div>
                        ) : error ? (
                            <Card className="border-none shadow-sm rounded-2xl py-10 bg-white">
                                <CardContent className="flex flex-col items-center text-center">
                                    <p className="text-red-500">Failed to load saved posts.</p>
                                </CardContent>
                            </Card>
                        ) : savedPosts.length > 0 ? (
                            <div className="space-y-4">
                                {savedPosts.map((savedItem: any) => {
                                    const post = savedItem.post || savedItem; // Handle different response shapes
                                    return (
                                        <PostCard
                                            key={post.id}
                                            postId={post.id}
                                            postType={post.mediaType === 'image' || post.imageUrl ? 'image' : post.mediaType === 'video' || post.videoUrl ? 'video' : post.mediaType === 'audio' || post.audioUrl ? 'audio' : 'text'}
                                            authorId={post.userId || post.author?.id}
                                            authorName={post.author?.firstName ? `${post.author.firstName} ${post.author.lastName || ''}` : "User"}
                                            authorAvatar={post.author?.avatarUrl || ""}
                                            date={post.createdAt}
                                            textContent={post.content}
                                            imageUrl={post.imageUrl}
                                            videoUrl={post.videoUrl}
                                            audioUrl={post.audioUrl}
                                            likesCount={post.likes?.length || 0}
                                            commentsCount={post.comments?.length || 0}
                                            isLiked={false} // Would need follow-up to check each post
                                            isSaved={true}
                                        />
                                    );
                                })}
                            </div>
                        ) : (
                            <Card className="border-none shadow-sm rounded-2xl py-20 bg-white">
                                <CardContent className="flex flex-col items-center text-center">
                                    <div className="h-20 w-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                                        <Inbox className="h-10 w-10 text-slate-200" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">No saved items</h3>
                                    <p className="text-slate-500 text-sm max-w-xs">Save posts from the feed to access them quickly here later.</p>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                }
            />
            <BottomNav />
        </div>
    );
}
