import { Facebook, Linkedin, Instagram } from 'lucide-react'
import logo from '../assets/logo.png'
import everify from '../assets/e-verify.png'
import socialSecurity from '../assets/1.png'
import homelandSecurity from '../assets/2.png'
import { Link } from 'react-router-dom'

export default function Footer() {

  const links = [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of use', href: '/terms-of-use' },
  ]

  return (
    <footer className="bg-black text-paper">
      <div className="h-[3px] w-full bg-gradient-to-r from-red-700 via-red-500 to-red-700" />
      <div className="section grid gap-10 py-16 md:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-2 font-display text-lg font-semibold">
            <img src={logo} alt="Career Launch logo" className="h-12" />
          </a>
          <p className="mt-4 text-sm text-paper/60">
            Career coaching and placement support for professionals building a career in the US.
          </p>
          <div className="mt-6 flex gap-4">
            <img src={everify} alt="E-Verify logo" className="h-6" />
            <img src={socialSecurity} alt="Social Security Administration logo" className="h-10" />
            <img src={homelandSecurity} alt="Department of Homeland Security logo" className="h-10" />
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wide text-paper/50">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="inline-block hover:text-red-500 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wide text-paper/50">Our Offices</h4>
          <div className="mt-4 space-y-3 text-sm text-paper/70">
            <p><span className="text-paper/50">US —</span> 113 Fraser St, Coleman, MI 48618</p>
            <p><span className="text-paper/50">Call Us —</span> 9667266578</p>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wide text-paper/50">Stay in the loop</h4>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full rounded-lg bg-white/10 px-3 py-2.5 text-sm text-paper placeholder:text-paper/40 outline-none focus:bg-white/15"
            />
            <button className="shrink-0 rounded-lg bg-gold px-4 py-2.5 text-sm font-medium text-ink">Sign up</button>
          </form>
          <div className="mt-6 flex gap-4 text-paper/60">
            <a href="#" aria-label="Facebook" className="hover:text-paper"><Facebook size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-paper"><Linkedin size={18} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-paper"><Instagram size={18} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="section text-center text-xs text-paper/40">
          © {new Date().getFullYear()} Divine Talent. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
