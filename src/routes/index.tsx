import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail, MapPin, Award, Ruler, Shield } from "lucide-react";

import heroImage from "../assets/hero-tiles.jpg";
import projectKitchen from "../assets/project-kitchen.jpg";
import projectBathroom from "../assets/project-bathroom.jpg";
import projectOutdoor from "../assets/project-outdoor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Artisan Tile & Stone | Luxury Tile Contractor" },
      {
        name: "description",
        content:
          "Luxury tile installation for discerning homeowners. Custom bathrooms, kitchens, and outdoor living spaces finished with precision craftsmanship.",
      },
      {
        property: "og:title",
        content: "Artisan Tile & Stone | Luxury Tile Contractor",
      },
      {
        property: "og:description",
        content:
          "Luxury tile installation for discerning homeowners. Custom bathrooms, kitchens, and outdoor living spaces finished with precision craftsmanship.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "Calacatta Master Bath",
    category: "Bathroom",
    image: projectBathroom,
  },
  {
    title: "Terracotta Kitchen",
    category: "Kitchen",
    image: projectKitchen,
  },
  {
    title: "Coastal Pool Terrace",
    category: "Outdoor",
    image: projectOutdoor,
  },
];

const highlights = [
  {
    icon: Award,
    title: "Award-Winning Craft",
    description: "Recognized for precision installation and refined finishes.",
  },
  {
    icon: Ruler,
    title: "Custom Layouts",
    description: "Every pattern, border, and inset is measured to perfection.",
  },
  {
    icon: Shield,
    title: "Premium Materials",
    description: "Marble, porcelain, terracotta, and natural stone sourced worldwide.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl font-semibold tracking-tight text-foreground">
            Artisan Tile & Stone
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground sm:flex">
            <a href="#work" className="transition-colors hover:text-foreground">
              Work
            </a>
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="order-2 lg:order-1">
            <p className="font-display text-sm font-medium uppercase tracking-widest text-accent">
              Luxury Tile Contractor
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Surfaces that define a space.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Bespoke tile installation for luxury homes. We transform bathrooms, kitchens, and outdoor
              living areas into refined, lasting environments.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-accent/10"
              >
                View Portfolio
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                15+ years experience
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Serving Southern California
              </span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl lg:aspect-[4/3]">
              <img
                src={heroImage}
                alt="Luxury marble tile bathroom with freestanding tub"
                className="h-full w-full object-cover"
                width={1920}
                height={1088}
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="flex flex-col items-start">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-background text-primary shadow-sm">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section id="work" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-sm font-medium uppercase tracking-widest text-accent">
                Portfolio
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Selected work
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Discuss your project <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {project.category}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-display text-sm font-medium uppercase tracking-widest text-accent">About</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Craftsmanship built on detail.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We partner with architects, interior designers, and homeowners who value precision. From
              large-format porcelain to hand-laid mosaic, every installation is executed with the same
              standard: flawless alignment, clean grout lines, and finishes that age beautifully.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              No shortcuts. No generic layouts. Just surfaces that elevate the rooms they inhabit.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <p className="font-display text-4xl font-semibold text-primary">15+</p>
              <p className="mt-1 text-sm text-muted-foreground">Years of experience</p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <p className="font-display text-4xl font-semibold text-primary">400+</p>
              <p className="mt-1 text-sm text-muted-foreground">Projects completed</p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <p className="font-display text-4xl font-semibold text-primary">100%</p>
              <p className="mt-1 text-sm text-muted-foreground">Client satisfaction</p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <p className="font-display text-4xl font-semibold text-primary">In-House</p>
              <p className="mt-1 text-sm text-muted-foreground">No subcontractors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-display text-sm font-medium uppercase tracking-widest text-accent">
            Start a project
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to elevate your space?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tell us about your project and we’ll respond within one business day with a consultation
            window.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@artisantile.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 sm:w-auto"
            >
              <Mail className="h-5 w-5" />
              hello@artisantile.com
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-accent/10 sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              (555) 123-4567
            </a>
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Based in Los Angeles, serving Southern California
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="font-display text-sm font-semibold text-foreground">Artisan Tile & Stone</p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Artisan Tile & Stone. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
