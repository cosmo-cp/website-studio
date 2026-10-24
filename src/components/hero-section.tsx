import Link from '@docusaurus/Link';
import { ArrowDownRight, HardDrive } from 'lucide-react';
import { DownloadButton, Reveal, TextArrow } from './marketing-ui';
import { HeroChatPreview } from './hero/hero-chat-mockup';

export function HeroSection() {
    return (
        <section className="studio-hero" aria-labelledby="hero-title">
            <div className="hero-intro">
                <Reveal>
                    <h1 id="hero-title">
                        Every model.
                        <br />
                        Your workspace.
                    </h1>
                </Reveal>
                <Reveal className="hero-description" delay={0.08}>
                    <p>
                        Cosmo Studio brings cloud AI and local models into one native desktop app.
                        Your keys. Your conversations. Your call.
                    </p>
                    <DownloadButton />
                    <Link className="studio-text-link" to="/docs/getting-started">
                        Take a look around <TextArrow />
                    </Link>
                </Reveal>
            </div>
            <div className="hero-board">
                <Reveal className="hero-product" delay={0.16}>
                    <HeroChatPreview />
                </Reveal>
                <div className="hero-rail">
                    <Reveal className="ownership-tile" delay={0.24}>
                        <HardDrive size={27} strokeWidth={1.5} aria-hidden="true" />
                        <div>
                            <h2>
                                At home on
                                <br />
                                your desktop.
                            </h2>
                            <p>Chat history stays on your device. Not on our servers.</p>
                        </div>
                        <Link to="/docs/faq" className="studio-text-link">
                            How privacy works <TextArrow />
                        </Link>
                    </Reveal>
                    <Reveal className="explore-tile" delay={0.32}>
                        <Link to="#features">
                            <span>Find your flow.</span>
                            <ArrowDownRight size={35} strokeWidth={1.5} aria-hidden="true" />
                        </Link>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
