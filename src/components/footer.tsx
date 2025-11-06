"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="w-48">
              <Image
                src="/images/logo.png"
                alt="Encotec"
                width={500}
                height={250}
                className="w-full brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/70 font-light leading-relaxed">
              Building relationships and quality construction projects since 1994.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium uppercase tracking-wider">Services</h3>
            <div className="flex flex-col gap-3 text-sm text-white/70 font-light">
              <Link href="/services/commercial" className="hover:text-white transition-colors">
                Commercial Construction
              </Link>
              <Link href="/services/industrial" className="hover:text-white transition-colors">
                Industrial Construction
              </Link>
              <Link href="/services/residential" className="hover:text-white transition-colors">
                Residential Construction
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium uppercase tracking-wider">Company</h3>
            <div className="flex flex-col gap-3 text-sm text-white/70 font-light">
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/collections" className="hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium uppercase tracking-wider">Contact</h3>
            <div className="flex flex-col gap-4 text-sm text-white/70 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>4459 Rue Sherbrooke O.</p>
                  <p>Westmount, QC H3Z 1E7</p>
                </div>
              </div>
              <a 
                href="tel:+15149080266" 
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                (514) 908-0266
              </a>
              <a 
                href="mailto:info@encotec.ca" 
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5 flex-shrink-0" />
                info@encotec.ca
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50 font-light">
            © {year} Encotec Inc. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/50 font-light">
            <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
