import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Philosophy } from "../components/Philosophy"
import { Projects } from "../components/Projects"
import { Expertise } from "../components/Expertise"
import { FAQ } from "../components/FAQ"
import { CallToAction } from "../components/CallToAction"
import { Footer } from "../components/Footer"
import { CartButton, CartDrawer } from "../components/Cart"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <CartDrawer />
      <CartButton />
      <Hero />
      <Philosophy />
      <Projects />
      <Expertise />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  )
}