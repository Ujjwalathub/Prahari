 import React, { useState } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import AnalysisReport from './components/AnalysisReport';
import { analyzeContent } from './services/analysisService';

function App() {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);

  const handleAnalyze = async (inputType, content) => {
    setLoading(true);
    setError(null);
    
    try {
      const analysisReport = await analyzeContent(inputType, content);
      setReport(analysisReport);
    } catch (err) {
      console.error('Error analyzing content:', err);
      setError('Failed to analyze the content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <InputForm onAnalyze={handleAnalyze} isLoading={loading} />
        
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            <p className="mt-4 text-lg text-gray-600">Analyzing content for trustworthiness...</p>
          </div>
        )}
        
        {error && (
          <div className="mt-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        
        {!loading && report && <AnalysisReport report={report} />}
      </main>
      <footer className="bg-gray-100 py-6 mt-10">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Prahari (प्रहरी) - Your Digital Information Sentinel</p>
          <p className="mt-2 text-sm">© {new Date().getFullYear()} | Google Gen AI Exchange Hackathon</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
