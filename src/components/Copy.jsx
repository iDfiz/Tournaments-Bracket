import { useState } from "react";

export function CodeBlock({ code, title }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block">
        <div className="copy-top">
            <p>{title}</p>

            <button className="copy-btn" onClick={copyToClipboard}>
                {copied ? "Copied!" : "Copy"}
            </button>
        </div>
        <div className="copy-line"></div>
        <pre>
            <code>{code}</code>
        </pre>
    </div>
  );
}
