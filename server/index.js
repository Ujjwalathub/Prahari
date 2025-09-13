require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { analyzeContent } = require('./services/analysisService');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Prahari server is running' });
});

// Analyze content endpoint
app.post('/api/analyze', async (req, res) => {
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
});

// Start server
app.listen(port, () => {
  console.log(`Prahari server listening on port ${port}`);
});
