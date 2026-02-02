'use client';

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Award, Users, Filter, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { programs } from "@/lib/translations/programs"
import { useLanguage } from "@/lib/language-context"

export default function ProgramsPage() {
	const { locale, translations } = useLanguage()
	const allPrograms = Object.values(programs[locale])

	return (
		<>
			<Header />
			<main className="min-h-screen bg-background">
				{/* Hero Section */}
				<section className="relative overflow-hidden bg-foreground py-20 sm:py-28">
					<div className="absolute inset-0 opacity-10">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_40%)]" />
					</div>
					<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="max-w-3xl">
							<Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-foreground">
								{translations.allPrograms.badge}
							</Badge>
							<h1 className="font-serif capitalize text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
								{translations.allPrograms.title1}
								<span className="gradient-text">{translations.allPrograms.title2}</span>
							</h1>
							<p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
								{translations.allPrograms.description}
							</p>
						</div>
					</div>
				</section>

				{/* Programs Grid */}
				<section className="py-15 sm:py-15">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
							<div>
								<h2 className="text-2xl font-semibold text-foreground">
									{translations.allPrograms.title3}
								</h2>
								<p className="mt-1 text-muted-foreground">
									{allPrograms.length} {translations.allPrograms.length}
								</p>
							</div>
						</div>

						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{allPrograms.map((program) => (
								<Link key={program.slug} href={`/programs/${program.slug}`} className="group block">
									<Card className="h-full py-0 overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-xl">
										<div className="relative  aspect-[16/10] overflow-hidden">
											<Image
												src={program.image || "/placeholder.svg"}
												alt={program.title}
												fill
												className="object-cover transition-transform duration-500 group-hover:scale-105"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
											<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
												<Badge className={`${program.tagColor} text-primary-foreground`}>
													{program.tag}
												</Badge>
												<div className="flex items-center gap-1.5 rounded-full bg-card/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
													<Clock className="h-3.5 w-3.5" />
													{program.duration}
												</div>
											</div>
										</div>
										<CardContent className="p-5">
											<h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
												{program.title}
											</h3>
											<p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
												{program.description}
											</p>
											<div className="mt-4 flex justify-center border-t border-border pt-4">												
												<div className="flex items-center gap-1 font-semibold text-sm font-medium text-primary">													
													{translations.programs.viewDetails}
													<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
												</div>
											</div>
										</CardContent>
									</Card>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="border-border bg-muted/50 py-16 sm:py-20">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex flex-col items-center text-center">
							<h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
								{translations.cta.program.title}
							</h2>
							<p className="mt-4 max-w-2xl text-muted-foreground">
								{translations.cta.program.description}
							</p>
							<div className="mt-8 flex flex-wrap justify-center gap-4">
								<Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
									<Calendar className="h-5 w-5" />
									{translations.cta.program.call}
								</Button>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
