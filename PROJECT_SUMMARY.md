# Prahari (प्रहरी) - Project Summary

## Introduction
Prahari is an AI-powered web application designed to combat misinformation in India. Named after the Hindi word for "sentinel" or "guard," it stands as a digital guardian against the flood of misinformation that spreads through social media and messaging platforms.

## Problem Statement
In today's digital age, misinformation spreads rapidly, particularly in regions with high internet penetration but varying levels of digital literacy. This project addresses the "AI-Powered Tool for Combating Misinformation" challenge by providing:

1. An accessible tool for everyone, regardless of technical expertise
2. Real-time analysis of news and social media content
3. Educational components that teach critical thinking skills

## Our Solution
Prahari is not a censorship tool; it's an educational platform that empowers users to make informed decisions about the information they consume. When a user pastes a URL or text content:

1. The AI engine performs a multi-point analysis
2. Within seconds, the user receives a comprehensive "Trustworthiness Report"
3. The report highlights manipulative language, evaluates source credibility, and provides links to verified information from reputable sources

## Technical Implementation
The application is built on a modern, serverless architecture:

- **Frontend**: React.js with Tailwind CSS for a responsive, user-friendly interface
- **Backend**: Node.js with Express, deployed on Google Cloud Run
- **AI Engine**: Google Gemini Pro API for content analysis
- **Grounding**: Google Search capability for real-time fact verification

## Key Features

### 1. Simple Input Interface
Users can input either:
- A URL to a news article
- Text content (e.g., a WhatsApp message)

### 2. Comprehensive Trustworthiness Report
The report includes:

- **Overall Credibility Score**: A color-coded score from 1-10 
- **Linguistic Red Flag Analysis**: Identifies common misinformation tactics:
  - Emotional & Sensational Language
  - Unsubstantiated Claims
  - Us-vs-Them Framing
  - Urgency & Scarcity Tactics
- **Source Reputation Check**: Evaluates the credibility of the content source
- **Cross-Verification Links**: Provides links to coverage from reputable Indian and international news sources

## Impact and Scalability
Prahari addresses a critical need in India's information ecosystem by:

1. **Promoting Critical Thinking**: Teaching users to identify manipulative content
2. **Increasing Media Literacy**: Showing what makes sources reliable or unreliable
3. **Providing Context**: Connecting users with verified information from trusted sources

The solution is highly scalable and can be extended to:
- A WhatsApp bot for direct message analysis
- A browser extension for real-time content evaluation
- Multi-language support for India's diverse linguistic landscape

## Conclusion
Prahari represents a practical, user-friendly approach to combating misinformation. By empowering users with the tools to evaluate content critically, we hope to create a more informed digital citizenry and contribute to a healthier information ecosystem in India.
