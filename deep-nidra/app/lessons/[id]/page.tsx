import { notFound } from 'next/navigation'

const lessons = [
  {
    id: '1',
    title: 'Introduction to DeepNidra',
    description: 'Learn the basics of DeepNidra\'s yoga nidra technique and experience a short guided session.',
    duration: '15 minutes',
    content: 'This is where the actual DeepNidra lesson content would go. For a real application, this might include text instructions, embedded audio, or video content.'
  },
  {
    id: '2',
    title: 'DeepNidra for Deep Relaxation',
    description: 'A DeepNidra session focused on achieving profound physical and mental relaxation.',
    duration: '30 minutes',
    content: 'This is where the actual DeepNidra lesson content would go. For a real application, this might include text instructions, embedded audio, or video content.'
  },
  {
    id: '3',
    title: 'DeepNidra for Stress Relief',
    description: 'Use DeepNidra\'s yoga nidra techniques to alleviate stress and anxiety.',
    duration: '20 minutes',
    content: 'This is where the actual DeepNidra lesson content would go. For a real application, this might include text instructions, embedded audio, or video content.'
  }
]

export default function LessonPage({ params }: { params: { id: string } }) {
  const lesson = lessons.find(l => l.id === params.id)

  if (!lesson) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <p className="text-gray-600 mb-4">{lesson.duration}</p>
      <p className="mb-8">{lesson.description}</p>
      <div className="bg-white p-6 rounded-lg shadow">
        <p>{lesson.content}</p>
      </div>
    </div>
  )
}

