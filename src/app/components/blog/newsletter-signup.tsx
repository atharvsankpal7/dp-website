import type React from "react"
import { useState } from "react"
import { Mail, CheckCircle2 } from "lucide-react"

export default function NewsletterSignup() {
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email) {
            setError("Please enter your email address")
            return
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address")
            return
        }

        setError("")
        setIsSubmitting(true)

        // Simulate API call
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            setIsSuccess(true)
            setEmail("")
        } catch (err) {
            setError("Something went wrong. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-md p-6">
            {isSuccess ? (
                <div className="text-center py-4">
                    <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You for Subscribing!</h3>
                    <p className="text-gray-600">
                        You've been added to our newsletter. Look out for marketing insights in your inbox soon!
                    </p>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
                    >
                        Subscribe another email
                    </button>
                </div>
            ) : (
                <>
                    <div className="flex items-center gap-2 mb-4">
                        <Mail className="h-5 w-5 text-purple-600" />
                        <h3 className="text-xl font-bold text-gray-900">Get Marketing Insights</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                        Join 25,000+ marketers receiving our weekly insights on the latest trends, strategies, and tools.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full px-4 py-3 rounded-lg border ${error ? "border-red-500" : "border-gray-300"
                                    } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                            />
                            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                                }`}
                        >
                            {isSubmitting ? "Subscribing..." : "Subscribe to Newsletter"}
                        </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-4">
                        By subscribing, you agree to our Privacy Policy and consent to receive marketing updates. You can
                        unsubscribe at any time.
                    </p>
                </>
            )}
        </div>
    )
}

