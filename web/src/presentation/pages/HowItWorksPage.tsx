import { Navigation } from '@/presentation/components/Navigation';
import { Upload, FileSearch, Shield, CheckCircle, Download, Lock, Globe, Zap } from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export function HowItWorksPage({ onNavigate, currentPage }: HowItWorksPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={onNavigate} currentPage={currentPage} />

      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              How <span className="text-primary">Sealium</span> Works
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade evidence capture and certification in four simple steps
            </p>
          </div>

          
          <div className="space-y-12 sm:space-y-16 mb-16">
            
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-4 text-sm font-medium">
                  <span>Step 1</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Upload Your Content</h2>
                <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
                  Submit audio/video files for transcription or provide URLs for web content certification.
                  We support all major formats including MP3, MP4, WAV, and direct links to social media platforms
                  like Twitter Spaces, YouTube, Kick, and more.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Upload className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm sm:text-base">Drag &amp; drop or paste URL</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm sm:text-base">Support for 50+ platforms</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm sm:text-base">Instant processing starts</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 sm:p-12 border border-primary/20">
                  <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Upload className="w-6 h-6 text-primary" />
                      <span className="font-medium">Upload File</span>
                    </div>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-muted/30">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Upload className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Drop files here or click to browse</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-success/20 to-success/5 rounded-2xl p-8 sm:p-12 border border-success/20">
                  <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <FileSearch className="w-6 h-6 text-success" />
                      <span className="font-medium">AI Analysis</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-1 bg-success rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Transcribing audio...</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-1 bg-success rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Extracting metadata...</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-1 bg-muted rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Generating timestamps...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 text-success rounded-full mb-4 text-sm font-medium">
                  <span>Step 2</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">AI-Powered Processing</h2>
                <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
                  Our advanced AI models transcribe audio with industry-leading accuracy, extract metadata,
                  and capture complete web page snapshots. All processing happens in secure, isolated environments
                  with end-to-end encryption.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
                      <FileSearch className="w-5 h-5 text-success" />
                    </div>
                    <p className="text-sm sm:text-base">99.2% transcription accuracy</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
                      <Lock className="w-5 h-5 text-success" />
                    </div>
                    <p className="text-sm sm:text-base">Encrypted processing pipeline</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-success" />
                    </div>
                    <p className="text-sm sm:text-base">Real-time status updates</p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full mb-4 text-sm font-medium">
                  <span>Step 3</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Cryptographic Certification</h2>
                <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
                  Every piece of content is cryptographically signed and timestamped using blockchain-backed
                  technology. This creates an immutable proof of existence that can be independently verified
                  by courts, auditors, or third parties.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <p className="text-sm sm:text-base">SHA-256 cryptographic hash</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                      <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <p className="text-sm sm:text-base">Blockchain timestamping</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <p className="text-sm sm:text-base">Court-admissible certificates</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-2xl p-8 sm:p-12 border border-purple-500/20">
                  <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      <span className="font-medium">Certificate Generated</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Hash:</span>
                        <span className="font-mono text-xs">a3f9b2...c8e1</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Timestamp:</span>
                        <span className="font-mono text-xs">2026-01-30 14:32 UTC</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Block:</span>
                        <span className="font-mono text-xs">#8,492,156</span>
                      </div>
                      <div className="mt-4 p-3 bg-success/10 rounded-lg flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="text-success font-medium">Verified &amp; Sealed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl p-8 sm:p-12 border border-blue-500/20">
                  <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Download className="w-6 h-6 text-primary" />
                        <span className="font-medium">Ready to Export</span>
                      </div>
                      <span className="text-xs text-success font-medium">Completed</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
                        PDF Report
                      </button>
                      <button className="px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-medium">
                        JSON Data
                      </button>
                      <button className="px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-medium">
                        Certificate
                      </button>
                      <button className="px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-medium">
                        Transcript
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-primary rounded-full mb-4 text-sm font-medium">
                  <span>Step 4</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Download &amp; Share</h2>
                <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
                  Access your certified evidence in multiple formats. Download comprehensive PDF reports,
                  raw JSON data, verification certificates, and full transcripts. Share publicly verifiable
                  links or keep everything private in your secure vault.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Download className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm sm:text-base">Multiple export formats</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm sm:text-base">Public verification links</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Lock className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm sm:text-base">90-day secure storage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
              Why Choose Sealium?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Legal-Grade Security</h3>
                <p className="text-sm text-muted-foreground">
                  Court-admissible evidence with cryptographic proof of authenticity and integrity.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-semibold mb-2">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">
                  Process hours of content in minutes with our optimized AI pipeline.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold mb-2">Universal Support</h3>
                <p className="text-sm text-muted-foreground">
                  Works with 50+ platforms including Twitter, YouTube, Kick, and more.
                </p>
              </div>
            </div>
          </div>

          
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 sm:p-12 border border-primary/20 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who trust Sealium for their evidence capture and certification needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('landing')}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Start Free Trial
              </button>
              <button
                onClick={() => onNavigate('pricing')}
                className="px-8 py-4 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

