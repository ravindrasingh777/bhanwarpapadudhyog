import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BrandShowcase() {
  return (
    <section id="brand" className="scroll-mt-20 bg-[#6E0F18] text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 lg:px-8 lg:py-20">
         <img
          src="/images/brands/bhanwar-packs.png"
          alt="Bhanwar papad packets"
          loading="lazy"
          className="mx-auto w-full max-w-md drop-shadow-2xl"
        />
        
        <div className="text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.25em] text-[#E9C77E]">Our Brand</p>
          <h2 className="mt-2 font-serif text-5xl font-bold sm:text-6xl">Bhanwar</h2>
          <p className="font-serif text-xl tracking-[0.35em] text-[#E9C77E]">PAPAD</p>
          <p className="mx-auto mt-6 max-w-md text-[#FBEBCB] md:mx-0">
            A legacy of authentic taste. Bhanwar Papad represents our traditional heritage, quality and commitment
            to authentic Bikaneri flavours, bringing delicious papad to Indian households.
          </p>
          <p className="mt-3 text-sm text-[#FBEBCB]/80">Trusted for quality and authentic taste since 1976.</p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="mt-8 border-white bg-transparent text-white hover:bg-white hover:text-[#6E0F18]"
          >
            <a href="#products">
              View Bhanwar Products <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}