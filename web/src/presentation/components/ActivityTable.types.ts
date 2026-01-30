export type ActivityType = 'transcription' | 'proof';
export type ActivityStatus = 'processing' | 'verified' | 'completed' | 'sealed';

export interface Activity {
  id: string;
  type: ActivityType;
  source: string;
  requestedBy: {
    name: string;
    avatar: string;
  };
  timestamp: string;
  status: ActivityStatus;
}
