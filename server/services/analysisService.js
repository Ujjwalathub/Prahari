 const { GoogleGenerativeAI } = require("@google/generative-ai");
const axios = require('axios');

// Initialize Google Generative AI with API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Function to extract content from a URL
async function fetchContentFromUrl(url) {
  try {
    const response = await axios.get(url);
    // In a real implementation, you would use a library like cheerio to parse the HTML
    // and extract the main article content. For simplicity, we're just returning the raw HTML.
    return response.data;
  } catch (error) {
    console.error('Error fetching URL content:', error);
    throw new Error('Failed to fetch content from URL');
  }
}

// Function to analyze content with Gemini API
async function analyzeWithGemini(content, isUrl = false) {
  try {
    // For URL inputs, first fetch the content
    let textToAnalyze = content;
    if (isUrl) {
      try {
        textToAnalyze = await fetchContentFromUrl(content);
      } catch (err) {
        console.error('Error fetching URL, will analyze the URL itself:', err);
        // If we can't fetch the content, we'll just analyze the URL itself
      }
    }
    
    // Get the generative model (Gemini Pro)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    // Create the prompt for the Gemini API
    const prompt = createAnalysisPrompt(textToAnalyze, isUrl ? content : null);
    
    // Generate content with Gemini
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Parse the JSON response
    try {
      return JSON.parse(text);
    } catch (parseError) {
      console.error('Error parsing Gemini response as JSON:', parseError);
      throw new Error('Failed to parse analysis result');
    }
  } catch (error) {
    console.error('Error in Gemini analysis:', error);
    throw error;
  }
}

// Helper function to create the prompt for Gemini
function createAnalysisPrompt(content, sourceUrl = null) {
  return `
You are Prahari, an AI tool designed to analyze content for misinformation and provide a comprehensive trustworthiness report. Analyze the following ${sourceUrl ? 'article from ' + sourceUrl : 'content'} and provide a detailed report.

Content to analyze:
"""
${content}
"""

Provide your analysis in the following JSON format:
{
  "credibilityScore": [Score from 1-10],
  "analyzedContent": [The text that was analyzed],
  "linguisticAnalysis": {
    "flags": [Array of identified red flags as strings],
    "highlights": [
      {
        "start": [Starting character index],
        "end": [Ending character index],
        "type": [One of: "emotional-language", "unsubstantiated-claim", "us-vs-them", "urgency-scarcity"],
        "explanation": [Brief explanation of the issue]
      }
    ]
  },
  "sourceInfo": ${sourceUrl ? 'Information about the source including "name", "reputation" (High/Medium/Low), "knownBias", and "summary"' : 'null'},
  "crossVerification": [
    {
      "title": [Title of the related article],
      "sourceName": [Name of the reputable source],
      "date": [Publication date in YYYY-MM-DD format],
      "snippet": [Brief summary of what this source says about the topic],
      "url": [URL to the article]
    }
  ]
}

Focus on:
1. Identifying emotional and sensational language
2. Highlighting unsubstantiated claims without evidence
3. Detecting us-vs-them framing
4. Identifying urgency and scarcity tactics
5. For URLs, evaluate the source's reputation
6. Provide cross-verification links to reputable sources

Ensure your response is ONLY the JSON object with no additional text.`;
}

// Main function to analyze content
async function analyzeContent(inputType, content) {
  try {
    // For demonstration purposes, we'll always use the mock implementation
    // In production, this would use the Gemini API
    return generateMockAnalysis(inputType, content);
    
    // Uncomment the below line and comment the line above to use Gemini API for real analysis
    // return await analyzeWithGemini(content, inputType === 'url');
  } catch (error) {
    console.error('Error in content analysis:', error);
    // Fallback to mock data if there's an error
    return generateMockAnalysis(inputType, content);
  }
}

// Mock function for development and testing
function generateMockAnalysis(inputType, content) {
  // Create sample highlights if we have content
  let highlights = [];
  if (content && content.length > 150) {
    highlights = [
      {
        start: 10,
        end: Math.min(30, content.length),
        type: "emotional-language",
        explanation: "Uses emotional language to evoke fear"
      },
      {
        start: 50,
        end: Math.min(100, content.length),
        type: "unsubstantiated-claim",
        explanation: "Makes a claim without providing evidence"
      },
      {
        start: 120,
        end: Math.min(150, content.length),
        type: "urgency-scarcity",
        explanation: "Creates false sense of urgency"
      }
    ];
  }
  
  // Mock data for demonstration
  return {
    credibilityScore: Math.floor(Math.random() * 5) + 4, // Random score between 4-8
    analyzedContent: content,
    linguisticAnalysis: {
      flags: [
        "Uses emotional language to evoke strong reactions",
        "Contains unsubstantiated claims without evidence",
        "Uses urgency tactics to pressure sharing"
      ],
      highlights: highlights
    },
    sourceInfo: inputType === 'url' ? {
      name: "Example News",
      reputation: "Medium",
      knownBias: "Slight political bias",
      summary: "This source has a mixed track record for factual reporting and occasionally publishes misleading headlines."
    } : null,
    crossVerification: [
      {
        title: "The Actual Facts About This Topic",
        sourceName: "The Hindu",
        date: "2025-09-05",
        snippet: "Our investigation found that the claims circulating on social media are only partially accurate. While some elements are true, several key details have been exaggerated or taken out of context.",
        url: "https://www.thehindu.com/example-article"
      },
      {
        title: "Fact Check: Analyzing the Viral Claims",
        sourceName: "Reuters",
        date: "2025-09-04",
        snippet: "Reuters fact-checkers have determined that the viral message contains misleading information. The original event did occur, but details have been altered significantly.",
        url: "https://www.reuters.com/example-article"
      }
    ]
  };
}

module.exports = {
  analyzeContent
};
