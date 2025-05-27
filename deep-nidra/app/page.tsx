import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f3ea] via-[#e8e3d0] to-[#d7e6e3] relative overflow-hidden">
      {/* Decorative Mandala SVG */}
      <svg
        className="absolute left-1/2 top-0 -translate-x-1/2 opacity-10 w-[600px] h-[600px] pointer-events-none"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="300" cy="300" r="280" stroke="#b5cfc7" strokeWidth="8" />
        <circle cx="300" cy="300" r="200" stroke="#b5cfc7" strokeWidth="2" />
        <circle cx="300" cy="300" r="120" stroke="#b5cfc7" strokeWidth="1" />
      </svg>

      <section className="relative text-center py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="relative z-10">
          <h1 className="text-5xl font-serif font-extrabold mb-6 text-[#3a4d39] drop-shadow-lg">Welcome to DeepNidra</h1>
          <p className="text-2xl mb-10 text-[#5e6d5c] font-light">Discover deep relaxation and inner peace through DeepNidra's guided yoga nidra practice</p>
          <div className="flex justify-center space-x-6">
            <Button asChild className="rounded-full px-8 py-3 text-lg bg-[#b5cfc7] hover:bg-[#a0bfb3] shadow-md transition">
              <Link href="/video-lessons">Video Lessons</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-3 text-lg border-[#b5cfc7] text-[#3a4d39] hover:bg-[#e8e3d0] shadow-md transition">
              <Link href="/audio-lessons">Audio Lessons</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-16 px-4 sm:px-6 lg:px-8 z-10 relative">
        <h2 className="text-3xl font-serif font-semibold mb-6 text-[#3a4d39]">What is Yoga Nidra?</h2>
        <Card className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-[#3a4d39] font-serif">DeepNidra: The Art of Conscious Relaxation</CardTitle>
            <CardDescription className="text-[#5e6d5c]">
              DeepNidra offers powerful yoga nidra meditation techniques that promote deep relaxation and inner awareness.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-[#5e6d5c] text-lg">Often referred to as "yogic sleep," Yoga Nidra is a state of consciousness between waking and sleeping.</p>
            <p className="mb-4 text-[#5e6d5c] text-lg">It's a systematic method of inducing complete physical, mental, and emotional relaxation while maintaining awareness.</p>
            <p className="text-[#5e6d5c] text-lg">Benefits include stress reduction, improved sleep, and enhanced overall well-being.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

