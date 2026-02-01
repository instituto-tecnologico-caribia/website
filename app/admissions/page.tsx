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

const cohorts = [
	{ name: "Primavera 2026", nameEn: "Spring 2026", start: "15 de Marzo, 2026", startEn: "March 15, 2026", deadline: "28 de Febrero, 2026", deadlineEn: "February 28, 2026", spots: 45 },
	{ name: "Verano 2026", nameEn: "Summer 2026", start: "1 de Junio, 2026", startEn: "June 1, 2026", deadline: "15 de Mayo, 2026", deadlineEn: "May 15, 2026", spots: 60 },
	{ name: "Otono 2026", nameEn: "Fall 2026", start: "1 de Septiembre, 2026", startEn: "September 1, 2026", deadline: "15 de Agosto, 2026", deadlineEn: "August 15, 2026", spots: 60 },
]

export default function AdmissionsPage() {
	const { translations, locale } = useLanguage()

	const timeline = [
		{ step: 1, title: translations.admissions.step1Title, description: translations.admissions.step1Description, duration: translations.admissions.step1Duration, icon: FileText },
		{ step: 2, title: translations.admissions.step2Title, description: translations.admissions.step2Description, duration: translations.admissions.step2Duration, icon: Sparkles },
		{ step: 3, title: translations.admissions.step3Title, description: translations.admissions.step3Description, duration: translations.admissions.step3Duration, icon: MessageCircle },
		{ step: 4, title: translations.admissions.step4Title, description: translations.admissions.step4Description, duration: translations.admissions.step4Duration, icon: Award },
	]

	const requirements = [
		{ icon: GraduationCap, title: translations.admissions.educationTitle, description: translations.admissions.educationDescription },
		{ icon: Clock, title: translations.admissions.timeTitle, description: translations.admissions.timeDescription },
		{ icon: Heart, title: translations.admissions.motivationTitle, description: translations.admissions.motivationDescription },
		{ icon: Users, title: translations.admissions.englishTitle, description: translations.admissions.englishDescription },
	]

	const faqs = [
		{ question: translations.admissions.faq1Question, answer: translations.admissions.faq1Answer },
		{ question: translations.admissions.faq2Question, answer: translations.admissions.faq2Answer },
		{ question: translations.admissions.faq3Question, answer: translations.admissions.faq3Answer },
		{ question: translations.admissions.faq4Question, answer: translations.admissions.faq4Answer },
		{ question: translations.admissions.faq5Question, answer: translations.admissions.faq5Answer },
		{ question: translations.admissions.faq6Question, answer: translations.admissions.faq6Answer },
	]

	return (
		<>
			<Header />
			<main className="min-h-screen bg-background">
				{/* Hero Section - Split Layout */}
				<section className="relative overflow-hidden">
					<div className="mx-auto grid min-h-[85vh] max-w-7xl lg:grid-cols-2">
						{/* Left Content */}
						<div className="flex flex-col justify-center px-4 py-16 sm:px-6 lg:px-12 lg:py-24">
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

							{/* Trust Indicators */}
							<div className="mt-12 flex flex-wrap items-center gap-6 border-t border-border pt-8">
								<div className="flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
										<Users className="h-5 w-5 text-primary" />
									</div>
									<div>
										<div className="text-2xl font-bold text-foreground">15,000+</div>
										<div className="text-sm text-muted-foreground">{locale === "es" ? "Graduados" : "Graduates"}</div>
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

						{/* Right Image */}
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
									<Badge variant="secondary" className="bg-primary/10 text-primary">{locale === "es" ? "Inscripciones Abiertas" : "Now Enrolling"}</Badge>
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
				</section>

				{/* Mobile Cohorts */}
				<section className="border-b border-border bg-muted/30 py-8 lg:hidden">
					<div className="mx-auto max-w-7xl px-4 sm:px-6">
						<h3 className="mb-4 font-semibold text-foreground">{translations.admissions.upcomingCohorts}</h3>
						<div className="flex gap-4 overflow-x-auto pb-2">
							{cohorts.map((cohort) => (
								<div key={cohort.name} className="min-w-[200px] rounded-xl border border-border bg-card p-4">
									<div className="font-medium text-foreground">{locale === "es" ? cohort.name : cohort.nameEn}</div>
									<div className="mt-1 text-sm text-muted-foreground">{locale === "es" ? cohort.start : cohort.startEn}</div>
									<div className="mt-2 text-sm font-semibold text-primary">{cohort.spots} {translations.admissions.spots}</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Application Timeline - Horizontal */}
				<section className="py-20 sm:py-28">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-2xl text-center">
							<h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
								{translations.admissions.applicationProcess}
							</h2>
							<p className="mt-4 text-muted-foreground">
								{translations.admissions.timelineDescription}
							</p>
						</div>

						{/* Timeline */}
						<div className="relative mt-16">
							{/* Connection Line */}
							<div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 lg:block" />

							<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
								{timeline.map((item) => (
									<div key={item.step} className="relative flex flex-col items-center text-center">
										{/* Step Circle */}
										<div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/25">
											<item.icon className="h-7 w-7 text-primary-foreground" />
										</div>

										{/* Content */}
										<div className="mt-6">
											<div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
												<Clock className="h-3 w-3" />
												{item.duration}
											</div>
											<h3 className="text-lg font-semibold text-foreground">
												{item.title}
											</h3>
											<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
												{item.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Requirements - Bento Style */}
				<section className="bg-muted/30 py-20 sm:py-28">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="grid gap-12 lg:grid-cols-5">
							{/* Left Text */}
							<div className="lg:col-span-2">
								<h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
									{translations.admissions.requirementsTitle}
								</h2>
								<p className="mt-4 text-muted-foreground">
									{translations.admissions.requirementsDescription}
								</p>
								<Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
									<a href="#apply">
										{translations.admissions.startApplication}
										<ArrowRight className="ml-2 h-4 w-4" />
									</a>
								</Button>
							</div>

							{/* Right Grid */}
							<div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
								{requirements.map((req, index) => (
									<div
										key={req.title}
										className={`rounded-2xl border border-border bg-card p-6 ${index === 0 ? "sm:col-span-2" : ""}`}
									>
										<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
											<req.icon className="h-6 w-6 text-primary" />
										</div>
										<h3 className="text-lg font-semibold text-foreground">{req.title}</h3>
										<p className="mt-2 text-sm leading-relaxed text-muted-foreground">{req.description}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Tuition - Cards with Accent */}
				<section className="py-20 sm:py-28">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-2xl text-center">
							<h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
								{translations.admissions.tuitionTitle}
							</h2>
							<p className="mt-4 text-muted-foreground">
								{translations.admissions.tuitionDescription}
							</p>
						</div>

						<div className="mt-12 grid gap-6 lg:grid-cols-3">
							{/* Upfront */}
							<Card className="relative overflow-hidden border-border bg-card">
								<CardContent className="p-8">
									<div className="text-sm font-medium text-muted-foreground">{translations.admissions.upfrontTitle}</div>
									<div className="mt-2 flex items-baseline gap-2">
										<span className="text-4xl font-bold text-foreground">{translations.admissions.upfrontPrice}</span>
									</div>
									<Badge className="mt-3 bg-primary/10 text-primary hover:bg-primary/10">{translations.admissions.upfrontDiscount}</Badge>
									<p className="mt-4 text-sm text-muted-foreground">{translations.admissions.upfrontDescription}</p>
									<ul className="mt-6 space-y-3">
										<li className="flex items-center gap-2 text-sm text-foreground">
											<CheckCircle2 className="h-4 w-4 text-primary" />
											{locale === "es" ? "Acceso completo inmediato" : "Immediate full access"}
										</li>
										<li className="flex items-center gap-2 text-sm text-foreground">
											<CheckCircle2 className="h-4 w-4 text-primary" />
											{locale === "es" ? "Sin pagos adicionales" : "No additional payments"}
										</li>
									</ul>
								</CardContent>
							</Card>

							{/* Monthly - Featured */}
							<Card className="relative overflow-hidden border-2 border-primary bg-card shadow-xl shadow-primary/10">
								<div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-primary/10" />
								<div className="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-primary/20" />
								<CardContent className="relative p-8">
									<Badge className="mb-4 bg-primary text-primary-foreground">{locale === "es" ? "Mas Popular" : "Most Popular"}</Badge>
									<div className="text-sm font-medium text-muted-foreground">{translations.admissions.monthlyTitle}</div>
									<div className="mt-2 flex items-baseline gap-2">
										<span className="text-4xl font-bold text-foreground">{translations.admissions.monthlyPrice}</span>
										<span className="text-muted-foreground">/ {translations.admissions.monthlyDuration}</span>
									</div>
									<p className="mt-4 text-sm text-muted-foreground">{translations.admissions.monthlyDescription}</p>
									<ul className="mt-6 space-y-3">
										<li className="flex items-center gap-2 text-sm text-foreground">
											<CheckCircle2 className="h-4 w-4 text-primary" />
											{locale === "es" ? "Pagos flexibles" : "Flexible payments"}
										</li>
										<li className="flex items-center gap-2 text-sm text-foreground">
											<CheckCircle2 className="h-4 w-4 text-primary" />
											{locale === "es" ? "Sin intereses" : "No interest"}
										</li>
										<li className="flex items-center gap-2 text-sm text-foreground">
											<CheckCircle2 className="h-4 w-4 text-primary" />
											{locale === "es" ? "Comienza con $0 de enganche" : "Start with $0 down"}
										</li>
									</ul>
								</CardContent>
							</Card>

							{/* ISA */}
							<Card className="relative overflow-hidden border-border bg-foreground text-primary-foreground">
								<CardContent className="p-8">
									<div className="text-sm font-medium text-primary-foreground/70">{translations.admissions.isaTitle}</div>
									<div className="mt-2 flex items-baseline gap-2">
										<span className="text-4xl font-bold">{translations.admissions.isaPrice}</span>
										<span className="text-primary-foreground/70">/ {translations.admissions.isaDuration}</span>
									</div>
									<p className="mt-4 text-sm text-primary-foreground/70">{translations.admissions.isaDescription}</p>
									<ul className="mt-6 space-y-3">
										<li className="flex items-center gap-2 text-sm">
											<CheckCircle2 className="h-4 w-4 text-primary" />
											{locale === "es" ? "Cero riesgo financiero" : "Zero financial risk"}
										</li>
										<li className="flex items-center gap-2 text-sm">
											<CheckCircle2 className="h-4 w-4 text-primary" />
											{locale === "es" ? "Paga solo si ganas $50k+" : "Pay only if you earn $50k+"}
										</li>
									</ul>
								</CardContent>
							</Card>
						</div>

						{/* Scholarships Banner */}
						<div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-primary/5 p-6 sm:flex-row sm:p-8">
							<div className="flex items-center gap-4">
								<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
									<Sparkles className="h-7 w-7 text-primary" />
								</div>
								<div>
									<h3 className="font-semibold text-foreground">{translations.admissions.scholarshipsTitle}</h3>
									<p className="text-sm text-muted-foreground">{translations.admissions.scholarshipsDescription}</p>
								</div>
							</div>
							<Button variant="outline" className="border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground">
								{translations.admissions.learnMore}
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</div>
					</div>
				</section>

				{/* Application Form - Clean Design */}
				<section id="apply" className="bg-muted/30 py-20 sm:py-28">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="grid gap-12 lg:grid-cols-5">
							{/* Left Info */}
							<div className="lg:col-span-2">
								<h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
									{translations.admissions.formTitle}
								</h2>
								<p className="mt-4 text-muted-foreground">
									{translations.admissions.formDescription}
								</p>

								<div className="mt-8 space-y-4">
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
											<CheckCircle2 className="h-5 w-5 text-primary" />
										</div>
										<div>
											<div className="font-medium text-foreground">{locale === "es" ? "Respuesta en 48 horas" : "Response within 48 hours"}</div>
											<div className="text-sm text-muted-foreground">{locale === "es" ? "Revisamos cada solicitud personalmente" : "We review every application personally"}</div>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
											<CheckCircle2 className="h-5 w-5 text-primary" />
										</div>
										<div>
											<div className="font-medium text-foreground">{locale === "es" ? "Sin costo de aplicacion" : "No application fee"}</div>
											<div className="text-sm text-muted-foreground">{locale === "es" ? "Aplicar es completamente gratis" : "Applying is completely free"}</div>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
											<CheckCircle2 className="h-5 w-5 text-primary" />
										</div>
										<div>
											<div className="font-medium text-foreground">{locale === "es" ? "Soporte dedicado" : "Dedicated support"}</div>
											<div className="text-sm text-muted-foreground">{locale === "es" ? "Un asesor te guiara en el proceso" : "An advisor will guide you through"}</div>
										</div>
									</div>
								</div>
							</div>

							{/* Right Form */}
							<div className="lg:col-span-3">
								<Card className="border-border bg-card shadow-xl">
									<CardContent className="p-6 sm:p-8">
										<form className="space-y-6">
											<div className="grid gap-6 sm:grid-cols-2">
												<div className="space-y-2">
													<Label htmlFor="firstName">{translations.admissions.firstName}</Label>
													<Input id="firstName" placeholder="John" className="bg-background" />
												</div>
												<div className="space-y-2">
													<Label htmlFor="lastName">{translations.admissions.lastName}</Label>
													<Input id="lastName" placeholder="Doe" className="bg-background" />
												</div>
											</div>

											<div className="grid gap-6 sm:grid-cols-2">
												<div className="space-y-2">
													<Label htmlFor="email">{translations.admissions.emailAddress}</Label>
													<Input id="email" type="email" placeholder="john@example.com" className="bg-background" />
												</div>
												<div className="space-y-2">
													<Label htmlFor="phone">{translations.admissions.phoneNumber}</Label>
													<Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-background" />
												</div>
											</div>

											<div className="grid gap-6 sm:grid-cols-2">
												<div className="space-y-2">
													<Label htmlFor="program">{translations.admissions.programOfInterest}</Label>
													<Select>
														<SelectTrigger className="bg-background">
															<SelectValue placeholder={translations.admissions.selectProgram} />
														</SelectTrigger>
														<SelectContent>
															<SelectItem value="software">{translations.programs.softwareEngineering}</SelectItem>
															<SelectItem value="data">{translations.programs.aiDataScience}</SelectItem>
															<SelectItem value="english">{translations.programs.englishImmersive}</SelectItem>
														</SelectContent>
													</Select>
												</div>
												<div className="space-y-2">
													<Label htmlFor="cohort">{translations.admissions.preferredStartDate}</Label>
													<Select>
														<SelectTrigger className="bg-background">
															<SelectValue placeholder={translations.admissions.selectCohort} />
														</SelectTrigger>
														<SelectContent>
															{cohorts.map((cohort) => (
																<SelectItem key={cohort.name} value={cohort.name}>
																	{locale === "es" ? cohort.name : cohort.nameEn}
																</SelectItem>
															))}
														</SelectContent>
													</Select>
												</div>
											</div>

											<div className="space-y-2">
												<Label htmlFor="motivation">{translations.admissions.motivationQuestion}</Label>
												<Textarea
													id="motivation"
													placeholder={translations.admissions.motivationPlaceholder}
													rows={4}
													className="bg-background"
												/>
											</div>

											<Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
												{translations.admissions.submitApplication}
												<ArrowRight className="ml-2 h-5 w-5" />
											</Button>

											<p className="text-center text-xs text-muted-foreground">
												{translations.admissions.termsAgreement}{" "}
												<Link href="#" className="underline hover:text-foreground">{translations.admissions.termsOfService}</Link>{" "}
												{translations.admissions.and}{" "}
												<Link href="#" className="underline hover:text-foreground">{translations.admissions.privacyPolicy}</Link>.
											</p>
										</form>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>

				{/* FAQs */}
				<section className="py-20 sm:py-28">
					<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
								{translations.admissions.faqTitle}
							</h2>
							<p className="mt-4 text-muted-foreground">
								{translations.admissions.faqDescription}
							</p>
						</div>

						<Accordion type="single" collapsible className="mt-12">
							{faqs.map((faq, index) => (
								<AccordionItem key={index} value={`faq-${index}`} className="border-border">
									<AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="text-muted-foreground">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</section>

				{/* Contact CTA */}
				<section id="schedule" className="border-t border-border bg-muted/30 py-20 sm:py-28">
					<div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
						<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
							<MessageCircle className="h-8 w-8 text-primary" />
						</div>
						<h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							{translations.admissions.contactTitle}
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
							{translations.admissions.contactDescription}
						</p>
						<div className="mt-8 flex flex-wrap justify-center gap-4">
							<Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
								<Calendar className="mr-2 h-5 w-5" />
								{translations.common.bookConsultation}
							</Button>
							<Button size="lg" variant="outline" className="border-border bg-transparent">
								<Phone className="mr-2 h-5 w-5" />
								+1 (888) 500-0123
							</Button>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
