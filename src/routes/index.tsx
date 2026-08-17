import { createFileRoute } from "@tanstack/react-router";
import { SiteBackground } from "@/components/site-background";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Projects } from "@/components/sections/projects";
import { Design } from "@/components/sections/design";
import { Figma } from "@/components/sections/figma";
import { Clients } from "@/components/sections/clients";
import { Certification } from "@/components/sections/certification";
import { CvSection } from "@/components/sections/cv-section";
import { Github } from "@/components/sections/github";
import { About } from "@/components/sections/about";
import { Contact, SiteFooter } from "@/components/sections/contact";

const title = "Julius Boamah — Developer, Designer & Digital Product Builder";
const description =
  "Portfolio of Julius Boamah, a Ghanaian software developer, UI/UX designer and AI enthusiast building websites, digital products and creative technology.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteBackground />
      <SiteNav />
      <main>
        <Hero />
        <Journey />
        <Projects />
        <Design />
        <Figma />
        <Clients />
        <Certification />
        <CvSection />
        <Github />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
