import { FileText, Shield, Activity, TrendingUp } from 'lucide-react';
import { usageStatsStyles } from '../styles/UsageStatsWidget.styles';

interface UsageStats {
  period: string;
  transcriptions: number;
  proofs: number;
  apiCalls: number;
  storage: string;
}

const currentMonth: UsageStats = {
  period: 'January 2026',
  transcriptions: 247,
  proofs: 1342,
  apiCalls: 45231,
  storage: '12.4 GB',
};

const previousMonth: UsageStats = {
  period: 'December 2025',
  transcriptions: 198,
  proofs: 1156,
  apiCalls: 38942,
  storage: '10.8 GB',
};

export function UsageStatsWidget() {
  const calculateGrowth = (current: number, previous: number) => {
    const growth = ((current - previous) / previous) * 100;
    return growth.toFixed(1);
  };

  const transcriptionGrowth = calculateGrowth(currentMonth.transcriptions, previousMonth.transcriptions);
  const proofsGrowth = calculateGrowth(currentMonth.proofs, previousMonth.proofs);
  const apiGrowth = calculateGrowth(currentMonth.apiCalls, previousMonth.apiCalls);

  return (
    <div className={usageStatsStyles.card}>
      <div className={usageStatsStyles.header}>
        <div>
          <h3 className={usageStatsStyles.title}>
            <Activity className={usageStatsStyles.titleIcon} />
            Usage Statistics
          </h3>
          <p className={usageStatsStyles.period}>{currentMonth.period}</p>
        </div>
        <div className={usageStatsStyles.headerRight}>
          <p className={usageStatsStyles.headerRightText}>vs. previous month</p>
        </div>
      </div>

      <div className={usageStatsStyles.list}>
        <div className={usageStatsStyles.statRow}>
          <div className={usageStatsStyles.statLeft}>
            <div className={usageStatsStyles.statIconWrapPrimary}>
              <FileText className={usageStatsStyles.statIconPrimary} />
            </div>
            <div>
              <p className={usageStatsStyles.statLabel}>Transcriptions</p>
              <p className={usageStatsStyles.statSubLabel}>Audio &amp; Video files</p>
            </div>
          </div>
          <div className={usageStatsStyles.statRight}>
            <p className={usageStatsStyles.statValue}>{currentMonth.transcriptions}</p>
            <p className={usageStatsStyles.statTrend}>
              <TrendingUp className={usageStatsStyles.trendIcon} />
              +{transcriptionGrowth}%
            </p>
          </div>
        </div>

        <div className={usageStatsStyles.statRow}>
          <div className={usageStatsStyles.statLeft}>
            <div className={usageStatsStyles.statIconWrapSuccess}>
              <Shield className={usageStatsStyles.statIconSuccess} />
            </div>
            <div>
              <p className={usageStatsStyles.statLabel}>Certified Proofs</p>
              <p className={usageStatsStyles.statSubLabel}>Web content sealed</p>
            </div>
          </div>
          <div className={usageStatsStyles.statRight}>
            <p className={usageStatsStyles.statValue}>{currentMonth.proofs}</p>
            <p className={usageStatsStyles.statTrend}>
              <TrendingUp className={usageStatsStyles.trendIcon} />
              +{proofsGrowth}%
            </p>
          </div>
        </div>

        <div className={usageStatsStyles.statRow}>
          <div className={usageStatsStyles.statLeft}>
            <div className={usageStatsStyles.statIconWrapAccent}>
              <Activity className={usageStatsStyles.statIconDefault} />
            </div>
            <div>
              <p className={usageStatsStyles.statLabel}>API Calls</p>
              <p className={usageStatsStyles.statSubLabel}>100k limit</p>
            </div>
          </div>
          <div className={usageStatsStyles.statRight}>
            <p className={usageStatsStyles.statValue}>{currentMonth.apiCalls.toLocaleString()}</p>
            <p className={usageStatsStyles.statTrend}>
              <TrendingUp className={usageStatsStyles.trendIcon} />
              +{apiGrowth}%
            </p>
          </div>
        </div>

        <div className={usageStatsStyles.statRow}>
          <div className={usageStatsStyles.statLeft}>
            <div className={usageStatsStyles.statIconWrapMuted}>
              <svg
                className={usageStatsStyles.storageIcon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                />
              </svg>
            </div>
            <div>
              <p className={usageStatsStyles.statLabel}>Storage Used</p>
              <p className={usageStatsStyles.statSubLabel}>90 days retention</p>
            </div>
          </div>
          <div className={usageStatsStyles.statRight}>
            <p className={usageStatsStyles.statValue}>{currentMonth.storage}</p>
            <p className={usageStatsStyles.statSubLabel}>of unlimited</p>
          </div>
        </div>
      </div>

      <div className={usageStatsStyles.progressWrap}>
        <div className={usageStatsStyles.progressHeader}>
          <p className={usageStatsStyles.progressLabel}>API Usage</p>
          <p className={usageStatsStyles.progressValue}>45.2%</p>
        </div>
        <div className={usageStatsStyles.progressTrack}>
          <div
            className={usageStatsStyles.progressBar}
            style={{ width: '45.2%' }}
          />
        </div>
        <p className={usageStatsStyles.progressNote}>
          {currentMonth.apiCalls.toLocaleString()} / 100,000 calls this month
        </p>
      </div>
    </div>
  );
}
