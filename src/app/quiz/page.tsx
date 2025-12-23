'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, RefreshCcw } from 'lucide-react'

// Quiz Data Sets
const quizSets = {
    standard: [
        {
            id: 1,
            storyId: 'shooting-an-elephant',
            question: "In 'Shooting an Elephant', what is the narrator's primary motivation for shooting the elephant?",
            options: [
                "To protect the villagers",
                "Because the elephant was attacking him",
                "To avoid looking foolish in front of the crowd",
                "Because he hated elephants"
            ],
            correctAnswer: 2
        },
        {
            id: 2,
            storyId: 'clean-well-lighted-place',
            question: "What is the central theme represented by 'nada' in 'A Clean, Well-Lighted Place'?",
            options: [
                "The joy of simple things",
                "The existence of a higher power",
                "The emptiness and meaninglessness of life",
                "The value of hard work"
            ],
            correctAnswer: 2
        },
        {
            id: 3,
            storyId: 'esme',
            question: "In Saki's 'Esme', what ultimately happens to the child encountered by the hyena?",
            options: [
                "The hyena adopts it",
                "It is returned safely to the village",
                "The hyena devours it",
                "It escapes into the woods"
            ],
            correctAnswer: 2
        },
        {
            id: 4,
            storyId: 'the-black-cat',
            question: "In 'The Black Cat', how does the police discover the narrator's crime?",
            options: [
                "A neighbor reported the scream",
                "The narrator confessed out of guilt",
                "The cat cried out from behind the wall",
                "They found the weapon in the garden"
            ],
            correctAnswer: 2
        },
        {
            id: 5,
            storyId: 'modest-proposal',
            question: "What is the 'Modest Proposal' suggested by Jonathan Swift?",
            options: [
                "To export surplus food to Ireland",
                "To eat the children of the poor",
                "To lower taxes for the peasantry",
                "To educate all children in trade schools"
            ],
            correctAnswer: 1
        }
    ],
    thematic: [
        {
            id: 1,
            storyId: 'shooting-an-elephant',
            question: "What conflict does the elephant represent in Orwell's story?",
            options: [
                "Nature vs. Technology",
                "The individualized conscience vs. the performative nature of imperialism",
                "Youth vs. Age",
                "Rich vs. Poor"
            ],
            correctAnswer: 1
        },
        {
            id: 2,
            storyId: 'clean-well-lighted-place',
            question: "Why does the older waiter prefer the café to a bar or bodega?",
            options: [
                "The drinks are cheaper",
                "He owns the café",
                "It offers dignity, light, and order against the darkness",
                "The music is better"
            ],
            correctAnswer: 2
        },
        {
            id: 3,
            storyId: 'esme',
            question: "What social class is satirized through the Baroness's reaction to the tragedy in 'Esme'?",
            options: [
                "The peasantry",
                "The middle class",
                "The aristocratic upper class",
                "The clergy"
            ],
            correctAnswer: 2
        },
        {
            id: 4,
            storyId: 'the-black-cat',
            question: "What does the second black cat's white fur mark eventually resemble?",
            options: [
                "A heart",
                "A skull",
                "The gallows",
                "A witch"
            ],
            correctAnswer: 2
        },
        {
            id: 5,
            storyId: 'modest-proposal',
            question: "Swift's proposal is a satirical attack on what group's attitude toward the Irish poor?",
            options: [
                "The American colonists",
                "The French aristocracy",
                "The British landlords and rationalist economists",
                "The Spanish military"
            ],
            correctAnswer: 2
        }
    ],
    details: [
        {
            id: 1,
            storyId: 'shooting-an-elephant',
            question: "Where did the narrator send an orderly to borrow a rifle from?",
            options: [
                "The police station",
                "A friend's house nearby",
                "The military barracks",
                "The bazaar"
            ],
            correctAnswer: 1
        },
        {
            id: 2,
            storyId: 'clean-well-lighted-place',
            question: "How long ago did the old man try to commit suicide?",
            options: [
                "Last night",
                "Last week",
                "Last month",
                "Yesterday"
            ],
            correctAnswer: 1
        },
        {
            id: 3,
            storyId: 'esme',
            question: "What name did the protagonists give to the hyena?",
            options: [
                "Clovis",
                "Esme",
                "Constance",
                "Hector"
            ],
            correctAnswer: 1
        },
        {
            id: 4,
            storyId: 'the-black-cat',
            question: "What weapon did the narrator use to kill his wife?",
            options: [
                "A knife",
                "A pistol",
                "An axe",
                "A rope"
            ],
            correctAnswer: 2
        },
        {
            id: 5,
            storyId: 'modest-proposal',
            question: "At what age does Swift propose the children be sold?",
            options: [
                "Six months",
                "One year",
                "Three years",
                "Twelve years"
            ],
            correctAnswer: 1
        }
    ]
}

export default function QuizPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [quizStarted, setQuizStarted] = useState(false)
    const [selectedSet, setSelectedSet] = useState<keyof typeof quizSets>('standard')

    const currentQuestions = quizSets[selectedSet]
    const currentQuestion = currentQuestions[currentQuestionIndex]

    const handleStart = () => {
        setQuizStarted(true)
    }

    const handleAnswerSelect = (index: number) => {
        setSelectedAnswer(index)
    }

    const handleNext = () => {
        if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore(score + 1)
        }

        if (currentQuestionIndex < currentQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            setSelectedAnswer(null)
        } else {
            setShowResult(true)
        }
    }

    const handleRetry = () => {
        setScore(0)
        setCurrentQuestionIndex(0)
        setSelectedAnswer(null)
        setShowResult(false)
        setQuizStarted(false)
    }

    return (
        <main className="min-h-screen bg-paper text-ink selection:bg-moss-900 selection:text-paper flex flex-col">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-40 text-moss-900 pointer-events-none">
                <Link href="/" className="pointer-events-auto flex items-center space-x-2 text-moss-800 hover:text-moss-600 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-serif font-bold tracking-wider">BACK TO HOME</span>
                </Link>
                <div className="hidden md:flex space-x-6 text-sm font-sans tracking-widest pointer-events-auto opacity-50">
                    <span>QUIZ MODE: {selectedSet.toUpperCase()}</span>
                </div>
            </nav>

            <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-20 py-20">
                <div className="max-w-3xl w-full">

                    <AnimatePresence mode="wait">
                        {!quizStarted && (
                            <motion.div
                                key="welcome"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="text-center"
                            >
                                <h1 className="font-serif text-6xl md:text-8xl text-moss-950 mb-8">Knowledge Check</h1>
                                <p className="font-serif text-xl md:text-2xl text-moss-800 mb-12 max-w-xl mx-auto leading-relaxed">
                                    Test your understanding of the five featured literary masterpieces.
                                </p>

                                {/* Set Selection */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
                                    {(['standard', 'thematic', 'details'] as const).map((setKey) => (
                                        <button
                                            key={setKey}
                                            onClick={() => setSelectedSet(setKey)}
                                            className={`p-4 border transition-all duration-300 font-sans tracking-wider text-sm ${selectedSet === setKey
                                                    ? 'bg-moss-900 text-moss-100 border-moss-900'
                                                    : 'bg-transparent text-moss-800 border-moss-200 hover:border-moss-400'
                                                }`}
                                        >
                                            {setKey.toUpperCase()}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={handleStart}
                                    className="px-12 py-4 bg-moss-900 text-moss-100 font-sans tracking-widest text-sm hover:bg-moss-800 transition-colors duration-300"
                                >
                                    START QUIZ
                                </button>
                            </motion.div>
                        )}

                        {quizStarted && !showResult && (
                            <motion.div
                                key="question"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="w-full"
                            >
                                <div className="flex justify-between items-end mb-8 border-b border-moss-200 pb-4">
                                    <span className="font-sans text-sm tracking-widest text-moss-600">QUESTION {currentQuestionIndex + 1} OF {currentQuestions.length}</span>
                                    <span className="font-serif italic text-moss-500">
                                        {currentQuestion.storyId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                                    </span>
                                </div>

                                <h2 className="font-serif text-3xl md:text-4xl text-moss-950 mb-12 leading-tight">
                                    {currentQuestion.question}
                                </h2>

                                <div className="grid grid-cols-1 gap-4 mb-12">
                                    {currentQuestion.options.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswerSelect(index)}
                                            className={`text-left p-6 md:p-8 border transition-all duration-200 flex items-center justify-between group ${selectedAnswer === index
                                                    ? 'border-moss-900 bg-moss-50'
                                                    : 'border-moss-200 hover:border-moss-400 hover:bg-white/50'
                                                }`}
                                        >
                                            <span className={`font-serif text-lg ${selectedAnswer === index ? 'text-moss-950' : 'text-moss-700'}`}>
                                                {option}
                                            </span>
                                            {selectedAnswer === index && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="w-3 h-3 bg-moss-900 rounded-full"
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        onClick={handleNext}
                                        disabled={selectedAnswer === null}
                                        className={`px-10 py-3 font-sans tracking-widest text-sm transition-all duration-300 ${selectedAnswer === null
                                                ? 'bg-moss-200 text-moss-400 cursor-not-allowed'
                                                : 'bg-moss-900 text-moss-100 hover:bg-moss-800'
                                            }`}
                                    >
                                        {currentQuestionIndex === currentQuestions.length - 1 ? 'FINISH' : 'NEXT QUESTION'}
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {showResult && (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center"
                            >
                                <span className="font-sans text-sm tracking-widest text-moss-600 mb-4 block">RESULTS: {selectedSet.toUpperCase()}</span>
                                <h2 className="font-serif text-6xl md:text-8xl text-moss-950 mb-6">
                                    {score} <span className="text-4xl text-moss-400">/</span> {currentQuestions.length}
                                </h2>

                                <p className="font-serif text-2xl text-moss-800 mb-12">
                                    {score === currentQuestions.length
                                        ? "Exceptional. A true literary scholar."
                                        : score >= 3
                                            ? "Well done. You have a good grasp of the texts."
                                            : "Perhaps a re-read is in order."}
                                </p>

                                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                    <button
                                        onClick={handleRetry}
                                        className="flex items-center space-x-2 px-8 py-3 bg-transparent border border-moss-900 text-moss-900 hover:bg-moss-50 transition-colors font-sans tracking-widest text-sm"
                                    >
                                        <RefreshCcw className="w-4 h-4" />
                                        <span>RETAKE QUIZ</span>
                                    </button>
                                    <Link href="/">
                                        <button className="px-8 py-3 bg-moss-900 text-moss-100 hover:bg-moss-800 transition-colors font-sans tracking-widest text-sm">
                                            RETURN HOME
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </main>
    )
}
