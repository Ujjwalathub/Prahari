import React from 'react';
import CredibilityScore from './CredibilityScore';
import LinguisticAnalysis from './LinguisticAnalysis';
import SourceCheck from './SourceCheck';
import CrossVerification from './CrossVerification';

const AnalysisReport = ({ report }) => {
  return (
    <div className="mt-10 bg-white rounded-lg shadow-md p-6 animate-fadeIn">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Prahari Trustworthiness Report
      </h2>
      
      <div className="space-y-8">
        <CredibilityScore score={report.credibilityScore} />
        
        <div className="border-t border-gray-200 pt-6">
          <LinguisticAnalysis analysis={report.linguisticAnalysis} content={report.analyzedContent} />
        </div>
        
        {report.sourceInfo && (
          <div className="border-t border-gray-200 pt-6">
            <SourceCheck sourceInfo={report.sourceInfo} />
          </div>
        )}
        
        <div className="border-t border-gray-200 pt-6">
          <CrossVerification verifiedSources={report.crossVerification} />
        </div>
      </div>
    </div>
  );
};

export default AnalysisReport;
