import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { papadRange } from "../data/products";

const HOME_COUNT = 6;

function ProductCard({ product }) {
  return (
    <Card className="group gap-0 overflow-hidden rounded-2xl border-[#6E0F18]/10 p-0 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-square overflow-hidden bg-[#FBEBCB]">
        <img
          src={`/images/papad/${product.slug}.PNG`}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="flex flex-1 flex-col gap-2 p-4 text-center">
        <h3 className="font-serif text-base font-semibold text-[#6E0F18] sm:text-lg">{product.name}</h3>
        <p className="line-clamp-3 text-xs text-stone-600 sm:text-sm">{product.description}</p>
      </CardContent>
      <CardFooter className="justify-center p-4 pt-0">
        <Button asChild variant="outline" size="sm" className="border-[#6E0F18]/30 mt-4 text-[#6E0F18]">
          <a href={`/products/${product.slug}`}>
            View Details <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function PapadRange() {
  return (
    <section id="products" className="scroll-mt-20 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-[#6E0F18] sm:text-4xl">Our Papad Range</h2>
          <p className="mx-auto mt-3 max-w-2xl text-stone-600">
            Wide variety of authentic Bikaneri papad prepared with the finest ingredients.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-5">
          {papadRange.slice(0, HOME_COUNT).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-[#6E0F18] hover:bg-[#560B13]">
            <a href="/products">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}