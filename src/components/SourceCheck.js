import React from 'react';

const SourceCheck = ({ sourceInfo }) => {
  const getReputationColor = () => {
    switch (sourceInfo.reputation.toLowerCase()) {
      case 'high':
        return 'text-green-600';
      case 'medium':
        return 'text-amber-500';
      case 'low':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Source Reputation Check
      </h3>
      
      <div className="space-y-3">
        <div className="flex items-start">
          <div className="font-medium text-gray-700 w-28">Source:</div>
          <div>{sourceInfo.name}</div>
        </div>
        
        <div className="flex items-start">
          <div className="font-medium text-gray-700 w-28">Reputation:</div>
          <div className={getReputationColor()}>
            {sourceInfo.reputation}
          </div>
        </div>
        
        {sourceInfo.knownBias && (
          <div className="flex items-start">
            <div className="font-medium text-gray-700 w-28">Known Bias:</div>
            <div>{sourceInfo.knownBias}</div>
          </div>
        )}
        
        <div className="pt-2">
          <p className="text-gray-700">{sourceInfo.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default SourceCheck;
