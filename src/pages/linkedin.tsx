import type { ReactNode } from 'react';
import { SocialRedirect } from '@site/src/components/social-redirect';

export default function LinkedInPage(): ReactNode {
    return (
        <SocialRedirect
            fallbackUrl="https://www.linkedin.com/company/cosmo-studio-in"
            label="LinkedIn"
            platform="linkedin"
        />
    );
}
