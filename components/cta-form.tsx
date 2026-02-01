"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Download } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function CTAForm() {
	const { translations, locale } = useLanguage()

	const programOptions = [
		{ value: "software", label: locale === "es" ? "Ingenieria de Software" : "Software Engineering" },
		{ value: "data", label: locale === "es" ? "Ciencia de Datos e IA" : "Data Science & AI" },
		{ value: "english", label: locale === "es" ? "Ingles Inmersivo" : "English Immersion" },
		{ value: "cloud", label: locale === "es" ? "Computacion en la Nube" : "Cloud Computing" },
		{ value: "product", label: locale === "es" ? "Gestion de Producto" : "Product Management" },
	]

	return (
		<section id="apply" className="relative overflow-hidden bg-primary py-16 sm:py-20 lg:py-24">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-foreground/10 via-transparent to-transparent" />
			<div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
				<h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
					{translations.cta.title}
				</h2>
				<p className="mx-auto mt-4 max-w-lg text-base text-primary-foreground/80">
					{translations.cta.description}
				</p>
				<Button type="submit" size="lg" style={{ background: "white", color: "#d40337" }} className="gap-2 mt-3 shadow-xl hover:bg-primary/90 hover:cursor-pointer">
					<Download className="h-5 w-5" />
					{translations.cta.downloadProspectus}
				</Button>
				{/* <div className="mt-10 rounded-2xl bg-card p-6 shadow-xl sm:p-8"> */}
				{/* <form className="space-y-6">
						<div className="grid gap-6 sm:grid-cols-2">
							<div className="space-y-2 text-left">
								<Label htmlFor="name" className="text-sm font-medium text-foreground">
									{translations.cta.fullName}
								</Label>
								<Input
									id="name"
									placeholder="John Doe"
									className="border-border bg-background text-foreground placeholder:text-muted-foreground"
								/>
							</div>
							<div className="space-y-2 text-left">
								<Label htmlFor="email" className="text-sm font-medium text-foreground">
									{translations.cta.workEmail}
								</Label>
								<Input
									id="email"
									type="email"
									placeholder="john@company.com"
									className="border-border bg-background text-foreground placeholder:text-muted-foreground"
								/>
							</div>
						</div>

						<div className="space-y-2 text-left">
							<Label htmlFor="program" className="text-sm font-medium text-foreground">
								{translations.cta.interestedProgram}
							</Label>
							<Select>
								<SelectTrigger className="border-border bg-background text-foreground">
									<SelectValue placeholder={translations.cta.selectProgram} />
								</SelectTrigger>
								<SelectContent>
									{programOptions.map((option) => (
										<SelectItem key={option.value} value={option.value}>
											{option.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<Button type="submit" size="lg" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
							<Download className="h-5 w-5" />
							{translations.cta.downloadProspectus}
						</Button>

						<p className="text-xs text-muted-foreground">
							{translations.cta.terms}{" "}
							<a href="#" className="underline hover:text-foreground">
								{translations.cta.termsOfService}
							</a>{" "}
							{translations.cta.and}{" "}
							<a href="#" className="underline hover:text-foreground">
								{translations.cta.privacyPolicy}
							</a>
							. {translations.cta.noSpam}
						</p>
					</form> */}
				{/* </div> */}
			</div>
		</section>
	)
}
