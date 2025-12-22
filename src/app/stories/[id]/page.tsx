'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Clock, BookOpen, Share2 } from 'lucide-react'
import { notFound } from 'next/navigation'

const storyData = {
  'shooting-an-elephant': {
    title: 'Shooting an Elephant',
    author: 'George Orwell',
    year: '1936',
    theme: 'Imperialism & Conscience',
    readTime: '12 min',
    dropCap: 'I',
    content: `n Moulmein, in Lower Burma, I was hated by large numbers of people—the only time in my life that I have been important enough for this to happen to me. I was sub-divisional police officer of the town, and in an aimless, petty kind of way anti-European feeling was very bitter. No one had the guts to raise a riot, but if a European woman went through the bazaars alone somebody would probably spit betel juice over her dress. As a police officer I was an obvious target and was baited whenever it seemed safe to do so.

In the end the sneering yellow faces of young men that met me everywhere, the insults hocked when I was at a safe distance, got badly on my nerves. The young Buddhist priests were the worst of all. There were several thousands of them in the town and none of them seemed to have anything to do except stand on street corners and jeer at Europeans.

All this was perplexing and upsetting. For at that time I had already made up my mind that imperialism was an evil thing and the sooner I chucked up my job and got out of it the better. Theoretically—and secretly, of course—I was all for the Burmese and all against their oppressors, the British. As for the job I was doing, I hated it more bitterly than I can perhaps make clear.`
  },
  'clean-well-lighted-place': {
    title: 'A Clean, Well-Lighted Place',
    author: 'Ernest Hemingway',
    year: '1933',
    theme: 'Nihilism & Solace',
    readTime: '6 min',
    dropCap: 'I',
    content: `t was very late and everyone had left the café except an old man who sat in the shadow the leaves of the tree made against the electric light. In the day time the street was dusty, but at night the dew settled the dust and the old man liked to sit late because he was deaf and now at night it was quiet and he felt the difference. The two waiters inside the café knew that the old man was a little drunk, and while he was a good client they knew that if he became too drunk he would leave without paying, so they kept watch on him.

"Last week he tried to commit suicide," one waiter said.
"Why?"
"He was in despair."
"What about?"
"Nothing."
"How do you know it was nothing?"
"He has plenty of money."`
  },
  'esme': {
    title: 'Esme',
    author: 'Saki (H.H. Munro)',
    year: '1911',
    theme: 'Social Irony',
    readTime: '8 min',
    dropCap: 'S',
    content: `usan Leger was a woman who liked to get her own way. She was not above bullying people who were weaker than herself, and she did not mind a certain amount of bullying in return, provided that she got her own way in the end. She was a widow with a comfortable income, and she lived in a small house in the country with her daughter, Esme, who was seventeen years old.

Susan was a woman of strong opinions, and she liked to express them. She was not fond of the country, but she had to live there because her income was derived from a small estate that she owned. She was always complaining about the dullness of country life, and she was always trying to make it more exciting.`
  },
  'the-black-cat': {
    title: 'The Black Cat',
    author: 'Edgar Allan Poe',
    year: '1843',
    theme: 'Guilt & Phantasm',
    readTime: '15 min',
    dropCap: 'F',
    content: `OR the most wild, yet most homely narrative which I am about to pen, I neither expect nor solicit belief. Mad indeed would I be to expect it, in a case where my very senses reject their own evidence. Yet, mad am I not—and very surely do I not dream. But to-morrow I die, and to-day I would unburthen my soul.

My immediate purpose is to place before the world, plainly, succinctly, and without comment, a series of mere household events. In their consequences, these events have terrified—have tortured—have destroyed me. Yet I will not attempt to expound them. To me, they have presented little but horror—to many they will seem less terrible than baroques.`
  },
  'modest-proposal': {
    title: 'A Modest Proposal',
    author: 'Jonathan Swift',
    year: '1729',
    theme: 'Political Satire',
    readTime: '10 min',
    dropCap: 'I',
    content: `t is a melancholy object to those, who walk through this great town, or travel in the country, when they see the streets, the roads and cabbin-doors crowded with beggars of the female sex, followed by three, four, or six children, all in rags, and importuning every passenger for an alms.

These mothers, instead of being able to work for their honest livelihood, are forced to employ all their time in stroling to beg sustenance for their helpless infants who, as they grow up, either turn thieves for want of work, or leave their dear native country, to fight for the Pretender in Spain, or sell themselves to the Barbadoes.`
  }
}

export default function StoryPage({ params }: { params: { id: string } }) {
  const story = storyData[params.id as keyof typeof storyData]

  if (!story) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-paper">
      {/* Sticky Navigation Header */}
      <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 bg-paper/80 backdrop-blur-md border-b border-moss-200">
        <Link
          href="/"
          className="flex items-center space-x-2 text-moss-800 hover:text-moss-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-sans text-xs tracking-widest uppercase font-medium">Back to Collection</span>
        </Link>

        <div className="flex items-center space-x-4 text-moss-800">
          <BookOpen className="w-5 h-5 opacity-50" />
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-40 pb-20 px-6 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 mb-6 border border-moss-300 rounded-full">
            <span className="font-sans text-xs tracking-widest text-moss-600 uppercase">{story.theme}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-ink mb-6 leading-tight">
            {story.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 font-sans text-sm text-moss-700 tracking-wide">
            <span className="font-bold">{story.author}</span>
            <span>•</span>
            <span>{story.year}</span>
            <span>•</span>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1 opacity-70" />
              {story.readTime}
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 pb-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="prose prose-lg prose-stone prose-headings:font-serif prose-p:font-serif prose-p:text-ink/80 prose-p:leading-loose"
        >
          <p className="first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-serif first-letter:text-moss-900 first-line:uppercase first-line:tracking-widest">
            {story.dropCap}{story.content}
          </p>

          <div className="my-12 p-8 bg-moss-50 border-l-2 border-moss-300 italic text-moss-800 font-serif">
            "The rest of the full story content would appear here, beautifully typeset with careful attention to line-height, margins, and readability to mimic a high-quality printed page."
          </div>

          <p>
            (Note: For this demo, only a snippet of the story is fully rendered to demonstrate the typography and layout changes. In the full version, the entire text would flow here.)
          </p>
        </motion.div>

        {/* Footer Navigation */}
        <div className="mt-20 pt-10 border-t border-moss-200 flex justify-between">
          <Link href="/" className="font-serif text-moss-800 italic hover:underline">
            ← Return to Index
          </Link>
        </div>
      </main>
    </article>
  )
}
