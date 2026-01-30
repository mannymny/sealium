import type { ReactNode } from 'react';
import { FileText, Shield, MoreVertical, Clock, CheckCircle2, Lock } from 'lucide-react';
import { cn } from '@/presentation/ui/utils';
import type { Activity, ActivityStatus } from '@/presentation/components/ActivityTable.types';
import { activityTableStyles } from '@/presentation/components/ActivityTable.styles';

const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'transcription',
    source: 'interview_recording.mp4',
    requestedBy: { name: 'Sarah Johnson', avatar: 'SJ' },
    timestamp: '2 minutes ago',
    status: 'processing',
  },
  {
    id: '2',
    type: 'proof',
    source: 'example.com/article/legal-dispute',
    requestedBy: { name: 'Michael Chen', avatar: 'MC' },
    timestamp: '15 minutes ago',
    status: 'verified',
  },
  {
    id: '3',
    type: 'transcription',
    source: 'podcast_episode_45.mp3',
    requestedBy: { name: 'Emily Rodriguez', avatar: 'ER' },
    timestamp: '1 hour ago',
    status: 'completed',
  },
  {
    id: '4',
    type: 'proof',
    source: 'twitter.com/post/12345',
    requestedBy: { name: 'David Kim', avatar: 'DK' },
    timestamp: '3 hours ago',
    status: 'sealed',
  },
  {
    id: '5',
    type: 'transcription',
    source: 'deposition_testimony.wav',
    requestedBy: { name: 'Lisa Anderson', avatar: 'LA' },
    timestamp: '5 hours ago',
    status: 'completed',
  },
  {
    id: '6',
    type: 'proof',
    source: 'reddit.com/r/legal/comments/abc',
    requestedBy: { name: 'James Wilson', avatar: 'JW' },
    timestamp: '1 day ago',
    status: 'sealed',
  },
];

const statusConfig: Record<
  ActivityStatus,
  { label: string; color: string; icon: ReactNode }
> = {
  processing: {
    label: 'Processing',
    color: activityTableStyles.statusColors.processing,
    icon: <Clock className="w-4 h-4" />,
  },
  verified: {
    label: 'Verified',
    color: activityTableStyles.statusColors.verified,
    icon: <CheckCircle2 className="w-4 h-4" />,
  },
  completed: {
    label: 'Completed',
    color: activityTableStyles.statusColors.completed,
    icon: <CheckCircle2 className="w-4 h-4" />,
  },
  sealed: {
    label: 'Sealed',
    color: activityTableStyles.statusColors.sealed,
    icon: <Lock className="w-4 h-4" />,
  },
};

interface ActivityTableProps {
  filter: 'all' | 'transcriptions' | 'proofs';
}

export function ActivityTable({ filter }: ActivityTableProps) {
  const filteredActivities = mockActivities.filter((activity) => {
    if (filter === 'all') return true;
    if (filter === 'transcriptions') return activity.type === 'transcription';
    if (filter === 'proofs') return activity.type === 'proof';
    return true;
  });

  return (
    <>
      <div className={activityTableStyles.desktopWrapper}>
        <table className={activityTableStyles.table}>
          <thead className={activityTableStyles.thead}>
            <tr>
              <th className={activityTableStyles.th}>Type</th>
              <th className={activityTableStyles.th}>
                Source / File
              </th>
              <th className={activityTableStyles.th}>
                Requested By
              </th>
              <th className={activityTableStyles.th}>
                Timestamp
              </th>
              <th className={activityTableStyles.th}>Status</th>
              <th className={activityTableStyles.thActions}></th>
            </tr>
          </thead>
          <tbody className={activityTableStyles.tbody}>
            {filteredActivities.map((activity) => (
              <tr key={activity.id} className={activityTableStyles.row}>
                <td className={activityTableStyles.cell}>
                  <div className={activityTableStyles.iconRow}>
                    {activity.type === 'transcription' ? (
                      <div className={activityTableStyles.typeIconWrap.transcription}>
                        <FileText className={activityTableStyles.typeIcon.transcription} />
                      </div>
                    ) : (
                      <div className={activityTableStyles.typeIconWrap.proof}>
                        <Shield className={activityTableStyles.typeIcon.proof} />
                      </div>
                    )}
                  </div>
                </td>

                <td className={activityTableStyles.cell}>
                  <p className={activityTableStyles.source}>{activity.source}</p>
                </td>

                <td className={activityTableStyles.cell}>
                  <div className={activityTableStyles.requester}>
                    <div className={activityTableStyles.avatar}>
                      {activity.requestedBy.avatar}
                    </div>
                    <span className={activityTableStyles.requesterName}>{activity.requestedBy.name}</span>
                  </div>
                </td>

                <td className={activityTableStyles.cell}>
                  <span className={activityTableStyles.timestamp}>{activity.timestamp}</span>
                </td>

                <td className={activityTableStyles.cell}>
                  <div
                    className={cn(
                      activityTableStyles.statusBase,
                      statusConfig[activity.status].color
                    )}
                  >
                    {statusConfig[activity.status].icon}
                    {statusConfig[activity.status].label}
                  </div>
                </td>

                <td className={activityTableStyles.cell}>
                  <button className={activityTableStyles.actionsButton}>
                    <MoreVertical className={activityTableStyles.actionsIcon} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={activityTableStyles.mobileWrapper}>
        {filteredActivities.map((activity) => (
          <div key={activity.id} className={activityTableStyles.mobileCard}>
            <div className={activityTableStyles.mobileHeader}>
              <div className={activityTableStyles.mobileTypeRow}>
                {activity.type === 'transcription' ? (
                  <div className={activityTableStyles.typeIconWrap.transcription}>
                    <FileText className={activityTableStyles.typeIcon.transcription} />
                  </div>
                ) : (
                  <div className={activityTableStyles.typeIconWrap.proof}>
                    <Shield className={activityTableStyles.typeIcon.proof} />
                  </div>
                )}
                <div
                  className={cn(
                    activityTableStyles.statusBase,
                    statusConfig[activity.status].color
                  )}
                >
                  {statusConfig[activity.status].icon}
                  {statusConfig[activity.status].label}
                </div>
              </div>
              <button className={activityTableStyles.actionsButton}>
                <MoreVertical className={activityTableStyles.actionsIcon} />
              </button>
            </div>

            <p className={activityTableStyles.mobileSource}>{activity.source}</p>

            <div className={activityTableStyles.mobileFooter}>
              <div className={activityTableStyles.mobileRequesterRow}>
                <div className={activityTableStyles.mobileAvatar}>
                  {activity.requestedBy.avatar}
                </div>
                <span>{activity.requestedBy.name}</span>
              </div>
              <span className={activityTableStyles.mobileTimestamp}>{activity.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
