import VideoLessonList from '../../components/video-lesson-list'

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
		<div className="min-h-screen bg-gradient-to-br from-[#f5f3ea] via-[#e8e3d0] to-[#d7e6e3] py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-5xl mx-auto">
				<div className="mb-10 text-center">
					<h1 className="text-4xl font-serif font-extrabold mb-4 text-[#3a4d39] drop-shadow-lg">DeepNidra Video Lessons</h1>
					<p className="text-xl text-[#5e6d5c] font-light mb-6">
						Explore our curated collection of yoga nidra video sessions for relaxation, stress relief, and inner peace.
					</p>
					<img
						src="/placeholder.svg?height=300&width=800&text=Mystical+Video+Journey"
						alt="Mystical video journey banner"
						className="w-full h-48 object-cover rounded-2xl shadow-lg mx-auto"
					/>
				</div>
				<VideoLessonList lessons={videoLessons} />
			</div>
		</div>
	)
}

