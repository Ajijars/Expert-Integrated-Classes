import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { commerceStream } from "@/data/institute";

export const metadata: Metadata = {
  title: "Commerce Stream",
};

export default function CommercePage() {
  return (
    <>
      <section className="page-hero py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Link href="/academics" className="mb-4 inline-flex items-center gap-1 text-sm text-brand-200 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Academics
          </Link>
          <h1 className="font-display text-4xl font-bold md:text-5xl">{commerceStream.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">{commerceStream.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="section-heading">Subjects</h2>
              <ul className="mt-4 space-y-2">
                {commerceStream.subjects.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-stone-700">
                    <CheckCircle className="h-5 w-5 text-brand-700" /> {s}
                  </li>
                ))}
              </ul>
              <h2 className="section-heading mt-10">Program Features</h2>
              <ul className="mt-4 space-y-2">
                {commerceStream.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-stone-700">
                    <CheckCircle className="h-5 w-5 shrink-0 text-accent-500" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="section-heading">Syllabus Overview</h2>
              <p className="mt-2 text-sm text-stone-500">Maharashtra State Board HSC Commerce syllabus — 11th & 12th.</p>
              <div className="mt-6 space-y-4">
                {commerceStream.syllabus.map((unit) => (
                  <div key={unit.unit} className="card">
                    <h3 className="font-display font-bold text-brand-900">{unit.unit}</h3>
                    <p className="mt-2 text-sm text-stone-600">{unit.topics}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 rounded-xl bg-brand-50 p-8 text-center">
            <Link href="/admissions" className="btn-primary">Apply for Commerce Stream</Link>
          </div>
        </div>
      </section>
    </>
  );
}
