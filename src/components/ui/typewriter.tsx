import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    shouldStart?: boolean;
    delay?: number;
}

export function Typewriter({
    text,
    shouldStart = false,
    delay = 0,
}: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (shouldStart && !hasStarted) {
            const delayTimer = setTimeout(() => {
                setHasStarted(true);
            }, delay);
            return () => clearTimeout(delayTimer);
        }
    }, [shouldStart, delay, hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 20);
        return () => clearTimeout(timer);
    }, [text, hasStarted]);

    return <p className="mb-2 leading-relaxed">{displayedText}</p>;
}
