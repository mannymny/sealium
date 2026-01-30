import { cn } from '@/presentation/ui/utils';

interface RavenLogoProps {
  className?: string;
}

export function RavenLogo({ className = "w-12 h-12" }: RavenLogoProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-black dark:text-white", className)}
    >
      <g
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <polyline points="22 168 78 136 128 112 156 92 182 64 214 60 238 70 202 84 176 78 162 96 150 120 166 142 160 176 126 184 90 176 54 172 22 168" />
        <polyline points="182 64 160 50 140 62 156 92" />
        <polyline points="176 78 206 74 238 70" />
        <polyline points="156 92 134 92 120 112" />
        <polyline points="120 112 94 122 78 136" />
        <polyline points="94 122 108 142 138 150 166 142" />
        <polyline points="78 136 56 150 42 162" />
        <polyline points="56 150 84 156 108 154" />
        <polyline points="108 154 126 184" />
        <polyline points="150 120 170 116 186 104" />
        <polyline points="150 120 140 140 152 160" />
        <polyline points="140 140 118 136 108 154" />
        <polyline points="118 136 96 140 84 156" />
        <polyline points="84 176 70 194 96 192" />
        <polyline points="70 194 66 214 94 208 104 190" />
        <polyline points="158 176 176 188 198 184" />
        <polyline points="176 188 184 206 200 206" />
        <polyline points="126 184 134 206 122 222 114 214" />
        <polyline points="40 162 18 176 50 176" />
        <polyline points="90 176 66 214" />
        <polyline points="122 222 130 236 140 224" />
        <line x1="124" y1="132" x2="150" y2="128" />
        <line x1="130" y1="144" x2="156" y2="144" />
        <line x1="110" y1="128" x2="98" y2="140" />
        <line x1="140" y1="116" x2="132" y2="102" />
        <line x1="164" y1="104" x2="182" y2="98" />
        <line x1="146" y1="88" x2="156" y2="74" />
        <line x1="122" y1="112" x2="138" y2="120" />
        <line x1="88" y1="148" x2="104" y2="144" />
        <line x1="82" y1="136" x2="96" y2="128" />
        <line x1="62" y1="168" x2="82" y2="164" />
        <line x1="90" y1="188" x2="106" y2="176" />
        <line x1="166" y1="142" x2="186" y2="136" />
        <line x1="156" y1="160" x2="176" y2="164" />
        <line x1="126" y1="184" x2="156" y2="176" />
        <line x1="150" y1="96" x2="168" y2="92" />
        <line x1="168" y1="92" x2="186" y2="104" />
        <line x1="98" y1="140" x2="118" y2="136" />
        <line x1="138" y1="150" x2="128" y2="166" />
        <line x1="128" y1="166" x2="152" y2="160" />
        <line x1="106" y1="190" x2="126" y2="184" />
        <line x1="176" y1="188" x2="160" y2="176" />
        <line x1="56" y1="150" x2="72" y2="140" />
        <line x1="72" y1="140" x2="90" y2="144" />
        <line x1="90" y1="144" x2="108" y2="136" />
        <line x1="108" y1="136" x2="124" y2="132" />
        <line x1="124" y1="132" x2="140" y2="124" />
        <line x1="140" y1="124" x2="154" y2="116" />
        <line x1="154" y1="116" x2="168" y2="104" />
        <line x1="132" y1="102" x2="146" y2="88" />
        <line x1="146" y1="88" x2="160" y2="76" />
        <line x1="160" y1="76" x2="176" y2="78" />
      </g>
      <g
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <circle cx="118" cy="132" r="4" />
        <circle cx="132" cy="128" r="4" />
        <circle cx="126" cy="142" r="4" />
        <line x1="118" y1="132" x2="132" y2="128" />
        <line x1="132" y1="128" x2="126" y2="142" />
        <line x1="126" y1="142" x2="118" y2="132" />
      </g>
    </svg>
  );
}
