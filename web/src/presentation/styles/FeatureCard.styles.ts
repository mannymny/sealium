export const featureCardStyles = {
  section: 'px-4 sm:px-6 pb-12 sm:pb-20',
  container: 'max-w-4xl mx-auto',
  card: 'bg-card border border-border rounded-2xl shadow-lg p-4 sm:p-8',
  tabsRow: 'flex justify-center mb-6',
  tabsWrap: 'inline-flex gap-2 bg-muted p-1 rounded-lg',
  tabTranscription: (active: boolean) =>
    `px-5 sm:px-6 py-2.5 rounded-md transition-all text-sm sm:text-base whitespace-nowrap ${
      active
        ? 'bg-primary text-primary-foreground'
        : 'text-muted-foreground hover:bg-accent hover:text-foreground'
    }`,
  tabProof: (active: boolean) =>
    `px-6 py-3 rounded-lg transition-colors font-medium ${
      active
        ? 'bg-primary text-primary-foreground'
        : 'text-muted-foreground hover:bg-accent hover:text-foreground'
    }`,
  content: 'space-y-6',
  label: 'block text-sm mb-2 text-muted-foreground',
  inputRow: 'flex flex-col sm:flex-row gap-3',
  inputWrap: 'flex-1 relative',
  inputIcon:
    'absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground',
  input:
    'w-full pl-11 pr-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-sm sm:text-base',
  upload:
    'border-2 border-dashed border-border rounded-lg p-6 sm:p-8 text-center bg-muted/20 hover:bg-muted/30 transition-colors cursor-pointer',
  uploadIcon: 'w-8 h-8 text-muted-foreground mx-auto mb-3',
  uploadText: 'text-sm mb-1',
  uploadHighlight: 'text-primary font-medium',
  uploadNote: 'text-xs text-muted-foreground',
  security: 'flex items-start gap-3 p-4 bg-muted/50 rounded-lg',
  securityIconWrap: 'bg-primary/10 p-2 rounded-lg shrink-0',
  securityIcon: 'w-5 h-5 text-primary',
  securityTitle: 'text-sm font-medium mb-1',
  securityBody: 'text-xs text-muted-foreground leading-relaxed',
};
