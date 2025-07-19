import { useEffect, useState } from 'react';
import "./Typing.css"
function TypingText() {
  const fullText = "Will you be mine forever? You’re the one who makes my world brighter, my heart happier, and my days sweeter. I never imagined someone could mean so much to me... but then I met you. Every moment with you feels like a dream I never want to wake up from. I love you — now, always, and forever. 💌";
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 100); // 100ms per character

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <p>
      {text}
      <span className="typing-cursor">|</span>
    </p>
  );
}


export default TypingText;
