'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { notFound } from 'next/navigation'

const storySummaries: Record<string, { title: string, summary: string, themes: string[] }> = {
    'shooting-an-elephant': {
        title: 'Shooting an Elephant',
        summary: 'Orwell\'s essay describes his experience as a colonial police officer in Burma. He is called to deal with an aggressive elephant, but upon finding it calm, he realizes he does not want to shoot it. However, the pressure of the watching Burmese crowd forces him to kill the animal to avoid looking foolish. The incident serves as a powerful metaphor for how imperialism entraps both the oppressed and the oppressor, stripping the latter of their own freedom.',
        themes: ['Imperialism', 'Performative Masculinity', 'Conscience vs. Mob Mentality']
    },
    'clean-well-lighted-place': {
        title: 'A Clean, Well-Lighted Place',
        summary: 'Two waiters in a Spanish café watch an old, deaf man who stays late drinking brandy. The younger waiter is impatient and wants to go home to his wife, but the older waiter understands the old man\'s reluctance to leave. He reflects on the concept of "nada" (nothingness)—the existential void that life ultimately is. He values the café as a "clean, well-lighted place" that provides a temporary refuge from this darkness and despair.',
        themes: ['Nihilism', 'Old Age', 'Existential Despair', 'Order vs. Chaos']
    },
    'esme': {
        title: 'Esme',
        summary: 'A Baroness recounts a hunting trip where she and a friend, Constance, encounter a hyena they name Esme. The hyena follows them and eventually eats a gypsy child. The women are horrified but do nothing to stop it, and later, the Baroness uses the incident to claim a diamond brooch as "reparation" from the hyena\'s owner. The story is a biting satire on the moral vacuity and self-centeredness of the Edwardian upper class.',
        themes: ['Social Satire', 'Moral Indifference', 'The Grotesque', 'Upper-Class Hypocrisy']
    },
    'the-black-cat': {
        title: 'The Black Cat',
        summary: 'The narrator, a man whose personality has deteriorated due to alcoholism, tortures and kills his beloved black cat, Pluto. Later, he brings home a similar cat but grows to hate it. In a fit of rage aimed at the cat, he kills his wife instead and hides her body behind a cellar wall. His crime is discovered when the cat, which he had accidentally walled up with the body, cries out, alerting the police.',
        themes: ['Guilt', 'Perverseness', 'Alcoholism', 'Psychological Deterioration']
    },
    'modest-proposal': {
        title: 'A Modest Proposal',
        summary: 'Jonathan Swift satirically suggests that the impoverished Irish peasantry can solve their economic troubles by selling their children as food to the wealthy English landlords. He presents this horrific idea with cold, economic logic and recipes, using shocking irony to criticize the heartless attitudes of the British ruling class and the passivity of the Irish politicians.',
        themes: ['Political Satire', 'Dehumanization', 'Poverty', 'Colonial Exploitation']
    }
}

export default function SummaryPage({ params }: { params: { id: string } }) {
    const data = storySummaries[params.id as keyof typeof storySummaries]

    if (!data) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-paper text-ink selection:bg-moss-900 selection:text-paper flex flex-col">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-40 text-moss-900 pointer-events-none">
                <Link href={`/stories/${params.id}`} className="pointer-events-auto flex items-center space-x-2 text-moss-800 hover:text-moss-600 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-serif font-bold tracking-wider">BACK TO STORY</span>
                </Link>
                <div className="hidden md:flex space-x-6 text-sm font-sans tracking-widest pointer-events-auto opacity-50">
                    <span>SUMMARY</span>
                </div>
            </nav>

            <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-20 py-20">
                <div className="max-w-2xl w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-8 border-b border-moss-200 pb-6">
                            <span className="font-sans text-xs tracking-widest text-moss-600 uppercase mb-2 block">Executive Summary</span>
                            <h1 className="font-serif text-4xl md:text-5xl text-moss-950 mb-4">{data.title}</h1>
                            <div className="flex flex-wrap gap-2">
                                {data.themes.map(theme => (
                                    <span key={theme} className="px-3 py-1 bg-moss-100 text-moss-800 text-xs font-sans tracking-wide rounded-full">
                                        {theme}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="prose prose-lg prose-stone prose-p:font-serif prose-p:text-ink/80 prose-p:leading-loose">
                            <p>{data.summary}</p>
                        </div>

                        <div className="mt-12 flex justify-center">
                            <Link href={`/stories/${params.id}`}>
                                <button className="px-8 py-3 border border-moss-900 text-moss-900 hover:bg-moss-50 transition-colors font-sans tracking-widest text-sm">
                                    READ FULL TEXT
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    )
}
