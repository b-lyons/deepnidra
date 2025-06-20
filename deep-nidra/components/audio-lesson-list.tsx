import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AudioLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  audioSrc: string;
  image?: string; // <-- Add this
}

interface AudioLessonListProps {
  lessons: AudioLesson[];
}

export default function AudioLessonList({ lessons }: AudioLessonListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {lessons.map((lesson) => (
        <Card key={lesson.id} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border-0 flex flex-col h-full">
          <CardHeader className="p-0">
            {lesson.image && (
              <img
                src={lesson.image}
                alt={lesson.title}
                className="w-full aspect-square object-cover rounded-t-2xl mb-4"
              />
            )}
          </CardHeader>
          <CardContent className="flex flex-col flex-1">
            <CardTitle className="text-[#3a4d39] font-serif">{lesson.title}</CardTitle>
            <CardDescription className="text-[#5e6d5c]">{lesson.duration}</CardDescription>
            <p className="mb-4 text-[#5e6d5c]">{lesson.description}</p>
            <audio controls className="w-full mb-4">
              <source src={lesson.audioSrc} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <div className="mt-auto">
              <Button
                asChild
                className="w-full rounded-full bg-[#b5cfc7] hover:bg-[#a0bfb3] text-[#3a4d39] font-semibold shadow-md transition"
              >
                <a href={lesson.audioSrc} target="_blank" rel="noopener noreferrer">
                  Listen Now
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

