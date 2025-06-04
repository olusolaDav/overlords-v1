import Link from "next/link"
import { Container } from "../components/ui/container"

export default function NotFound() {
  return (
    <Container className="py-20">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mb-8 text-lg text-gray-600">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="rounded-md bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary/90"
        >
          Return to home
        </Link>
      </div>
    </Container>
  )
}
