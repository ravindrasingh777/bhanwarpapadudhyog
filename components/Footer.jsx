import { Globe, Mail, MapPin } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { siteConfig } from "../data/site";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-[#3F070D] text-[#FBEBCB]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-serif text-2xl font-bold text-white">{siteConfig.name}</h2>
          <p className="mt-3 max-w-md text-sm text-[#FBEBCB]/80">
            Bringing the Authentic Taste of Bikaner to Every Home Since 1976.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {siteConfig.location}, India
            </li>
            {siteConfig.phones.map((phone) => (
              <li key={phone} className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 h-3.5 w-3.5 shrink-0" />
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="mt-0.5 h-4 w-4 shrink-0" />
              <a
                href={`https://${siteConfig.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {siteConfig.website}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-[#FBEBCB]/70">
        © {siteConfig.name}. Established {siteConfig.established}.
      </div>
    </footer>
  );
}