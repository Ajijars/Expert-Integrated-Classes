import type { Metadata } from "next";
import { sports, events, competitions } from "@/data/institute";

export const metadata: Metadata = {
  title: "Activities & Events",
};

export default function ActivitiesPage() {
  return (
    <>
      <section className="page-hero py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Activities & Events</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            Beyond academics — events, competitions, prize distributions, and sports that build character and teamwork at EIC.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Sports</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sports.map((sport) => (
              <div key={sport.name} className="card">
                <h3 className="font-display text-lg font-bold text-brand-900">{sport.name}</h3>
                <p className="mt-2 text-sm text-stone-600">{sport.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Events & Programs</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div key={event.title} className="card">
                <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800">
                  {event.date}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-brand-900">{event.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Competitions</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {competitions.map((comp) => (
              <div key={comp.name} className="card flex items-center justify-between">
                <h3 className="font-semibold text-brand-900">{comp.name}</h3>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
                  {comp.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
