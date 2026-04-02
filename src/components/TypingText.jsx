import { useEffect, useState } from "react";

export default function TypingText({ words }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const atWordEnd = displayText === currentWord;
    const atWordStart = displayText.length === 0;

    let timeout = 80;

    if (atWordEnd && !isDeleting) {
      timeout = 1300;
    } else if (isDeleting) {
      timeout = 40;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && !atWordEnd) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        return;
      }

      if (!isDeleting && atWordEnd) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && !atWordStart) {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        return;
      }

      setIsDeleting(false);
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, timeout);

    return () => window.clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, words]);

  return (
    <span className="inline-flex min-h-[1.4em] items-center text-moss">
      {displayText}
      <span className="ml-1 inline-block h-7 w-px animate-pulse bg-moss" />
    </span>
  );
}
