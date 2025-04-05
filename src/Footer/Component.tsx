import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer as FooterType } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

import { Mail, Linkedin, Twitter } from 'lucide-react'

export async function Footer() {
  const footerData: FooterType = await getCachedGlobal('footer', 1)()
  const navItems = footerData?.navItems || []

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand & Tagline */}
        <div>
          <Link href="/" className="flex items-center mb-4">
            <Logo />
          </Link>
          <h2 className="text-xl font-semibold">AUSBIZ EDUCATION</h2>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Empowering Students with Critical Industry Skills.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-medium mb-3">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-3">
            <li>
              <Mail className="inline-block w-4 h-4 mr-2" />
              <a href="mailto:support@ausbizconsultingservices.com.au" className="underline">
                support@ausbizconsultingservices.com.au
              </a>
            </li>
            <li>
              <strong>Sydney:</strong>
              <br />
              Level 28, 161 Castlereagh St
              <br />
              Sydney NSW 2000
            </li>
            <li>
              <strong>Melbourne:</strong>
              <br />
              Collins Square, 727 Collins St
              <br />
              Melbourne VIC 3008
            </li>
            <li>
              <strong>Parramatta (Campus – Partners):</strong>
              <br />
              ECA, Level 4, 1-3 Fitzwilliam St
              <br />
              Parramatta NSW 2150
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-medium mb-3">Quick Links</h3>
          <nav className="flex flex-col text-sm text-gray-300 space-y-2">
            {navItems.map(({ link }, i) => (
              <CMSLink
                key={i}
                {...link}
                className="hover:text-white transition-colors duration-150"
              />
            ))}
          </nav>
        </div>

        {/* Theme & Social */}
        <div className="flex flex-col justify-between h-full">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Theme</h3>
            <ThemeSelector />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://x.com/yourxhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <Twitter className="w-5 h-5 hover:text-blue-400 transition" />
              </a>
              <a
                href="https://linkedin.com/company/yourlinkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 hover:text-blue-400 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center text-xs text-gray-500 py-4 px-6">
        © {new Date().getFullYear()} Ausbiz Consulting Services. All rights reserved.
      </div>
    </footer>
  )
}
