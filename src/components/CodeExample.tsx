import React, { useState } from 'react';

interface CodeExampleProps {
  title: string;
  code: string;
  language?: string;
  explanation?: string;
  output?: string;
}

export default function CodeExample({ 
  title, 
  code, 
  language = 'cpp', 
  explanation,
  output 
}: CodeExampleProps) {
  const [showOutput, setShowOutput] = useState(false);

  return (
    <div className="code-example">
      <div className="code-header">
        <h4>{title}</h4>
        <div className="code-actions">
          {output && (
            <button 
              className="toggle-output"
              onClick={() => setShowOutput(!showOutput)}
            >
              {showOutput ? 'Hide Output' : 'Show Output'}
            </button>
          )}
          <button 
            className="copy-code"
            onClick={() => navigator.clipboard.writeText(code)}
          >
            Copy
          </button>
        </div>
      </div>
      
      <pre className="code-block">
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
      
      {explanation && (
        <div className="code-explanation">
          <p>{explanation}</p>
        </div>
      )}
      
      {output && showOutput && (
        <div className="code-output">
          <h5>Output:</h5>
          <pre>{output}</pre>
        </div>
      )}
    </div>
  );
} 