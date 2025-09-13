// Import required services
const { analyzeContent } = require('../../services/analysisService');

// Vercel serverless function for content analysis
module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS method for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { inputType, content } = req.body;
    
    if (!inputType || !content) {
      return res.status(400).json({ 
        error: 'Bad request', 
        message: 'Input type and content are required' 
      });
    }
    
    // Validate input type
    if (inputType !== 'url' && inputType !== 'text') {
      return res.status(400).json({ 
        error: 'Bad request', 
        message: 'Input type must be either "url" or "text"' 
      });
    }
    
    // Process the content
    const analysisResult = await analyzeContent(inputType, content);
    
    res.status(200).json(analysisResult);
  } catch (error) {
    console.error('Error in analyze endpoint:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      message: 'Failed to analyze content' 
    });
  }
};