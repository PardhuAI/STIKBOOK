import { useEffect, useState } from "react";

export function TypingText({
  text,
  active,
}: {
  text: string;
  active: boolean;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!active) {
      setDisplayed("");
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, [text, active]);

  return <p>{displayed}</p>;
}
