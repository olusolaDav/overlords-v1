"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Container } from "../components/ui/container"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Container className="py-20">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-4xl font-bold">Something went wrong</h1>
        <p className="mb-8 text-lg text-gray-600">
          We apologize for the inconvenience. Our team has been notified of this issue.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button
            onClick={() => reset()}
            className="rounded-md bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-md border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Return to home
          </Link>
        </div>
      </div>
    </Container>
  )
}
