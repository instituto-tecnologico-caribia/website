"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlayCircle, TrendingUp, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
	const { translations } = useLanguage()

	return (
		<section className="relative overflow-hidden bg-secondary/30">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
					<div className="relative z-10">
						<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
							<span className="text-xs font-semibold uppercase tracking-wider text-primary">
								Institute of Technology Caribia
							</span>
						</div>
						<h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
							{translations.hero.title1} <span className="text-primary">{translations.hero.title2}</span>.
							<br />
							{translations.hero.title3} <span className="text-primary">{translations.hero.title4}</span>.
						</h1>
						<p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
							{translations.hero.description}
						</p>
						<div className="mt-5 flex items-center gap-4">
							<div>
								<p className="text-sm font-medium text-foreground">{translations.hero.joinStudents}</p>
								<div className="flex items-center">
									<div className="flex -space-x-2">
										{[1, 2, 3, 4].map((i) => (
											<div
												key={i}
												className="h-8 w-8 rounded-full border-2 border-card bg-muted"
												style={{ backgroundColor: `hsl(${i * 60}, 40%, 80%)` }}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="relative">
						<div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
							<Image
								src="/images/hero-students.jpg"
								alt="Students collaborating on laptops in a modern study space"
								fill
								className="object-cover"
								priority
							/>
						</div>
						<div className="absolute -bottom-6 md:-left-6 left-0 rounded-xl border border-border bg-card p-4 shadow-lg sm:p-5">
							<div className="flex items-center gap-3">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
									<TrendingUp className="h-6 w-6 text-emerald-600" />
								</div>
								<div>
									<p className="text-2xl font-bold text-foreground">94%</p>
									<p className="text-xs font-medium tracking-wide text-muted-foreground">
										{translations.hero.employmentRate}
									</p>
									<p className="text-xs text-muted-foreground">{translations.hero.afterGraduation}</p>
								</div>
							</div>
						</div>
						<div className="absolute md:-right-4 right-0 p-6 -top-4 rounded-xl border border-border bg-card p-4 shadow-lg">
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
									<Users className="h-5 w-5 text-primary" />
								</div>
								<div>
									<p className="text-lg font-bold text-foreground">120+</p>
									<p className="text-xs text-muted-foreground">{translations.hero.expertMentors}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
