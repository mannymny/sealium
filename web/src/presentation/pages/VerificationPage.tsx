import { useState } from 'react';
import { Navigation } from '@/presentation/components/Navigation';
import { Search, CheckCircle, XCircle, Shield, AlertCircle, Download, ExternalLink, Copy, Check } from 'lucide-react';
import { Button } from '@/presentation/ui/button';

interface VerificationPageProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export function VerificationPage({ onNavigate, currentPage }: VerificationPageProps) {
  const [verificationId, setVerificationId] = useState('');
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleVerify = () => {
    setIsLoading(true);
    // Simulate verification
    setTimeout(() => {
      setIsLoading(false);
      setIsVerified(verificationId.length > 10);
    }, 1500);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mockVerificationData = {
    id: 'PROOF-2026-A3F9B2C8E1',
    title: 'contract_v2_signed.pdf',
    type: 'Document Proof',
    timestamp: '2026-01-30 14:32:18 UTC',
    hash: 'a3f9b2c8e1d4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0',
    blockchainTx: '0x8f3b2a1c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2',
    certifiedBy: 'Sealium Legal-Tech',
    owner: 'Carlos M. (carlos.m@example.com)',
    fileSize: '2.4 MB',
    verificationCount: 47,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={onNavigate} currentPage={currentPage} />

      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Independent Verification</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Verify <span className="text-primary">Digital Evidence</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Independently verify the authenticity and integrity of any Sealium-certified content
            </p>
          </div>

          
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Enter Verification ID</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Paste the proof ID or certificate hash to verify its authenticity
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={verificationId}
                  onChange={(e) => setVerificationId(e.target.value)}
                  placeholder="PROOF-2026-XXXXXXXXXXXX or certificate hash"
                  className="w-full pl-11 pr-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <Button
                variant="primary"
                size="lg"
                onClick={handleVerify}
                disabled={!verificationId || isLoading}
              >
                {isLoading ? 'Verifying...' : 'Verify'}
              </Button>
            </div>

            
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">Try example:</span>
              <button
                onClick={() => setVerificationId('PROOF-2026-A3F9B2C8E1')}
                className="text-sm text-primary hover:underline"
              >
                PROOF-2026-A3F9B2C8E1
              </button>
            </div>
          </div>

          
          {isVerified !== null && (
            <div className="space-y-6">
              
              <div
                className={`rounded-2xl p-6 sm:p-8 border-2 ${
                  isVerified
                    ? 'bg-success/5 border-success'
                    : 'bg-destructive/5 border-destructive'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                      isVerified ? 'bg-success/10' : 'bg-destructive/10'
                    }`}
                  >
                    {isVerified ? (
                      <CheckCircle className="w-6 h-6 text-success" />
                    ) : (
                      <XCircle className="w-6 h-6 text-destructive" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                      {isVerified ? 'Verification Successful' : 'Verification Failed'}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {isVerified
                        ? 'This proof has been cryptographically verified and is authentic.'
                        : 'This proof could not be verified. It may be invalid or tampered with.'}
                    </p>
                  </div>
                </div>
              </div>

              {isVerified && (
                <>
                  
                  <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
                    <h3 className="text-lg font-semibold mb-6">Proof Details</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Proof ID</p>
                          <div className="flex items-center gap-2">
                            <p className="font-medium font-mono text-sm">{mockVerificationData.id}</p>
                            <button
                              onClick={() => handleCopy(mockVerificationData.id)}
                              className="p-1 hover:bg-accent rounded transition-colors"
                            >
                              {copied ? (
                                <Check className="w-4 h-4 text-success" />
                              ) : (
                                <Copy className="w-4 h-4 text-muted-foreground" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Type</p>
                          <p className="font-medium">{mockVerificationData.type}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Content Title</p>
                        <p className="font-medium">{mockVerificationData.title}</p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Timestamp</p>
                        <p className="font-medium">{mockVerificationData.timestamp}</p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Owner</p>
                        <p className="font-medium">{mockVerificationData.owner}</p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Certified By</p>
                        <p className="font-medium">{mockVerificationData.certifiedBy}</p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground mb-1">SHA-256 Hash</p>
                        <div className="flex items-start gap-2">
                          <p className="font-mono text-xs break-all bg-muted p-2 rounded flex-1">
                            {mockVerificationData.hash}
                          </p>
                          <button
                            onClick={() => handleCopy(mockVerificationData.hash)}
                            className="p-2 hover:bg-accent rounded transition-colors shrink-0"
                          >
                            {copied ? (
                              <Check className="w-4 h-4 text-success" />
                            ) : (
                              <Copy className="w-4 h-4 text-muted-foreground" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Blockchain Transaction</p>
                        <div className="flex items-center gap-2">
                          <p className="font-mono text-xs break-all bg-muted p-2 rounded flex-1">
                            {mockVerificationData.blockchainTx}
                          </p>
                          <button className="p-2 hover:bg-accent rounded transition-colors shrink-0">
                            <ExternalLink className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">File Size</p>
                          <p className="font-medium">{mockVerificationData.fileSize}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Verification Count</p>
                          <p className="font-medium">{mockVerificationData.verificationCount} times</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="primary" size="md" className="flex-1 sm:flex-initial">
                      <Download className="w-5 h-5" />
                      Download Certificate
                    </Button>
                    <Button variant="outline" size="md" className="flex-1 sm:flex-initial">
                      <ExternalLink className="w-5 h-5" />
                      View on Blockchain
                    </Button>
                  </div>

                  
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Trust Indicators</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Cryptographic Signature Valid</p>
                          <p className="text-xs text-muted-foreground">
                            SHA-256 hash matches original content
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Blockchain Timestamp Confirmed</p>
                          <p className="text-xs text-muted-foreground">
                            Anchored in block #8,492,156
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Certificate Unmodified</p>
                          <p className="text-xs text-muted-foreground">
                            No tampering detected since certification
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Issuer Verified</p>
                          <p className="text-xs text-muted-foreground">
                            Certificate issued by trusted Sealium authority
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          
          {isVerified === null && (
            <div className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                How Verification Works
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Enter ID</h3>
                  <p className="text-sm text-muted-foreground">
                    Paste the proof ID or certificate hash you want to verify
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="font-semibold mb-2">Cryptographic Check</h3>
                  <p className="text-sm text-muted-foreground">
                    We verify the hash against blockchain records
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Get Results</h3>
                  <p className="text-sm text-muted-foreground">
                    View complete proof details and trust indicators
                  </p>
                </div>
              </div>
            </div>
          )}

          
          <div className="mt-8 bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 sm:p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Independent Verification</h3>
                <p className="text-sm text-muted-foreground">
                  This verification is completely independent and can be performed by anyone without a Sealium account.
                  All proof data is publicly auditable on the blockchain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

