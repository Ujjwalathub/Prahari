// This is the serverless version of the analysis service
// For Vercel deployment, we'll use mock data by default
// but in production, this would connect to real APIs

// Function to analyze content
async function analyzeContent(inputType, content) {
  try {
    // In production, this would connect to real APIs
    // For now, we'll just use mock data for the demo
    return generateMockAnalysis(inputType, content);
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