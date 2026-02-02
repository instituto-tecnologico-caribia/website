'use client';

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Award, Users, Filter, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { programs } from "@/lib/translations/programs"
import { useLanguage } from "@/lib/language-context"
import { SCHEDULER_CALL_URL } from "@/constants";

export default function ProgramsPage() {
	const { locale, translations } = useLanguage()
	const allPrograms = Object.values(programs[locale])

	return (
		<>
			<Header />
			<main className="min-h-screen bg-background">
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
								<Link key={program.slug} href={`/programs/${program.slug}`} className="block">
									<Card className="relative group h-full py-0 pb-16 overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-xl">
										<div className="relative aspect-[16/10] overflow-hidden">
											<Image
												src={program.image || "/placeholder.svg"}
												alt={program.name}
												fill
												className="object-cover transition-transform duration-500 group-hover:scale-105"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
											<div className="absolute bottom-4 px-3 w-full flex  justify-between">
												<Badge className={`bg-emerald-600 border-0 text-primary-foreground`}>
													{program.tag}
												</Badge>
												<div className="flex items-center gap-1 text-xs text-card">
													<Clock className="h-3.5 w-3.5" />
													{program.duration}
												</div>
											</div>
										</div>
										<CardContent className="p-6">
											<h3 className="text-xl font-semibold text-foreground">
												{program.name}
											</h3>
											<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
												{program.description}
											</p>
										</CardContent>
										<CardFooter style={{ height: 60 }} className="absolute w-full bottom-0 border-t border-border px-6 py-6">
											<span className="group/btn w-full flex items-center justify-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80">
												{translations.programs.viewDetails}
												<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
											</span>
										</CardFooter>
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
								<Link href={SCHEDULER_CALL_URL} target="_blank">
									<Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
										<Calendar className="h-5 w-5" />
										{translations.cta.program.call}
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
