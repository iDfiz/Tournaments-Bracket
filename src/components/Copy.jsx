import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-okaidia.css";

export function CodeBlock({ code, title, language = "javascript" }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

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

      <div className="copy-line" />

      <pre className={`language-${language}`}>
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
