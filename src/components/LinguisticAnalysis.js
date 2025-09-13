import React from 'react';

const LinguisticAnalysis = ({ analysis, content }) => {
  const getHighlightedContent = () => {
    if (!analysis.highlights || analysis.highlights.length === 0) {
      return <p>{content}</p>;
    }

    let lastIndex = 0;
    const elements = [];
    
    // Sort highlights by start index to process them in order
    const sortedHighlights = [...analysis.highlights].sort((a, b) => a.start - b.start);
    
    sortedHighlights.forEach((highlight, idx) => {
      // Add text before the highlight
      if (highlight.start > lastIndex) {
        elements.push(
          <span key={`text-${idx}`}>
            {content.substring(lastIndex, highlight.start)}
          </span>
        );
      }
      
      // Add the highlighted text
      elements.push(
        <mark 
          key={`highlight-${idx}`} 
          className={`highlighted-text ${highlight.type}`}
          title={highlight.explanation}
        >
          {content.substring(highlight.start, highlight.end)}
        </mark>
      );
      
      lastIndex = highlight.end;
    });
    
    // Add any remaining text after the last highlight
    if (lastIndex < content.length) {
      elements.push(
        <span key="text-end">
          {content.substring(lastIndex)}
        </span>
      );
    }
    
    return <p className="whitespace-pre-line">{elements}</p>;
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Linguistic Red Flag Analysis
      </h3>
      
      {analysis.flags.length > 0 ? (
        <>
          <div className="mb-4">
            <p className="text-gray-700">
              We've identified {analysis.flags.length} linguistic red flags in this content:
            </p>
            
            <ul className="mt-3 space-y-2">
              {analysis.flags.map((flag, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-600 mr-2 flex-shrink-0">
                    !
                  </span>
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <h4 className="font-medium text-gray-800 mb-2">Highlighted Content:</h4>
            <div className="text-gray-700">{getHighlightedContent()}</div>
            
            <div className="mt-4 text-sm">
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-red-200 mr-1"></span>
                  <span>Emotional Language</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-amber-200 mr-1"></span>
                  <span>Unsubstantiated Claim</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-blue-200 mr-1"></span>
                  <span>Us-vs-Them Framing</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-green-200 mr-1"></span>
                  <span>Urgency & Scarcity</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-gray-700">
          No significant linguistic red flags were detected in this content. The language appears to be neutral and informative rather than manipulative or sensationalist.
        </p>
      )}
    </div>
  );
};

export default LinguisticAnalysis;
