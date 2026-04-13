"use client"

import { useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Clock, Award, CheckCircle2, PhoneCall, ArrowRight, GraduationCapIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import { translations } from "@/lib/translations"
import { programs, slug } from "@/lib/translations/programs"
import { useLanguage } from "@/lib/language-context"
import { SCHEDULER_CALL_URL } from "@/constants"

export default function ProgramPage() {
	const { locale } = useLanguage()
	const router = useRouter()
	const params = useParams()

	const programSlug = slug[locale]
	const program = Object.values(programs[locale]).find((p) => p.slug === params.slug)
	const otherPrograms = Object.values(programs[locale]).filter((p) => p.slug !== params.slug).slice(0, 2)

	// Redirect if program does not exist
	useEffect(() => {
		if (!program) {
			router.replace("/programs")
		}
	}, [program, router])

	if (!program) return null

	return (
		<main className="min-h-screen bg-background">
			<Header showApply={false} />

			{/* Hero Section */}
			<section className="relative mb-5 justify-between">
				<div className={`absolute inset-0 ${program.slug === "artificial-intelligence-data-science" ? "h-[550px]" : "h-[500px]"} md:h-[500px]`}>
					<Image
						style={{ width: "100%", height: "100%", background: "red" }}
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
							<Link href={SCHEDULER_CALL_URL} target="_blank">
								<Button type="submit" size="lg" className="gap-2 mt-3 shadow-xl hover:bg-primary/90 hover:cursor-pointer">
									<PhoneCall className="h-5 w-5" />
									{translations[locale].admissions.scheduleCall}
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Overview */}
			<section className="pb-16 md:mt-0">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-3">
					<div className="lg:col-span-2">
						<h2 className="font-serif text-2xl font-bold sm:text-3xl">
							{programSlug.overview}
						</h2>

						<p className="mt-6 text-lg text-muted-foreground">
							{program.fullDescription}
						</p>

						<h3 className="mt-12 text-xl font-semibold">
							{programSlug.subTitle}
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
							<h3 className="text-lg font-semibold">{programSlug.overview}</h3>

							<div className="flex justify-between">
								<span>{programSlug.duration}</span>
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

							<Link href={"/admissions/apply"}>
								<Button className="w-full mt-4">{translations[locale].admissions.startApplication}</Button>
							</Link>
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
										<div className="flex-1 h-[120px]">
											<Badge className={`${p.tagColor}`}>
												{p.tag}
											</Badge>
											<h3 className="mt-2 font-semibold">
												{p.name}
											</h3>
											<p className="text-sm text-muted-foreground">
												{p.duration}
											</p>
											<span className="flex lg:hidden text-primary mt-3 font-semibold items-center gap-1">
												{translations[locale].programs.viewDetails}
												<ArrowRight className="h-4 w-4  transition-transform group-hover:translate-x-1" />
											</span>
										</div>
										<span className="hidden lg:flex text-primary mt-3 font-semibold items-center gap-1">
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
