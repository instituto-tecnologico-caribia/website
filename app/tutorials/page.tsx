"use client"

import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, Play, Clock, } from "lucide-react"

export default function TutorialsPage() {
    const { translations } = useLanguage()

    const videos = [
        {
            title: translations.helpCenter.video1Title,
            duration: translations.helpCenter.video1Duration,
            thumbnail: "/images/hero-students.jpg",
        },
        {
            title: translations.helpCenter.video2Title,
            duration: translations.helpCenter.video2Duration,
            thumbnail: "/images/program-software.jpg",
        },
        {
            title: translations.helpCenter.video3Title,
            duration: translations.helpCenter.video3Duration,
            thumbnail: "/images/feature-collab.jpg",
        },
    ]

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background">
                {/* Video Tutorials */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">
                                    {translations.helpCenter.videosTitle}
                                </h2>
                                <p className="mt-2 text-muted-foreground">
                                    {translations.helpCenter.videosDescription}
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                            {videos.map((video, index) => (
                                <Link key={index} href="#" className="group">
                                    <div className="relative aspect-video overflow-hidden rounded-xl">
                                        <Image
                                            src={video.thumbnail || "/placeholder.svg"}
                                            alt={video.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-foreground/40 transition-colors group-hover:bg-foreground/50" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                                                <Play className="h-6 w-6 fill-primary text-primary" />
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="w-full font-bold text-white left-3 absolute bottom-3">
                                                {video.title}
                                            </h1>
                                            <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded bg-foreground/80 px-2 py-1 text-xs font-medium text-white">
                                                <Clock className="h-3 w-3" />
                                                {video.duration}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-8 text-center sm:hidden">
                            <Button variant="outline" className="bg-transparent">
                                {translations.helpCenter.viewAllVideos}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}