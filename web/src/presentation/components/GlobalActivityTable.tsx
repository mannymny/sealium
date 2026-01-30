import { useState, type MouseEvent } from 'react';
import { FileText, Shield, ExternalLink, Download, Eye, AlertTriangle, X, Copy, Check } from 'lucide-react';
import { Button } from '@/presentation/ui/button';

type FilterType = 'all' | 'transcripts' | 'proof';

interface ActivityItem {
  id: string;
  type: 'transcript' | 'proof';
  title: string;
  source: string;
  requestedBy: {
    name: string;
    initials: string;
  };
  timestamp: string;
  status: 'processing' | 'verified' | 'completed' | 'sealed';
  iconColor: string;
  duration?: string;
  fileSize?: string;
  hash?: string;
  verificationUrl?: string;
}

const mockActivity: ActivityItem[] = [
  {
    id: '1',
    type: 'transcript',
    title: 'Twitter Space: Tech Trends 2025',
    source: 'twitter.com/i/spaces/N4J...',
    requestedBy: { name: 'Anonymous', initials: 'A' },
    timestamp: '2 mins ago',
    status: 'processing',
    iconColor: 'bg-blue-500',
    duration: '42:15',
    fileSize: '18.3 MB',
  },
  {
    id: '2',
    type: 'proof',
    title: 'contract_v2_signed.pdf',
    source: 'Certificate URL - SHA-256',
    requestedBy: { name: 'Raj P.', initials: 'RP' },
    timestamp: '15 mins ago',
    status: 'verified',
    iconColor: 'bg-green-500',
    fileSize: '2.4 MB',
    hash: 'a3f9b2c8e1d4f5a6b7c8d9e0f1a2b3c4',
    verificationUrl: 'https://sealium.io/verify/proof_xyz789',
  },
  {
    id: '3',
    type: 'transcript',
    title: 'Live Debate Coverage',
    source: 'youtube.com/watch?v=k8...',
    requestedBy: { name: 'Sarah L.', initials: 'SL' },
    timestamp: '1 hour ago',
    status: 'completed',
    iconColor: 'bg-red-500',
    duration: '1:24:30',
    fileSize: '45.2 MB',
  },
  {
    id: '4',
    type: 'proof',
    title: 'Article: Crypto Regulations',
    source: 'Validation Service - Blockchain',
    requestedBy: { name: 'Carlos M.', initials: 'CM' },
    timestamp: '2 hours ago',
    status: 'sealed',
    iconColor: 'bg-purple-500',
    fileSize: '5.8 MB',
    hash: 'b4c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2',
    verificationUrl: 'https://sealium.io/verify/proof_abc123',
  },
];

export function GlobalActivityTable() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedItem, setSelectedItem] = useState<ActivityItem | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredActivity = mockActivity.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'transcripts') return item.type === 'transcript';
    if (filter === 'proof') return item.type === 'proof';
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'bg-primary/10 text-primary';
      case 'verified':
        return 'bg-green-500/10 text-green-600 dark:text-green-400';
      case 'completed':
        return 'bg-success/10 text-success';
      case 'sealed':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (item: ActivityItem, e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    // Mock download functionality
    console.log('Downloading:', item.title);
  };

  const handleReport = (item: ActivityItem, e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    // Mock report functionality
    console.log('Reporting:', item.title);
  };

  return (
    <>
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        
        <div className="p-4 sm:p-6 border-b border-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold mb-1">Global Activity</h3>
              <p className="text-sm text-muted-foreground">
                Real-time public evidence and transcription requests.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  filter === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-accent'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('transcripts')}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  filter === 'transcripts'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-accent'
                }`}
              >
                Transcripts
              </button>
              <button
                onClick={() => setFilter('proof')}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  filter === 'proof'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-accent'
                }`}
              >
                Proof
              </button>
            </div>
          </div>
        </div>

        
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Type
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Source / File
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Requested By
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredActivity.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="hover:bg-muted/30 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <div className={`w-10 h-10 rounded-lg ${item.iconColor} flex items-center justify-center`}>
                      {item.type === 'transcript' ? (
                        <FileText className="w-5 h-5 text-white" />
                      ) : (
                        <Shield className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.source}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">
                        {item.requestedBy.initials}
                      </div>
                      <span className="text-sm">{item.requestedBy.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{item.timestamp}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {getStatusText(item.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => handleDownload(item, e)}
                        className="p-2 hover:bg-accent rounded-lg transition-colors"
                        title="Download"
                      >
                        <Download className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                      </button>
                      <button
                        onClick={(e) => handleReport(item, e)}
                        className="p-2 hover:bg-accent rounded-lg transition-colors"
                        title="Report"
                      >
                        <AlertTriangle className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                      </button>
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="p-2 hover:bg-accent rounded-lg transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        <div className="md:hidden divide-y divide-border">
          {filteredActivity.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="p-4 hover:bg-muted/30 transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg ${item.iconColor} flex items-center justify-center shrink-0`}>
                  {item.type === 'transcript' ? (
                    <FileText className="w-5 h-5 text-white" />
                  ) : (
                    <Shield className="w-5 h-5 text-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground mb-2">{item.source}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">
                      {item.requestedBy.initials}
                    </div>
                    <span className="text-xs text-muted-foreground">{item.requestedBy.name}</span>
                    <span className="text-xs text-muted-foreground">- {item.timestamp}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {getStatusText(item.status)}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => handleDownload(item, e)}
                        className="p-2 hover:bg-accent rounded-lg transition-colors"
                        title="Download"
                      >
                        <Download className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button
                        onClick={(e) => handleReport(item, e)}
                        className="p-2 hover:bg-accent rounded-lg transition-colors"
                        title="Report"
                      >
                        <AlertTriangle className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="p-4 border-t border-border text-center">
          <button className="text-sm text-primary hover:underline">
            View all history -&gt;
          </button>
        </div>
      </div>

      
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          <div
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          />

          
          <div className="relative bg-card border border-border rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            
            <div className="sticky top-0 bg-card border-b border-border px-4 sm:px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${selectedItem.iconColor} flex items-center justify-center`}>
                  {selectedItem.type === 'transcript' ? (
                    <FileText className="w-5 h-5 text-white" />
                  ) : (
                    <Shield className="w-5 h-5 text-white" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">Activity Details</h3>
                  <p className="text-xs text-muted-foreground">
                    {selectedItem.type === 'transcript' ? 'Transcription' : 'Proof Certification'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            
            <div className="p-4 sm:p-6 space-y-6">
              
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="font-semibold text-lg">{selectedItem.title}</h4>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(
                      selectedItem.status
                    )}`}
                  >
                    {getStatusText(selectedItem.status)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{selectedItem.source}</p>
              </div>

              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Requested By</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">
                      {selectedItem.requestedBy.initials}
                    </div>
                    <p className="font-medium">{selectedItem.requestedBy.name}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Timestamp</p>
                  <p className="font-medium">{selectedItem.timestamp}</p>
                </div>

                {selectedItem.duration && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Duration</p>
                    <p className="font-medium">{selectedItem.duration}</p>
                  </div>
                )}

                {selectedItem.fileSize && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">File Size</p>
                    <p className="font-medium">{selectedItem.fileSize}</p>
                  </div>
                )}
              </div>

              
              {selectedItem.hash && (
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Cryptographic Hash</p>
                  <div className="flex items-center gap-2 bg-muted/50 p-3 rounded-lg">
                    <code className="text-sm font-mono flex-1 break-all">{selectedItem.hash}</code>
                    <button
                      onClick={() => handleCopy(selectedItem.hash!)}
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
              )}

              
              {selectedItem.verificationUrl && (
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Verification URL</p>
                  <div className="flex items-center gap-2 bg-muted/50 p-3 rounded-lg">
                    <code className="text-xs sm:text-sm font-mono flex-1 break-all">
                      {selectedItem.verificationUrl}
                    </code>
                    <button className="p-2 hover:bg-accent rounded transition-colors shrink-0">
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              )}

              
              {selectedItem.status === 'processing' && (
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Processing Progress</p>
                  <div className="space-y-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: '65%' }} />
                    </div>
                    <p className="text-xs text-muted-foreground">65% complete - Estimated 5 minutes remaining</p>
                  </div>
                </div>
              )}

              
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                <Button
                  variant="primary"
                  size="md"
                  className="flex-1"
                  onClick={(e) => handleDownload(selectedItem, e)}
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  className="flex-1"
                  onClick={() => setSelectedItem(null)}
                >
                  <Eye className="w-4 h-4" />
                  View Full Report
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={(e) => handleReport(selectedItem, e)}
                >
                  <AlertTriangle className="w-4 h-4" />
                  Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

