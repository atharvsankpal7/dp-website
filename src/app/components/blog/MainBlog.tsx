import Link from "next/link"
import Image from "next/image"
import { Search, TrendingUp, ArrowRight } from "lucide-react"
import BlogCategoryTabs from "./blog-category-tabs"
import FeaturedArticle from "./featured-article"
import NewsletterSignup from "./newsletter-signup"
import PopularArticles from "./popular-articles"

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white" id="blog">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
                <div className="absolute inset-0 opacity-10">
                    <Image
                        src="/placeholder.svg?height=600&width=1920"
                        alt="Background pattern"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Strategies for Digital Growth</h1>
                        <p className="text-xl text-blue-100 mb-8">
                            Expert advice, industry trends, and actionable tips to elevate your digital marketing performance
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-xl mx-auto">
                            <div className="flex items-center bg-white/10 backdrop-blur-sm border border-blue-300/30 rounded-full overflow-hidden">
                                <input
                                    type="text"
                                    placeholder="Search for insights..."
                                    className="w-full py-4 px-6 bg-transparent text-white placeholder-blue-200 outline-none"
                                />
                                <button className="bg-white text-blue-700 p-4 rounded-full mr-1">
                                    <Search className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Tabs */}
            <BlogCategoryTabs />

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Blog Content */}
                    <div className="w-full lg:w-2/3">
                        {/* Featured Article */}
                        <FeaturedArticle />

                        {/* Recent Articles */}
                        <div className="mt-16">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-2xl font-bold text-gray-900">Latest Insights</h2>
                                <Link
                                    href="/blog/all"
                                    className="text-blue-600 hover:text-blue-700 flex items-center gap-1 font-medium"
                                >
                                    View all <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Article Card 1 */}
                                <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="relative h-48">
                                        <Image
                                            src="/placeholder.svg?height=400&width=600"
                                            alt="10 SEO Strategies for 2025"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            SEO
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                            <span>May 15, 2025</span>
                                            <span>•</span>
                                            <span>8 min read</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            <Link href="/blog/10-seo-strategies-for-2025" className="hover:text-blue-600 transition-colors">
                                                10 SEO Strategies That Will Dominate in 2025
                                            </Link>
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Stay ahead of the competition with these forward-thinking SEO tactics that leverage AI, voice
                                            search, and semantic relevance.
                                        </p>
                                        <div className="flex items-center">
                                            <Image
                                                src="/placeholder.svg?height=40&width=40"
                                                alt="Sarah Johnson"
                                                width={40}
                                                height={40}
                                                className="rounded-full mr-3"
                                            />
                                            <span className="font-medium text-gray-900">Sarah Johnson</span>
                                        </div>
                                    </div>
                                </article>

                                {/* Article Card 2 */}
                                <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="relative h-48">
                                        <Image
                                            src="/placeholder.svg?height=400&width=600"
                                            alt="Social Media ROI"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            Social Media
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                            <span>May 10, 2025</span>
                                            <span>•</span>
                                            <span>6 min read</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            <Link href="/blog/measuring-social-media-roi" className="hover:text-blue-600 transition-colors">
                                                Measuring Social Media ROI: Beyond Likes and Shares
                                            </Link>
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Discover how to track and measure the true business impact of your social media campaigns with
                                            these advanced analytics approaches.
                                        </p>
                                        <div className="flex items-center">
                                            <Image
                                                src="/placeholder.svg?height=40&width=40"
                                                alt="Michael Chen"
                                                width={40}
                                                height={40}
                                                className="rounded-full mr-3"
                                            />
                                            <span className="font-medium text-gray-900">Michael Chen</span>
                                        </div>
                                    </div>
                                </article>

                                {/* Article Card 3 */}
                                <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="relative h-48">
                                        <Image
                                            src="/placeholder.svg?height=400&width=600"
                                            alt="Email Marketing Automation"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            Email Marketing
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                            <span>May 5, 2025</span>
                                            <span>•</span>
                                            <span>5 min read</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            <Link href="/blog/email-automation-workflows" className="hover:text-blue-600 transition-colors">
                                                7 Email Automation Workflows That Convert Leads to Customers
                                            </Link>
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Learn how to set up powerful email sequences that nurture prospects through each stage of the
                                            buyer's journey.
                                        </p>
                                        <div className="flex items-center">
                                            <Image
                                                src="/placeholder.svg?height=40&width=40"
                                                alt="Jessica Williams"
                                                width={40}
                                                height={40}
                                                className="rounded-full mr-3"
                                            />
                                            <span className="font-medium text-gray-900">Jessica Williams</span>
                                        </div>
                                    </div>
                                </article>

                                {/* Article Card 4 */}
                                <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="relative h-48">
                                        <Image
                                            src="/placeholder.svg?height=400&width=600"
                                            alt="PPC Campaign Optimization"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            PPC
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                            <span>April 28, 2025</span>
                                            <span>•</span>
                                            <span>7 min read</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            <Link href="/blog/ppc-campaign-optimization" className="hover:text-blue-600 transition-colors">
                                                PPC Campaign Optimization: Reducing Cost While Maximizing Conversions
                                            </Link>
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Expert strategies to fine-tune your paid search campaigns for better performance and higher ROI.
                                        </p>
                                        <div className="flex items-center">
                                            <Image
                                                src="/placeholder.svg?height=40&width=40"
                                                alt="David Rodriguez"
                                                width={40}
                                                height={40}
                                                className="rounded-full mr-3"
                                            />
                                            <span className="font-medium text-gray-900">David Rodriguez</span>
                                        </div>
                                    </div>
                                </article>
                            </div>

                            {/* Load More Button */}
                            <div className="mt-10 text-center">
                                <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-8 py-3 rounded-full transition-colors duration-300">
                                    Load More Articles
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-1/3 mt-12 lg:mt-0">
                        {/* Newsletter Signup */}
                        <NewsletterSignup />

                        {/* Popular Articles */}
                        <PopularArticles />

                        {/* Trending Topics */}
                        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
                            <div className="flex items-center gap-2 mb-6">
                                <TrendingUp className="h-5 w-5 text-blue-600" />
                                <h3 className="text-xl font-bold text-gray-900">Trending Topics</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link
                                    href="/blog/tag/ai-marketing"
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm transition-colors"
                                >
                                    #AIMarketing
                                </Link>
                                <Link
                                    href="/blog/tag/content-strategy"
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm transition-colors"
                                >
                                    #ContentStrategy
                                </Link>
                                <Link
                                    href="/blog/tag/google-analytics"
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm transition-colors"
                                >
                                    #GoogleAnalytics4
                                </Link>
                                <Link
                                    href="/blog/tag/tiktok-marketing"
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm transition-colors"
                                >
                                    #TikTokMarketing
                                </Link>
                                <Link
                                    href="/blog/tag/conversion-rate"
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm transition-colors"
                                >
                                    #ConversionRateOptimization
                                </Link>
                                <Link
                                    href="/blog/tag/seo-trends"
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm transition-colors"
                                >
                                    #SEOTrends2025
                                </Link>
                                <Link
                                    href="/blog/tag/b2b-marketing"
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm transition-colors"
                                >
                                    #B2BMarketing
                                </Link>
                                <Link
                                    href="/blog/tag/marketing-automation"
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm transition-colors"
                                >
                                    #MarketingAutomation
                                </Link>
                            </div>
                        </div>

                        {/* CTA Banner */}
                        <div className="mt-8 bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl shadow-md overflow-hidden">
                            <div className="p-8 text-white">
                                <h3 className="text-xl font-bold mb-3">Ready to Boost Your Digital Performance?</h3>
                                <p className="mb-6 text-blue-100">
                                    Our experts will analyze your current strategy and provide actionable recommendations.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-medium px-6 py-3 rounded-full transition-colors duration-300"
                                >
                                    Get a Free Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

