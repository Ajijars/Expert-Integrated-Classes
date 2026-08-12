import type { Metadata } from "next";
import Link from "next/link";
import { leadership, visionMission, siteConfig } from "@/data/institute";
import LeadershipCard from "@/components/LeadershipCard";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold md:text-5xl">About Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            Discover the story, leadership, and values that drive Expert Integrated Classes, Kolhar — since 2014.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="section-heading">Our Story</h2>
              <p className="mt-4 text-lg leading-relaxed text-stone-700">
                Founded in <strong>2014</strong> under <strong>{siteConfig.fullName}</strong>, Expert Integrated Classes
                began its journey on Belapur Road, Kolhar with a simple yet powerful vision — to provide world-class
                coaching that is truly <em>&ldquo;Better Than Best&rdquo;</em>.
              </p>
              <p className="mt-4 leading-relaxed text-stone-700">
                Over the past decade, EIC has grown into one of the most trusted coaching institutes in Ahmednagar
                district. Led by <strong>Prof. Ishwar Hon</strong> and <strong>Prof. Yogesh Hon</strong>, we have
                coached 1500+ students across SSC, CBSE, HSC Science, NEET, JEE, and MHT-CET with a synchronized
                hybrid coaching methodology that merges rigorous classroom studies with competitive exam curricula.
              </p>
              <p className="mt-4 leading-relaxed text-stone-700">
                Our strict small-batch policy ensures every student receives individualized attention. Combined with
                our EIC Mobile App for digital learning and performance tracking, we deliver a complete 360° educational
                Our dedication to each student's success is a testament to our commitment.
              </p>
            </div>
            <div>
              <h2 className="section-heading">Our Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-stone-700">{visionMission.vision}</p>
              <h2 className="section-heading mt-10">Our Mission</h2>
              <ul className="mt-4 space-y-3">
                {visionMission.mission.map((item, i) => (
                  <li key={i} className="flex gap-3 text-stone-700">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-800">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading text-center">Our Leadership</h2>
          <p className="section-subheading mx-auto text-center">
            The driving force behind EIC&apos;s decade of excellence.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <LeadershipCard person={leadership.director} />
            <LeadershipCard person={leadership.coFounder} />
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Infrastructure & Facilities</h2>
          <p className="section-subheading">
            Modern facilities at Shivsakshi Complex to support academic excellence.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Spacious, well-ventilated classrooms with strict batch size limits",
              "Reference library with competitive exam study guides",
              "Scheduled doubt-clearing sessions with faculty",
              "EIC Mobile App for digital lectures & performance tracking",
              "Stress management & career counselling support",
              "Located near HDFC Bank on Belapur-Kolhar Road — easy access",
            ].map((item) => (
              <div key={item} className="card flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                <span className="text-stone-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">
              Visit Our Center
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
