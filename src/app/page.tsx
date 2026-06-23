import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-[#1e1e1e] py-6">
        <Container className="text-center">
          <p className="text-xs text-[#444] font-mono">
            © {new Date().getFullYear()} lytotech · Tallyto Rodrigues
          </p>
        </Container>
      </footer>
    </>
  );
}
