import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950">
      <section className="relative flex min-h-[500px] w-full max-w-6xl items-center justify-center overflow-hidden rounded-2xl bg-slate-900 px-5 py-16 text-center shadow-2xl sm:min-h-[600px] sm:px-10">
        {/* Background Image */}
        <Image
          src="/welcomeImage.png"
          alt="Website under construction"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/70" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-2xl text-white">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            Something exciting is coming
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            We&apos;re Building
            <span className="mt-2 block text-amber-400">Something Amazing</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            Our website is currently under construction. We&apos;re working hard
            to bring you an amazing experience. Stay tuned!
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://api.whatsapp.com/send/?phone=%2B918561068299&text&type=phone_number&app_absent=0"
              target="_blank"
              className="inline-flex w-full items-center justify-center rounded-lg bg-amber-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-amber-300 sm:w-auto"
            >
              Contact Us
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>

            <span className="text-sm text-slate-300">
              We&apos;ll be launching soon!
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
