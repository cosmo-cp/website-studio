import Link from '@docusaurus/Link';
import { Reveal, TextArrow } from './marketing-ui';

export function PricingSection() {
    return (
        <section id="pricing" className="pricing-section" aria-labelledby="pricing-title">
            <Reveal className="section-heading">
                <h2 id="pricing-title">
                    Start free.
                    <br />
                    Stay in control.
                </h2>
                <p>
                    Bring your own keys, not another AI subscription. Pick the workspace that fits
                    how you work.
                </p>
            </Reveal>
            <Reveal className="home-pricing">
                <div className="price-intro">
                    <h3>A little clarity.</h3>
                    <p>
                        Cosmo is your workspace. Model usage is billed separately by your cloud
                        provider. Local models run on your hardware.
                    </p>
                </div>
                <div className="price-summary">
                    <h3>Community</h3>
                    <p className="summary-price">
                        Free<span>forever</span>
                    </p>
                    <p>
                        Community is the home for Cosmo’s complete AI workspace: models from
                        multiple providers, local AI, MCP tools, ACP agents, personas, commands and much more
                    </p>
                    <Link
                        to="https://github.com/cosmo-cp/cosmo-studio/releases/tag/v1.1.4"
                        className="studio-button studio-button--ink"
                    >
                        Download Community <TextArrow />
                    </Link>
                </div>
                <div className="price-summary price-summary--pro">
                    <h3>Professional</h3>
                    <p className="summary-price">Coming soon</p>
                </div>
            </Reveal>
        </section>
    );
}
