'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { ArrowRight, BookOpen } from 'lucide-react'

const stories = [
  {
    id: 'shooting-an-elephant',
    title: 'Shooting an Elephant',
    author: 'George Orwell',
    year: '1936',
    excerpt: 'In Moulmein, in Lower Burma, I was hated by large numbers of people–the only time in my life that I have been important enough for this to happen to me.',
    theme: 'Imperialism',
    imageColor: 'bg-moss-800',
    number: '01'
  },
  {
    id: 'clean-well-lighted-place',
    title: 'A Clean, Well-Lighted Place',
    author: 'Ernest Hemingway',
    year: '1933',
    excerpt: 'It was very late and everyone had left the café except an old man who sat in the shadow the leaves of the tree made against the electric light.',
    theme: 'Existentialism',
    imageColor: 'bg-stone-800',
    number: '02'
  },
  {
    id: 'esme',
    title: 'Esme',
    author: 'Saki',
    year: '1911',
    excerpt: '"All hunting stories are the same," said Clovis; "just as all Turf stories are the same, and all--"',
    theme: 'Satire',
    imageColor: 'bg-emerald-900',
    number: '03'
  },
  {
    id: 'the-black-cat',
    title: 'The Black Cat',
    author: 'Edgar Allan Poe',
    year: '1843',
    excerpt: 'FOR the most wild yet most homely narrative which I am about to pen, I neither expect nor solicit belief.',
    theme: 'Horror',
    imageColor: 'bg-zinc-900',
    number: '04'
  },
  {
    id: 'modest-proposal',
    title: 'A Modest Proposal',
    author: 'Jonathan Swift',
    year: '1729',
    excerpt: 'It is a melancholy object to those, who walk through this great town, or travel in the country, when they see the streets, the roads and cabin doors crowded with beggars of the female sex...',
    theme: 'Social Irony',
    imageColor: 'bg-green-900',
    number: '05'
  }
]

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <main ref={containerRef} className="min-h-screen bg-paper text-ink selection:bg-moss-900 selection:text-paper">

      {/* Navigation - Minimalist */}
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-40 mix-blend-difference text-paper pointer-events-none">
        <div className="flex items-center space-x-2 pointer-events-auto">
          <BookOpen className="w-5 h-5" />
          <span className="font-serif font-bold tracking-wider">ENG115</span>
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-sans tracking-widest pointer-events-auto">
          <span className="opacity-50">COLLECTION</span>
          <span>FALL 2025</span>
        </div>
      </nav>

      {/* Hero Section - Magazine Style */}
      <header className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <span className="font-sans text-moss-700 tracking-[0.3em] text-sm mb-6 ml-2 uppercase">The Curated Anthology</span>
            <h1 className="font-serif text-[15vw] leading-[0.8] tracking-tighter text-moss-950 mix-blend-multiply">
              Classic
              <br />
              <span className="italic ml-[15vw] text-moss-800">Stories</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 md:ml-auto max-w-md"
          >
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-moss-800">
              Five masterpieces that challenge our perception of morality, society, and the human condition.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8 mb-4">
              <Link href="/quiz">
                <button className="px-8 py-3 bg-moss-900 text-moss-100 font-sans tracking-widest text-sm hover:bg-moss-800 transition-colors duration-300">
                  TAKE A QUIZ
                </button>
              </Link>
              <div className="h-px w-24 bg-moss-900 sm:hidden" />
            </div>
            <p className="font-sans text-sm text-moss-600 mt-4">SCROLL TO EXPLORE</p>
          </motion.div>
        </div>

        {/* Abstract Background Elements */}
        <motion.div
          className="absolute top-1/4 right-0 w-[40vw] h-[40vw] rounded-full bg-moss-200 blur-[100px] opacity-40 -z-10"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 left-10 w-[30vw] h-[30vw] rounded-full bg-emerald-100 blur-[80px] opacity-60 -z-10"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </header>

      {/* Stories - Editorial Layout */}
      <section className="relative py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">
          {stories.map((story, index) => (
            <StoryItem key={story.id} story={story} index={index} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-moss-950 text-moss-100 py-32 px-6 md:px-20 mt-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-5xl md:text-8xl mb-12">Fine.</h2>
          <div className="flex flex-col items-center space-y-8 font-sans text-sm tracking-widest opacity-60">
            <p>ENGLISH 115 CREATIVE PROJECT</p>
            <div className="w-px h-16 bg-moss-700" />
            <p>© 2025</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

function StoryItem({ story, index }: { story: any, index: number }) {
  const isEven = index % 2 === 0

  return (
    <Link href={`/stories/${story.id}`} className="block group">
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-20`}>

        {/* Image / Graphic Area */}
        <div className="w-full md:w-1/2 relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
          <div className={`absolute inset-0 ${story.imageColor} transition-transform duration-700 group-hover:scale-95`} />
          <div className="absolute inset-4 border border-paper/20">
            <div className="absolute top-6 left-6 text-paper/40 font-serif text-8xl opacity-20">
              {story.number}
            </div>
            {/* Center Theme Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-paper/90 text-4xl md:text-5xl italic tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                {story.theme}
              </span>
            </div>
          </div>
        </div>

        {/* Text Area */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="overflow-hidden mb-4">
            <h2 className="font-serif text-4xl md:text-6xl text-ink group-hover:italic transition-all duration-300 transform translate-y-0">
              {story.title}
            </h2>
          </div>
          <div className="flex items-center space-x-4 mb-8">
            <span className="font-sans text-sm tracking-widest uppercase text-moss-600">{story.author}</span>
            <span className="w-8 h-px bg-moss-300" />
            <span className="font-sans text-sm text-moss-500">{story.year}</span>
          </div>
          <p className="font-serif text-lg md:text-xl text-ink/70 leading-relaxed max-w-md mb-8">
            {story.excerpt}
          </p>

          <div className="flex items-center space-x-2 text-moss-800 font-sans font-medium tracking-wide group/btn w-max">
            <span>READ STORY</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
          </div>
        </div>
      </div>
    </Link>
  )
}
