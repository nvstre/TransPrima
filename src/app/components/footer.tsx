import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  contact?: {
    address: string;
    phone: string;
    email: string;
  };
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  romanianLegal?: {
    companyName: string;
    cui: string;
    regCom: string;
    address: string;
  };
}

const defaultContact = {
  address: "Soseaua de Centura nr. 162, Alba Iulia, Alba, România",
  phone: "+40 123 456 789",
  email: "office@transprima.ro"
};

const defaultRomanianLegal = {
  companyName: "Trans Prima SRL",
  cui: "RO5531011",
  regCom: "J01/370/1994 ",
  address: "Soseaua de Centura nr. 162, Alba, România"
};

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
];



export const Footer7 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://videos.openai.com/vg-assets/assets%2Ftask_01k0yq401qebwtkkvd7b175pd0%2F1753377555_img_0.webp?st=2025-08-02T10%3A54%3A29Z&se=2025-08-08T11%3A54%3A29Z&sks=b&skt=2025-08-02T10%3A54%3A29Z&ske=2025-08-08T11%3A54%3A29Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=7IaJcwlDY4Hw0X7%2F9VlVwhczkOeK4N6VAl2vgCmjcGI%3D&az=oaivgprodscus",
    alt: "logo",
    title: "Trans Prima",
  },
  contact = defaultContact,
  description = "Transport intern si international de marfa in regim LTL si FTL",
  socialLinks = defaultSocialLinks,
  copyright = "Copyright by Trans Prima. Toate drepturile rezervate.",
  romanianLegal = defaultRomanianLegal,
}: Footer7Props) => {
  return (
    <section className="mt-20 py-16 text-white bg-transparent">
      <div className="container mx-auto">
        {/* Main Content Row */}
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start">
          {/* Logo and Description */}
          <div className="flex w-full flex-col gap-6 lg:max-w-md">
            <div className="flex items-center gap-2">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8"
                />
              </a>
              <h2 className="text-xl font-semibold text-white">{logo.title}</h2>
            </div>
            <p className="text-sm text-white/70">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-white/70">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-white">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex w-full flex-col gap-6 lg:max-w-md">
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-white/50" />
                <span>{contact.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-white/50" />
                <a href={`tel:${contact.phone}`} className="hover:text-white">
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-white/50" />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Romanian Legal Information Row */}
        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="flex flex-col justify-between gap-4 text-xs text-white/70 md:flex-row md:items-center">
            <div className="flex flex-col gap-1">
              <p>{copyright}</p>
              <p>{romanianLegal.companyName} | CUI: {romanianLegal.cui} | Reg. Com: {romanianLegal.regCom}</p>
              <p>Sediul social: {romanianLegal.address}</p>
            </div>
            <div className="flex flex-col gap-1 md:text-right">
              <a href="#" className="hover:text-white">Termeni și Condiții</a>
              <a href="#" className="hover:text-white">Politica de Confidențialitate</a>
              <a href="#" className="hover:text-white">GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
