import { Mail, MapPin } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { siteConfig } from "../data/site";

export default function TopBar() {
  return (
    <div className="bg-[#6E0F18] text-xs text-[#FBEBCB] sm:text-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {siteConfig.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <FaPhoneAlt className="h-3 w-3" /> {phone}
            </a>
          ))}
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail className="h-3.5 w-3.5" /> {siteConfig.email}
          </a>
        </div>
      </div>
    </div>
  );
}