import React from 'react';

const KEYWORDS = [
  'architecture', 'architecte',
  'automatisation', 'automatisent', 'automatiser',
  'ia', 'intelligence artificielle',
  'systèmes', 'système',
  'performance', 'performant', 'performants',
  'fiabilité', 'fiable',
  'scalabilité', 'scalable',
  'productivité',
  'intégration', 'intégrer',
  'transformation', 'transformer', 'transforment'
];

// Regex pour trouver les mots entiers (insensible à la casse)
// On utilise \b pour délimiter les mots, mais ça peut mal marcher avec les accents.
// Comme les mots listés ont peu d'accents à part 'é', on les inclut.
const regexStr = `\\b(${KEYWORDS.join('|')})\\b`;
const regex = new RegExp(regexStr, 'gi');

export default function HighlightedText({ text }: { text: string }) {
  if (!text) return null;

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        const isMatch = KEYWORDS.some(k => k.toLowerCase() === part.toLowerCase());
        if (isMatch) {
          return (
            <span 
              key={i} 
              className="font-semibold text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]"
              style={{ WebkitTextFillColor: '#38bdf8', color: '#38bdf8' }}
            >
              {part}
            </span>
          );
        }
        return part;
      })}
    </>
  );
}
