import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Pause } from 'lucide-react';

export const VoiceNotePlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const voiceScript =
    "Hello! I am Husnain. A passionate graphic designer with over 5 years of industry experience specializing in the UAE and Middle East market. I transform commercial ideas into visually striking designs—from luxury Dubai real estate campaigns and aesthetic clinic promotions, to full brand identities and retail packaging. Every design must tell a story, and I am here to bring your brand's story to life.";

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleTogglePlay = () => {
    if (typeof window === 'undefined') return;

    if (isPlaying) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
    } else {
      setIsPlaying(true);

      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(voiceScript);
        utterance.rate = 0.98;
        utterance.pitch = 0.95;

        // Pick a natural English voice
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice =
          voices.find(
            (v) =>
              v.lang.startsWith('en') &&
              (v.name.includes('Male') ||
                v.name.includes('David') ||
                v.name.includes('Guy') ||
                v.name.includes('Natural') ||
                v.name.includes('Google'))
          ) ||
          voices.find((v) => v.lang.startsWith('en')) ||
          voices[0];

        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }

        utterance.onend = () => {
          setIsPlaying(false);
        };

        utterance.onerror = () => {
          setIsPlaying(false);
        };

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  return (
    <button
      onClick={handleTogglePlay}
      className={`inline-flex items-center gap-2.5 rounded-xl border px-5 py-3.5 text-sm font-semibold transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
        isPlaying
          ? 'border-[#ff1e42] bg-[#ff1e42]/15 text-[#ff1e42] shadow-lg shadow-[#ff1e42]/20'
          : 'border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30'
      }`}
      title={isPlaying ? 'Pause voice note' : "Listen to Husnain's voice intro"}
    >
      {isPlaying ? (
        <>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff1e42] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff1e42]" />
          </span>
          <Pause className="h-4 w-4 fill-current" />
          <span>Pause Voice Note</span>
        </>
      ) : (
        <>
          <Volume2 className="h-4 w-4 text-[#ff1e42]" />
          <span>Voice Note (About Me)</span>
        </>
      )}
    </button>
  );
};
