import LessonList from '../components/lesson-list'

const lessons = [
  {
    id: '1',
    title: 'Introduction to DeepNidra',
    description: 'Learn the basics of DeepNidra\'s yoga nidra technique and experience a short guided session.',
    duration: '15 minutes'
  },
  {
    id: '2',
    title: 'DeepNidra for Deep Relaxation',
    description: 'A DeepNidra session focused on achieving profound physical and mental relaxation.',
    duration: '30 minutes'
  },
  {
    id: '3',
    title: 'DeepNidra for Stress Relief',
    description: 'Use DeepNidra\'s yoga nidra techniques to alleviate stress and anxiety.',
    duration: '20 minutes'
  }
]

export default function LessonsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">DeepNidra Lessons</h1>
      <LessonList lessons={lessons} />
    </div>
  )
}

