export const buttonStyles = {
  base:
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  variants: {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    outline: "border border-border bg-card text-foreground hover:bg-accent",
    destructive:
      "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
    link: "text-primary underline-offset-4 hover:underline",
  },
  sizes: {
    default: "h-9 px-4 py-2",
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-[15px]",
    lg: "px-6 py-3 text-base",
    icon: "size-9 rounded-lg",
  },
};
