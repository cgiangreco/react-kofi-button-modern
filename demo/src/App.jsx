import './App.css';
import { useState } from 'react';
import KofiButton from 'react-kofi-button-modern';

export default function App() {
  const [color, setColor] = useState('#72a4f2');
  const [label, setLabel] = useState('Support me on Ko-fi');
  const [useSeparator, setUseSeparator] = useState(false);
  const [dismissable, setDismissable] = useState(true);
  const [key, setKey] = useState(0);

  const wrap = {
    maxWidth: 600,
    margin: '60px auto',
    padding: 20,
    fontFamily: 'system-ui, sans-serif',
  };
  const row = { display: 'flex', flexDirection: 'column', gap: 14, marginTop: 24 };

  return (
    <div style={wrap}>
      <h1>react-kofi-button-modern</h1>
      <p>Customizable Ko-fi support button for React.</p>

      <div style={row}>
        <label>
          Color:{' '}
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </label>

        <label>
          Label:{' '}
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            style={{ marginLeft: 8, padding: 4 }}
          />
        </label>

        <label>
          <input
            type="checkbox"
            checked={useSeparator}
            onChange={(e) => setUseSeparator(e.target.checked)}
          />{' '}
          Use separator
        </label>

        <label>
          <input
            type="checkbox"
            checked={dismissable}
            onChange={(e) => setDismissable(e.target.checked)}
          />{' '}
          Can dismiss
        </label>

        <button onClick={() => setKey((k) => k + 1)} style={{ padding: 8, marginTop: 12 }}>
          Re-show button
        </button>
      </div>

      <KofiButton
        key={key}
        kofiId="YOUR_KOFI_ID"
        color={color}
        label={label}
        useSeparator={useSeparator}
        dismissable={dismissable}
      />
    </div>
  );
}
