import type { ReactNode } from 'react';
import { SocialRedirect } from '@site/src/components/social-redirect';

export default function XPage(): ReactNode {
    return <SocialRedirect fallbackUrl="https://x.com/cosmocp" label="X" platform="x" />;
}
