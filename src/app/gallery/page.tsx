import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of Expert Integrated Classes, Kolhar — classrooms, events, celebrations, achievements, and campus life.",
};

const galleryImages = [
  {
    src: "/images/staff-team.jpg",
    alt: "EIC Faculty & Staff Team at Annual Event",
    caption: "Faculty & Staff Team — Annual Day Celebration",
    category: "Team",
  },
  {
    src: "/images/classroom.jpg",
    alt: "Students in EIC classroom wearing uniforms",
    caption: "Classroom Session — Students in EIC Uniforms",
    category: "Classroom",
  },
  {
    src: "/images/annual-function.jpg",
    alt: "Annual function with faculty, guests and students",
    caption: "Annual Function — Faculty, Guests & Students",
    category: "Events",
  },
  {
    src: "/images/building-signboard.png",
    alt: "Expert Integrated Classes building signboard at night",
    caption: "EIC Campus — Belapur Road, Kolhar Signboard",
    category: "Campus",
  },
  {
    src: "/images/annual-gathering.jpg",
    alt: "Annual gathering with students and teachers at EIC event",
    caption: "Annual Gathering — Student & Teacher Celebration",
    category: "Events",
  },
  {
    src: "/images/results-2023.png",
    alt: "SSC & HSC Board Results 2023 — Toppers Poster",
    caption: "Board Results 2023 — Our Proud Toppers",
    category: "Results",
  },
  {
    src: "/images/prize-distribution.png",
    alt: "Student felicitation at Expert Integrated Classes",
    caption: "Prize Distribution — Student Achievement",
    category: "Events",
  },
  {
    src: "/images/students-celebration.jpg",
    alt: "Students celebrating at EIC Kolhar",
    caption: "Student Celebration at EIC Campus",
    category: "Events",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Photo Gallery</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            Glimpses of life at Expert Integrated Classes, Kolhar — classrooms, events, celebrations, and achievements.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold text-brand-900">Our Memories</h2>
            <p className="mt-2 text-stone-600">A collection of {galleryImages.length} snapshots from campus life, events, and results</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((img, idx) => (
              <div
                key={img.src}
                className={`group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  idx === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${idx === 0 ? "aspect-[4/3]" : "aspect-[4/3]"}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                    sizes={idx === 0 ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <span className="absolute right-3 top-3 rounded-full bg-brand-800/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {img.category}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition duration-300 group-hover:translate-y-0">
                    <p className="text-sm font-semibold text-white drop-shadow-lg">
                      {img.caption}
                    </p>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-brand-900 line-clamp-1">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-brand-800 to-brand-900 p-8 text-center text-white shadow-xl md:p-12">
            <h3 className="font-display text-2xl font-bold md:text-3xl">Follow Us for More Updates</h3>
            <p className="mt-3 text-brand-200">
              Stay connected with Expert Integrated Classes on Instagram for the latest photos, results, and announcements.
            </p>
            <a
              href="https://www.instagram.com/expert_integrated_classes/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-500 px-8 py-3 font-semibold text-brand-950 transition hover:bg-accent-400 hover:shadow-lg"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @expert_integrated_classes
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
