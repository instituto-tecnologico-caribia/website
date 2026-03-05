'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertCircle, Download, Eye, CreditCard, DollarSign, Calendar } from 'lucide-react'

interface Payment {
	id: string
	amount: number
	status: 'paid' | 'pending' | 'overdue'
	dueDate: string
	program: string
	cohort: string
	invoice: string
}

const mockPayments: Payment[] = [
	{
		id: '1',
		amount: 850,
		status: 'pending',
		dueDate: '2026-04-15',
		program: 'Software Engineering',
		cohort: 'March 2026',
		invoice: 'INV-2026-001',
	},
	{
		id: '2',
		amount: 850,
		status: 'pending',
		dueDate: '2026-05-15',
		program: 'Software Engineering',
		cohort: 'March 2026',
		invoice: 'INV-2026-002',
	},
	{
		id: '3',
		amount: 850,
		status: 'paid',
		dueDate: '2026-03-15',
		program: 'Software Engineering',
		cohort: 'March 2026',
		invoice: 'INV-2026-000',
	},
	{
		id: '4',
		amount: 2550,
		status: 'paid',
		dueDate: '2026-02-01',
		program: 'Software Engineering',
		cohort: 'March 2026',
		invoice: 'INV-2026-003',
	},
]

export default function BillingPage() {
	const { locale, translations } = useLanguage()

	const upcomingPayments = mockPayments.filter(p => p.status === 'pending')
	const duePayments = mockPayments.filter(p => p.status === 'overdue')
	const pastPayments = mockPayments.filter(p => p.status === 'paid')

	const totalDue = upcomingPayments.reduce((sum, p) => sum + p.amount, 0) + duePayments.reduce((sum, p) => sum + p.amount, 0)
	const totalPaid = pastPayments.reduce((sum, p) => sum + p.amount, 0)

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'paid':
				return 'bg-emerald-100 text-emerald-700'
			case 'pending':
				return 'bg-blue-100 text-blue-700'
			case 'overdue':
				return 'bg-red-100 text-red-700'
			default:
				return 'bg-gray-100 text-gray-700'
		}
	}

	const getStatusLabel = (status: string) => {
		switch (status) {
			case 'paid':
				return translations.billing.paid
			case 'pending':
				return translations.billing.pending
			case 'overdue':
				return translations.billing.overdue
			default:
				return status
		}
	}

	return (
		<>
			<Header />
			<main className="min-h-screen bg-background">
				{/* Hero Section */}
				<section className="border-b border-border bg-card py-12 sm:py-16">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="max-w-2xl">
							<h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
								{translations.billing.title}
							</h1>
							<p className="mt-4 text-lg text-muted-foreground">
								{translations.billing.description}
							</p>
						</div>
					</div>
				</section>

				{/* Account Balance Section */}
				<section className="border-b border-border py-12 sm:py-16">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="grid gap-6 sm:grid-cols-3">
							{/* Balance Due */}
							<Card>
								<CardHeader className="pb-3">
									<div className="flex items-center justify-between">
										<CardTitle className="text-sm font-medium text-muted-foreground">
											{translations.billing.balanceDue}
										</CardTitle>
										<AlertCircle className="h-5 w-5 text-red-500" />
									</div>
								</CardHeader>
								<CardContent>
									<div className="text-3xl font-bold text-foreground">
										${totalDue.toFixed(2)}
									</div>
									<p className="mt-2 text-sm text-muted-foreground">
										{upcomingPayments.length + duePayments.length} {locale === 'es' ? 'pagos' : 'payments'}
									</p>
								</CardContent>
							</Card>

							{/* Balance Paid */}
							<Card>
								<CardHeader className="pb-3">
									<div className="flex items-center justify-between">
										<CardTitle className="text-sm font-medium text-muted-foreground">
											{translations.billing.balancePaid}
										</CardTitle>
										<DollarSign className="h-5 w-5 text-emerald-500" />
									</div>
								</CardHeader>
								<CardContent>
									<div className="text-3xl font-bold text-foreground">
										${totalPaid.toFixed(2)}
									</div>
									<p className="mt-2 text-sm text-muted-foreground">
										{pastPayments.length} {locale === 'es' ? 'pagos' : 'payments'}
									</p>
								</CardContent>
							</Card>

							{/* Account Status */}
							<Card>
								<CardHeader className="pb-3">
									<CardTitle className="text-sm font-medium text-muted-foreground">
										{translations.billing.accountBalance}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="text-3xl font-bold text-foreground">
										{totalDue === 0 ? '✓' : '—'}
									</div>
									<p className="mt-2 text-sm text-muted-foreground">
										{totalDue === 0 ? translations.billing.noBalance : `$${totalDue.toFixed(2)} ${locale === 'es' ? 'adeudado' : 'due'}`}
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Payment Sections */}
				<section className="py-12 sm:py-16">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="space-y-12">
							{/* Due Payments */}
							{duePayments.length > 0 && (
								<div>
									<h2 className="text-2xl font-bold text-foreground mb-6">
										{translations.billing.duePayments}
									</h2>
									<div className="space-y-4">
										{duePayments.map(payment => (
											<Card key={payment.id} className="border-red-200 bg-red-50/30">
												<CardContent className="pt-6">
													<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
														<div className="flex-1">
															<div className="flex items-center gap-2 mb-2">
																<h3 className="font-semibold text-foreground">
																	{payment.program}
																</h3>
																<Badge className={`${getStatusColor(payment.status)}`}>
																	{getStatusLabel(payment.status)}
																</Badge>
															</div>
															<p className="text-sm text-muted-foreground mb-3">
																{translations.billing.cohort}: {payment.cohort} • {translations.billing.invoice}: {payment.invoice}
															</p>
															<div className="flex items-center gap-4 text-sm text-muted-foreground">
																<div className="flex items-center gap-1">
																	<Calendar className="h-4 w-4" />
																	{new Date(payment.dueDate).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US')}
																</div>
																<div className="flex items-center gap-1">
																	<DollarSign className="h-4 w-4" />
																	${payment.amount.toFixed(2)}
																</div>
															</div>
														</div>
														<div className="flex gap-2">
															<Button size="sm" variant="default" className="bg-primary">
																{translations.billing.payNow}
															</Button>
															<Button size="sm" variant="outline" className="gap-1">
																<Download className="h-4 w-4" />
																{translations.billing.downloadInvoice}
															</Button>
														</div>
													</div>
												</CardContent>
											</Card>
										))}
									</div>
								</div>
							)}

							{/* Upcoming Payments */}
							{upcomingPayments.length > 0 && (
								<div>
									<h2 className="text-2xl font-bold text-foreground mb-6">
										{translations.billing.upcomingPayments}
									</h2>
									<div className="space-y-4">
										{upcomingPayments.map(payment => (
											<Card key={payment.id}>
												<CardContent className="pt-6">
													<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
														<div className="flex-1">
															<div className="flex items-center gap-2 mb-2">
																<h3 className="font-semibold text-foreground">
																	{payment.program}
																</h3>
																<Badge className={`${getStatusColor(payment.status)}`}>
																	{getStatusLabel(payment.status)}
																</Badge>
															</div>
															<p className="text-sm text-muted-foreground mb-3">
																{translations.billing.cohort}: {payment.cohort} • {translations.billing.invoice}: {payment.invoice}
															</p>
															<div className="flex items-center gap-4 text-sm text-muted-foreground">
																<div className="flex items-center gap-1">
																	<Calendar className="h-4 w-4" />
																	{new Date(payment.dueDate).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US')}
																</div>
																<div className="flex items-center gap-1">
																	<DollarSign className="h-4 w-4" />
																	${payment.amount.toFixed(2)}
																</div>
															</div>
														</div>
														<div className="flex gap-2">
															<Button size="sm" variant="outline" className="gap-1">
																<Download className="h-4 w-4" />
																{translations.billing.downloadInvoice}
															</Button>
														</div>
													</div>
												</CardContent>
											</Card>
										))}
									</div>
								</div>
							)}

							{/* Past Payments */}
							{pastPayments.length > 0 && (
								<div>
									<h2 className="text-2xl font-bold text-foreground mb-6">
										{translations.billing.pastPayments}
									</h2>
									<div className="space-y-4">
										{pastPayments.map(payment => (
											<Card key={payment.id}>
												<CardContent className="pt-6">
													<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
														<div className="flex-1">
															<div className="flex items-center gap-2 mb-2">
																<h3 className="font-semibold text-foreground">
																	{payment.program}
																</h3>
																<Badge className={`${getStatusColor(payment.status)}`}>
																	{getStatusLabel(payment.status)}
																</Badge>
															</div>
															<p className="text-sm text-muted-foreground mb-3">
																{translations.billing.cohort}: {payment.cohort} • {translations.billing.invoice}: {payment.invoice}
															</p>
															<div className="flex items-center gap-4 text-sm text-muted-foreground">
																<div className="flex items-center gap-1">
																	<Calendar className="h-4 w-4" />
																	{new Date(payment.dueDate).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US')}
																</div>
																<div className="flex items-center gap-1">
																	<DollarSign className="h-4 w-4" />
																	${payment.amount.toFixed(2)}
																</div>
															</div>
														</div>
														<div className="flex gap-2">
															<Button size="sm" variant="ghost" className="gap-1">
																<Eye className="h-4 w-4" />
																{translations.billing.viewDetails}
															</Button>
															<Button size="sm" variant="outline" className="gap-1">
																<Download className="h-4 w-4" />
															</Button>
														</div>
													</div>
												</CardContent>
											</Card>
										))}
									</div>
								</div>
							)}

							{/* No Payments Message */}
							{upcomingPayments.length === 0 && duePayments.length === 0 && pastPayments.length === 0 && (
								<div className="rounded-lg border border-dashed border-border bg-card/50 p-8 text-center">
									<p className="text-muted-foreground">
										{translations.billing.noPastPayments}
									</p>
								</div>
							)}
						</div>
					</div>
				</section>

				{/* Help Section */}
				<section className="border-t border-border bg-card/50 py-12 sm:py-16">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="rounded-lg border border-border bg-card p-8 text-center">
							<h2 className="text-2xl font-bold text-foreground mb-2">
								{translations.billing.needHelp}
							</h2>
							<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
								{translations.billing.billingSupport}
							</p>
							<Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
								{translations.billing.contactBillingTeam}
							</Button>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
