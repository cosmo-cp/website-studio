import { useState } from 'react';
import { cn } from '../../lib/utils';
import {
    ArrowUp,
    Check,
    ChevronDown,
    MessageSquare,
    Paperclip,
    Plus,
    Settings2,
    PanelLeft,
    Search,
    ShieldCheck,
} from 'lucide-react';

const examples = {
    cloud: {
        model: 'Claude',
        logo: '/img/anthropic.svg',
        prompt: 'Help me turn a big idea into a clear plan.',
        intro: 'Let’s make it something you can act on.',
        steps: [
            ['Find the core', 'Write down the problem and who you want to solve it for.'],
            ['Start small', 'Choose one useful thing you can build and test this week.'],
            ['Make it real', 'Share it early. Let what you learn shape the next version.'],
        ],
        note: 'Cloud model · Requests go to your selected provider',
    },
    local: {
        model: 'Llama · Ollama',
        logo: '/img/ollama.svg',
        prompt: 'How can I work with AI without sending prompts to the cloud?',
        intro: 'Keep the conversation on your own machine.',
        steps: [
            ['Run a local model', 'Install Ollama or LM Studio and download a model.'],
            ['Connect to Cosmo', 'Add your local endpoint in provider settings.'],
            ['Keep working locally', 'Select your model and chat using your own hardware.'],
        ],
        note: 'Local model · Prompts stay on your machine',
    },
};

export function HeroChatPreview() {
    const [mode, setMode] = useState<keyof typeof examples>('cloud');
    const example = examples[mode];
    return (
        <div className="chat-preview" data-ui aria-label="Interactive Cosmo Studio preview">
            <div className="preview-topbar">
                <span className="preview-brand">
                    <img src="/img/logo.svg" width="22" height="22" alt="" />
                    Cosmo Studio
                </span>
                <span className="preview-caption">Interactive preview</span>
                <PanelLeft size={17} aria-hidden="true" />
            </div>
            <div className="preview-workspace">
                <aside className="preview-sidebar" aria-label="Example chat history">
                    <div className="preview-new-chat">
                        <Plus size={16} /> New conversation
                    </div>
                    <div className="preview-search">
                        <Search size={15} /> Search your chats
                    </div>
                    <span className="preview-history-label">Your workspace</span>
                    {['From idea to action', 'A second pair of eyes', 'Notes worth keeping'].map(
                        (title, i) => (
                            <div
                                className={cn('preview-history', i === 0 && 'is-current')}
                                key={title}
                            >
                                <MessageSquare size={14} /> <span>{title}</span>
                            </div>
                        )
                    )}
                    <div className="preview-sidebar-bottom">
                        <ShieldCheck size={16} /> Stored on this device
                    </div>
                </aside>
                <div className="preview-conversation">
                    <div className="preview-model-bar">
                        <span>
                            <img src={example.logo} width="19" height="19" alt="" /> {example.model}{' '}
                            <ChevronDown size={13} />
                        </span>
                        <div
                            className="preview-switch"
                            role="group"
                            aria-label="Preview model location"
                        >
                            <button
                                type="button"
                                aria-pressed={mode === 'cloud'}
                                onClick={() => setMode('cloud')}
                            >
                                Cloud
                            </button>
                            <button
                                type="button"
                                aria-pressed={mode === 'local'}
                                onClick={() => setMode('local')}
                            >
                                Local
                            </button>
                        </div>
                    </div>
                    <div className="preview-messages" aria-live="polite" aria-atomic="true">
                        <div className="preview-prompt">{example.prompt}</div>
                        <div className="preview-answer" key={mode}>
                            <img src={example.logo} width="24" height="24" alt="" />
                            <div>
                                <p>{example.intro}</p>
                                <ol>
                                    {example.steps.map(([title, text]) => (
                                        <li key={title}>
                                            <strong>{title}</strong>
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ol>
                                <span className="preview-response-note">
                                    <Check size={13} /> Example response
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="preview-composer" aria-label="Illustrative message composer">
                        <span>Where do you want to take this?</span>
                        <div>
                            <span>
                                <Paperclip size={16} /> <Settings2 size={16} /> Tools
                            </span>
                            <span className="preview-send">
                                <ArrowUp size={17} />
                            </span>
                        </div>
                    </div>
                    <p className="preview-privacy">{example.note}</p>
                </div>
            </div>
        </div>
    );
}
