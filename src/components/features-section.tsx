import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import { ArrowUpRight, Check, ChevronRight, Plug, Terminal, Wrench } from 'lucide-react';
import { FEATURES_ROADMAP } from '../constants/constants';
import { Reveal, TextArrow } from './marketing-ui';

export function FeaturesSection() {
    return (
        <section className="features-section" aria-labelledby="features">
            <Reveal className="section-heading">
                <Heading as="h2" id="features">
                    Models, agents, and tools. One place.
                </Heading>
                <p>
                    Bring together the AI models, agents, and tools you use for code, research, and
                    everyday work.
                </p>
            </Reveal>
            <div className="feature-board">
                <Reveal className="feature-tile feature-tools">
                    <div className="feature-copy">
                        <h3>Give your AI more context.</h3>
                        <p>
                            Connect MCP servers so your model can work with external tools and live
                            data, not just the words in your prompt.
                        </p>
                    </div>
                    <div className="tools-fragment" data-ui>
                        <div className="fragment-title">
                            <Plug size={17} /> MCP connections
                        </div>
                        <div className="tool-row">
                            <Wrench size={18} />
                            <span>Tools from your servers</span>
                            <Check size={16} />
                        </div>
                        <div className="tool-call">
                            <span>Tool call</span>
                            <strong>Read project context</strong>
                            <p>Bring the right information into the conversation.</p>
                            <span className="tool-result">
                                <Check size={13} /> Context added to chat
                            </span>
                        </div>
                    </div>
                </Reveal>
                <Reveal className="feature-tile feature-agents" delay={0.08}>
                    <div className="agent-fragment" data-ui>
                        <div className="fragment-title">
                            <Terminal size={17} /> Agent workspace
                        </div>
                        <div className="agent-message">
                            <img src="/img/logo.svg" width="28" height="28" alt="" />
                            <div>
                                <strong>A space for your agents.</strong>
                                <p>
                                    Install from the ACP registry.
                                    <br />
                                    Start a dedicated conversation.
                                </p>
                            </div>
                        </div>
                        <div className="agent-protocol">
                            <span>Agent Client Protocol</span>
                            <ArrowUpRight size={16} />
                        </div>
                    </div>
                    <div className="feature-copy">
                        <h3>Meet your local agents.</h3>
                        <p>
                            Install compatible ACP agents and give each one a dedicated workspace.
                            Keep agent conversations right alongside your chats.
                        </p>
                    </div>
                </Reveal>
                <Reveal className="feature-tile feature-commands" delay={0.16}>
                    <div className="feature-copy">
                        <h3>Stay in the flow.</h3>
                        <p>
                            Reach for slash commands without leaving your conversation. See model
                            thinking, track tokens per message, and stop a response whenever you
                            need.
                        </p>
                    </div>
                    <div className="commands-fragment" data-ui>
                        <div className="command-input">
                            <span>/</span> Commands <ChevronRight size={16} />
                        </div>
                        <div className="command-detail">
                            <MessageInsight />
                            <span>
                                Thinking &amp; token insights
                                <strong>Understand each response.</strong>
                            </span>
                        </div>
                        <p>
                            Markdown, code highlighting, and a workspace that gets out of your way.
                        </p>
                    </div>
                </Reveal>
            </div>
            <Reveal className="roadmap-row">
                <div>
                    <h3>Next on the horizon.</h3>
                    <p>In development. Not available yet.</p>
                </div>
                <ul>
                    {FEATURES_ROADMAP.map((feature) => (
                        <li key={feature.title}>{feature.title}</li>
                    ))}
                </ul>
                <Link to="/docs/features" className="studio-text-link">
                    Explore all features <TextArrow />
                </Link>
            </Reveal>
        </section>
    );
}

function MessageInsight() {
    return (
        <span className="insight-mark" aria-hidden="true">
            <span />
            <span />
            <span />
        </span>
    );
}
