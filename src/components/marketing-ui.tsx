import { useEffect, useState, type ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { motion, useReducedMotion } from 'framer-motion';
import { Apple, ArrowDown, ArrowUpRight, Monitor, Terminal } from 'lucide-react';
import { cn } from '../lib/utils';

type Platform = 'mac' | 'windows' | 'linux';

export function Reveal({
    children,
    className = '',
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    const reducedMotion = useReducedMotion();
    return (
        <motion.div
            className={className}
            initial={false}
            whileInView={reducedMotion ? undefined : { y: [24, 0], opacity: [0.6, 1] }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    );
}

export function DownloadButton({ compact = false }: { compact?: boolean }) {
    const { siteConfig } = useDocusaurusContext();
    const { downloadLinks, version } = siteConfig.customFields as {
        downloadLinks: Record<Platform, string>;
        version: string;
    };
    const [platform, setPlatform] = useState<Platform>('mac');
    useEffect(() => {
        const agent = navigator.userAgent.toLowerCase();
        if (agent.includes('win')) setPlatform('windows');
        else if (agent.includes('linux')) setPlatform('linux');
    }, []);

    const platforms = {
        mac: { name: 'macOS', Icon: Apple },
        windows: { name: 'Windows', Icon: Monitor },
        linux: { name: 'Linux', Icon: Terminal },
    };
    const { name, Icon } = platforms[platform];

    return (
        <div className={cn('download-control', compact && 'download-control--compact')}>
            <a className="studio-button" href={downloadLinks[platform]}>
                <Icon size={19} aria-hidden="true" />
                Download for {name}
                <ArrowDown size={18} aria-hidden="true" />
            </a>
            <label className="platform-select">
                <span className="sr-only">Download platform</span>
                <select
                    aria-label="Download platform"
                    value={platform}
                    onChange={(event) => {
                        const value = event.target.value;
                        if (value === 'mac' || value === 'windows' || value === 'linux') {
                            setPlatform(value);
                        }
                    }}
                >
                    {Object.entries(platforms).map(([key, option]) => (
                        <option value={key} key={key}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </label>
            {!compact && (
                <p className="download-note">
                    Free to start. No credit card. <span>v{version}</span>
                </p>
            )}
        </div>
    );
}

export function TextArrow() {
    return <ArrowUpRight size={19} aria-hidden="true" />;
}
