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
import { PhoneCall } from "lucide-react"
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
					<PhoneCall className="h-5 w-5" />
					{translations.admissions.scheduleCall}
				</Button>				
			</div>
		</section>
	)
}
