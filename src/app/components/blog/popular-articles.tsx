import Link from "next/link"
import Image from "next/image"
import { TrendingUp } from "lucide-react"

export default function PopularArticles() {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
            <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">Popular Articles</h3>
            </div>
            <div className="space-y-6">
                {/* Popular Article 1 */}
                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                        <Image
                            src="/placeholder.svg?height=80&width=80"
                            alt="Google Algorithm Update"
                            width={80}
                            height={80}
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div>
                        <span className="text-xs font-semibold text-purple-600 block mb-1">SEO</span>
                        <h4 className="font-medium text-gray-900 leading-tight mb-1">
                            <Link href="/blog/google-algorithm-update-2025" className="hover:text-purple-600 transition-colors">
                                What Google's 2025 Algorithm Update Means for Your Business
                            </Link>
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>April 15, 2025</span>
                            <span>•</span>
                            <span>42K views</span>
                        </div>
                    </div>
                </div>

                {/* Popular Article 2 */}
                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                        <Image
                            src="/placeholder.svg?height=80&width=80"
                            alt="Content Marketing ROI"
                            width={80}
                            height={80}
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div>
                        <span className="text-xs font-semibold text-green-600 block mb-1">Content</span>
                        <h4 className="font-medium text-gray-900 leading-tight mb-1">
                            <Link href="/blog/content-marketing-roi-calculation" className="hover:text-purple-600 transition-colors">
                                How to Calculate and Maximize Your Content Marketing ROI
                            </Link>
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>April 8, 2025</span>
                            <span>•</span>
                            <span>35K views</span>
                        </div>
                    </div>
                </div>

                {/* Popular Article 3 */}
                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                        <Image
                            src="/placeholder.svg?height=80&width=80"
                            alt="Social Media Strategy"
                            width={80}
                            height={80}
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div>
                        <span className="text-xs font-semibold text-blue-600 block mb-1">Social Media</span>
                        <h4 className="font-medium text-gray-900 leading-tight mb-1">
                            <Link href="/blog/b2b-social-media-strategy" className="hover:text-purple-600 transition-colors">
                                B2B Social Media Strategy: Engagement That Drives Conversions
                            </Link>
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>March 30, 2025</span>
                            <span>•</span>
                            <span>28K views</span>
                        </div>
                    </div>
                </div>

                {/* Popular Article 4 */}
                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                        <Image
                            src="/placeholder.svg?height=80&width=80"
                            alt="Marketing Automation"
                            width={80}
                            height={80}
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div>
                        <span className="text-xs font-semibold text-orange-600 block mb-1">Automation</span>
                        <h4 className="font-medium text-gray-900 leading-tight mb-1">
                            <Link
                                href="/blog/marketing-automation-small-business"
                                className="hover:text-purple-600 transition-colors"
                            >
                                Marketing Automation for Small Businesses: A Beginner's Guide
                            </Link>
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>March 22, 2025</span>
                            <span>•</span>
                            <span>24K views</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

