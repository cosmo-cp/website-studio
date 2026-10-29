import { Reveal } from './marketing-ui';

const capabilities = [
    {
        number: '01',
        title: 'Track cost by task.',
        description: 'See what it costs to get a piece of work done across models and agents.',
    },
    {
        number: '02',
        title: 'Catch wasted spend.',
        description:
            'Flag retries, redundant context and agent loops that waste resources without progress.',
    },
    {
        number: '03',
        title: 'Choose the right model.',
        description: 'Get recommendations based on both cost and performance for the task at hand.',
    },
    {
        number: '04',
        title: 'Get more done for less.',
        description: 'Help people get more work done with AI while spending less.',
    },
];

export function CostIntelligenceSection() {
    return (
        <section className="cost-intelligence-section" aria-labelledby="cost-intelligence-title">
            <Reveal className="cost-intelligence-intro">
                <p className="cost-intelligence-label">
                    <span aria-hidden="true" /> Cost Intelligence in development
                </p>
                <h2 id="cost-intelligence-title">
                    The real cost
                    <br />
                    is getting work done.
                </h2>
                <p className="cost-intelligence-description">
                    Developers can see what a model charges, but not what it costs to get work done.
                    The cheapest model may need multiple attempts, or an agent can get stuck in a
                    loop and consume resources without making progress.
                </p>
            </Reveal>
            <div className="cost-intelligence-grid">
                {capabilities.map((capability, index) => (
                    <Reveal
                        key={capability.number}
                        className="cost-intelligence-card"
                        delay={index * 0.06}
                    >
                        <span className="cost-intelligence-number">{capability.number}</span>
                        <h3>{capability.title}</h3>
                        <p>{capability.description}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
