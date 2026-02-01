"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock } from "lucide-react"
import { programs } from "@/lib/translations/programs"
import { useLanguage } from "@/lib/language-context"

export function Programs() {
	const { translations, locale } = useLanguage()

	return (
		<section id="programs" className="bg-background py-16 sm:py-20 lg:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						{translations.header.links.programs.name}
					</h2>
					<p className="mt-4 text-lg leading-relaxed text-muted-foreground">
						{translations.programs.description}
					</p>
				</div>

				<div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{Object.values(programs[locale]).map((program) => (
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
								<CardFooter style={{height: 60}} className="absolute w-full bottom-0 border-t border-border px-6 py-6">
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
	)
}
