import React from "react"
import { Header, type HeaderProps } from "@/components/ui/molecules/header"
import { cn } from "@/lib/utils"

export interface HeroSectionProps extends React.HTMLAttributes<HTMLElement> {
  headerProps?: HeaderProps
  children?: React.ReactNode
}

export function HeroSection({
  headerProps,
  children,
  className,
  ...props
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full flex-col bg-black text-white overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Header component integrated at the top of the Hero Section */}
      <Header {...headerProps} />

      {/* Hero Content Container (Black Background) */}
      <div className="flex flex-1 flex-col items-center justify-center bg-black px-6 py-16 text-center">
        {children || (
          <div className="flex flex-col items-center justify-center gap-4">
            {/* Placeholder for future hero content */}
          </div>
        )}
      </div>
    </section>
  )
}
