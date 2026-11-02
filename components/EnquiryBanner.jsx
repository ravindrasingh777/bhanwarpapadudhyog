import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappLink } from "../data/site";

export default function EnquiryBanner() {
  return (
    <section className="bg-[#FBEBCB]/50 py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-[#6E0F18]">Interested in Our Products?</h2>
          <p className="mt-2 text-lg font-medium text-stone-800">Let&apos;s Build a Business Relationship!</p>
          <p className="mt-2 text-stone-600">
            Looking for quality papad for your retail store, wholesale business, distribution network or food
            business? We welcome enquiries from wholesalers, distributors, retailers and bulk buyers.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button asChild size="lg" className="bg-[#6E0F18] hover:bg-[#560B13]">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="h-5 w-5" /> Contact Us on WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-[#6E0F18] text-[#6E0F18]">
            <a href={`mailto:${siteConfig.email}?subject=Business%20Enquiry`}>
              Send Enquiry <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}