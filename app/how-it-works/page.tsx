import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Code,
  Users,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Play,
  MessageSquare,
  Award,
  Rocket,
  Target,
  Lightbulb,
} from "lucide-react"

export const metadata: Metadata = {
  title: "How It Works | Nexus Institute of Technology",
  description: "Discover our unique learning methodology that combines hands-on practice, mentorship, and career support to transform you into a job-ready tech professional.",
}

const steps = [
  {
    number: "01",
    title: "Learn by Doing",
    description: "Forget passive video lectures. Our interactive sandbox environment lets you write, run, and debug code in real-time with AI-powered feedback.",
    image: "/images/step-learn.jpg",
    features: [
      "Interactive coding sandbox",
      "AI-powered instant feedback",
      "Real-world problem sets",
      "Self-paced learning modules",
    ],
  },
  {
    number: "02",
    title: "Build Real Projects",
    description: "Work in agile squads with peers from around the globe. Ship production-grade software using Git, CI/CD, and industry-standard tools.",
    image: "/images/step-build.jpg",
    features: [
      "Team-based project work",
      "Industry mentorship",
      "Code reviews from experts",
      "Portfolio-ready deliverables",
    ],
  },
  {
    number: "03",
    title: "Launch Your Career",
    description: "From day one, we prepare you for the job market. Build your LinkedIn, portfolio, and resume with dedicated career coaches.",
    image: "/images/step-launch.jpg",
    features: [
      "Interview preparation",
      "Resume optimization",
      "LinkedIn profile building",
      "Guaranteed interview invites",
    ],
  },
]

const methodology = [
  {
    icon: Lightbulb,
    title: "Concept Introduction",
    description: "Short, focused video lessons introduce core concepts with real-world context.",
  },
  {
    icon: Code,
    title: "Hands-on Practice",
    description: "Immediately apply what you learn in our interactive coding environment.",
  },
  {
    icon: MessageSquare,
    title: "AI Feedback Loop",
    description: "Get instant, personalized feedback on your code from our AI tutor.",
  },
  {
    icon: Users,
    title: "Peer Collaboration",
    description: "Work with classmates on challenges and learn from each other.",
  },
  {
    icon: Target,
    title: "Project Application",
    description: "Apply concepts to real projects that go into your portfolio.",
  },
  {
    icon: Award,
    title: "Expert Review",
    description: "Industry mentors review your work and provide professional guidance.",
  },
]

const stats = [
  { value: "94%", label: "Employment Rate" },
  { value: "3 Months", label: "Avg. Time to Job" },
  { value: "45%", label: "Salary Increase" },
  { value: "500+", label: "Hiring Partners" },
]

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Three Steps Section */}
        <section className="pb-16 sm:pb-15 lg:py-15">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Your Path to Success
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Our proven three-phase approach takes you from beginner to job-ready professional in record time.
              </p>
            </div>

            <div className="mt-16 space-y-24">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex flex-col items-center gap-12 lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-3">
                      <span className="text-5xl font-bold text-primary/20">
                        {step.number}
                      </span>
                      <div className="h-px w-12 bg-primary/30" />
                    </div>
                    <h3 className="mt-4 font-serif text-2xl font-bold text-foreground sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {step.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative flex-1">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                      <Image
                        src={step.image || "/placeholder.svg"}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-primary/10" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Methodology */}
        <section className="bg-secondary/30 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The Nexus Learning Loop
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Every module follows our proven six-step methodology designed for maximum retention and practical skill development.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {methodology.map((item, index) => (
                <Card key={item.title} className="border-border bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-primary">
                            Step {index + 1}
                          </span>
                        </div>
                        <h3 className="mt-1 font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Tech */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Industry-Standard Tools
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Learn with the same tools used by top tech companies worldwide.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-6">
              {["VS Code", "Git", "GitHub", "Docker", "AWS", "Figma", "Slack", "Jira", "React", "Node.js", "Python", "PostgreSQL"].map((tool) => (
                <div
                  key={tool}
                  className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-4 text-center transition-colors hover:border-primary/30 hover:bg-secondary/50"
                >
                  <div className="h-10 w-10 rounded-lg bg-muted" />
                  <span className="mt-2 text-xs font-medium text-muted-foreground">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Transform Your Career?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Join thousands of graduates who have launched successful tech careers through our immersive programs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-card text-foreground hover:bg-card/90"
                asChild
              >
                <Link href="/programs">
                  Browse Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <Link href="/admissions">
                  Learn About Admissions
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
