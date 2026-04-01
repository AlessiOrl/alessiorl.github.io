import { useEffect, useState } from 'react';

export function useTypewriter(lines: string[], typingDelay = 85, holdDelay = 1400) {
  const [lineIndex, setLineIndex] = useState(0);
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    if (lines.length === 0) {
      return undefined;
    }

    const activeLine = lines[lineIndex];

    if (visibleText.length < activeLine.length) {
      const timeout = window.setTimeout(() => {
        setVisibleText(activeLine.slice(0, visibleText.length + 1));
      }, typingDelay);

      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setVisibleText('');
      setLineIndex((currentIndex) => (currentIndex + 1) % lines.length);
    }, holdDelay);

    return () => window.clearTimeout(timeout);
  }, [holdDelay, lineIndex, lines, typingDelay, visibleText]);

  return visibleText;
}