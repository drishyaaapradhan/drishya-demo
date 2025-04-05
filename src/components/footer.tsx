'use client'

import { Mail, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-lg font-semibold mb-2">AUSBIZ EDUCATION</h2>
          <p className="text-sm">Empowering Students with Critical Industry Skills.</p>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-2">How to get in touch</h3>
          <p className="text-sm">
            <Mail className="inline mr-2 w-4 h-4" />
            <a href="mailto:support@ausbizconsultingservices.com.au" className="underline">
              support@ausbizconsultingservices.com.au
            </a>
          </p>
          <div className="mt-4 text-sm space-y-2">
            <p>
              <strong>Sydney:</strong> Level 28, 161 Castlereagh St, Sydney NSW 2000
            </p>
            <p>
              <strong>Melbourne:</strong> Collins Square, 727 Collins St, Melbourne VIC 3008
            </p>
            <p>
              <strong>Parramatta:</strong> ECA, Level 4, 1-3 Fitzwilliam St, Parramatta NSW 2150
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://x.com/yourxhandle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <Twitter className="w-5 h-5 hover:text-blue-400" />
            </a>
            <a
              href="https://linkedin.com/company/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Ausbiz Consulting Services. All rights reserved.
      </div>
    </footer>
  )
}
