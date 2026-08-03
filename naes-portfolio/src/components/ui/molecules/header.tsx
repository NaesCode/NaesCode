import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/atoms/button"
import { cn } from "@/lib/utils"

export interface NavItem {
  label: string
  href: string
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  logoText?: string
  navItems?: NavItem[]
  activeHref?: string
}

const defaultNavItems: NavItem[] = [
  { label: "PROJECTS", href: "#projects" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
]

export function Header({
  logoText = "| SEAN",
  navItems = defaultNavItems,
  activeHref,
  className,
  ...props
}: HeaderProps) {
  return (
    <header
      className={cn(
        "w-full bg-black px-6 sm:px-14 py-5 flex items-center justify-between gap-4 overflow-hidden border-b border-white/5",
        className
      )}
      {...props}
    >
      {/* Brand / Logo - Mirrored logo on left, normal sliding text on right */}
      <div className="flex items-center">
        <Link
          href="/"
          className="group inline-flex items-center text-xl font-semibold font-['Hanken_Grotesk'] font-hanken tracking-wide"
        >
          {/* Mirrored logo text on left */}
          <span className="inline-block -scale-x-100 bg-gradient-to-r from-[#DAE2FD] via-[#DAE2FD] to-[#A3ABC4] bg-clip-text text-transparent group-hover:bg-none group-hover:bg-clip-border group-hover:text-[#EEF0FF] transition-all duration-300">
            {logoText}
          </span>
          {/* Normal un-flipped sliding text on right */}
          <span className="inline-block max-w-0 overflow-hidden whitespace-nowrap opacity-0 bg-gradient-to-r from-[#DAE2FD] to-[#A3ABC4] bg-clip-text text-transparent group-hover:bg-none group-hover:bg-clip-border group-hover:text-[#EEF0FF] group-hover:max-w-[400px] group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0,0,0.58,1)]">
            &nbsp;SEAN RICHARD TADIAMON
          </span>
        </Link>
      </div>

      {/* Navigation items utilizing the reusable Button component */}
      <nav className="flex items-center gap-6 sm:gap-10">
        {navItems.map((item) => {
          const isActive = activeHref === item.href
          return (
            <Button
              key={item.label}
              variant={isActive ? "outline" : "default"}
              size="default"
              render={<Link href={item.href} />}
            >
              {item.label}
            </Button>
          )
        })}
      </nav>
    </header>
  )
}
