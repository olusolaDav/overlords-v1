"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"
import { Container } from "@/components/ui/container"

interface ActionButtonProps {
  text: string
  href: string
  primary?: boolean
  icon?: boolean
  className?: string
}

interface VideoHeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  quote?: {
    text: string
    author: string
  }
  buttons?: ActionButtonProps[]
  videoSrc: string
  posterImage?: string
  align?: "left" | "center" | "right"
  className?: string
  variant?: "default" | "centered" | "minimal"
  fullHeight?: boolean
}

export function VideoHeroSection({
  title,
  subtitle,
  description,
  quote,
  buttons = [],
  videoSrc,
  posterImage,
  align = "left",
  className,
  variant = "default",
  fullHeight = true,
}: VideoHeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let isMounted = true

    const playVideo = async () => {
      try {
        if (!isMounted) return

        video.muted = true
        video.playsInline = true
        video.loop = true

        // Force load the video
        video.load()

        // Wait for the video to be ready
        await new Promise((resolve) => {
          if (video.readyState >= 3) {
            resolve(true)
          } else {
            video.addEventListener("canplay", () => resolve(true), { once: true })
          }
        })

        if (!isMounted) return

        // Attempt to play
        await video.play()
        console.log("Video playing successfully")
      } catch (error) {
        console.log("Autoplay failed, will play on user interaction:", error)

        if (!isMounted) return

        // Fallback: play on any user interaction
        const playOnInteraction = () => {
          if (isMounted && video) {
            video.play().catch((e) => console.log("Manual play failed:", e))
          }
          document.removeEventListener("click", playOnInteraction)
          document.removeEventListener("touchstart", playOnInteraction)
          document.removeEventListener("keydown", playOnInteraction)
        }

        document.addEventListener("click", playOnInteraction)
        document.addEventListener("touchstart", playOnInteraction)
        document.addEventListener("keydown", playOnInteraction)
      }
    }

    // Start playing the video
    playVideo()

    // Cleanup
    return () => {
      isMounted = false
      if (video) {
        video.pause()
      }
    }
  }, [videoSrc])

  return (
    <section
      className={cn(
        "relative overflow-hidden pt-0 mt-[-82px] pb-12 md:pb-16 lg:pb-24 xl:pb-32",
        fullHeight && "min-h-[100vh]",
        className,
      )}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          poster={posterImage}
          controls={false}
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Container className="relative z-10 pt-24">
        <div
          className={cn(
            "flex flex-col justify-center",
            fullHeight && "min-h-[calc(100vh-240px)]",
            variant === "centered" && "items-center text-center",
            variant === "default" && align === "center" && "items-center text-center",
            variant === "default" && align === "right" && "items-end text-right",
          )}
        >
          {variant === "centered" ? (
            // Centered variant with specific styling for Projects/Careers pages
            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-serif drop-shadow-lg">
                {title}
              </h1>

              {subtitle && (
                <h2 className="mb-6 text-xl sm:text-2xl md:text-3xl font-medium drop-shadow-md">{subtitle}</h2>
              )}

              {description && (
                <p className="mb-10 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                  {description}
                </p>
              )}

              {buttons.length > 0 && (
                <div className="mt-8 flex justify-center">
                  {buttons.map((button, index) => (
                    <a
                      key={index}
                      href={button.href}
                      className="group flex h-14 items-center overflow-hidden rounded-full bg-primary text-black transition-transform hover:scale-105 shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                    >
                      <span className="px-6 pr-4 text-lg font-medium">{button.text}</span>
                      <div className="ml-2 flex h-14 w-14 items-center justify-center rounded-full bg-black">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-white"
                        >
                          <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            // Default variant with flexible alignment
            <div className={cn("max-w-xl px-4 sm:px-6 md:px-8 lg:px-12", align === "center" && "mx-auto")}>
              <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl font-serif drop-shadow-lg">
                {title}
              </h1>

              {subtitle && (
                <p className="mb-8 text-base text-muted-foreground sm:text-lg md:mb-12 drop-shadow-md">{subtitle}</p>
              )}

              {quote && (
                <div className="mb-8 md:mb-12">
                  <div className="text-4xl font-bold mb-2 font-serif drop-shadow-lg">"</div>
                  <p className="text-lg text-gray-700 mb-2 drop-shadow-md">{quote.text}</p>
                  <p className="text-lg font-medium drop-shadow-md">{quote.author}</p>
                </div>
              )}

              {buttons.length > 0 && (
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 w-full max-w-[200px] sm:max-w-sm">
                  {buttons.map((button, index) => (
                    <div key={index} className="w-full">
                      <a
                        href={button.href}
                        className="group flex h-12 sm:h-14 w-full items-center overflow-hidden rounded-full bg-primary text-black transition-transform hover:scale-105 shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                      >
                        <span className="flex-1 text-center text-lg font-bold px-0 sm:px-4">{button.text}</span>
                        <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black flex-shrink-0">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-white sm:w-5 sm:h-5"
                          >
                            <path
                              d="M7 17L17 7M17 7H7M17 7V17"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
