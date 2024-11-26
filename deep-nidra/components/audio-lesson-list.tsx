import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AudioLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  audioSrc: string;
}

interface AudioLessonListProps {
  lessons: AudioLesson[];
}

export default function AudioLessonList({ lessons }: AudioLessonListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {lessons.map((lesson) => (
        <Card key={lesson.id} className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-primary">{lesson.title}</CardTitle>
            <CardDescription>{lesson.duration}</CardDescription>
          
</CardHeader>
          <CardContent>
            <p className="text-foreground/80">{lesson.description}</p>
            <audio className="mt-4 w-full" controls>
              <source src={lesson.audioSrc} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <Button asChild className="mt-4 w-full">
              <Link href={`/audio-lessons/${lesson.id}`}>Listen to Lesson</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

