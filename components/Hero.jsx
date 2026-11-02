import { ArrowRight, Award, ChefHat, LayoutGrid, Leaf } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "../data/site";

const highlights = [
  { icon: Leaf, label: "Chemical Free" },
  { icon: Award, label: "Premium Quality" },
  { icon: ChefHat, label: "Authentic Bikaneri Taste" },
  { icon: LayoutGrid, label: "Wide Variety" },
];

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-20 bg-[#FFF8EE]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B07A2C]">
            Traditional Taste of Bikaner
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#6E0F18] sm:text-5xl lg:text-6xl">
            Bhanwar Papad Udyog
          </h1>
          <p className="mt-4 text-lg text-stone-700">
            Providing you the very best <span className="font-semibold">since 1976</span>
          </p>
          <p className="mx-auto mt-4 max-w-xl text-stone-600 lg:mx-0">
            Experience the authentic taste of Bikaner. From traditional papads to machine-made varieties, we bring
            the flavours and culinary heritage of Rajasthan to your table.
          </p>

          <ul className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-4 sm:max-w-none sm:grid-cols-4 lg:mx-0">
            {highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-2 text-center text-xs font-medium text-stone-700 sm:text-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6E0F18]/10 text-[#6E0F18]">
                  <Icon className="h-5 w-5" />
                </span>
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button asChild size="lg" className="bg-[#6E0F18] hover:bg-[#560B13]">
              <a href="#products">
                Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#6E0F18] text-[#6E0F18]">
              <a
                href={whatsappLink("Hello, I would like to place a bulk enquiry.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="h-5 w-5" /> Bulk Enquiry
              </a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <img
            src="/images/hero/papad-stack.PNG"
            alt="Stack of crispy Bikaneri papad"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
          />
          <p className="absolute right-4 top-4 rounded-full bg-white/85 px-4 py-1.5 font-serif text-sm italic text-[#6E0F18] shadow">
            Crispy · Healthy · Delicious
          </p>
        </div>
      </div>
    </section>
  );
}