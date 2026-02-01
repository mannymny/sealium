export const modalStyles = {
  overlay: "fixed inset-0 z-50 flex items-center justify-center p-4",
  backdrop: "absolute inset-0 bg-foreground/20 backdrop-blur-sm",
  content: "relative bg-card border border-border rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto",
  header: "sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between",
  title: "text-xl font-semibold",
  closeButton: "p-2 hover:bg-accent rounded-lg transition-colors",
  contentBody: "",
  contentBodyPadded: "p-6 sm:p-8 relative",
  closeFloating:
    "absolute top-4 right-4 sm:top-6 sm:right-6 p-2 hover:bg-accent rounded-lg transition-colors z-10",
};
