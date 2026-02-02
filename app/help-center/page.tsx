"use client"

import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, Play, Clock, Calendar, } from "lucide-react"


export default function HelpCenterPage() {
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
				{/* Hero Section with Search */}
				<section className="relative  overflow-hidden bg-gradient-to-b from-muted/50 to-background pb-16 pt-20">
					{/* Background Pattern */}
					<div className="absolute inset-0 opacity-30">
						<div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
						<div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
					</div>

					<div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
						<h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
							{translations.helpCenter.heroTitle}{" "}
							<span className="text-primary">{translations.helpCenter.heroTitleHighlight}</span>
						</h1>
						<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
							{translations.helpCenter.heroDescription}
						</p>

						<div className="mt-8 flex flex-wrap gap-4 sm:justify-center">
							<Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
								<a href="#apply">
									{translations.admissions.startApplication}
									<ArrowRight className="ml-2 h-5 w-5" />
								</a>
							</Button>
							<Button size="lg" variant="outline" className="border-border bg-transparent" asChild>
								<a href="#schedule">
									<Calendar className="mr-2 h-5 w-5" />
									{translations.admissions.scheduleCall}
								</a>
							</Button>
						</div>
					</div>
				</section>

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
							<Link href="/tutorials" className="group">
								<Button variant="outline" className="hidden bg-transparent sm:flex">
									{translations.helpCenter.viewAllVideos}
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
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
										<div className="absolute bottom-3 right-3 flex items-center gap-1 rounded bg-foreground/80 px-2 py-1 text-xs font-medium text-white">
											<Clock className="h-3 w-3" />
											{video.duration}
										</div>
									</div>
									<h3 className="mt-3 font-medium text-foreground group-hover:text-primary">
										{video.title}
									</h3>
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
