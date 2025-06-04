"use client"

import { cn } from "../../lib/utils"
import Image from "next/image"
import { Container } from "../ui/container"

interface HeroButtonProps {
  text: string
  href: string
  icon?: boolean
  primary?: boolean
}

interface VideoHeroSectionProps {
  title: string
  subtitle?: string
  videoSrc?: string
  posterImage?: string
  buttons?: HeroButtonProps[]
  className?: string
  overlayOpacity?: number
}

export function VideoHeroSection({
  title,
  subtitle,
  videoSrc,
  posterImage,
  buttons = [],
  className,
  overlayOpacity = 0.3,
}: VideoHeroSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-0 mt-[-82px] pb-12 md:pb-16 lg:pb-24 xl:pb-32 min-h-[100vh]",
        className,
      )}
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <>
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={posterImage}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            {overlayOpacity > 0 && (
              <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }}></div>
            )}
          </>
        ) : posterImage ? (
          <div className="h-full w-full relative">
            <Image
              src={posterImage || "/placeholder.svg"}
              alt="Background"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            {overlayOpacity > 0 && (
              <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }}></div>
            )}
          </div>
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-gray-900 to-black"></div>
        )}
      </div>

      <Container className="relative z-10 pt-24">
        <div className="flex flex-col justify-center min-h-[calc(100vh-160px)]">
          <div className="max-w-xl px-4 sm:px-6 md:px-8 lg:px-12">
            <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl font-serif text-white">
              {title}
            </h1>

            {subtitle && <p className="mb-8 text-base text-gray-200 sm:text-lg md:mb-12">{subtitle}</p>}

            {buttons.length > 0 && (
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 w-full max-w-sm">
                {buttons.map((button, index) => (
                  <div key={index} className="w-full">
                    <a
                      href={button.href}
                      className="group flex h-14 w-full items-center overflow-hidden rounded-full bg-primary text-black transition-transform hover:scale-105 shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                    >
                      <span className="flex-1 text-center text-lg font-bold px-4">{button.text}</span>
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black flex-shrink-0">
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
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
