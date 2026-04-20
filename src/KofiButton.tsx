import { useState } from 'react';
import './KofiButton.css';

interface KofiButtonProps {
  kofiId: string;
  color?: string;
  label?: string;
  useSeparator?: boolean;
  dismissable?: boolean;
}

export default function KofiButton({
  kofiId,
  color = '#72a4f2',
  label = 'Support me on Ko-fi',
  useSeparator = false,
  dismissable = true,
}: KofiButtonProps) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="kofi-container" style={{ background: color }}>
      <a
        href={`https://ko-fi.com/${kofiId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="kofi-link"
      >
        <img
          src="https://storage.ko-fi.com/cdn/cup-border.png"
          alt=""
          className="kofi-icon"
        />
        <span>{label}</span>
      </a>
      {dismissable && (
        <button
          className={`kofi-close${useSeparator ? ' kofi-close--separated' : ''}`}
          onClick={() => setVisible(false)}
          aria-label="Dismiss"
        >
          ✕
        </button>
      )}
    </div>
  );
}