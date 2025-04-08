import { useState } from "react"
import Link from "next/link"
import { Search, BarChart2, Mail, Share2, PenTool, TrendingUp } from "lucide-react"

const categories = [
    { id: "all", name: "All", icon: <Search className="h-4 w-4" />, href: "/blog" },
    { id: "seo", name: "SEO", icon: <TrendingUp className="h-4 w-4" />, href: "/blog/category/seo" },
    { id: "ppc", name: "PPC", icon: <BarChart2 className="h-4 w-4" />, href: "/blog/category/ppc" },
    { id: "email", name: "Email Marketing", icon: <Mail className="h-4 w-4" />, href: "/blog/category/email-marketing" },
    { id: "social", name: "Social Media", icon: <Share2 className="h-4 w-4" />, href: "/blog/category/social-media" },
    {
        id: "content",
        name: "Content Creation",
        icon: <PenTool className="h-4 w-4" />,
        href: "/blog/category/content-creation",
    },
]

export default function BlogCategoryTabs() {
    const [activeCategory, setActiveCategory] = useState("all")

    return (
        <div className="sticky top-0 z-20 bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex overflow-x-auto py-4 scrollbar-hide">
                    <div className="flex space-x-2">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={category.href}
                                onClick={(e) => {
                                    e.preventDefault()
                                    setActiveCategory(category.id)
                                }}
                                className={`flex items-center whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id
                                        ? "bg-purple-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

