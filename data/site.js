export const siteConfig = {
  name: "Bhanwar Papad Udyog",
  established: "14 April 1976",
  founder: "Shri Parsuram Ji Tiwani",
  location: "Bikaner, Rajasthan",
  phones: ["+91 8561068299", "+91 8006912727"],
  email: "bhanwarpapadudhyog@gmail.com",
  website: "www.bhanwarpapadudhyog.com",
  whatsapp: "918561068299", // number used by every WhatsApp button
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Our Brand", href: "#brand" },
  { label: "Other Products", href: "#other-products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const whatsappLink = (
  message = "Hello, I would like to know more about Bhanwar Papad Udyog products."
) => `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;