"use client"

import { useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Clock, Award, CheckCircle2, PhoneCall, ChevronRight, ArrowRight, GraduationCapIcon, } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import { translations } from "@/lib/translations"
import { programs } from "@/lib/translations/programs"
import { useLanguage } from "@/lib/language-context"

export default function ProgramPage() {
	const { locale } = useLanguage()
	const router = useRouter()
	const params = useParams()

	const slug = params.slug as string

	const program = Object.values(programs[locale]).find((p) => p.slug === slug)
	const otherPrograms = Object.values(programs[locale])
		.filter((p) => p.slug !== slug)
		.slice(0, 2)

	// Redirect if program does not exist
	useEffect(() => {
		if (!program) {
			router.replace("/programs")
		}
	}, [program, router])

	if (!program) return null

	return (
		<main className="min-h-screen bg-background">
			<Header />

			{/* Hero Section */}
			<section className="relative">
				<div className="absolute inset-0 h-[400px] sm:h-[500px]">
					<Image
						src={program.image || "/placeholder.svg"}
						alt={program.name}
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/90" />
				</div>

				<div className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
					<div className="mt-12 pb-24 sm:mt-16 sm:pb-32">
						<Badge className={`${program.tagColor} border-0 text-primary-foreground`}>
							{program.tag}
						</Badge>

						<h1 className="mt-4 text-4xl font-bold tracking-tight text-card sm:text-5xl lg:text-6xl">
							{program.name}
						</h1>

						<p className="mt-6 text-lg max-w-xl leading-relaxed text-card/90 sm:text-xl">
							{program.description}
						</p>

						<div className="mt-8 flex flex-wrap items-center gap-6">
							<div className="flex items-center gap-2 text-card/80">
								<Clock className="h-5 w-5" />
								<span className="sm:display-none">{program.duration}</span>
							</div>
							<div className="flex items-center gap-2 text-card/80">
								<Award className="h-5 w-5" />
								<span>{program.certification}</span>
							</div>
						</div>

						<div className="mt-10 flex flex-wrap gap-4">
							<Button size="lg" variant="outline">
								<PhoneCall /> Programa una Llamada
							</Button>
							<Button size="lg">Ver Curriculum</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Overview */}
			<section className="pb-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-3">
					<div className="lg:col-span-2">
						<h2 className="font-serif text-2xl font-bold sm:text-3xl">
							Program Overview
						</h2>

						<p className="mt-6 text-lg text-muted-foreground">
							{program.fullDescription}
						</p>

						<h3 className="mt-12 text-xl font-semibold">
							What You&apos;ll Gain
						</h3>

						<ul className="mt-6 grid gap-4 sm:grid-cols-2">
							{program.highlights.map((highlight) => (
								<li key={highlight} className="flex gap-3">
									<CheckCircle2 className="h-5 w-5 text-primary" />
									<span>{highlight}</span>
								</li>
							))}
						</ul>
					</div>

					<Card className="sticky top-24 h-fit">
						<CardContent className="p-6 space-y-4">
							<h3 className="text-lg font-semibold">Program Details</h3>

							<div className="flex justify-between">
								<span>Duración</span>
								<span>{program.duration}</span>
							</div>

							<div className="flex justify-between">
								<span>Precio</span>
								<span>{program.tuition} mensual</span>
							</div>

							<div className="flex items-center gap-2">
								<GraduationCapIcon />
								<span>{program.certification}</span>
							</div>

							<Button className="w-full mt-4">Aplicar ahora</Button>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Other Programs */}
			<section className="py-16">
				<div className="mx-auto max-w-7xl px-4">
					<h2 className="font-serif text-2xl font-bold sm:text-3xl">
						{translations[locale].programs.exploreMore}
					</h2>

					<div className="mt-8 grid gap-6 sm:grid-cols-2">
						{otherPrograms.map((p) => (
							<Link key={p.slug} href={`/programs/${p.slug}`}>
								<Card className="group hover:shadow-lg">
									<CardContent className="flex gap-6 p-6">
										<Image
											src={p.image || "/placeholder.svg"}
											alt={p.title}
											width={80}
											height={80}
											className="rounded-lg object-cover"
										/>
										<div className="flex-1">
											<Badge className={`${p.tagColor}`}>
												{p.tag}
											</Badge>
											<h3 className="mt-2 font-semibold">
												{p.name}
											</h3>
											<p className="text-sm text-muted-foreground">
												{p.duration}
											</p>
										</div>
										<span className="flex text-primary font-semibold items-center gap-1">
											{translations[locale].programs.viewDetails}
											<ArrowRight className="h-4 w-4  transition-transform group-hover:translate-x-1" />
										</span>
									</CardContent>
								</Card>
							</Link>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</main>
	)
}
