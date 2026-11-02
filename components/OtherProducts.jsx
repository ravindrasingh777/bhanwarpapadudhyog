import { otherProducts } from "../data/products";

export default function OtherProducts() {
  return (
    <section id="other-products" className="scroll-mt-20 bg-[#6E0F18] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">Other Products on Demand</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#FBEBCB]/90">
            Explore more traditional food products from Bhanwar Papad Udyog. For availability, specifications and
            bulk requirements, contact our team.
          </p>
        </div>

        <ul className="mt-12 grid gap-10 sm:grid-cols-3">
          {otherProducts.map((product) => (
            <li key={product.name} className="flex flex-col items-center text-center">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-64 w-64 rounded-full border-4 border-[#E9C77E] object-cover shadow-xl "
              />
              <h3 className="mt-5 font-serif text-lg font-semibold">{product.name}</h3>
              {product.detail && <p className="text-sm text-[#FBEBCB]/80">{product.detail}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}