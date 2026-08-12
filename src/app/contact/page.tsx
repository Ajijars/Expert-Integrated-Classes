import type { Metadata } from "next";
import { Mail, Phone, MapPin, Instagram, Clock } from "lucide-react";
import { siteConfig, leadership } from "@/data/institute";
import EnquiryForm from "@/components/EnquiryForm";
import LeadershipCard from "@/components/LeadershipCard";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            Get in touch for admissions, batch enquiries, or any questions about Expert Integrated Classes, Kolhar.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="section-heading">Get In Touch</h2>

              <div className="mt-8 space-y-6">
                <div className="card flex items-start gap-4">
                  <MapPin className="h-6 w-6 shrink-0 text-brand-800" />
                  <div>
                    <h3 className="font-semibold text-brand-900">Address</h3>
                    <p className="mt-1 text-sm text-stone-600">
                      {siteConfig.address.line1}<br />
                      {siteConfig.address.line2}<br />
                      {siteConfig.address.line3}<br />
                      {siteConfig.address.line4}
                    </p>
                  </div>
                </div>

                <div className="card flex items-start gap-4">
                  <Phone className="h-6 w-6 shrink-0 text-brand-800" />
                  <div>
                    <h3 className="font-semibold text-brand-900">Phone</h3>
                    <p className="mt-1 text-sm text-stone-600">
                      <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:underline">{siteConfig.phone}</a>
                    </p>
                    <p className="text-sm text-stone-500">
                      <a href={`tel:${siteConfig.phoneAlt.replace(/\s/g, "")}`} className="hover:underline">{siteConfig.phoneAlt}</a>
                    </p>
                  </div>
                </div>

                <div className="card flex items-start gap-4">
                  <Mail className="h-6 w-6 shrink-0 text-brand-800" />
                  <div>
                    <h3 className="font-semibold text-brand-900">Email</h3>
                    <a href={`mailto:${siteConfig.emails.primary}`} className="mt-1 block text-sm text-brand-700 hover:underline">
                      {siteConfig.emails.primary}
                    </a>
                  </div>
                </div>

                <div className="card flex items-start gap-4">
                  <Instagram className="h-6 w-6 shrink-0 text-brand-800" />
                  <div>
                    <h3 className="font-semibold text-brand-900">Instagram</h3>
                    <a
                      href={siteConfig.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-brand-700 hover:underline"
                    >
                      @expert_integrated_classes
                    </a>
                  </div>
                </div>

                <div className="card flex items-start gap-4">
                  <Clock className="h-6 w-6 shrink-0 text-brand-800" />
                  <div>
                    <h3 className="font-semibold text-brand-900">Operating Hours</h3>
                    <p className="mt-1 text-sm text-stone-600">{siteConfig.officeHours}</p>
                  </div>
                </div>


              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <LeadershipCard person={leadership.director} size="sm" />
                <LeadershipCard person={leadership.coFounder} size="sm" />
              </div>
            </div>

            <div>
              <h2 className="section-heading">Send a Message</h2>
              <div className="mt-8">
                <EnquiryForm />
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border border-stone-200 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.5!2d74.38!3d19.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQ1JzAwLjAiTiA3NMKwMjInNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Expert Integrated Classes Kolhar — Map"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
