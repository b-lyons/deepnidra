"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function HeaderConditional() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  if (pathname === "/") return null

  return (
    <header className="bg-white/60 backdrop-blur-md shadow-sm fixed top-0 left-0 w-full z-20">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-14 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-serif font-bold text-[#3a4d39]">DeepNidra</Link>
        <button
          className="p-2 rounded-md hover:bg-[#e8e3d0] transition"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          {/* Hamburger icon */}
          <svg className="w-7 h-7 text-[#3a4d39]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Dropdown menu */}
        {open && (
          <div className="absolute right-4 top-14 bg-white/90 rounded-xl shadow-lg py-2 px-4 flex flex-col items-end">
            <Link href="/video-lessons" className="py-2 px-4 text-[#3a4d39] hover:bg-[#e8e3d0] rounded transition" onClick={() => setOpen(false)}>
              Video Lessons
            </Link>
            <Link href="/audio-lessons" className="py-2 px-4 text-[#3a4d39] hover:bg-[#e8e3d0] rounded transition" onClick={() => setOpen(false)}>
              Audio Lessons
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}