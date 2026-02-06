import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Programs } from "@/components/programs"
import { Features } from "@/components/features"
import { CTAForm } from "@/components/cta-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Programs />
        <Features />
        {/* <Testimonials /> */}
        <CTAForm />
      </main>
      <Footer />
    </div>
  )
}
