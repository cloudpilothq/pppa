'use client';

import { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

export default function ShareButton({ title, summary }: { title: string; summary: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';

    // Use native Web Share API if available (mobile / modern browsers)
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, text: summary, url });
        return;
      } catch {
        // User cancelled or API not fully supported — fall through to clipboard
      }
    }

    // Fallback: copy URL to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Last resort: prompt
      window.prompt('Copy this link:', url);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full border border-slate-200 transition-all"
      title={copied ? 'Link copied!' : 'Share Article'}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-emerald-600" />
          <span className="text-emerald-600">Copied!</span>
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </>
      )}
    </button>
  );
}
