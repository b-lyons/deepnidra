import AudioLessonList from '../../components/audio-lesson-list'

const audioLessons = [
	{
		id: '1',
		title: 'Guided DeepNidra Meditation',
		description: 'A soothing audio guide through a complete DeepNidra session.',
		duration: '20 minutes',
		audioSrc: '/audio/guided-deepnidra-meditation.mp3',
		image: '/images/a1.png',
	},
	{
		id: '2',
		title: 'DeepNidra for Better Sleep',
		description: 'An audio-only DeepNidra session designed to improve your sleep.',
		duration: '25 minutes',
		audioSrc: '/audio/deepnidra-for-better-sleep.mp3',
		image: '/images/a2.png',
	},
	{
		id: '3',
		title: 'Quick DeepNidra Relaxation',
		description: 'A short audio session for quick relaxation during your day.',
		duration: '10 minutes',
		audioSrc: '/audio/quick-deepnidra-relaxation.mp3',
		image: '/images/a3.png',
	},
]

export default function AudioLessonsPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-[#f5f3ea] via-[#e8e3d0] to-[#d7e6e3] py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-5xl mx-auto">
				<div className="mb-10 text-center">
					<h1 className="text-4xl font-serif font-extrabold mb-4 text-[#3a4d39] drop-shadow-lg">
						DeepNidra Audio Lessons
					</h1>
					<p className="text-xl text-[#5e6d5c] font-light mb-6">
						Listen to our curated collection of yoga nidra audio sessions for
						relaxation, restful sleep, and inner harmony.
					</p>
					<img
						src="/images/banner_a.png"
						alt="Mystical sound journey banner"
						className="w-full h-48 object-cover rounded-2xl shadow-lg mx-auto"
					/>
				</div>
				<AudioLessonList lessons={audioLessons} />
			</div>
		</div>
	)
}

