import { Globe, Mail, MapPin } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { siteConfig } from "../data/site";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-[#3F070D] text-[#FBEBCB]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-serif text-2xl font-bold text-white">
            {siteConfig.name}
          </h2>
          <p className="mt-3 max-w-md text-sm text-[#FBEBCB]/80">
            Bringing the Authentic Taste of Bikaner to Every Home Since 1976.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">Contact Us</h3>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d56353.60592099085!2d73.31954055!3d28.021407950000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x393fddb8a72aa053%3A0x1a709d2e531251e9!2sBhanwar%20papad%20udyog%2C%20Thana%20No.%202%2C%20opp.%20Naya%20Shahar%2C%20Naya%20Shahar%2C%20Bikaner%2C%20Bikaner%20City%2C%20Rajasthan%20334004!3m2!1d28.0183215!2d73.2928515!5e0!3m2!1sen!2sin!4v1793624050400!5m2!1sen!2sin"
            width="100%"
            height="350"
            className="rounded-lg border-0"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Bhanwar Papad Udyog Location"
          />
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />{" "}
              {siteConfig.location}, India
            </li>
            {siteConfig.phones.map((phone) => (
              <li key={phone} className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 h-3.5 w-3.5 shrink-0" />
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="break-all hover:text-white"
              >
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
        © {siteConfig.name} | Developed with ❤️ by Ravindra Singh | VKV Digital Hub | Veer Choudhary
      </div>
    </footer>
  );
}
