import AudioLessonList from '../../components/audio-lesson-list'

const audioLessons = [
	{
		id: '1',
		title: 'Shavasana',
		description: 'Bills intro Shavasana.',
		duration: '10 minutes',
		audioSrc: '/audio/BL-Savasana.mp3',
		image: '/images/a1.png',
	},
	{
		id: '2',
		title: 'Somatic Ignition',
		description: 'A body scan to help you go deeper into the nidra.',
		duration: '10 minutes',
		audioSrc: '/audio/BL-Somatic-Ignition.mp3',
		image: '/images/a2.png',
	},
	{
		id: '3',
		title: 'Symbols & Stories',
		description: 'A section of the nidra that uses symbols and stories to help you realize your sankalpa.',
		duration: '10 minutes',
		audioSrc: '/audio/BL-Symbols-Stories.mp3',
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
						src="/images/banner_a.jpg"
						alt="Mystical sound journey banner"
						className="w-full h-88 object-cover rounded-2xl shadow-lg mx-auto"
					/>
				</div>
				<AudioLessonList lessons={audioLessons} />
			</div>
		</div>
	)
}

