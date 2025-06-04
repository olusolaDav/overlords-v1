"use client"

import { Container } from "../components/ui/container"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50 py-20">
          <Container>
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="mb-4 text-4xl font-bold">Something went wrong</h1>
              <p className="mb-8 text-lg text-gray-600">
                We apologize for the inconvenience. Our team has been notified of this issue.
              </p>
              <button
                onClick={() => reset()}
                className="rounded-md bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary/90"
              >
                Try again
              </button>
            </div>
          </Container>
        </div>
      </body>
    </html>
  )
}
