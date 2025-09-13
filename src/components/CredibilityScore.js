import React from 'react';

const CredibilityScore = ({ score }) => {
  const getColorClass = () => {
    if (score >= 7) return 'text-green-600';
    if (score >= 4) return 'text-amber-500';
    return 'text-red-600';
  };

  const getDescription = () => {
    if (score >= 7) return 'Likely Reliable';
    if (score >= 4) return 'Caution Advised';
    return 'Likely Unreliable';
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Overall Credibility Score
      </h3>
      
      <div className={`text-5xl font-bold ${getColorClass()}`}>
        {score}/10
      </div>
      
      <div className={`mt-2 font-medium ${getColorClass()}`}>
        {getDescription()}
      </div>
      
      <p className="mt-4 text-gray-600 text-center max-w-xl">
        This score is based on our analysis of the content's language patterns, source reputation, and cross-verification with trusted sources.
      </p>
    </div>
  );
};

export default CredibilityScore;
