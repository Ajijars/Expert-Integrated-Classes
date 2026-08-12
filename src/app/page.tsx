import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Trophy,
  Users,
  GraduationCap,
  Bell,
  Layers,
  Smartphone,
  ClipboardCheck,
  HelpCircle,
  Compass,
} from "lucide-react";
import LeadershipCard from "@/components/LeadershipCard";
import {
  siteConfig,
  stats,
  programs,
  announcements,
  leadership,
  visionMission,
  features,
  sscToppers2023,
  results,
} from "@/data/institute";

const featureIcons: Record<string, React.ElementType> = {
  Layers,
  Users,
  Smartphone,
  ClipboardCheck,
  HelpCircle,
  Compass,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Expert Integrated Classes Kolhar"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/80 to-brand-950/70" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start px-4 py-20 md:min-h-[520px] md:justify-center md:py-28">
          <div className="mb-6">
            <Image
              src="/images/logo.png"
              alt="EIC Logo"
              width={90}
              height={90}
              className="h-[90px] w-[90px] rounded-2xl bg-white/10 object-contain p-1 shadow-lg backdrop-blur-sm"
              priority
            />
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-300">
            {siteConfig.fullName}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-xl text-brand-100">{siteConfig.location}</p>
          <p className="mt-6 text-2xl font-medium italic text-accent-300 md:text-3xl">
            &ldquo;{siteConfig.tagline}&rdquo;
          </p>
          <p className="mt-1 text-lg text-brand-200">{siteConfig.motto}</p>
          <p className="mt-6 max-w-xl text-lg text-brand-50">{siteConfig.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/admissions" className="btn-primary bg-accent-500 hover:bg-accent-600 text-brand-950">
              Admission Enquiry
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="btn-secondary border-white text-white hover:bg-white/10">
              Learn More
            </Link>
          </div>
          <p className="mt-4 text-sm text-brand-200">
            📞 Call: <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="underline">{siteConfig.phone}</a> | <a href={`tel:${siteConfig.phoneAlt.replace(/\s/g, "")}`} className="underline">{siteConfig.phoneAlt}</a>
          </p>
        </div>
      </section>

      {/* Announcements */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
          <Bell className="h-5 w-5 shrink-0 text-brand-600" />
          <div className="flex flex-wrap gap-x-8 gap-y-1 text-sm">
            {announcements.map((a) => (
              <span key={a.text}>
                <span className="font-semibold text-brand-700">{a.date}:</span>{" "}
                <span className="text-stone-600">{a.text}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold text-brand-600 md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-stone-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why EIC — Features */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-accent-100 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading text-center">Why Expert Integrated Classes?</h2>
          <p className="section-subheading mx-auto text-center">
            Our synchronized hybrid coaching methodology sets us apart — since 2014.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = featureIcons[feature.icon] || Layers;
              return (
                <div key={feature.title} className="card group hover:border-brand-200">
                  <Icon className="h-10 w-10 text-brand-600 transition group-hover:text-accent-500" />
                  <h3 className="mt-4 font-display text-lg font-bold text-brand-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-stone-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2023 SSC Results Highlight */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading flex items-center justify-center gap-3">
            <GraduationCap className="h-8 w-8 text-brand-600" />
            SSC Board Results 2023
          </h2>
          <p className="section-subheading mx-auto text-center">
            Outstanding results — 14 students scored 90%+ | Top score 95.20%
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="space-y-3">
              {sscToppers2023.slice(0, 7).map((student, i) => (
                <div key={student.name} className="card flex items-center justify-between !py-3">
                  <div className="flex items-center gap-3">
                    <Trophy className={`h-5 w-5 ${i === 0 ? "text-accent-500" : "text-brand-600"}`} />
                    <span className="font-medium text-stone-800">{student.name}</span>
                  </div>
                  <span className="font-display font-bold text-brand-600">{student.score}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="card text-center !p-4">
                  <p className="font-display text-2xl font-bold text-brand-600">95.20%</p>
                  <p className="text-xs text-stone-500">Top Score</p>
                </div>
                <div className="card text-center !p-4">
                  <p className="font-display text-2xl font-bold text-brand-600">14</p>
                  <p className="text-xs text-stone-500">Above 90%</p>
                </div>
                <div className="card text-center !p-4">
                  <p className="font-display text-2xl font-bold text-brand-600">100%</p>
                  <p className="text-xs text-stone-500">Pass Rate</p>
                </div>
              </div>
              <div className="rounded-2xl border border-brand-200 bg-white/80 p-6 shadow-md backdrop-blur-sm">
                <h3 className="font-display text-xl font-bold text-brand-900">
                  🏆 Halmore Divya — 95.20%
                </h3>
                <p className="mt-2 text-stone-600">
                  Our top performer in SSC 2023, setting the benchmark for excellence at Expert Integrated Classes.
                  Multiple students crossed the <strong>90%</strong> mark with outstanding performances.
                </p>
                <p className="mt-3 text-sm italic text-stone-500">
                  हार्दिक अभिनंदन! — Expert Integrated Classes, Kolhar
                </p>
              </div>
              <Link href="/results" className="btn-primary inline-flex items-center gap-2">
                View All Results
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Our Programs</h2>
          <p className="section-subheading">
            From foundation building (5th) to competitive entrance exams — NEET, JEE, MHT-CET.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.slice(0, 4).map((prog) => (
              <Link
                key={prog.id}
                href={`/academics/program/${prog.slug}`}
                className="card group hover:border-brand-200"
              >
                <h3 className="font-display text-lg font-bold text-brand-900 group-hover:text-brand-700">
                  {prog.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-stone-600">{prog.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  View Details <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {programs.slice(4).map((prog) => (
              <Link
                key={prog.id}
                href={`/academics/program/${prog.slug}`}
                className="card group hover:border-brand-200"
              >
                <h3 className="font-display text-lg font-bold text-brand-900 group-hover:text-brand-700">
                  {prog.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-stone-600">{prog.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  View Details <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/academics/commerce" className="btn-secondary">
              Explore Commerce Stream
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Leadership */}
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="section-heading">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-stone-700">{visionMission.vision}</p>
              <Link href="/about" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                Read full mission <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <LeadershipCard person={leadership.director} size="sm" />
              <LeadershipCard person={leadership.coFounder} size="sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading text-center">Explore EIC Kolhar</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/academics", icon: BookOpen, title: "Academics", desc: "5th–12th, NEET, JEE, CET" },
              { href: "/results", icon: Trophy, title: "Results", desc: "Board & entrance achievements" },
              { href: "/activities", icon: Users, title: "Activities", desc: "Events & competitions" },
              { href: "/contact", icon: GraduationCap, title: "Contact", desc: "Visit us at Belapur Road" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="card text-center">
                <item.icon className="mx-auto h-10 w-10 text-brand-600" />
                <h3 className="mt-4 font-display font-bold text-brand-900">{item.title}</h3>
                <p className="mt-1 text-sm text-stone-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-hero py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Ready to Join EIC Kolhar?</h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-100">
            Admissions open for all programs — 5th to 12th, NEET, JEE, MHT-CET. Limited seats per batch.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/admissions" className="btn-primary bg-accent-500 hover:bg-accent-600 text-brand-950">
              Start Admission Enquiry
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
          <p className="mt-4 text-sm text-brand-200">
            📞 {siteConfig.phone} | {siteConfig.phoneAlt} | ✉️ {siteConfig.emails.primary}
          </p>
        </div>
      </section>
    </>
  );
}
