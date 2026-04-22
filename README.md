# react-kofi-button-modern [![npm version](https://img.shields.io/npm/v/react-kofi-button-modern.svg)](https://www.npmjs.com/package/react-kofi-button-modern) [![License: MIT](https://img.shields.io/badge/License-MIT-%23A30000.svg)](LICENSE)

A clean, customizable Ko-fi support button for React with the new rounded Ko-fi logo. Drop it into any app to let visitors support you on Ko-fi, styled to match Ko-fi's branding out of the box but tweakable to fit your design.

The button includes a dismissible close (X) button by default, which can be disabled.

Image preview:

[![preview](./preview.gif)](https://ko-fi.com/cgiangreco)

**Try it out: 🚀 <a href="https://cgiangreco.github.io/react-kofi-button-modern" target="_blank">Live Demo</a>**

## Installation

```bash
npm install react-kofi-button-modern
```

## Usage

```jsx
import KofiButton from 'react-kofi-button-modern';

export default function App() {
  return (
    <div>
      {/* your app */}
      <KofiButton kofiId="YOUR_KOFI_ID" />
    </div>
  );
}
```

By default, the button renders as a fixed-position floating pill at the bottom of the screen with a wobbly animated Ko-fi cup icon.

## Props

| Prop           | Type      | Default                 | Description                                                                |
| -------------- | --------- | ----------------------- | -------------------------------------------------------------------------- |
| `kofiId`       | `string`  | **required**            | Your Ko-fi ID (from `ko-fi.com/YOUR_ID`)                                   |
| `color`        | `string`  | `"#72a4f2"`             | Background color of the button                                             |
| `label`        | `string`  | `"Support me on Ko-fi"` | Button text                                                                |
| `useSeparator` | `boolean` | `false`                 | If true, shows a visual separator between the button text and close button |
| `dismissible`  | `boolean` | `true`                  | Whether to show the close (X) button and allow dismissing the component    |

## Examples

### Non-dismissible button

```jsx
<KofiButton kofiId="YOUR_KOFI_ID" dismissible={false} />
```

### Custom color and label

```jsx
<KofiButton
  kofiId="YOUR_KOFI_ID"
  color="#ff5e5b"
  label="Buy me a coffee"
/>
```

### With separator

```jsx
<KofiButton kofiId="YOUR_KOFI_ID" useSeparator />
```

## Development

```bash
git clone https://github.com/cgiangreco/react-kofi-button-modern
cd react-kofi-button-modern
npm install
npm run build
```

## License

MIT
