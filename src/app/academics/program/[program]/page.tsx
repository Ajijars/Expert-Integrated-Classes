import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { programs } from "@/data/institute";

type Props = { params: Promise<{ program: string }> };

export async function generateStaticParams() {
  return programs.map((p) => ({ program: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { program: slug } = await params;
  const prog = programs.find((p) => p.slug === slug);
  return { title: prog ? prog.name : "Program" };
}

export default async function ProgramPage({ params }: Props) {
  const { program: slug } = await params;
  const prog = programs.find((p) => p.slug === slug);
  if (!prog) notFound();

  return (
    <>
      <section className="page-hero py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Link href="/academics" className="mb-4 inline-flex items-center gap-1 text-sm text-brand-200 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Academics
          </Link>
          <h1 className="font-display text-4xl font-bold md:text-5xl">{prog.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">{prog.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="section-heading">Subjects</h2>
              <ul className="mt-4 space-y-2">
                {prog.subjects.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-stone-700">
                    <CheckCircle className="h-5 w-5 text-brand-700" /> {s}
                  </li>
                ))}
              </ul>

              <h2 className="section-heading mt-10">Program Features</h2>
              <ul className="mt-4 space-y-2">
                {prog.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-stone-700">
                    <CheckCircle className="h-5 w-5 shrink-0 text-accent-500" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="section-heading">Syllabus Overview</h2>
              <p className="mt-2 text-sm text-stone-500">
                Detailed syllabus based on Maharashtra State Board / CBSE standards.
              </p>
              <div className="mt-6 space-y-4">
                {prog.syllabus.map((unit) => (
                  <div key={unit.unit} className="card">
                    <h3 className="font-display font-bold text-brand-900">{unit.unit}</h3>
                    <p className="mt-2 text-sm text-stone-600">{unit.topics}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-xl bg-brand-50 p-8 text-center">
            <p className="text-stone-700">Interested in the {prog.name}?</p>
            <Link href="/admissions" className="btn-primary mt-4">
              Submit Admission Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
