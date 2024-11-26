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
        <Card key={lesson.id} className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <img src={lesson.thumbnail} alt={lesson.title} className="w-full h-48 object-cover rounded-t-lg" />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-primary">{lesson.title}</CardTitle>
            <CardDescription>{lesson.duration}</CardDescription>
            <p className="mt-2 text-foreground/80">{lesson.description}</p>
            <video className="mt-4 w-full" controls>
              <source src={lesson.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Button asChild className="mt-4 w-full">
              <Link href={`/video-lessons/${lesson.id}`}>Watch Lesson</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

