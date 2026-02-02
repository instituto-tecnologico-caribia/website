"use client"

import {
	createContext,
	useContext,
	useState,
	useEffect,
	type ReactNode,
} from "react"
import { type Locale, getTranslations } from "./translations"

type LanguageContextType = {
	locale: Locale
	setLocale: (locale: Locale) => void
	translations: ReturnType<typeof getTranslations>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const isValidLocale = (value: any): value is Locale =>
	value === "es" || value === "en"

type LanguageProviderProps = {
	children: ReactNode
	initialLocale?: Locale // 👈 comes from the server
}

export function LanguageProvider({
	children,
	initialLocale = "es",
}: LanguageProviderProps) {
	const [locale, setLocaleState] = useState<Locale>(initialLocale)

	/**
	 * Client hydration:
	 * - Read localStorage
	 * - Fallback to cookie
	 * - Sync everything
	 */
	useEffect(() => {
		const storedLocale = localStorage.getItem("locale")

		if (isValidLocale(storedLocale) && storedLocale !== locale) {
			setLocaleState(storedLocale)
			document.cookie = `locale=${storedLocale}; path=/; max-age=31536000`
		}
	}, [])

	const setLocale = (newLocale: Locale) => {
		setLocaleState(newLocale)

		// client persistence
		localStorage.setItem("locale", newLocale)

		// server persistence
		document.cookie = `locale=${newLocale}; path=/; max-age=31536000`
	}

	const translations = getTranslations(locale)

	return (
		<LanguageContext.Provider value={{ locale, setLocale, translations }}>
			{children}
		</LanguageContext.Provider>
	)
}

export function useLanguage() {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider")
	}
	return context
}
