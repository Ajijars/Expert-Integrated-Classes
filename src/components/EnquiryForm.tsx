"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/institute";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card text-center py-12">
        <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 font-display text-xl font-bold text-brand-900">Enquiry Submitted!</h3>
        <p className="mt-2 text-stone-600">
          Thank you for your interest in Expert Integrated Classes. We will contact you shortly.
          You can also call us at{" "}
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="font-medium text-brand-800">
            {siteConfig.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-stone-700">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            placeholder="Student / Parent name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-stone-700">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-stone-700">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          placeholder="your@email.com"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="standard" className="mb-1 block text-sm font-medium text-stone-700">
            Current Standard *
          </label>
          <select
            id="standard"
            name="standard"
            required
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          >
            <option value="">Select standard</option>
            <option value="5th-7th">5th – 7th Standard</option>
            <option value="8th">8th Standard</option>
            <option value="9th">9th Standard</option>
            <option value="10th">10th Standard</option>
            <option value="11th">11th Standard</option>
            <option value="12th">12th Standard</option>
            <option value="dropper">Dropper / Repeater</option>
          </select>
        </div>
        <div>
          <label htmlFor="stream" className="mb-1 block text-sm font-medium text-stone-700">
            Target / Stream *
          </label>
          <select
            id="stream"
            name="stream"
            required
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          >
            <option value="">Select target</option>
            <option value="board-ssc">Board — SSC (State)</option>
            <option value="board-cbse">Board — CBSE</option>
            <option value="science-pcmb">Science PCMB</option>
            <option value="neet">NEET</option>
            <option value="jee">JEE</option>
            <option value="cet">MHT-CET</option>
            <option value="commerce">Commerce</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-stone-700">
          Message / Questions
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          placeholder="Any specific questions about batches, fees, timings, etc."
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        <Send className="h-4 w-4" />
        Submit Enquiry
      </button>

      <p className="text-xs text-stone-500">
        Or call us directly at{" "}
        <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-brand-800 underline">
          {siteConfig.phone}
        </a>{" "}
        /{" "}
        <a href={`tel:${siteConfig.phoneAlt.replace(/\s/g, "")}`} className="text-brand-800 underline">
          {siteConfig.phoneAlt}
        </a>
      </p>
    </form>
  );
}
