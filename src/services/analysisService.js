import axios from 'axios';

// API endpoint for our backend - it will be relative in production
const API_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:5000/api';

// Function to analyze content (URL or text)
export const analyzeContent = async (inputType, content) => {
  try {
    const response = await axios.post(`${API_URL}/analyze`, {
      inputType,
      content
    });
    
    return response.data;
  } catch (error) {
    console.error('Error in analysis service:', error);
    throw error;
  }
};

// Mock function for development and testing
export const mockAnalyzeContent = async (inputType, content) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock data for demonstration
  const mockReport = {
    credibilityScore: Math.floor(Math.random() * 5) + 4, // Random score between 4-8
    analyzedContent: content,
    linguisticAnalysis: {
      flags: [
        "Uses emotional language to evoke strong reactions",
        "Contains unsubstantiated claims without evidence",
        "Uses urgency tactics to pressure sharing"
      ],
      highlights: [
        {
          start: 10,
          end: 30,
          type: "emotional-language",
          explanation: "Uses emotional language to evoke fear"
        },
        {
          start: 50,
          end: 100,
          type: "unsubstantiated-claim",
          explanation: "Makes a claim without providing evidence"
        },
        {
          start: 120,
          end: 150,
          type: "urgency-scarcity",
          explanation: "Creates false sense of urgency"
        }
      ]
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
  
  return mockReport;
};
