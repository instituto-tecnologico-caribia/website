"use client"

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
import { CheckCircle2, ArrowRight, Sparkles, MessageCircle, Calendar, FileText, Award, Check, CheckIcon } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { MOODLE_API_TOKEN, SCHEDULER_CALL_URL } from "@/constants"
import axios from "axios"
import { useState } from "react"
import { da } from "date-fns/locale"

const cohorts = [
	{ name: "Primavera 2026", nameEn: "Spring 2026", start: "15 de Marzo, 2026", startEn: "March 15, 2026", deadline: "28 de Febrero, 2026", deadlineEn: "February 28, 2026", spots: 45 },
	{ name: "Verano 2026", nameEn: "Summer 2026", start: "1 de Junio, 2026", startEn: "June 1, 2026", deadline: "15 de Mayo, 2026", deadlineEn: "May 15, 2026", spots: 60 },
	{ name: "Otono 2026", nameEn: "Fall 2026", start: "1 de Septiembre, 2026", startEn: "September 1, 2026", deadline: "15 de Agosto, 2026", deadlineEn: "August 15, 2026", spots: 60 },
]

export default function AdmissionsPage() {
	const { translations, locale } = useLanguage()
	const [program, setProgram] = useState("");
	const [cohort, setCohort] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const programs = [
		translations.programs.softwareEngineering,
		translations.programs.aiDataScience,
		translations.programs.englishImmersive,
	]

	const timeline = [
		{ step: 1, title: translations.admissions.step1Title, description: translations.admissions.step1Description, duration: translations.admissions.step1Duration, icon: FileText },
		{ step: 2, title: translations.admissions.step2Title, description: translations.admissions.step2Description, duration: translations.admissions.step2Duration, icon: Sparkles },
		{ step: 3, title: translations.admissions.step3Title, description: translations.admissions.step3Description, duration: translations.admissions.step3Duration, icon: MessageCircle },
		{ step: 4, title: translations.admissions.step4Title, description: translations.admissions.step4Description, duration: translations.admissions.step4Duration, icon: Award },
	]

	const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();

			const formData = new FormData(e.currentTarget);
			const { data } = await axios.post("/api/students", {
				action: "create_user",
				data: Object.assign(Object.fromEntries(formData.entries()), {
					username: formData.get("email"),
					description: JSON.stringify({
						program,
						cohort,
						description: formData.get("description"),
					}, null, 4)
				})
			})

			console.log({ data });
			setSubmitted(!!data.success);

		} catch (error: any) {
			console.log({ error });
		}
	};


	return (
		<>
			<Header showApply={false} />
			<main className="min-h-screen bg-background">
				{/* Application Form - Clean Design */}
				<section id="apply" className="bg-muted/30 pt-20 sm:py-28">
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
											<div className="font-medium text-foreground">{locale === "es" ? "Respuesta en 24 horas" : "Response within 24 hours"}</div>
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
										{!submitted ?
											<form onSubmit={onSubmit} className="space-y-6">
												<div className="grid gap-6 sm:grid-cols-2">
													<div className="space-y-2">
														<Label htmlFor="firstName">{translations.admissions.firstName}</Label>
														<Input id="firstName" name="firstname" placeholder="John" className="bg-background" />
													</div>
													<div className="space-y-2">
														<Label htmlFor="lastName">{translations.admissions.lastName}</Label>
														<Input id="lastname" name="lastname" placeholder="Doe" className="bg-background" />
													</div>
												</div>

												<div className="grid gap-6 sm:grid-cols-2">
													<div className="space-y-2">
														<Label htmlFor="email">{translations.admissions.emailAddress}</Label>
														<Input id="email" name="email" type="email" placeholder="john@example.com" className="bg-background" />
													</div>
													<div className="space-y-2">
														<Label htmlFor="phone">{translations.admissions.phoneNumber}</Label>
														<Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-background" />
													</div>
												</div>

												<div className="grid gap-6 sm:grid-cols-2">
													<div className="space-y-2">
														<Label htmlFor="program">{translations.admissions.programOfInterest}</Label>
														<Select onValueChange={setProgram}>
															<SelectTrigger className="bg-background">
																<SelectValue placeholder={translations.admissions.selectProgram} />
															</SelectTrigger>
															<SelectContent>
																{programs.map((program) => (
																	<SelectItem key={program} value={program}>{program}</SelectItem>
																))}
															</SelectContent>
														</Select>
													</div>
													<div className="space-y-2">
														<Label htmlFor="cohort">{translations.admissions.preferredStartDate}</Label>
														<Select onValueChange={setCohort}>
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
														name="description"
														placeholder={translations.admissions.motivationPlaceholder}
														rows={4}
														className="bg-background"
													/>
												</div>

												<Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
													{translations.admissions.submitApplication}
													<ArrowRight className="ml-2 h-5 w-5" />
												</Button>

											</form> :
											<div style={{ flexDirection: "column" }} className="flex items-center justify-center h-70">
												<div className="bg-primary w-15 h-15 rounded-full flex items-center justify-center">
													<CheckIcon className="h-8 w-8 shadow text-white" />
												</div>
												<h1 className="font-serif mt-2 text-center text-1xl font-bold tracking-tight text-foreground sm:text-2xl">{locale === "es" ? "Solicitud enviada" : "Application sent"}</h1>
												<p className="w-80 mt-1 text-center">{locale === "es" ?
													"Gracias por tu interés. Nos pondremos en contacto contigo pronto."
													:
													"Thanks for your interest. We will get back to you soon."}
												</p>

												<Button onClick={() => setSubmitted(!submitted)} size="lg" className="w-50 mt-5 bg-primary text-primary-foreground hover:bg-primary/90">
													{locale === "es" ? "Enviar otra solicitud" : "Send another application"}
												</Button>

											</div>
										}
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>

				{/* Application Timeline - Horizontal */}
				<section className="py-10 sm:py-15">
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
							<Link href={SCHEDULER_CALL_URL} target="_blank">
								<Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
									<Calendar className="mr-2 h-5 w-5" />
									{translations.admissions.scheduleCall}
								</Button>
							</Link>

						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
