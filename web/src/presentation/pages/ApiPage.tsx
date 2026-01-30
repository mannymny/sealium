import { useState } from 'react';
import { Navigation } from '@/presentation/components/Navigation';
import { Code, Copy, Check, Terminal, Book, Zap, Shield, Key } from 'lucide-react';

interface ApiPageProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export function ApiPage({ onNavigate, currentPage }: ApiPageProps) {
  const [copied, setCopied] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<'curl' | 'javascript' | 'python'>('curl');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const codeExamples = {
    transcription: {
      curl: `curl -X POST https://api.sealium.io/v1/transcriptions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://youtube.com/watch?v=example",
    "language": "en",
    "webhook_url": "https://your-domain.com/webhook"
  }'`,
      javascript: `const response = await fetch('https://api.sealium.io/v1/transcriptions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://youtube.com/watch?v=example',
    language: 'en',
    webhook_url: 'https://your-domain.com/webhook'
  })
});

const data = await response.json();
console.log(data);`,
      python: `import requests

response = requests.post(
    'https://api.sealium.io/v1/transcriptions',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'url': 'https://youtube.com/watch?v=example',
        'language': 'en',
        'webhook_url': 'https://your-domain.com/webhook'
    }
)

data = response.json()
print(data)`,
    },
    proof: {
      curl: `curl -X POST https://api.sealium.io/v1/proofs \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com/page-to-certify",
    "capture_screenshot": true,
    "capture_html": true
  }'`,
      javascript: `const response = await fetch('https://api.sealium.io/v1/proofs', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://example.com/page-to-certify',
    capture_screenshot: true,
    capture_html: true
  })
});

const data = await response.json();
console.log(data);`,
      python: `import requests

response = requests.post(
    'https://api.sealium.io/v1/proofs',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'url': 'https://example.com/page-to-certify',
        'capture_screenshot': True,
        'capture_html': True
    }
)

data = response.json()
print(data)`,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={onNavigate} currentPage={currentPage} />

      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-6">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Developer API</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              API <span className="text-primary">Documentation</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Integrate Sealium's evidence capture and certification into your applications
            </p>
          </div>

          
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Get Your API Key</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sign in to your dashboard and navigate to Settings -> API Keys to generate your authentication token.
                </p>
                <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
                  <code className="text-sm font-mono">sk_live_abc123def456ghi789jkl012mno345</code>
                  <button
                    onClick={() => handleCopy('sk_live_abc123def456ghi789jkl012mno345', 'api-key')}
                    className="p-2 hover:bg-accent rounded transition-colors"
                  >
                    {copied === 'api-key' ? (
                      <Check className="w-4 h-4 text-success" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">2. Base URL</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  All API requests should be made to:
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <code className="text-sm font-mono">https://api.sealium.io/v1</code>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3. Authentication</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Include your API key in the Authorization header:
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <code className="text-sm font-mono">Authorization: Bearer YOUR_API_KEY</code>
                </div>
              </div>
            </div>
          </div>

          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">RESTful API</h3>
              <p className="text-sm text-muted-foreground">
                Simple HTTP endpoints with JSON responses
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-semibold mb-2">Secure</h3>
              <p className="text-sm text-muted-foreground">
                TLS encryption and API key authentication
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Well Documented</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive guides and examples
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Webhook Support</h3>
              <p className="text-sm text-muted-foreground">
                Real-time notifications for async operations
              </p>
            </div>
          </div>

          
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Endpoints</h2>

            
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-muted/50 px-6 py-4 border-b border-border">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded">
                        POST
                      </span>
                      <code className="text-sm font-mono">/v1/transcriptions</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Create a new transcription job
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold mb-4">Request Body</h3>
                <div className="bg-muted/30 rounded-lg p-4 mb-6 overflow-x-auto">
                  <pre className="text-sm font-mono">
{`{
  "url": "string (required)",
  "language": "string (optional, default: auto)",
  "webhook_url": "string (optional)",
  "format": "string (optional: json|srt|vtt)"
}`}
                  </pre>
                </div>

                <h3 className="font-semibold mb-4">Code Example</h3>

                
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => setSelectedLanguage('curl')}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      selectedLanguage === 'curl'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-accent'
                    }`}
                  >
                    cURL
                  </button>
                  <button
                    onClick={() => setSelectedLanguage('javascript')}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      selectedLanguage === 'javascript'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-accent'
                    }`}
                  >
                    JavaScript
                  </button>
                  <button
                    onClick={() => setSelectedLanguage('python')}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      selectedLanguage === 'python'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-accent'
                    }`}
                  >
                    Python
                  </button>
                </div>

                <div className="bg-[#1e1e1e] dark:bg-[#0d1117] rounded-lg p-4 relative">
                  <button
                    onClick={() => handleCopy(codeExamples.transcription[selectedLanguage], 'transcription')}
                    className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded transition-colors"
                  >
                    {copied === 'transcription' ? (
                      <Check className="w-4 h-4 text-success" />
                    ) : (
                      <Copy className="w-4 h-4 text-white/70" />
                    )}
                  </button>
                  <pre className="text-sm font-mono text-white overflow-x-auto">
                    {codeExamples.transcription[selectedLanguage]}
                  </pre>
                </div>

                <h3 className="font-semibold mb-4 mt-6">Response</h3>
                <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm font-mono">
{`{
  "id": "trans_abc123def456",
  "status": "processing",
  "url": "https://youtube.com/watch?v=example",
  "created_at": "2026-01-30T14:32:18Z",
  "estimated_completion": "2026-01-30T14:37:18Z"
}`}
                  </pre>
                </div>
              </div>
            </div>

            
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-muted/50 px-6 py-4 border-b border-border">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-success text-success-foreground text-xs font-bold rounded">
                        POST
                      </span>
                      <code className="text-sm font-mono">/v1/proofs</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Create a cryptographic proof of web content
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold mb-4">Request Body</h3>
                <div className="bg-muted/30 rounded-lg p-4 mb-6 overflow-x-auto">
                  <pre className="text-sm font-mono">
{`{
  "url": "string (required)",
  "capture_screenshot": "boolean (optional, default: true)",
  "capture_html": "boolean (optional, default: true)",
  "capture_pdf": "boolean (optional, default: false)",
  "webhook_url": "string (optional)"
}`}
                  </pre>
                </div>

                <h3 className="font-semibold mb-4">Code Example</h3>

                <div className="bg-[#1e1e1e] dark:bg-[#0d1117] rounded-lg p-4 relative">
                  <button
                    onClick={() => handleCopy(codeExamples.proof[selectedLanguage], 'proof')}
                    className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded transition-colors"
                  >
                    {copied === 'proof' ? (
                      <Check className="w-4 h-4 text-success" />
                    ) : (
                      <Copy className="w-4 h-4 text-white/70" />
                    )}
                  </button>
                  <pre className="text-sm font-mono text-white overflow-x-auto">
                    {codeExamples.proof[selectedLanguage]}
                  </pre>
                </div>

                <h3 className="font-semibold mb-4 mt-6">Response</h3>
                <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm font-mono">
{`{
  "id": "proof_xyz789abc012",
  "status": "processing",
  "url": "https://example.com/page-to-certify",
  "hash": "a3f9b2c8e1d4f5a6b7c8d9e0f1a2b3c4...",
  "created_at": "2026-01-30T14:32:18Z",
  "certificate_url": "https://sealium.io/verify/proof_xyz789abc012"
}`}
                  </pre>
                </div>
              </div>
            </div>

            
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-muted/50 px-6 py-4 border-b border-border">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded">
                        GET
                      </span>
                      <code className="text-sm font-mono">/v1/{'{type}'}/{'{id}'}</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Get the status of a transcription or proof job
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold mb-4">Response</h3>
                <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm font-mono">
{`{
  "id": "trans_abc123def456",
  "status": "completed",
  "progress": 100,
  "result": {
    "transcript": "Full transcript text...",
    "duration": 342.5,
    "language": "en",
    "download_url": "https://api.sealium.io/downloads/..."
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Rate Limits</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="font-medium">Free Tier: 100 requests/day</p>
                  <p className="text-sm text-muted-foreground">Perfect for testing and small projects</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="font-medium">Pro Tier: 10,000 requests/day</p>
                  <p className="text-sm text-muted-foreground">For production applications</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="font-medium">Enterprise: Custom limits</p>
                  <p className="text-sm text-muted-foreground">Contact sales for high-volume requirements</p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 sm:p-12 border border-primary/20 text-center mt-12">
            <Key className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Get your API key and start integrating Sealium into your application today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('landing')}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get API Key
              </button>
              <button className="px-8 py-4 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors">
                View Full Docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

