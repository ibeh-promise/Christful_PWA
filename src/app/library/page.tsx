"use client";
import { Header } from "@/components/common/Header";
import { BottomNav } from "@/components/common/BottomNav";
import { PageGrid } from "@/components/common/PageGrid";
import { SideNav } from "@/components/features/SideNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Bookmark, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const BIBLE_VERSIONS = [
    { id: "kjv", name: "King James Version (KJV)", description: "Classic English translation" },
    { id: "niv", name: "New International Version (NIV)", description: "Modern, easy to read" },
    { id: "esv", name: "English Standard Version (ESV)", description: "Literal translation" },
    { id: "nlt", name: "New Living Translation (NLT)", description: "Thought-for-thought" },
];

const CHRISTIAN_BOOKS = [
    { id: "1", title: "The Pursuit of God", author: "A.W. Tozer", cover: "/books/tozer.jpg" },
    { id: "2", title: "Mere Christianity", author: "C.S. Lewis", cover: "/books/lewis.jpg" },
    { id: "3", title: "Purpose Driven Life", author: "Rick Warren", cover: "/books/warren.jpg" },
    { id: "4", title: "Knowledge of the Holy", author: "A.W. Tozer", cover: "/books/tozer2.jpg" },
];

export default function LibraryPage() {
    return (
        <div className="min-h-screen bg-[#F0F2F5] pb-20 md:pb-0">
            <Header />
            <PageGrid
                left={<SideNav />}
                center={
                    <div className="space-y-6">
                        <Card className="border-none shadow-sm rounded-xl overflow-hidden bg-[#800517] text-white">
                            <CardContent className="p-8 flex flex-col items-center text-center">
                                <Book className="h-16 w-16 mb-4 opacity-80" />
                                <h1 className="text-3xl font-bold mb-2">Kingdom Library</h1>
                                <p className="opacity-80 max-w-md">Access sacred scriptures and inspired literature to grow in your faith.</p>
                            </CardContent>
                        </Card>

                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input placeholder="Search books or versions..." className="pl-10 rounded-xl bg-white border-none shadow-sm h-12" />
                        </div>

                        <section>
                            <div className="flex items-center gap-2 mb-4">
                                <Bookmark className="h-5 w-5 text-[#800517]" />
                                <h2 className="text-xl font-bold text-slate-900">Bible Versions</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {BIBLE_VERSIONS.map((v) => (
                                    <Card key={v.id} className="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer rounded-xl group">
                                        <CardHeader className="p-4">
                                            <CardTitle className="text-base group-hover:text-[#800517] transition-colors">{v.name}</CardTitle>
                                            <p className="text-xs text-slate-500">{v.description}</p>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-2 mb-4">
                                <Book className="h-5 w-5 text-[#800517]" />
                                <h2 className="text-xl font-bold text-slate-900">Christian Classics</h2>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {CHRISTIAN_BOOKS.map((b) => (
                                    <div key={b.id} className="flex flex-col gap-2 group cursor-pointer">
                                        <div className="aspect-[3/4] bg-slate-200 rounded-xl shadow-sm border border-slate-100 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                                <Book className="text-white opacity-0 group-hover:opacity-100 h-8 w-8" />
                                            </div>
                                        </div>
                                        <div className="px-1">
                                            <h3 className="font-bold text-sm text-slate-900 truncate">{b.title}</h3>
                                            <p className="text-xs text-slate-500">{b.author}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                }
            />
            <BottomNav />
        </div>
    );
}
