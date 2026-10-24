import { useState } from 'react';
import Link from '@docusaurus/Link';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants/constants';
import { Reveal, TextArrow } from './marketing-ui';
import { cn } from '../lib/utils';

export function FaqSection() {
    const [selected, setSelected] = useState(0);
    return (
        <section id="faq" className="faq-section" aria-labelledby="faq-title">
            <Reveal className="section-heading">
                <h2 id="faq-title">Good questions.</h2>
                <Link to="/docs/faq" className="studio-text-link">
                    Read the full FAQ <TextArrow />
                </Link>
            </Reveal>
            <div className="faq-layout">
                <div className="faq-questions">
                    {FAQS.map((faq, index) => (
                        <Reveal key={faq.question} delay={index * 0.06}>
                            <div className={cn('faq-item', selected === index && 'is-selected')}>
                                <button
                                    type="button"
                                    aria-expanded={selected === index}
                                    aria-controls={`faq-answer-${index}`}
                                    id={`faq-question-${index}`}
                                    onClick={() => setSelected(selected === index ? -1 : index)}
                                >
                                    <span>{faq.question}</span>
                                    {selected === index ? <Minus size={18} /> : <Plus size={18} />}
                                </button>
                                <div
                                    id={`faq-answer-${index}`}
                                    role="region"
                                    aria-labelledby={`faq-question-${index}`}
                                    hidden={selected !== index}
                                    className="faq-inline-answer"
                                >
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
                <Reveal className="faq-answer-panel">
                    <div aria-hidden="true">
                        <p key={selected}>
                            {selected >= 0
                                ? FAQS[selected].answer
                                : 'Choose a question. Get a straight answer.'}
                        </p>
                        <span>Less mystery. More control.</span>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
