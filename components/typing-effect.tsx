'use client';

import { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

export function TypingEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 80,
  delayBetween = 1500,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isTyping) {
      const currentText = texts[index];
      
      if (displayText.length < currentText.length) {
        // Continue typing
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, wait before deleting
        timer = setTimeout(() => {
          setIsTyping(false);
        }, delayBetween);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next text
        setIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timer);
  }, [displayText, delayBetween, deletingSpeed, index, isTyping, texts, typingSpeed]);
  
  return (
    <>
      {displayText}
      <span className="typing-cursor" aria-hidden="true"></span>
    </>
  );
}