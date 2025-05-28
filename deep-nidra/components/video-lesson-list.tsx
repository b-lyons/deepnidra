import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface VideoLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  videoSrc: string;
}

interface VideoLessonListProps {
  lessons: VideoLesson[];
}

export default function VideoLessonList({ lessons }: VideoLessonListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {lessons.map((lesson) => (
        <Card key={lesson.id} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border-0">
          <CardHeader className="p-0">
            <img
              src={lesson.thumbnail}
              alt={lesson.title}
              className="w-full aspect-square object-cover rounded-t-2xl mb-4"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-[#3a4d39] font-serif">{lesson.title}</CardTitle>
            <CardDescription className="text-[#5e6d5c]">{lesson.duration}</CardDescription>
            <p className="mt-2 text-[#5e6d5c]">{lesson.description}</p>
            <video className="mt-4 w-full rounded-lg shadow" controls>
              <source src={lesson.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Button
              asChild
              className="mt-4 w-full rounded-full bg-[#b5cfc7] hover:bg-[#a0bfb3] text-[#3a4d39] font-semibold shadow-md transition"
            >
              <Link href={`/video-lessons/${lesson.id}`}>Watch Lesson</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

