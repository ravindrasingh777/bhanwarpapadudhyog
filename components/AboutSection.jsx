import { ArrowRight, Calendar, MapPin, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "../data/site";

const facts = [
  { icon: Calendar, label: "Established", value: siteConfig.established },
  { icon: MapPin, label: "Based in", value: siteConfig.location },
  { icon: ShieldCheck, label: "Commitment", value: "Quality Control & Food Safety" },
  { icon: Users, label: "Trusted by", value: "Thousands of Customers" },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[#E9C77E]/40" />
          <img
            src="/images/founder.PNG"
            alt={`${siteConfig.founder}, founder`}
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover"
          />
          <p className="absolute bottom-4 left-4 rounded-full bg-[#6E0F18] px-4 py-1 font-serif text-sm italic text-white">
            Our Founder
          </p>
        </div>

        <div>
          <h2 className="font-serif text-3xl font-bold text-[#6E0F18] sm:text-4xl">About Bhanwar Papad Udyog</h2>
          <p className="mt-5 leading-relaxed text-stone-600">
            Established on {siteConfig.established} by {siteConfig.founder}, Bhanwar Papad Udyog specialises in
            producing a diverse range of papad in Bikaner, the hub of Namkeens. Under the Bhanwar brand, the company
            has built a reputation for delicious, authentic products and a strong commitment to quality control and
            food safety, earning the trust and loyalty of its customers.
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {facts.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-2xl border border-[#6E0F18]/10 bg-[#FFF8EE] p-4"
              >
                <span className="rounded-full bg-[#6E0F18]/10 p-2 text-[#6E0F18]">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-stone-500">{label}</dt>
                  <dd className="font-semibold text-stone-800">{value}</dd>
                </div>
              </div>
            ))}
          </dl>

          <Button asChild className="mt-8 bg-[#6E0F18] hover:bg-[#560B13]">
            <a href="/about">
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}