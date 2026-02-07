"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Clock, ArrowRight, GraduationCap, Heart, Sparkles, Phone, MessageCircle, Calendar, FileText, Users, Award } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SCHEDULER_CALL_URL } from "@/constants"

const cohorts = [
	{ name: "Primavera 2026", nameEn: "Spring 2026", start: "15 de Marzo, 2026", startEn: "March 15, 2026", deadline: "28 de Febrero, 2026", deadlineEn: "February 28, 2026", spots: 45 },
	{ name: "Verano 2026", nameEn: "Summer 2026", start: "1 de Junio, 2026", startEn: "June 1, 2026", deadline: "15 de Mayo, 2026", deadlineEn: "May 15, 2026", spots: 60 },
	{ name: "Otono 2026", nameEn: "Fall 2026", start: "1 de Septiembre, 2026", startEn: "September 1, 2026", deadline: "15 de Agosto, 2026", deadlineEn: "August 15, 2026", spots: 60 },
]

export default function AdmissionsPage() {
	const { translations, locale } = useLanguage()

	return (
		<>
			<Header />
			<main className="bg-background md:min-h-screen">
				<div className="mx-auto grid md:min-h-[85vh] max-w-7xl lg:grid-cols-2">
					<div className="flex flex-col lg:justify-center px-4 py-16 sm:px-6 lg:px-12 lg:py-24">
						<Badge className=" text-1xl w-fit bg-primary/10 text-primary hover:bg-primary/10">
							{translations.admissions.heroLabel}
						</Badge>
						<h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl">
							{translations.admissions.heroTitle}{" "}
							<span className="relative">
								<span className="text-primary">{translations.admissions.heroTitleHighlight}</span>
								<svg className="absolute -bottom-2 left-0 h-3 w-full" viewBox="0 0 200 12" fill="none">
									<path d="M2 10C50 4 150 4 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30" />
								</svg>
							</span>
						</h1>
						<p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
							{translations.admissions.heroDescription}
						</p>

						<div className="mt-8 flex flex-wrap gap-4">
							<Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
								<a href="/admissions/apply">
									{translations.admissions.startApplication}
									<ArrowRight className="ml-2 h-5 w-5" />
								</a>
							</Button>
							<Button size="lg" variant="outline" className="border-border bg-transparent" asChild>
								<Link href={SCHEDULER_CALL_URL} target="_blank">
									<Calendar className="mr-2 h-5 w-5" />
									{translations.admissions.scheduleCall}
								</Link>
							</Button>
						</div>

						{/* Trust Indicators */}
						<div className="mt-12 flex flex-wrap items-center gap-6 border-t border-border pt-8">
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
									<Users className="h-5 w-5 text-primary" />
								</div>
								<div>
									<div className="text-2xl font-bold text-foreground">5,000+</div>
									<div className="text-sm text-muted-foreground">{locale === "es" ? "Estudiantes" : "Students"}</div>
								</div>
							</div>
							<div className="h-10 w-px bg-border" />
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
									<Award className="h-5 w-5 text-primary" />
								</div>
								<div>
									<div className="text-2xl font-bold text-foreground">94%</div>
									<div className="text-sm text-muted-foreground">{locale === "es" ? "Tasa de Empleo" : "Employment Rate"}</div>
								</div>
							</div>
						</div>
					</div>

					<div className="relative hidden lg:block">
						<div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/50" />
						<Image
							src="/images/admissions-student.jpg"
							alt="Student success"
							fill
							className="object-cover pt-16"
							priority
						/>
						{/* Floating Cohort Card */}
						<div className="absolute bottom-12 left-8 right-8 rounded-2xl border border-border bg-card/95 p-6 shadow-2xl backdrop-blur-sm">
							<div className="mb-4 flex items-center justify-between">
								<h3 className="font-semibold text-foreground">{translations.admissions.upcomingCohorts}</h3>
								<Badge variant="secondary" className="bg-primary/10 text-primary">{locale === "es" ? "Inscripciones Abiertas" : "Applications Open"}</Badge>
							</div>
							<div className="space-y-3">
								{cohorts.slice(0, 2).map((cohort) => (
									<div key={cohort.name} className="flex items-center justify-between rounded-lg bg-muted/50 px-4 py-3">
										<div>
											<div className="font-medium text-foreground">{locale === "es" ? cohort.name : cohort.nameEn}</div>
											<div className="text-xs text-muted-foreground">{translations.admissions.starts} {locale === "es" ? cohort.start : cohort.startEn}</div>
										</div>
										<div className="text-right">
											<div className="text-sm font-semibold text-primary">{cohort.spots} {translations.admissions.spots}</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}
