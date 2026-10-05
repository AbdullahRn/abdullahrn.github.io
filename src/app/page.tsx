import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Projects } from "@/components/projects";
import { Recognition } from "@/components/recognition";
import { Research } from "@/components/research";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Journey />
        <Recognition />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
