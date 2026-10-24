import Link from '@docusaurus/Link';
import { ArrowUpRight } from 'lucide-react';
import { DownloadButton, Reveal } from './marketing-ui';

export function CTASection() {
    return (
        <section id="download" className="closing-section" aria-labelledby="download-title">
            <div className="closing-wordmark" aria-hidden="true">
                <span>Cosmo</span>
                <span>Studio</span>
            </div>
            <Reveal className="closing-main">
                <div>
                    <h2 id="download-title">
                        Make room for
                        <br />
                        better work.
                    </h2>
                    <p>
                        One desktop app. Your choice of AI.
                        <br />A workspace that stays yours.
                    </p>
                </div>
                <DownloadButton />
            </Reveal>
            <Reveal className="closing-aside" delay={0.08}>
                <img src="/img/logo.svg" width="96" height="96" alt="" />
                <Link to="/docs/getting-started">
                    A good place to start.
                    <ArrowUpRight size={22} aria-hidden="true" />
                </Link>
            </Reveal>
        </section>
    );
}
