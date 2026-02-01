export const authModalStyles = {
  overlay: "fixed inset-0 z-50 flex items-center justify-center p-4",
  backdrop: "absolute inset-0 bg-foreground/20 backdrop-blur-sm",
  modal: "relative bg-card rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 max-h-[90vh] overflow-y-auto",
  header: "mb-6 sm:mb-8",
  title: "text-2xl sm:text-3xl font-bold mb-2",
  subtitle: "text-sm sm:text-base text-muted-foreground",
  form: "space-y-4 sm:space-y-5",
  fieldLabel: "block text-sm font-medium mb-2",
  inputWrap: "relative",
  inputIconLeft:
    "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground",
  input: "w-full pl-11 pr-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-sm sm:text-base",
  inputPassword: "w-full pl-11 pr-12 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-sm sm:text-base",
  iconButton:
    "absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-accent rounded transition-colors",
  checkboxRow:
    "flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0",
  checkboxLabel: "flex items-center gap-2 cursor-pointer",
  checkboxInput: "w-4 h-4 rounded border-input text-primary focus:ring-2 focus:ring-ring",
  checkboxText: "text-sm",
  linkButton: "text-sm text-primary hover:underline text-left sm:text-right",
  buttonFull: "w-full",
  divider: "my-6 sm:my-8 flex items-center gap-4",
  dividerLine: "flex-1 h-px bg-border",
  dividerText: "text-sm text-muted-foreground",
  socialWrap: "space-y-3",
  socialButton:
    "w-full flex items-center justify-center gap-3 px-4 py-3 bg-card border border-border rounded-lg hover:bg-accent transition-colors text-sm sm:text-base",
  footerText: "text-center mt-6 text-sm sm:text-base text-muted-foreground",
  footerLink: "text-primary hover:underline font-medium",
  helperText: "text-xs text-muted-foreground mt-2",
  termsLabel: "flex items-start gap-2 cursor-pointer",
  termsCheckbox:
    "w-4 h-4 mt-0.5 rounded border-input text-primary focus:ring-2 focus:ring-ring shrink-0",
  termsText: "text-sm",
  termsLink: "text-primary hover:underline",
};
