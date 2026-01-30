import { useState } from 'react';
import { Link2, Upload, Shield } from 'lucide-react';
import { Button } from '@/presentation/ui/button';
import { featureCardStyles } from '@/presentation/components/FeatureCard.styles';

type TabType = 'transcription' | 'proof';

export function FeatureCard() {
  const [activeTab, setActiveTab] = useState<TabType>('transcription');
  const [url, setUrl] = useState('');

  return (
    <section className={featureCardStyles.section}>
      <div className={featureCardStyles.container}>
        <div className={featureCardStyles.card}>
          <div className={featureCardStyles.tabsRow}>
            <div className={featureCardStyles.tabsWrap}>
              <button
                onClick={() => setActiveTab('transcription')}
                className={featureCardStyles.tabTranscription(activeTab === 'transcription')}
              >
                Transcription
              </button>
              <button
                onClick={() => setActiveTab('proof')}
                className={featureCardStyles.tabProof(activeTab === 'proof')}
              >
                Certificate URL
              </button>
            </div>
          </div>

          <div className={featureCardStyles.content}>
            <div>
              <label className={featureCardStyles.label}>
                {activeTab === 'transcription' ? 'Audio/Video URL or File' : 'Web Page URL'}
              </label>
              <div className={featureCardStyles.inputRow}>
                <div className={featureCardStyles.inputWrap}>
                  <Link2 className={featureCardStyles.inputIcon} />
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder={
                      activeTab === 'transcription'
                        ? 'https://example.com/video.mp4'
                        : 'https://example.com/page-to-certify'
                    }
                    className={featureCardStyles.input}
                  />
                </div>
                <Button variant="primary" size="lg">
                  {activeTab === 'transcription' ? 'Analyze' : 'Certify'}
                </Button>
              </div>
            </div>

            <div className={featureCardStyles.upload}>
              <Upload className={featureCardStyles.uploadIcon} />
              <p className={featureCardStyles.uploadText}>
                <span className={featureCardStyles.uploadHighlight}>Click to upload</span> or drag and drop
              </p>
              <p className={featureCardStyles.uploadNote}>
                {activeTab === 'transcription'
                  ? 'MP3, MP4, WAV (max. 500MB)'
                  : 'PDF, HTML, Screenshots (max. 50MB)'}
              </p>
            </div>

            <div className={featureCardStyles.security}>
              <div className={featureCardStyles.securityIconWrap}>
                <Shield className={featureCardStyles.securityIcon} />
              </div>
              <div>
                <p className={featureCardStyles.securityTitle}>End-to-End Security</p>
                <p className={featureCardStyles.securityBody}>
                  All {activeTab === 'transcription' ? 'transcriptions' : 'certifications'} are
                  transmitted over TLS and cryptographically notarized using blockchain-backed
                  timestamping for tamper-proof verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
