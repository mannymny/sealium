import { FileText, Download, MoreVertical } from 'lucide-react';
import { Button } from '@/presentation/ui/button';

interface Transcription {
  id: string;
  filename: string;
  duration: string;
  uploadedAt: string;
  status: 'completed' | 'processing' | 'failed';
  size: string;
}

const mockTranscriptions: Transcription[] = [
  {
    id: '1',
    filename: 'client_interview_2024.mp4',
    duration: '45:32',
    uploadedAt: 'Jan 28, 2026',
    status: 'completed',
    size: '125 MB',
  },
  {
    id: '2',
    filename: 'deposition_recording.wav',
    duration: '2:15:48',
    uploadedAt: 'Jan 27, 2026',
    status: 'completed',
    size: '487 MB',
  },
  {
    id: '3',
    filename: 'evidence_audio_file.mp3',
    duration: '18:22',
    uploadedAt: 'Jan 26, 2026',
    status: 'processing',
    size: '32 MB',
  },
  {
    id: '4',
    filename: 'witness_testimony.mp4',
    duration: '1:03:15',
    uploadedAt: 'Jan 25, 2026',
    status: 'completed',
    size: '210 MB',
  },
];

export function TranscriptionsPage() {
  return (
    <div className="max-w-6xl">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <p className="text-sm mb-1">Plan</p>
          <p className="text-3xl font-bold">247</p>
        </div>
        <Button variant="primary" size="md">
          <FileText className="w-5 h-5" />
          New Transcription
        </Button>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-sm text-muted-foreground mb-1">Total Transcriptions</p>
          <p className="text-3xl font-bold">247</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-sm text-muted-foreground mb-1">This Month</p>
          <p className="text-3xl font-bold">18</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-sm text-muted-foreground mb-1">Processing</p>
          <p className="text-3xl font-bold">1</p>
        </div>
      </div>

      
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="hidden md:block">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">
                  File
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">
                  Duration
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">
                  Size
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">
                  Uploaded
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">
                  Status
                </th>
                <th className="w-12 px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockTranscriptions.map((item) => (
                <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">{item.filename}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{item.duration}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{item.size}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{item.uploadedAt}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${
                        item.status === 'completed'
                          ? 'bg-success/10 text-success'
                          : item.status === 'processing'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-destructive/10 text-destructive'
                      }`}
                    >
                      {item.status === 'completed' && 'Completed'}
                      {item.status === 'processing' && 'Processing'}
                      {item.status === 'failed' && 'Failed'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                        <Download className="w-4 h-4 text-muted-foreground" />
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
          {mockTranscriptions.map((item) => (
            <div key={item.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{item.filename}</p>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                        item.status === 'completed'
                          ? 'bg-success/10 text-success'
                          : item.status === 'processing'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-destructive/10 text-destructive'
                      }`}
                    >
                      {item.status === 'completed' && 'Completed'}
                      {item.status === 'processing' && 'Processing'}
                      {item.status === 'failed' && 'Failed'}
                    </span>
                  </div>
                </div>
                <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs">Duration</p>
                  <p className="font-medium">{item.duration}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Size</p>
                  <p className="font-medium">{item.size}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Uploaded</p>
                  <p className="font-medium">{item.uploadedAt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

