import { CSSProperties, useState } from "react";

const fontLink =
    "https://fonts.googleapis.com/css2?family=DM+Sans:wght@600&display=swap";

const styles: Record<string, CSSProperties> = {
    container: {
        position: "fixed",
        bottom: "28px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "stretch",
        borderRadius: "6px",
        overflow: "hidden",
        zIndex: 90,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        animation: "kofi-fade-up 0.4s ease-out both",
        transition: "filter 0.2s",
    },
    button: {
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        color: "white",
        fontFamily: "'DM Sans', Helvetica, sans-serif",
        fontWeight: 600,
        fontSize: "14px",
        letterSpacing: "-0.15px",
        padding: "10px 16px",
        textDecoration: "none",
        lineHeight: 1,
    },
    icon: {
        width: "18px",
        height: "auto",
        filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))",
        animation: "kofi-wobble 4s ease-in-out infinite",
        transformOrigin: "center",
    },
    close: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        border: "none",
        color: "rgba(255, 255, 255, 0.5)",
        cursor: "pointer",
        fontSize: "0.9rem",
        lineHeight: 1,
        transition: "color 0.2s, background 0.2s",
    },
};

const css = `
  @keyframes kofi-fade-up {
    from { opacity: 0; transform: translate(-50%, 18px); }
    to   { opacity: 1; transform: translate(-50%, 0); }
  }
  @keyframes kofi-wobble {
    0%, 60% { transform: scale(1) rotate(0deg); }
    66%     { transform: scale(1.1) rotate(0deg); }
    69%     { transform: scale(1.1) rotate(-15deg); }
    72%     { transform: scale(1.1) rotate(15deg); }
    75%     { transform: scale(1.1) rotate(-15deg); }
    78%     { transform: scale(1.1) rotate(15deg); }
    85%     { transform: scale(1) rotate(0deg); }
  }
  .kofi-container:hover { filter: brightness(1.2); }
  .kofi-close:hover { color: white !important; }
  .kofi-close--separated:hover { background: rgba(255,255,255,0.08); }
`;

interface KofiButtonProps {
    kofiId: string;
    color?: string;
    label?: string;
    dismissable?: boolean;
    useSeparator?: boolean;
}

export default function KofiButton({
    kofiId,
    color = "#72a4f2",
    label = "Support me on Ko-fi",
    dismissable = true,
    useSeparator = false,
}: KofiButtonProps) {
    const [visible, setVisible] = useState(true);
    if (!visible) return null;

    return (
        <>
            <link rel="stylesheet" href={fontLink} />
            <style>{css}</style>
            <div
                className="kofi-container"
                style={{ ...styles.container, background: color }}
            >
                <a
                    href={`https://ko-fi.com/${kofiId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.button}
                >
                    <img
                        src="https://storage.ko-fi.com/cdn/cup-border.png"
                        alt=""
                        style={styles.icon}
                    />
                    <span>{label}</span>
                </a>
                {dismissable && (
                    <button
                        className={`kofi-close${useSeparator ? " kofi-close--separated" : ""}`}
                        onClick={() => setVisible(false)}
                        aria-label="Dismiss"
                        style={{
                            ...styles.close,
                            padding: useSeparator
                                ? "10px 14px"
                                : "10px 16px 10px 0",
                            borderLeft: useSeparator
                                ? "1px solid rgba(255, 255, 255, 0.15)"
                                : "none",
                        }}
                    >
                        ✕
                    </button>
                )}
            </div>
        </>
    );
}
