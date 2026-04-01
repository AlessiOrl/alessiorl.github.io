import { useEffect, useRef, useState } from 'react';

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export function useEasterEgg() {
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [brandTapCount, setBrandTapCount] = useState(0);
  const hideTimeoutRef = useRef<number | null>(null);

  const activate = () => {
    setEasterEggActive(true);

    if (hideTimeoutRef.current !== null) {
      window.clearTimeout(hideTimeoutRef.current);
    }

    hideTimeoutRef.current = window.setTimeout(() => {
      setEasterEggActive(false);
    }, 5200);
  };

  useEffect(() => {
    let index = 0;

    const onKeyDown = (event: KeyboardEvent) => {
      const normalizedKey = event.key.length === 1 ? event.key.toLowerCase() : event.key;

      if (normalizedKey === KONAMI[index]) {
        index += 1;
      } else {
        index = normalizedKey === KONAMI[0] ? 1 : 0;
      }

      if (index === KONAMI.length) {
        activate();
        index = 0;
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);

      if (hideTimeoutRef.current !== null) {
        window.clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const registerBrandTap = () => {
    setBrandTapCount((count) => {
      const nextCount = count + 1;

      if (nextCount >= 5) {
        activate();
        return 0;
      }

      return nextCount;
    });
  };

  return {
    easterEggActive,
    registerBrandTap,
    dismissEasterEgg: () => {
      setBrandTapCount(0);
      setEasterEggActive(false);
      if (hideTimeoutRef.current !== null) {
        window.clearTimeout(hideTimeoutRef.current);
      }
    },
  };
}