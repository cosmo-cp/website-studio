import { useState, type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { ArrowDownRight, Check, Minus } from 'lucide-react';
import {
    COMMUNITY_FEATURES,
    PROFESSIONAL_FEATURES,
    PLAN_PROVIDER_COUNT,
    PLAN_PROVIDERS,
} from '../constants/plans';
import { DownloadButton, Reveal, TextArrow } from '../components/marketing-ui';
import { FaqSection } from '../components/faq-section';
import { CTASection } from '../components/cta-section';

export default function PlansPage(): ReactNode {
    const [billing, setBilling] = useState<'annual' | 'monthly'>('annual');
    return (
        <Layout
            title="Desktop AI Plans and Features"
            description="Compare Cosmo Studio Community and Professional plans, included AI features, and download options for macOS, Windows, and Linux."
        >
            <main className="marketing-page plans-page">
                <header className="plans-intro">
                    <Reveal>
                        <h1>
                            A plan for
                            <br />
                            your workflow.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <p>
                            A free foundation for everyday thinking. More possibilities when you
                            need them. Always your keys, always your workspace.
                        </p>
                        <a href="#comparison" className="studio-button studio-button--ink">
                            See what’s included <ArrowDownRight size={19} />
                        </a>
                    </Reveal>
                </header>
                <section className="plans-board" aria-label="Choose a Cosmo Studio plan">
                    <Reveal className="plan-tile">
                        <div className="plan-name">
                            <h2>Community</h2>
                            <span>The complete AI workspace.</span>
                        </div>
                        <div className="plan-price">
                            Free<span>Forever. Not a trial.</span>
                        </div>
                        <p>
                            All workspace capabilities belong in Community, including models,
                            agents, tools, projects, and automation. Some capabilities are still in
                            development.
                        </p>
                        <ul className="plan-highlights">
                            {[
                                `${PLAN_PROVIDER_COUNT} model providers`,
                                'Bring your own API keys',
                                'Local models with Ollama & LM Studio',
                                'MCP tools & registry, ACP agents',
                                'Projects, RAG, guardrails, chat & personas',
                                'Workflow automation, usage insights & shortcuts',
                                'Image, audio & video generation',
                            ].map((feature) => (
                                <li key={feature}>
                                    <Check size={17} aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <DownloadButton compact />
                        <p className="plan-platforms">macOS, Windows &amp; Linux</p>
                    </Reveal>
                    <Reveal className="plan-tile plan-tile--pro" delay={0.08}>
                        <div className="plan-name">
                            <h2>Professional</h2>
                            <span>For clearer AI costs.</span>
                        </div>
                        <div className="plan-price">
                            Free<span>Introductory offer</span>
                        </div>
                        <div className="billing-row">
                            <p>
                                Regular price{' '}
                                <s>{billing === 'annual' ? '$15 / year' : '$2 / month'}</s>
                            </p>
                            <div
                                className="billing-switch"
                                role="group"
                                aria-label="Reference pricing period"
                            >
                                <button
                                    aria-pressed={billing === 'annual'}
                                    onClick={() => setBilling('annual')}
                                >
                                    Yearly
                                </button>
                                <button
                                    aria-pressed={billing === 'monthly'}
                                    onClick={() => setBilling('monthly')}
                                >
                                    Monthly
                                </button>
                            </div>
                        </div>
                        <p>
                            Everything in Community, with Cost Intelligence in development as its
                            defining addition.
                        </p>
                        <ul className="plan-highlights">
                            {[
                                'Cost visibility across models, agents & tasks',
                                'Cost-effective model and agent recommendations',
                                'Spend optimization & agent loop safeguards',
                                'Switch models or agents with workflow continuity',
                            ].map((feature) => (
                                <li key={feature}>
                                    <Check size={17} aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <DownloadButton compact />
                        <p className="plan-platforms">Same app. More possibilities.</p>
                    </Reveal>
                    <Reveal className="plan-fine-print">
                        <p>
                            <strong>A note on model costs.</strong> Cosmo plans don’t include cloud
                            API credits. Providers bill usage separately; Cost Intelligence will
                            help you understand and manage that usage. Local models use your own
                            hardware.
                        </p>
                        <Link to="/docs/faq" className="studio-text-link">
                            How API billing works <TextArrow />
                        </Link>
                    </Reveal>
                </section>
                <section
                    id="comparison"
                    className="comparison-section"
                    aria-labelledby="comparison-title"
                >
                    <Reveal className="section-heading">
                        <h2 id="comparison-title">The full picture.</h2>
                        <p>Find the tools that fit the way you work.</p>
                    </Reveal>
                    <Reveal>
                        <div
                            className="comparison-scroll"
                            tabIndex={0}
                            role="region"
                            aria-label="Plan feature comparison"
                        >
                            <table className="plan-comparison">
                                <caption className="sr-only">
                                    Features included in Community and Professional
                                </caption>
                                <thead>
                                    <tr>
                                        <th scope="col">Your workspace</th>
                                        <th scope="col">Community</th>
                                        <th scope="col">Professional</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Model providers</th>
                                        <td>
                                            <a href="#provider-directory">
                                                {PLAN_PROVIDER_COUNT} providers
                                            </a>
                                        </td>
                                        <td>{PLAN_PROVIDER_COUNT} providers</td>
                                    </tr>
                                    {COMMUNITY_FEATURES.map((feature) => (
                                        <tr key={feature}>
                                            <th scope="row">{feature}</th>
                                            <td>
                                                <Included />
                                            </td>
                                            <td>
                                                <Included />
                                            </td>
                                        </tr>
                                    ))}
                                    {PROFESSIONAL_FEATURES.map((feature) => (
                                        <tr key={feature}>
                                            <th scope="row">{feature}</th>
                                            <td>
                                                <Minus size={18} aria-label="Not included" />
                                            </td>
                                            <td>
                                                <Included />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Reveal>
                </section>
                <section
                    id="provider-directory"
                    className="provider-directory"
                    aria-labelledby="directory-title"
                >
                    <Reveal className="directory-intro">
                        <h2 id="directory-title">Find your provider.</h2>
                        <p>
                            The provider ecosystem behind your workspace. Available models and
                            capabilities depend on the provider and your configuration.
                        </p>
                        <Link to="/docs/features" className="studio-text-link">
                            Read the provider guide <TextArrow />
                        </Link>
                    </Reveal>
                    <Reveal className="directory-lists" delay={0.08}>
                        {Object.entries(PLAN_PROVIDERS).map(([group, providers]) => (
                            <details key={group}>
                                <summary>
                                    {group === 'builtIn'
                                        ? 'Built-in providers'
                                        : 'Community providers'}
                                    <span>
                                        {providers.length} <PlusIndicator />
                                    </span>
                                </summary>
                                <ul>
                                    {providers.map((provider) => (
                                        <li key={provider}>{provider}</li>
                                    ))}
                                </ul>
                            </details>
                        ))}
                    </Reveal>
                </section>
                <FaqSection />
                <CTASection />
            </main>
        </Layout>
    );
}

function Included() {
    return (
        <span className="included-value">
            <Check size={17} aria-hidden="true" /> <span>Included</span>
        </span>
    );
}

function PlusIndicator() {
    return (
        <span aria-hidden="true" className="directory-plus">
            +
        </span>
    );
}
