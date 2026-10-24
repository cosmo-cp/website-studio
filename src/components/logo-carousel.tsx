import { SUPPORTED_PROVIDERS } from '../constants/constants';
import { Reveal } from './marketing-ui';

export function LogoCarousel() {
    return (
        <section className="providers-section" aria-labelledby="providers-title">
            <Reveal className="providers-heading">
                <h2 id="providers-title">Your models, together.</h2>
                <p>Connect the providers you use. Keep the workspace you love.</p>
            </Reveal>
            <div className="provider-marquee">
                <div className="provider-track">
                    {[0, 1].map((copy) => (
                        <div
                            className="provider-run"
                            key={copy}
                            aria-hidden={copy === 1 ? true : undefined}
                        >
                            {SUPPORTED_PROVIDERS.map((provider) => (
                                <div className="provider-wordmark" key={provider.id}>
                                    <img
                                        src={provider.logo}
                                        width="28"
                                        height="28"
                                        loading="lazy"
                                        alt=""
                                    />
                                    <span>{provider.name}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
