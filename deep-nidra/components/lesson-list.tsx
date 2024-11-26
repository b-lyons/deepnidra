import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
}

interface LessonListProps {
  lessons: Lesson[];
}

export default function LessonList({ lessons }: LessonListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {lessons.map((lesson) => (
        <Card key={lesson.id}>
          <CardHeader>
            <CardTitle>{lesson.title}</CardTitle>
            <CardDescription>{lesson.duration}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{lesson.description}</p>
            <Button asChild className="mt-4">
              <Link href={`/lessons/${lesson.id}`}>Start Lesson</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

