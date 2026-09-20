import { brand, footerLinks } from "../data/site";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="bg-cream px-6 py-14 md:px-12">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 border-t border-gold/40 pt-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-signature text-4xl text-espresso">{brand.signatureName}</p>
          <p className="font-nav mt-1 text-xs uppercase tracking-[0.15em] text-coral">{brand.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-nav text-xs uppercase tracking-[0.1em] text-espresso/60 transition-colors hover:text-espresso"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <div className="flex gap-5">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-espresso/60 transition-colors hover:text-coral">
            <InstagramIcon width={18} height={18} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-espresso/60 transition-colors hover:text-coral">
            <FacebookIcon width={18} height={18} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-espresso/60 transition-colors hover:text-coral">
            <YoutubeIcon width={18} height={18} />
          </a>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-[1600px] text-xs text-espresso/40">
        © 2026 {brand.name}. All rights reserved.
      </p>
    </footer>
  );
}
