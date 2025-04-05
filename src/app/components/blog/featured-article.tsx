import Link from "next/link"
import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"

export default function FeaturedArticle() {
    return (
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 relative h-64 lg:h-auto">
                    <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="AI-Powered Marketing: The Future is Now"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Featured
                    </div>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <span>May 20, 2025</span>
                        <span>•</span>
                        <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>12 min read</span>
                        </div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        <Link href="/blog/ai-powered-marketing-future-is-now" className="hover:text-purple-600 transition-colors">
                            AI-Powered Marketing: The Future is Now and Here's How to Leverage It
                        </Link>
                    </h2>
                    <p className="text-gray-600 mb-6 lg:text-lg">
                        Artificial intelligence is revolutionizing digital marketing strategies. Discover how leading brands are
                        using AI to personalize customer experiences, optimize ad spend, and predict market trends with
                        unprecedented accuracy.
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Image
                                src="/placeholder.svg?height=48&width=48"
                                alt="Alex Thompson"
                                width={48}
                                height={48}
                                className="rounded-full mr-3"
                            />
                            <div>
                                <span className="font-medium text-gray-900 block">Alex Thompson</span>
                                <span className="text-sm text-gray-500">Chief Strategy Officer</span>
                            </div>
                        </div>
                        <Link
                            href="/blog/ai-powered-marketing-future-is-now"
                            className="flex items-center gap-1 text-purple-600 hover:text-purple-700 font-medium"
                        >
                            Read more <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

