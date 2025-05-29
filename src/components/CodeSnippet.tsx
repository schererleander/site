import React, { useState, useMemo, useCallback } from 'react';

interface CodeSnippetProps {
  code: string;
  initialLines?: number;
}

const ExpandIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
  </svg>
);

const CollapseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path d="M19 13H5v-2h14v2z" fill="currentColor" />
  </svg>
);

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill="currentColor" />
  </svg>
);

export const CodeSnippet: React.FC<CodeSnippetProps> = React.memo(
  ({ code, initialLines = 5 }) => {
    const [expanded, setExpanded] = useState(false);
    const [copied, setCopied] = useState(false);

    const lines = useMemo(() => code.split('\n'), [code]);
    const shouldTruncate = useMemo(
      () => lines.length > initialLines,
      [lines.length, initialLines]
    );
    const displayedLines = useMemo(
      () => (expanded || !shouldTruncate ? lines : lines.slice(0, initialLines)),
      [expanded, shouldTruncate, lines, initialLines]
    );

    const toggleExpanded = useCallback(
      () => setExpanded(prev => !prev),
      []
    );

    const handleCopy = useCallback(() => {
      navigator.clipboard.writeText(code)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {});
    }, [code]);

    return (
      <div className="relative rounded-lg p-4 my-2 font-mono bg-gray-200 dark:bg-white/5">
        {shouldTruncate && (
          <div className="absolute top-2 right-2 flex space-x-2">
            <button
              onClick={handleCopy}
              aria-label={copied ? 'Copied!' : 'Copy code'}
              className="p-0 cursor-pointer text-gray-600 hover:text-gray-800"
            >
              <CopyIcon />
            </button>
            <button
              onClick={toggleExpanded}
              aria-label={expanded ? 'Collapse code' : 'Expand code'}
              className="p-0 cursor-pointer text-gray-600 hover:text-gray-800"
            >
              {expanded ? <CollapseIcon /> : <ExpandIcon />}
            </button>
          </div>
        )}

        <pre className="overflow-x-auto m-0 text-sm">
          {displayedLines.map((line, idx) => (
            <div key={idx} className="flex">
              <span className="text-gray-500 w-8 text-right pr-2">
                {idx + 1}
              </span>
              <code className="flex-1 whitespace-pre-wrap">{line}</code>
            </div>
          ))}
          {shouldTruncate && !expanded && (
            <div className="text-center text-gray-400">...</div>
          )}
        </pre>
      </div>
    );
  }
);

export default CodeSnippet;