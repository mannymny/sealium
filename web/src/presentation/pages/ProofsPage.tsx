import { Shield, Download, ExternalLink, MoreVertical, Lock } from 'lucide-react';
import { Button } from '@/presentation/ui/button';

interface Proof {
  id: string;
  url: string;
  certifiedAt: string;
  status: 'sealed' | 'verified' | 'pending';
  type: 'webpage' | 'document' | 'social';
}

const mockProofs: Proof[] = [
  {
    id: '1',
    url: 'twitter.com/user/status/1234567890',
    certifiedAt: 'Jan 29, 2026 2:45 PM',
    status: 'sealed',
    type: 'social',
  },
  {
    id: '2',
    url: 'example.com/legal-document-2024',
    certifiedAt: 'Jan 28, 2026 10:22 AM',
    status: 'sealed',
    type: 'webpage',
  },
  {
    id: '3',
    url: 'reddit.com/r/legal/comments/abc123',
    certifiedAt: 'Jan 27, 2026 4:15 PM',
    status: 'verified',
    type: 'social',
  },
  {
    id: '4',
    url: 'news-site.com/article/breaking-news',
    certifiedAt: 'Jan 26, 2026 9:30 AM',
    status: 'sealed',
    type: 'webpage',
  },
];

export function ProofsPage() {
  return (
    <div className="max-w-6xl">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 hidden lg:block">Certified Proofs</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Cryptographically certified digital evidence
          </p>
        </div>
        <Button variant="primary">
          <Shield className="w-5 h-5" />
          Certify New Proof
        </Button>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-sm text-muted-foreground mb-1">Total Proofs</p>
          <p className="text-3xl font-bold">1,342</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-sm text-muted-foreground mb-1">This Month</p>
          <p className="text-3xl font-bold">89</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-sm text-muted-foreground mb-1">Sealed</p>
          <p className="text-3xl font-bold text-success">1,298</p>
        </div>
      </div>

      
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="hidden md:block">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">
                  Source URL
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">
                  Type
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">
                  Certified At
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">
                  Status
                </th>
                <th className="w-12 px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockProofs.map((proof) => (
                <tr key={proof.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-success/10 rounded-lg">
                        <Shield className="w-5 h-5 text-success" />
                      </div>
                      <span className="font-medium truncate max-w-md">{proof.url}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground capitalize">{proof.type}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{proof.certifiedAt}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                        proof.status === 'sealed'
                          ? 'bg-success/20 text-success'
                          : proof.status === 'verified'
                          ? 'bg-success/10 text-success'
                          : 'bg-primary/10 text-primary'
                      }`}
                    >
                      {proof.status === 'sealed' && <Lock className="w-3 h-3" />}
                      {proof.status === 'sealed' && 'Sealed'}
                      {proof.status === 'verified' && 'Verified'}
                      {proof.status === 'pending' && 'Pending'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                        <Download className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        <div className="md:hidden divide-y divide-border">
          {mockProofs.map((proof) => (
            <div key={proof.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="p-2 bg-success/10 rounded-lg shrink-0">
                    <Shield className="w-5 h-5 text-success" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium break-all text-sm mb-2">{proof.url}</p>
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                        proof.status === 'sealed'
                          ? 'bg-success/20 text-success'
                          : proof.status === 'verified'
                          ? 'bg-success/10 text-success'
                          : 'bg-primary/10 text-primary'
                      }`}
                    >
                      {proof.status === 'sealed' && <Lock className="w-3 h-3" />}
                      {proof.status === 'sealed' && 'Sealed'}
                      {proof.status === 'verified' && 'Verified'}
                      {proof.status === 'pending' && 'Pending'}
                    </span>
                  </div>
                </div>
                <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span className="capitalize">{proof.type}</span>
                <span className="text-xs">{proof.certifiedAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

