"use client"

import Link from "next/link"
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { INSTAGRAM_URL, LINKEDIN_URL, TWITTER_URL } from "@/constants"

const socialLinks = [
	{ name: "Twitter", icon: "X", href: TWITTER_URL },
	{ name: "LinkedIn", icon: "in", href: LINKEDIN_URL },
	{ name: "Instagram", icon: "IG", href: INSTAGRAM_URL }
]

export function Footer() {
	const { translations } = useLanguage()

	const footerLinks = {
		programs: [
			{ ...translations.footer.englishImmersive },
			{ ...translations.footer.softwareEngineering },
			{ ...translations.footer.dataScience }
		],
		resources: [
			{ ...translations.footer.virtualCampus },
			{ ...translations.footer.helpCenter },
		],
	}

	return (
		<footer className="border-t border-border bg-card">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
				<div className="grid gap-8 lg:grid-cols-4">
					<div className="lg:col-span-1">
						<Link href="/" className="flex items-center gap-2">
							<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
								<GraduationCap className="h-5 w-5 text-primary-foreground" />
							</div>
							<span className="text-lg font-semibold tracking-tight text-foreground">
								Caribia
							</span>
						</Link>
						<p className="mt-4 text-sm leading-relaxed text-muted-foreground">
							{translations.footer.tagline}
						</p>
						<div className="mt-6 flex gap-3">
							{socialLinks.map((social) => (
								<Link href={social.href} key={social.name} target="_blank">
									<Button variant="outline" size="icon" className="hover:cursor-pointer hover:bg-primary">
										<span className="text-xs font-medium">{social.icon}</span>
										<span className="sr-only">{social.name}</span>
									</Button>
								</Link>
							))}
						</div>
					</div>

					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
							{translations.footer.programs}
						</h3>
						<ul className="mt-4 space-y-3">
							{footerLinks.programs.map((link) => (
								<li key={`programs:${link.name}`}>
									<Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground" >
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
							{translations.footer.resources}
						</h3>
						<ul className="mt-4 space-y-3">
							{footerLinks.resources.map((link) => (
								<li key={`resources:${link.name}`}>
									<Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground" >
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
							{translations.footer.contact}
						</h3>
						<ul className="mt-4 space-y-3">
							<li className="flex items-center gap-2 text-sm text-muted-foreground">
								<Mail className="h-4 w-4 text-primary" />
								contact@caribia.edu.do
							</li>
							<li className="flex items-center gap-2 text-sm text-muted-foreground">
								<Phone className="h-4 w-4 text-primary" />
								+1 (809) 500-0123
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
					<p className="text-xs text-muted-foreground">
						{translations.footer.copyright}
					</p>
					<div className="flex gap-6">
						<Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
							{translations.footer.privacyPolicy}
						</Link>
						<Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
							{translations.footer.termsOfService}
						</Link>
						<Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
							{translations.footer.cookiePolicy}
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
