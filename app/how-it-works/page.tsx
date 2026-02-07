"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { CTAForm } from "@/components/cta-form"


export default function HowItWorksPage() {
	const { translations, locale } = useLanguage()
	return (
		<>
			<Header />
			<main className="min-h-screen lg:pt-0 pt-15 bg-background">
				{/* Three Steps Section */}
				<section className="pb-16 sm:pb-15 lg:py-15">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<h2 className="font-serif capitalize text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
								{translations.howItWork.title}
							</h2>
							<p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
								{translations.howItWork.description}
							</p>
						</div>

						<div className="mt-16 space-y-24">
							{translations.howItWork.phases.map((step, index) => (
								<div
									key={step.number}
									className={`flex flex-col items-center gap-12 lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
									<div className="flex-1">
										<div className="inline-flex items-center gap-3">
											<span className="text-5xl font-bold text-primary/20">
												{step.number}
											</span>
											<div className="h-px w-12 bg-primary/30" />
										</div>
										<h3 className="mt-4 font-serif text-2xl font-bold text-foreground sm:text-3xl">
											{step.title}
										</h3>
										<p className="mt-4 text-lg leading-relaxed text-muted-foreground">
											{step.description}
										</p>
										<ul className="mt-6 space-y-3">
											{step.features.map((feature) => (
												<li key={feature} className="flex items-center gap-3">
													<CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
													<span className="text-foreground">{feature}</span>
												</li>
											))}
										</ul>
									</div>
									<div className="relative flex-1">
										<div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
											<Image
												src={step.image || "/placeholder.svg"}
												alt={step.title}
												fill
												className="object-cover"
											/>
										</div>
										<div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-primary/10" />
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Learning Methodology */}
				<section className="bg-secondary/30 py-16 sm:py-20 lg:py-24">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
								{translations.howItWork.learningLoop.title}
							</h2>
							<p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
								{translations.howItWork.learningLoop.description}
							</p>
						</div>

						<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{translations.howItWork.learningLoop.methodology.map((item, index) => (
								<Card key={item.title} className="border-border bg-card">
									<CardContent>
										<div className="flex items-start gap-4">
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
												<item.icon className="h-5 w-5" />
											</div>
											<div>
												<div className="flex items-center gap-2">
													<span className="text-xs font-semibold text-primary">
														{locale === "en" ? "Step" : "Paso"} {index + 1}
													</span>
												</div>
												<h3 className="mt-1 font-semibold text-foreground">
													{item.title}
												</h3>
												<p className="mt-2 text-sm text-muted-foreground">
													{item.description}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				<CTAForm/>				
			</main>
			<Footer />
		</>
	)
}
