import type { Metadata } from "next";
import { admissions } from "@/data/institute";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Admissions",
};

export default function AdmissionsPage() {
  return (
    <>
      <section className="page-hero py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Admissions</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            Join Expert Integrated Classes — admissions open for 5th to 12th, NEET, JEE, MHT-CET. Limited seats per batch!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="section-heading">Admission Enquiry</h2>
              <p className="section-subheading">
                Fill in the form and our team will contact you with batch details, timings, and fees.
              </p>
              <div className="mt-8">
                <EnquiryForm />
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h2 className="font-display text-xl font-bold text-brand-900">School Wing (5th – 10th)</h2>
                <ul className="mt-3 space-y-2">
                  {admissions.eligibility.school.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-stone-700">
                      <span className="text-brand-800">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-brand-900">Junior College (11th & 12th)</h2>
                <ul className="mt-3 space-y-2">
                  {admissions.eligibility.college.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-stone-700">
                      <span className="text-brand-800">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-brand-900">Entrance Exam Batches</h2>
                <ul className="mt-3 space-y-2">
                  {admissions.eligibility.entrance.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-stone-700">
                      <span className="text-brand-800">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-brand-900">Required Documents</h2>
                <ul className="mt-3 space-y-2">
                  {admissions.documents.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-stone-700">
                      <span className="text-brand-800">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Admission Process</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {admissions.process.map((step, i) => (
              <div key={step} className="card relative text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-800 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="mt-3 text-sm text-stone-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-heading">Fee Structure</h2>
          <p className="section-subheading">Contact the office for current fee details.</p>
          <div className="mt-8 overflow-hidden rounded-xl border border-stone-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-6 py-3 font-semibold">Program</th>
                  <th className="px-6 py-3 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {admissions.fees.map((fee, i) => (
                  <tr key={fee.item} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-6 py-3 text-stone-700">{fee.item}</td>
                    <td className="px-6 py-3 font-medium text-brand-800">{fee.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
