"use client"

import { Suspense } from "react"
import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Lock, Zap, Calendar, Clock } from "lucide-react"

const coursePhases = [
    {
        id: 1,
        nameEs: "Fundamentos",
        nameEn: "Fundamentals",
        progress: 100,
        modules: [
            {
                id: 1,
                nameEs: "Introducción a Programación",
                nameEn: "Introduction to Programming",
                status: "completed",
                topics: [
                    { id: 1, nameEs: "Variables y Tipos", nameEn: "Variables & Types", status: "completed" },
                    { id: 2, nameEs: "Operadores", nameEn: "Operators", status: "completed" },
                    { id: 3, nameEs: "Estructuras de Control", nameEn: "Control Structures", status: "completed" },
                ],
                skillsEs: ["Lógica Básica", "Sintaxis", "Debugging"],
                skillsEn: ["Basic Logic", "Syntax", "Debugging"],
            },
            {
                id: 2,
                nameEs: "Estructuras de Datos",
                nameEn: "Data Structures",
                status: "completed",
                topics: [
                    { id: 4, nameEs: "Arrays y Listas", nameEn: "Arrays & Lists", status: "completed" },
                    { id: 5, nameEs: "Objetos", nameEn: "Objects", status: "completed" },
                ],
                skillsEs: ["Gestión de Datos", "Estructuras Complejas"],
                skillsEn: ["Data Management", "Complex Structures"],
            },
        ],
    },
    {
        id: 2,
        nameEs: "Intermedio",
        nameEn: "Intermediate",
        progress: 65,
        modules: [
            {
                id: 3,
                nameEs: "Programación Orientada a Objetos",
                nameEn: "Object-Oriented Programming",
                status: "inProgress",
                topics: [
                    { id: 6, nameEs: "Clases y Objetos", nameEn: "Classes & Objects", status: "completed" },
                    { id: 7, nameEs: "Herencia", nameEn: "Inheritance", status: "inProgress" },
                    { id: 8, nameEs: "Polimorfismo", nameEn: "Polymorphism", status: "locked" },
                ],
                skillsEs: ["OOP", "Diseño de Software"],
                skillsEn: ["OOP", "Software Design"],
            },
            {
                id: 4,
                nameEs: "Algoritmos",
                nameEn: "Algorithms",
                status: "inProgress",
                topics: [
                    { id: 9, nameEs: "Búsqueda y Ordenamiento", nameEn: "Search & Sorting", status: "inProgress" },
                    { id: 10, nameEs: "Complejidad", nameEn: "Complexity", status: "locked" },
                ],
                skillsEs: ["Optimización"],
                skillsEn: ["Optimization"],
            },
        ],
    },
    {
        id: 3,
        nameEs: "Avanzado",
        nameEn: "Advanced",
        progress: 0,
        modules: [
            {
                id: 5,
                nameEs: "Desarrollo Web Full Stack",
                nameEn: "Full Stack Web Development",
                status: "locked",
                topics: [
                    { id: 11, nameEs: "Frontend", nameEn: "Frontend", status: "locked" },
                    { id: 12, nameEs: "Backend", nameEn: "Backend", status: "locked" },
                ],
                skillsEs: [],
                skillsEn: [],
            },
        ],
    },
]

const achievements = [
    { id: 1, nameEs: "Primer Paso", nameEn: "First Step", icon: "🚀", unlockedEs: "Completaste tu primer módulo", unlockedEn: "You completed your first module" },
    { id: 2, nameEs: "Racha de 7 Días", nameEn: "7-Day Streak", icon: "🔥", unlockedEs: "7 días estudiando consecutivamente", unlockedEn: "Studied 7 consecutive days" },
    { id: 3, nameEs: "Experto en OOP", nameEn: "OOP Expert", icon: "🎯", unlockedEs: null, unlockedEn: null },
    { id: 4, nameEs: "Constructor de Proyectos", nameEn: "Project Builder", icon: "🏗️", unlockedEs: null, unlockedEn: null },
]

function StatusIcon({ status }: { status: string }) {
    if (status === "completed") {
        return <CheckCircle2 className="h-5 w-5 text-green-500" />
    }
    if (status === "inProgress") {
        return <Zap className="h-5 w-5 text-primary" />
    }
    return <Lock className="h-5 w-5 text-muted-foreground" />
}

function AcademyProgressContent() {
    const { locale, translations } = useLanguage()
    const isSpanish = locale === "es"

    return (
        <main className="min-h-screen bg-background">
            {/* Welcome Section */}
            <section className="border-b border-border bg-gradient-to-r from-primary/10 via-transparent to-primary/5 py-8 sm:py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                        {translations.academyProgress.welcome}
                    </h1>
                    <p className="mt-2 text-muted-foreground">
                        Software Engineering • Cohorte Marzo 2024
                    </p>
                </div>
            </section>

            {/* Stats Cards */}
            <section className="border-b border-border py-8 sm:py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground">{translations.academyProgress.overallProgress}</p>
                                        <p className="mt-2 text-3xl font-bold text-foreground">68%</p>
                                    </div>
                                    <div className="rounded-full bg-primary/10 p-3">
                                        <Zap className="h-6 w-6 text-primary" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground">{translations.academyProgress.coursesCompleted}</p>
                                        <p className="mt-2 text-3xl font-bold text-foreground">4</p>
                                    </div>
                                    <div className="rounded-full bg-green-500/10 p-3">
                                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground">{translations.academyProgress.timeSpent}</p>
                                        <p className="mt-2 text-3xl font-bold text-foreground">142h</p>
                                    </div>
                                    <div className="rounded-full bg-blue-500/10 p-3">
                                        <Clock className="h-6 w-6 text-blue-500" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground">{translations.academyProgress.estimatedCompletion}</p>
                                        <p className="mt-2 text-3xl font-bold text-foreground">Jun 2025</p>
                                    </div>
                                    <div className="rounded-full bg-orange-500/10 p-3">
                                        <Calendar className="h-6 w-6 text-orange-500" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Learning Roadmap */}
            <section className="py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                        {translations.academyProgress.learningRoadmap}
                    </h2>

                    <div className="mt-8 space-y-8">
                        {coursePhases.map((phase, phaseIndex) => (
                            <div key={phase.id}>
                                <div className="mb-6 flex items-center gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-foreground">
                                            {isSpanish ? phase.nameEs : phase.nameEn}
                                        </h3>
                                        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all"
                                                style={{ width: `${phase.progress}%` }}
                                            />
                                        </div>
                                        <p className="mt-1 text-sm text-muted-foreground">{phase.progress}%</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {phase.modules.map((module, moduleIndex) => (
                                        <Card
                                            key={module.id}
                                            className={`transition-all ${module.status === "locked"
                                                ? "opacity-60"
                                                : "hover:shadow-md"
                                                }`}
                                        >
                                            <CardContent className="pt-6">
                                                <div className="flex items-start gap-4">
                                                    <div className="mt-1">
                                                        <StatusIcon status={module.status} />
                                                    </div>

                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between">
                                                            <div>
                                                                <h4 className="font-semibold text-foreground">
                                                                    {isSpanish ? module.nameEs : module.nameEn}
                                                                </h4>
                                                                <div className="mt-3 space-y-2">
                                                                    {module.topics.map((topic) => (
                                                                        <div key={topic.id} className="flex items-center gap-2 text-sm">
                                                                            <div className={`h-1.5 w-1.5 rounded-full ${topic.status === "completed"
                                                                                ? "bg-green-500"
                                                                                : topic.status === "inProgress"
                                                                                    ? "bg-primary"
                                                                                    : "bg-muted"
                                                                                }`} />
                                                                            <span className={topic.status === "locked" ? "text-muted-foreground" : "text-foreground"}>
                                                                                {isSpanish ? topic.nameEs : topic.nameEn}
                                                                            </span>
                                                                            <Badge
                                                                                variant="outline"
                                                                                className="ml-auto text-xs"
                                                                            >
                                                                                {topic.status === "completed"
                                                                                    ? translations.academyProgress.completed
                                                                                    : topic.status === "inProgress"
                                                                                        ? translations.academyProgress.inProgress
                                                                                        : translations.academyProgress.locked}
                                                                            </Badge>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {module.skillsEs.length > 0 && (
                                                            <div className="mt-4 pt-4 border-t border-border">
                                                                <p className="text-xs font-semibold text-muted-foreground uppercase">
                                                                    {translations.academyProgress.skills}
                                                                </p>
                                                                <div className="mt-2 flex flex-wrap gap-1">
                                                                    {(isSpanish ? module.skillsEs : module.skillsEn).map((skill, idx) => (
                                                                        <Badge key={idx} variant="secondary" className="text-xs">
                                                                            {skill}
                                                                        </Badge>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        <div className="mt-4 flex gap-2">
                                                            {module.status === "completed" && (
                                                                <Button size="sm" variant="outline">
                                                                    {translations.academyProgress.review}
                                                                </Button>
                                                            )}
                                                            {module.status === "inProgress" && (
                                                                <Button size="sm" className="bg-primary text-primary-foreground">
                                                                    {translations.academyProgress.continue}
                                                                </Button>
                                                            )}
                                                            {module.status === "locked" && (
                                                                <Button size="sm" variant="outline" disabled>
                                                                    {translations.academyProgress.locked}
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>

                                {phaseIndex < coursePhases.length - 1 && (
                                    <div className="my-8 flex justify-center">
                                        <div className="h-12 w-0.5 bg-gradient-to-b from-primary to-transparent" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="border-t border-border py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                        {translations.academyProgress.achievements}
                    </h2>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {achievements.map((achievement) => (
                            <Card key={achievement.id} className={`text-center transition-all ${isSpanish ? achievement.unlockedEs : achievement.unlockedEn ? "bg-card" : "opacity-50"}`}>
                                <CardContent className="pt-6">
                                    <div className="text-4xl">{achievement.icon}</div>
                                    <h4 className="mt-4 font-semibold text-foreground">
                                        {isSpanish ? achievement.nameEs : achievement.nameEn}
                                    </h4>
                                    {isSpanish ? achievement.unlockedEs : achievement.unlockedEn ? (
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {isSpanish ? achievement.unlockedEs : achievement.unlockedEn}
                                        </p>
                                    ) : (
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {isSpanish ? "Por desbloquear" : "Locked"}
                                        </p>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support CTA */}
            <section className="border-t border-border bg-gradient-to-r from-primary/5 to-primary/10 py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-lg border border-border bg-card p-8 sm:p-12">
                        <h2 className="font-serif text-2xl font-bold text-foreground">
                            {isSpanish ? "¿Necesitas ayuda?" : "Need Help?"}
                        </h2>
                        <p className="mt-2 text-muted-foreground">
                            {isSpanish
                                ? "Conecta con un mentor, accede a recursos adicionales o únete a tu grupo de estudio."
                                : "Connect with a mentor, access additional resources, or join your study group."}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                {translations.academyProgress.mentorSupport}
                            </Button>
                            <Button variant="outline">
                                {translations.academyProgress.discussionForum}
                            </Button>
                            <Button variant="outline">
                                {translations.academyProgress.resources}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default function AcademyProgressPage() {
    return (
        <>
            <Header />
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
                <AcademyProgressContent />
            </Suspense>
        </>
    )
}
