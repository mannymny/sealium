export const sidebarStyles = {
  asideBase:
    "w-64 bg-sidebar border-r border-sidebar-border h-screen fixed left-0 top-0 flex flex-col z-50 transition-transform duration-300 lg:translate-x-0",
  asideOpen: "translate-x-0",
  asideClosed: "-translate-x-full",
  header: "p-6 border-b border-sidebar-border flex items-center justify-between",
  logoRow: "flex items-center gap-2",
  logoIcon: "w-10 h-10",
  logoText: "text-xl font-semibold",
  closeButton: "lg:hidden p-2 hover:bg-accent rounded-lg transition-colors",
  nav: "flex-1 p-4 space-y-1 overflow-y-auto",
  navItem: (active: boolean) =>
    `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
      active
        ? "bg-sidebar-accent text-sidebar-accent-foreground"
        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
    }`,
  navIcon: "w-5 h-5",
  mobileSection: "lg:hidden pt-4 border-t border-sidebar-border mt-4",
  mobileSectionSpacer: "lg:hidden pt-4 mt-4 border-t border-sidebar-border",
  activityButton:
    "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sidebar-foreground hover:bg-sidebar-accent/50",
  themeWrap: "hidden lg:block pt-4 border-t border-sidebar-border mt-4",
  footer: "p-4 border-t border-sidebar-border",
  profileRow: "flex items-center gap-3 mb-3 px-4 py-2",
  avatar: "w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium",
  profileTextWrap: "flex-1 min-w-0",
  profileName: "text-sm font-medium truncate",
  profilePlan: "text-xs text-muted-foreground",
  logoutButton:
    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-destructive hover:bg-destructive/10 transition-colors",
};
