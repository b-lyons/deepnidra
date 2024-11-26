import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="relative text-center py-20 px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20" 
          style={{ backgroundImage: "url('/placeholder.svg?height=400&width=800')" }}
          aria-hidden="true"
        ></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-primary">Welcome to DeepNidra</h1>
          <p className="text-xl mb-8 text-foreground/80">Discover deep relaxation and inner peace through DeepNidra's guided yoga nidra practice</p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <Link href="/video-lessons">Video Lessons</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/audio-lessons">Audio Lessons</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">What is Yoga Nidra?</h2>
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-primary">DeepNidra: The Art of Conscious Relaxation</CardTitle>
            <CardDescription>DeepNidra offers powerful yoga nidra meditation techniques that promote deep relaxation and inner awareness.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Often referred to as "yogic sleep," Yoga Nidra is a state of consciousness between waking and sleeping. It's a systematic method of inducing complete physical, mental, and emotional relaxation while maintaining awareness.</p>
            <p>Benefits include stress reduction, improved sleep, and enhanced overall well-being.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

