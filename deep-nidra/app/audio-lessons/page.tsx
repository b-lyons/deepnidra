import AudioLessonList from '../components/audio-lesson-list'

const audioLessons = [
  {
    id: '1',
    title: 'Guided DeepNidra Meditation',
    description: 'A soothing audio guide through a complete DeepNidra session.',
    duration: '20 minutes', 
    audioSrc: '/audio/guided-deepnidra-meditation.mp3'
  },
  {
    id: '2',
    title: 'DeepNidra for Better Sleep',
    description: 'An audio-only DeepNidra session designed to improve your sleep.',
    duration: '25 minutes', 
    audioSrc: '/audio/deepnidra-for-better-sleep.mp3'
  },
  {
    id: '3',
    title: 'Quick DeepNidra Relaxation',
    description: 'A short audio session for quick relaxation during your day.',
    duration: '10 minutes', 
    audioSrc: '/audio/quick-deepnidra-relaxation.mp3'
  }
]

export default function AudioLessonsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-primary">DeepNidra Audio Lessons</h1>
      <div className="mb-8 rounded-lg overflow-hidden">
        <img 
          src="/placeholder.svg?height=300&width=800&text=Mystical+Sound+Journey" 
          alt="Mystical sound journey banner" 
          className="w-full h-48 object-cover"
        />
      </div>
      <AudioLessonList lessons={audioLessons} />
    </div>
  )
}

