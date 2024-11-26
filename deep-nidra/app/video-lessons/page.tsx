import VideoLessonList from '../components/video-lesson-list'

const videoLessons = [
  {
    id: '1',
    title: 'Introduction to DeepNidra',
    description: 'A visual guide to the basics of DeepNidra\'s yoga nidra technique.',
    duration: '15 minutes', 
    thumbnail: '/placeholder.svg?height=200&width=300&text=Mystic+Intro',
    videoSrc: '/videos/introduction-to-deepnidra.mp4'
  },
  {
    id: '2',
    title: 'DeepNidra for Deep Relaxation',
    description: 'Follow along with this video session for profound relaxation.',
    duration: '30 minutes', 
    thumbnail: '/placeholder.svg?height=200&width=300&text=Relaxation+Journey',
    videoSrc: '/videos/deepnidra-for-deep-relaxation.mp4'
  },
  {
    id: '3',
    title: 'DeepNidra for Stress Relief',
    description: 'A visual guide to using DeepNidra\'s techniques for stress relief.',
    duration: '20 minutes', 
    thumbnail: '/placeholder.svg?height=200&width=300&text=Stress+Release',
    videoSrc: '/videos/deepnidra-for-stress-relief.mp4'
  }
]

export default function VideoLessonsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-primary">DeepNidra Video Lessons</h1>
      <div className="mb-8 rounded-lg overflow-hidden">
        <img 
          src="/placeholder.svg?height=300&width=800&text=Mystical+Video+Journey" 
          alt="Mystical video journey banner" 
          className="w-full h-48 object-cover"
        />
      </div>
      <VideoLessonList lessons={videoLessons} />
    </div>
  )
}

