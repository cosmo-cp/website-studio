import Link from '@docusaurus/Link';
import { Check, FolderLock, HardDrive, KeyRound } from 'lucide-react';
import { Reveal, TextArrow } from './marketing-ui';

export function AboutSection() {
    return (
        <section className="local-section" aria-labelledby="local-title">
            <Reveal className="local-story">
                <h2 id="local-title">
                    Local by design.
                    <br />
                    Yours by default.
                </h2>
                <p>
                    Cosmo is an open-source, cross-platform workspace that keeps your conversations
                    on your device and lets you choose how you connect to AI.
                </p>
                <Link to="/docs/getting-started" className="studio-text-link">
                    Set up your workspace <TextArrow />
                </Link>
            </Reveal>
            <Reveal className="local-settings" delay={0.08}>
                <div data-ui className="settings-fragment">
                    <div className="fragment-title">
                        <HardDrive size={19} /> Your connection, your choice
                    </div>
                    <div className="connection-row">
                        <img src="/img/ollama.svg" alt="" width="27" height="27" />
                        <div>
                            <strong>Ollama</strong>
                            <span>localhost:11434</span>
                        </div>
                        <span className="connection-status">
                            <Check size={14} /> Local
                        </span>
                    </div>
                    <div className="connection-row">
                        <img src="/img/lmstudio.svg" alt="" width="27" height="27" />
                        <div>
                            <strong>LM Studio</strong>
                            <span>Your local model server</span>
                        </div>
                        <span className="connection-status">
                            <Check size={14} /> Local
                        </span>
                    </div>
                    <div className="connection-row">
                        <KeyRound size={27} />
                        <div>
                            <strong>Your API keys</strong>
                            <span>Connect directly to a cloud provider</span>
                        </div>
                    </div>
                    <p className="storage-note">
                        <FolderLock size={18} /> Chat history lives on this device.
                    </p>
                </div>
            </Reveal>
            <Reveal className="privacy-footnote">
                <p>
                    Local storage isn’t the same as local inference. Cloud prompts go to the
                    provider you choose, under its privacy policy. Use a local model to keep prompts
                    on your machine.
                </p>
                <Link to="/docs/faq" className="studio-text-link">
                    The full privacy picture <TextArrow />
                </Link>
            </Reveal>
        </section>
    );
}
