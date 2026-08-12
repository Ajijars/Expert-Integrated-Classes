import type { Metadata } from "next";
import { Trophy, TrendingUp, GraduationCap } from "lucide-react";
import {
  results,
  sscToppers2023,
  cbseToppers2023,
  hscToppers2023,
} from "@/data/institute";

export const metadata: Metadata = {
  title: "Results & Achievements",
};

export default function ResultsPage() {
  return (
    <>
      <section className="page-hero py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Results & Achievements</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            Outstanding results in SSC, CBSE, HSC Board exams and competitive entrance exams — a testament to
            dedicated faculty and hardworking students at Expert Integrated Classes, Kolhar.
          </p>
        </div>
      </section>

      {/* Entrance Highlights */}
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Exam Highlights</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.entranceHighlights.map((item) => (
              <div key={item.exam} className="card flex items-start gap-4">
                <TrendingUp className="h-8 w-8 shrink-0 text-brand-600" />
                <div>
                  <h3 className="font-display font-bold text-brand-900">{item.exam}</h3>
                  <p className="mt-1 text-sm text-stone-600">{item.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSC 2023 Toppers */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-brand-600" />
            SSC Board 2023 — Top Performers (10th State Board)
          </h2>
          <p className="section-subheading">
            14 students scored 90%+ | Top score 95.20% by Halmore Divya
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sscToppers2023.map((student, i) => (
              <div key={student.name} className="card text-center">
                <Trophy className={`mx-auto h-8 w-8 ${i === 0 ? "text-accent-500" : "text-brand-600"}`} />
                <h3 className="mt-3 font-display font-bold text-brand-900">{student.name}</h3>
                <p className="mt-1 font-display text-xl font-bold text-brand-600">{student.score}</p>
                {i === 0 && (
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent-600">🏆 Topper</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CBSE 2023 */}
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">CBSE Board 2023 (10th CBSE)</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cbseToppers2023.map((student) => (
              <div key={student.name} className="card text-center">
                <Trophy className="mx-auto h-8 w-8 text-brand-600" />
                <h3 className="mt-3 font-display font-bold text-brand-900">{student.name}</h3>
                <p className="mt-1 font-display text-xl font-bold text-brand-600">{student.score}</p>
                {student.note && (
                  <p className="mt-1 text-sm font-medium text-accent-600">{student.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HSC 2023 */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">HSC Board 2023 (12th State Board)</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hscToppers2023.map((student, i) => (
              <div key={student.name} className="card text-center">
                <Trophy className={`mx-auto h-8 w-8 ${i === 0 ? "text-accent-500" : "text-brand-600"}`} />
                <h3 className="mt-3 font-display font-bold text-brand-900">{student.name}</h3>
                <p className="mt-1 font-display text-xl font-bold text-brand-600">{student.score}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overall Board Stats */}
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Board Results Summary</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="font-display text-xl font-bold text-brand-900">SSC Board 2023</h3>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-display text-2xl font-bold text-brand-600">{results.board2023.ssc.pass}</p>
                  <p className="text-xs text-stone-500">Pass Rate</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-brand-600">{results.board2023.ssc.distinction}</p>
                  <p className="text-xs text-stone-500">Distinction</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-accent-600">{results.board2023.ssc.topScore}</p>
                  <p className="text-xs text-stone-500">Top Score</p>
                </div>
              </div>
            </div>
            <div className="card">
              <h3 className="font-display text-xl font-bold text-brand-900">HSC Board 2023</h3>
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="font-display text-2xl font-bold text-brand-600">{results.board2023.hsc.pass}</p>
                  <p className="text-xs text-stone-500">Pass Rate</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-accent-600">{results.board2023.hsc.topScore}</p>
                  <p className="text-xs text-stone-500">Top Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top achievers */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Overall Top Achievers</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {results.toppers.map((student, i) => (
              <div key={student.name + student.stream} className="card text-center">
                {i === 0 && (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent-600">
                    🏆 Star Performer
                  </p>
                )}
                <h3 className="font-display font-bold text-brand-900">{student.name}</h3>
                <p className="mt-1 text-sm text-stone-500">{student.stream}</p>
                <p className="mt-1 font-display text-lg font-bold text-brand-600">{student.score}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
