import React, { useState } from 'react';

const InputForm = ({ onAnalyze, isLoading }) => {
  const [inputType, setInputType] = useState('url');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!content.trim()) {
      setError('Please enter content to analyze');
      return;
    }
    
    if (inputType === 'url' && !isValidUrl(content)) {
      setError('Please enter a valid URL');
      return;
    }
    
    setError('');
    onAnalyze(inputType, content);
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Analyze Content for Trustworthiness
      </h2>
      
      <div className="flex space-x-4 mb-4">
        <button
          type="button"
          onClick={() => setInputType('url')}
          className={`px-4 py-2 rounded-md transition-colors ${
            inputType === 'url' 
              ? 'bg-primary text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          URL
        </button>
        <button
          type="button"
          onClick={() => setInputType('text')}
          className={`px-4 py-2 rounded-md transition-colors ${
            inputType === 'text' 
              ? 'bg-primary text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Text Content
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        {inputType === 'url' ? (
          <div className="mb-4">
            <label htmlFor="url-input" className="block text-gray-700 mb-2">
              Enter the article URL:
            </label>
            <input
              id="url-input"
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="https://example.com/news-article"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isLoading}
            />
          </div>
        ) : (
          <div className="mb-4">
            <label htmlFor="text-input" className="block text-gray-700 mb-2">
              Paste the content to analyze:
            </label>
            <textarea
              id="text-input"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Paste the news article or social media post here..."
              rows="6"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isLoading}
            ></textarea>
          </div>
        )}
        
        {error && (
          <div className="mb-4 text-danger">
            {error}
          </div>
        )}
        
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? 'Analyzing...' : 'Analyze for Truthfulness'}
        </button>
      </form>
    </div>
  );
};

export default InputForm;
