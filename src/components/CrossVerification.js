import React from 'react';

const CrossVerification = ({ verifiedSources }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Cross-Verification with Trusted Sources
      </h3>
      
      {verifiedSources && verifiedSources.length > 0 ? (
        <div>
          <p className="text-gray-700 mb-4">
            Here's what verified and reputable sources are saying about this topic:
          </p>
          
          <div className="space-y-4">
            {verifiedSources.map((source, index) => (
              <div key={index} className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 transition-colors">
                <h4 className="font-medium text-gray-800">{source.title}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Source: {source.sourceName} | {new Date(source.date).toLocaleDateString()}
                </p>
                <p className="mt-2 text-gray-700">{source.snippet}</p>
                <a 
                  href={source.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-primary font-medium hover:underline"
                >
                  Read full article →
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-700">
          We couldn't find reputable sources covering this exact topic. This might be because the content contains very recent events, or it may contain claims that are not widely reported by mainstream sources.
        </p>
      )}
      
      <div className="mt-6 p-4 bg-gray-50 rounded-md">
        <h4 className="font-medium text-gray-800">Why this matters</h4>
        <p className="mt-2 text-gray-700">
          Cross-verification is a critical step in evaluating information. When multiple reputable sources report similar facts, it increases the likelihood that the information is accurate. Significant discrepancies between the original content and trusted sources may indicate misinformation.
        </p>
      </div>
    </div>
  );
};

export default CrossVerification;
