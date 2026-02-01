export const navigationStyles = {
  nav: "fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border",
  container: "max-w-7xl mx-auto px-4 sm:px-6",
  bar: "flex items-center justify-between h-16 sm:h-18",
  logoButton: "flex items-center gap-3 hover:opacity-80 transition-opacity",
  logoIcon: "w-12 h-12",
  logoText: "text-xl font-semibold",
  desktopNav: "hidden lg:flex items-center gap-8",
  navItem: (active: boolean) =>
    `text-sm font-medium transition-colors relative py-2 ${
      active ? "text-primary" : "text-foreground hover:text-primary"
    }`,
  navIndicator: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full",
  desktopActions: "hidden lg:flex items-center gap-4",
  mobileActions: "flex items-center gap-3 lg:hidden",
  mobileMenuButton: "p-2 hover:bg-accent rounded-lg transition-colors",
  mobileMenu: "lg:hidden border-t border-border bg-sidebar",
  mobileMenuInner: "px-4 py-6 space-y-2",
  mobileNavItem: (active: boolean) =>
    `block w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
      active
        ? "bg-sidebar-accent text-sidebar-accent-foreground border-l-4 border-primary"
        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
    }`,
  mobileActionsBlock: "pt-4 space-y-3 border-t border-sidebar-border mt-4",
  mobileButtonFull: "w-full",
};
