import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group relative inline-flex shrink-0 items-center justify-center gap-2.5 overflow-visible font-['JetBrains_Mono'] font-jetbrains font-mono text-xs font-normal cursor-pointer select-none transition-all duration-300 ease-[cubic-bezier(0,0,0.58,1)] outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      variant: {
        default:
          "bg-black text-[#A3ABC4] hover:text-white focus-visible:text-white",
        outline:
          "bg-black text-white",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-7 px-4 min-w-20",
        xs: "h-6 px-3 min-w-20 text-xs",
        sm: "h-8 px-4 min-w-20",
        lg: "h-11 px-6 min-w-24 text-sm",
        icon: "size-9",
        "icon-xs": "size-6",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  nativeButton,
  children,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  const isNativeButton = nativeButton ?? (props.render ? false : true)
  const isBrandedVariant = variant === "default" || variant === "outline"

  return (
    <ButtonPrimitive
      data-slot="button"
      nativeButton={isNativeButton}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
      {/* Tech Corner Brackets for Default & Outline variants */}
      {isBrandedVariant && (
        <>
          <span
            className={cn(
              "pointer-events-none absolute top-0 left-0 size-2 border-t border-l border-white transition-opacity duration-300 ease-[cubic-bezier(0,0,0.58,1)]",
              variant === "outline"
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
            )}
          />
          <span
            className={cn(
              "pointer-events-none absolute top-0 right-0 size-2 border-t border-r border-white transition-opacity duration-300 ease-[cubic-bezier(0,0,0.58,1)]",
              variant === "outline"
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
            )}
          />
          <span
            className={cn(
              "pointer-events-none absolute bottom-0 left-0 size-2 border-b border-l border-white transition-opacity duration-300 ease-[cubic-bezier(0,0,0.58,1)]",
              variant === "outline"
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
            )}
          />
          <span
            className={cn(
              "pointer-events-none absolute bottom-0 right-0 size-2 border-b border-r border-white transition-opacity duration-300 ease-[cubic-bezier(0,0,0.58,1)]",
              variant === "outline"
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
            )}
          />
        </>
      )}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
