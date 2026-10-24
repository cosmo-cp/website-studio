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
                    <Link to="/plans" className="studio-text-link">
                        Compare every feature <TextArrow />
                    </Link>
                </div>
                <div className="price-summary">
                    <h3>Community</h3>
                    <p className="summary-price">
                        Free<span>forever</span>
                    </p>
                    <p>
                        Chat, local models, your own keys, MCP tools, ACP agents, commands, and
                        personas.
                    </p>
                    <Link to="/plans" className="studio-button studio-button--ink">
                        Explore Community <TextArrow />
                    </Link>
                </div>
                <div className="price-summary price-summary--pro">
                    <h3>Professional</h3>
                    <p className="summary-price">
                        Free<span>introductory offer</span>
                    </p>
                    <p>
                        Everything in Community, plus projects, RAG, automation, and more creative
                        tools.
                    </p>
                    <Link to="/plans" className="studio-button studio-button--paper">
                        Explore Professional <TextArrow />
                    </Link>
                </div>
            </Reveal>
        </section>
    );
}
